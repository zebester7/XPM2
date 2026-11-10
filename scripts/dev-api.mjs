/**
 * Local API server for development: `npm run dev:api`, alongside `npm run dev`
 * (Vite proxies /api to this server). Uses an in-process PGlite Postgres stored in
 * .data/pglite and reads ADMIN_EMAIL / ADMIN_PASSWORD_HASH / SESSION_SECRET from .env.local.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PGlite } from '@electric-sql/pglite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.API_PORT || 3001);

const envFile = path.join(root, '.env.local');
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, '$2');
  }
}

const dataDir = process.env.PGLITE_DIR || path.join(root, '.data', 'pglite');
const db = new PGlite(dataDir === ':memory:' ? undefined : dataDir);
globalThis.__xpmQuery = async (text, params) => (await db.query(text, params)).rows;

const { default: handler } = await import('../api/router.js');

http.createServer((req, res) => handler(req, res)).listen(port, () => {
  console.log(`API on http://localhost:${port} (database: ${dataDir})`);
});
