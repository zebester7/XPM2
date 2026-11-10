/**
 * Single serverless function for the whole API (vercel.json rewrites /api/* here).
 *
 * Public
 *   POST   /api/students                 record a student registration
 *   POST   /api/demo-requests            record a free-trial / demo request
 *   GET    /api/teachers                 teachers shown on the public site
 * Admin (signed-in session cookie required)
 *   POST   /api/admin/login              { email, password }
 *   POST   /api/admin/logout
 *   GET    /api/admin/session
 *   GET    /api/admin/students
 *   GET    /api/admin/demo-requests
 *   PATCH  /api/admin/demo-requests/:id  { status: 'new' | 'contacted' }
 *   GET    /api/admin/teachers
 *   POST   /api/admin/teachers           { name, whatsapp, subjects, email?, bio?, mode? }
 *   DELETE /api/admin/teachers/:id
 */
import { query, ensureSchema, overLimit, clearEvents, ConfigError } from './_lib/db.js';
import { HttpError, send, readJson, clientIp, text, required, email, phone } from './_lib/http.js';
import { checkCredentials, sessionCookie, clearedCookie, currentAdmin, requireAdmin } from './_lib/auth.js';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const TEACHER_MODES = ['Online', 'Physical', 'Both'];

const teacherColumns = 'id, name, email, whatsapp, subjects, bio, mode, created_at';

function routeOf(req) {
  const url = new URL(req.url, 'http://localhost');
  const route = url.searchParams.get('route') ?? url.pathname.replace(/^\/api\/?/, '');
  return route.replace(/^\/+|\/+$/g, '');
}

/** Rejects requests carrying a filled honeypot field (bots fill every input) */
function honeypot(body) {
  if (body.website) throw new HttpError(400, 'Rejected');
}

async function publicLimit(req, kind) {
  if (await overLimit(clientIp(req), kind, 20, 60)) throw new HttpError(429, 'Too many requests, please try again later');
}

