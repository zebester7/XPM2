/** Small framework-free HTTP helpers shared by the API router */

export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export function send(res, status, body, headers = {}) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  for (const [k, v] of Object.entries(headers)) res.setHeader(k, v);
  res.end(JSON.stringify(body));
}

/** Parses a JSON request body (Vercel may already have parsed it into req.body) */
export async function readJson(req) {
  const type = req.headers['content-type'] || '';
  // Requiring JSON blocks cross-site HTML form posts (they cannot send this type without CORS)
  if (!type.includes('application/json')) throw new HttpError(415, 'Expected a JSON body');
  if (req.body !== undefined) {
    if (typeof req.body === 'object' && req.body !== null) return req.body;
    try { return JSON.parse(String(req.body)); } catch { throw new HttpError(400, 'Invalid JSON'); }
  }
  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 50_000) throw new HttpError(413, 'Body too large');
  }
  try { return JSON.parse(raw || '{}'); } catch { throw new HttpError(400, 'Invalid JSON'); }
}

export function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  return (Array.isArray(fwd) ? fwd[0] : fwd || '').split(',')[0].trim() || req.socket?.remoteAddress || 'unknown';
}

export function parseCookies(req) {
  const out = {};
  for (const part of (req.headers.cookie || '').split(';')) {
    const i = part.indexOf('=');
    if (i > 0) out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim());
  }
  return out;
}

/** Trims a string field and enforces a maximum length; returns '' for missing values */
export function text(value, max, field) {
  if (value === undefined || value === null) return '';
  if (typeof value !== 'string') throw new HttpError(400, `${field} must be text`);
  const v = value.trim();
  if (v.length > max) throw new HttpError(400, `${field} is too long`);
  return v;
}

export function required(value, max, field) {
  const v = text(value, max, field);
  if (!v) throw new HttpError(400, `${field} is required`);
  return v;
}

export function email(value, field = 'Email') {
  const v = required(value, 200, field).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) throw new HttpError(400, `${field} is not a valid email`);
  return v;
}

/** Normalises a phone/WhatsApp number to digits with an optional leading + */
export function phone(value, field = 'Phone') {
  const v = required(value, 30, field);
  const digits = v.replace(/[^\d]/g, '');
  if (digits.length < 7 || digits.length > 15) throw new HttpError(400, `${field} is not a valid phone number`);
  return (v.trim().startsWith('+') ? '+' : '') + digits;
}
