/**
 * Postgres access for the API.
 * Production: Neon serverless driver, configured by the DATABASE_URL env var
 * (added automatically by Vercel's Neon integration).
 * Local dev: scripts/dev-api.mjs installs an in-process PGlite database as
 * globalThis.__xpmQuery before any request is handled.
 */
import { neon } from '@neondatabase/serverless';

let neonSql;

/** Runs a parameterised query and returns the result rows */
export async function query(text, params = []) {
  if (globalThis.__xpmQuery) return globalThis.__xpmQuery(text, params);
  if (!process.env.DATABASE_URL) throw new ConfigError('DATABASE_URL is not set');
  neonSql ??= neon(process.env.DATABASE_URL);
  return neonSql.query(text, params);
}

export class ConfigError extends Error {}

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS students (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    email text NOT NULL UNIQUE,
    phone text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS demo_requests (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    phone text NOT NULL,
    subjects text NOT NULL DEFAULT '',
    level text NOT NULL DEFAULT '',
    board text NOT NULL DEFAULT '',
    preferred_tutors text NOT NULL DEFAULT '',
    message text NOT NULL DEFAULT '',
    status text NOT NULL DEFAULT 'new',
    created_at timestamptz NOT NULL DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS teachers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    email text NOT NULL DEFAULT '',
    whatsapp text NOT NULL,
    subjects text[] NOT NULL DEFAULT '{}',
    bio text NOT NULL DEFAULT '',
    mode text NOT NULL DEFAULT 'Online',
    created_at timestamptz NOT NULL DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS request_log (
    ip text NOT NULL,
    kind text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
  )`,
  `CREATE INDEX IF NOT EXISTS request_log_lookup ON request_log (ip, kind, created_at)`,
];

let ready;

/** Creates tables on first use in each server instance */
export function ensureSchema() {
  ready ??= (async () => {
    for (const statement of SCHEMA) await query(statement);
  })().catch(err => {
    ready = undefined;
    throw err;
  });
  return ready;
}

/**
 * Counts events of `kind` from `ip` within the window and records this one.
 * Returns true when the limit has been reached (the event is still recorded).
 */
export async function overLimit(ip, kind, limit, windowMinutes) {
  const [{ count }] = await query(
    `SELECT count(*)::int AS count FROM request_log
     WHERE ip = $1 AND kind = $2 AND created_at > now() - make_interval(mins => $3)`,
    [ip, kind, windowMinutes]
  );
  await query('INSERT INTO request_log (ip, kind) VALUES ($1, $2)', [ip, kind]);
  // Keep the log small; anything older than a day is irrelevant to every limit
  if (Math.random() < 0.05) await query(`DELETE FROM request_log WHERE created_at < now() - interval '1 day'`);
  return count >= limit;
}

/** Clears recorded events, e.g. failed logins after a successful one */
export async function clearEvents(ip, kind) {
  await query('DELETE FROM request_log WHERE ip = $1 AND kind = $2', [ip, kind]);
}