const handlers = {
  async 'POST students'(req, res) {
    const body = await readJson(req);
    honeypot(body);
    const student = { name: required(body.name, 120, 'Name'), email: email(body.email), phone: phone(body.phone) };
    await publicLimit(req, 'students');
    // Re-registering with the same email updates the details instead of failing
    await query(
      `INSERT INTO students (name, email, phone) VALUES ($1, $2, $3)
       ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name, phone = EXCLUDED.phone`,
      [student.name, student.email, student.phone]
    );
    send(res, 201, { ok: true });
  },

  async 'POST demo-requests'(req, res) {
    const body = await readJson(req);
    honeypot(body);
    const subjects = Array.isArray(body.subjects) ? body.subjects.map(s => text(s, 60, 'Subject')).filter(Boolean).join(', ') : text(body.subjects, 500, 'Subjects');
    const demo = [
      required(body.name, 120, 'Name'),
      phone(body.phone, 'WhatsApp number'),
      subjects.slice(0, 500),
      text(body.level, 60, 'Level'),
      text(body.board, 60, 'Board'),
      text(body.preferredTutors, 300, 'Preferred tutors'),
      text(body.message, 2000, 'Message'),
    ];
    await publicLimit(req, 'demo-requests');
    await query(
      `INSERT INTO demo_requests (name, phone, subjects, level, board, preferred_tutors, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      demo
    );
    send(res, 201, { ok: true });
  },

  async 'GET teachers'(req, res) {
    const rows = await query(`SELECT id, name, whatsapp, subjects, bio, mode FROM teachers ORDER BY created_at`);
    send(res, 200, { teachers: rows });
  },

  async 'POST admin/login'(req, res) {
    const body = await readJson(req);
    const ip = clientIp(req);
    if (await overLimit(ip, 'login-fail', 10, 15)) {
      throw new HttpError(429, 'Too many failed attempts. Try again in 15 minutes.');
    }
    if (!checkCredentials(body.email, body.password)) {
      // overLimit above already recorded this attempt as a failure
      throw new HttpError(401, 'Incorrect email or password');
    }
    await clearEvents(ip, 'login-fail');
    send(res, 200, { ok: true }, { 'Set-Cookie': sessionCookie() });
  },

  async 'POST admin/logout'(req, res) {
    send(res, 200, { ok: true }, { 'Set-Cookie': clearedCookie });
  },

  async 'GET admin/session'(req, res) {
    const admin = currentAdmin(req);
    send(res, 200, admin ? { signedIn: true, email: admin } : { signedIn: false });
  },

  async 'GET admin/students'(req, res) {
    requireAdmin(req);
    const rows = await query('SELECT id, name, email, phone, created_at FROM students ORDER BY created_at DESC');
    send(res, 200, { students: rows });
  },

  async 'GET admin/demo-requests'(req, res) {
    requireAdmin(req);
    const rows = await query(
      `SELECT id, name, phone, subjects, level, board, preferred_tutors, message, status, created_at
       FROM demo_requests ORDER BY created_at DESC`
    );
    send(res, 200, { demoRequests: rows });
  },

  async 'PATCH admin/demo-requests/:id'(req, res, id) {
    requireAdmin(req);
    const { status } = await readJson(req);
    if (!['new', 'contacted'].includes(status)) throw new HttpError(400, 'Status must be new or contacted');
    const rows = await query('UPDATE demo_requests SET status = $1 WHERE id = $2 RETURNING id', [status, id]);
    if (!rows.length) throw new HttpError(404, 'Demo request not found');
    send(res, 200, { ok: true });
  },

  async 'GET admin/teachers'(req, res) {
    requireAdmin(req);
    const rows = await query(`SELECT ${teacherColumns} FROM teachers ORDER BY created_at DESC`);
    send(res, 200, { teachers: rows });
  },

  async 'POST admin/teachers'(req, res) {
    requireAdmin(req);
    const body = await readJson(req);
    const rawSubjects = Array.isArray(body.subjects) ? body.subjects : String(body.subjects || '').split(',');
    const subjects = rawSubjects.map(s => text(s, 60, 'Subject')).filter(Boolean);
    if (!subjects.length) throw new HttpError(400, 'At least one subject is required');
    if (subjects.length > 20) throw new HttpError(400, 'Too many subjects');
    const mode = body.mode ? text(body.mode, 20, 'Mode') : 'Online';
    if (!TEACHER_MODES.includes(mode)) throw new HttpError(400, 'Mode must be Online, Physical or Both');
    const teacherEmail = body.email ? email(body.email) : '';
    const [teacher] = await query(
      `INSERT INTO teachers (name, email, whatsapp, subjects, bio, mode)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING ${teacherColumns}`,
      [required(body.name, 120, 'Name'), teacherEmail, phone(body.whatsapp, 'WhatsApp number'), subjects, text(body.bio, 1000, 'Bio'), mode]
    );
    send(res, 201, { teacher });
  },

  async 'DELETE admin/teachers/:id'(req, res, id) {
    requireAdmin(req);
    const rows = await query('DELETE FROM teachers WHERE id = $1 RETURNING id', [id]);
    if (!rows.length) throw new HttpError(404, 'Teacher not found');
    send(res, 200, { ok: true });
  },
};

function match(method, route) {
  const direct = handlers[`${method} ${route}`];
  if (direct) return [direct];
  const slash = route.lastIndexOf('/');
  const id = route.slice(slash + 1);
  const withId = handlers[`${method} ${route.slice(0, slash)}/:id`];
  if (withId) {
    if (!UUID.test(id)) throw new HttpError(404, 'Not found');
    return [withId, id];
  }
  return null;
}

export default async function handler(req, res) {
  try {
    const route = routeOf(req);
    const found = match(req.method, route);
    if (!found) throw new HttpError(404, 'Not found');
    await ensureSchema();
    await found[0](req, res, found[1]);
  } catch (err) {
    if (err instanceof HttpError) return send(res, err.status, { error: err.message });
    if (err instanceof ConfigError) {
      console.error('API configuration error:', err.message);
      return send(res, 503, { error: 'The server is not configured yet' });
    }
    console.error('API error:', err);
    send(res, 500, { error: 'Something went wrong' });
  }
}
