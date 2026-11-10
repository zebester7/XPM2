/**
 * Admin authentication.
 * Credentials come from environment variables, never from the code:
 *   ADMIN_EMAIL          the admin login email
 *   ADMIN_PASSWORD_HASH  scrypt hash produced by `node scripts/hash-password.mjs`
 *   SESSION_SECRET       random string (32+ chars) used to sign session cookies
 */
import crypto from 'node:crypto';
import { HttpError, parseCookies } from './http.js';
import { ConfigError } from './db.js';

const COOKIE = 'xpm_admin';
const SESSION_SECONDS = 12 * 60 * 60;

function config() {
  const { ADMIN_EMAIL, ADMIN_PASSWORD_HASH, SESSION_SECRET } = process.env;
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD_HASH || !SESSION_SECRET || SESSION_SECRET.length < 32) {
    throw new ConfigError('ADMIN_EMAIL, ADMIN_PASSWORD_HASH and SESSION_SECRET (32+ chars) must be set');
  }
  return { email: ADMIN_EMAIL.trim().toLowerCase(), hash: ADMIN_PASSWORD_HASH.trim(), secret: SESSION_SECRET };
}

/** Format: scrypt$<salt base64>$<key base64> */
export function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const key = crypto.scryptSync(password, salt, 64);
  return `scrypt$${salt.toString('base64')}$${key.toString('base64')}`;
}

function verifyPassword(password, stored) {
  const [scheme, saltB64, keyB64] = stored.split('$');
  if (scheme !== 'scrypt' || !saltB64 || !keyB64) throw new ConfigError('ADMIN_PASSWORD_HASH has an unknown format');
  const expected = Buffer.from(keyB64, 'base64');
  const actual = crypto.scryptSync(password, Buffer.from(saltB64, 'base64'), expected.length);
  return crypto.timingSafeEqual(actual, expected);
}

const sign = (payload, secret) => crypto.createHmac('sha256', secret).update(payload).digest('base64url');

/** Returns true when email and password match the configured admin */
export function checkCredentials(emailInput, password) {
  const { email, hash } = config();
  // Always run the hash so timing doesn't reveal whether the email matched
  const passwordOk = verifyPassword(String(password || ''), hash);
  const emailOk = String(emailInput || '').trim().toLowerCase() === email;
  return passwordOk && emailOk;
}

export function sessionCookie() {
  const { email, secret } = config();
  const payload = Buffer.from(JSON.stringify({ sub: email, exp: Math.floor(Date.now() / 1000) + SESSION_SECONDS })).toString('base64url');
  const token = `${payload}.${sign(payload, secret)}`;
  return `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_SECONDS}`;
}

export const clearedCookie = `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;

/** Returns the admin email for a valid session, or null */
export function currentAdmin(req) {
  const { email, secret } = config();
  const token = parseCookies(req)[COOKIE];
  if (!token) return null;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return null;
  const expected = Buffer.from(sign(payload, secret));
  const given = Buffer.from(signature);
  if (expected.length !== given.length || !crypto.timingSafeEqual(expected, given)) return null;
  try {
    const { sub, exp } = JSON.parse(Buffer.from(payload, 'base64url').toString());
    if (sub !== email || exp < Date.now() / 1000) return null;
    return sub;
  } catch {
    return null;
  }
}

export function requireAdmin(req) {
  const admin = currentAdmin(req);
  if (!admin) throw new HttpError(401, 'Not signed in');
  return admin;
}
