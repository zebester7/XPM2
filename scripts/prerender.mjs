/**
 * Static prerender: renders every public route from seoRoutes.ts to its own HTML file
 * so crawlers get full content, head tags and JSON-LD without running JavaScript.
 *
 * Runs after `vite build` (client) and `vite build --ssr entry-server.tsx` (server).
 * Outputs into dist/:
 *   index.html, o-level-tutors.html, blog/<slug>.html, …   one file per public route
 *   404.html                                                  served by Vercel for unknown URLs
 *   app-shell.html                                            empty shell for logged-in routes
 *   sitemap.xml, sitemap-index.xml
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

// The app's db layer reads localStorage at import time; give it an empty one so the
// server renders exactly what a first-time visitor sees.
class MemoryStorage {
  #data = new Map();
  getItem(k) { return this.#data.has(k) ? this.#data.get(k) : null; }
  setItem(k, v) { this.#data.set(k, String(v)); }
  removeItem(k) { this.#data.delete(k); }
  clear() { this.#data.clear(); }
  key(i) { return [...this.#data.keys()][i] ?? null; }
  get length() { return this.#data.size; }
}
globalThis.localStorage = new MemoryStorage();
globalThis.sessionStorage = new MemoryStorage();

const { render, SEO_ROUTES, renderHeadTags } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
);

let template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const HEAD_RE = /<!--seo-head-->[\s\S]*?<!--\/seo-head-->/;

// Inline the (small, ~10 KB gzipped) stylesheet so first paint doesn't wait on an extra request
const cssLink = template.match(/<link rel="stylesheet"[^>]*href="\/(assets\/[^"]+\.css)"[^>]*>/);
if (!cssLink) throw new Error('dist/index.html has no built stylesheet link');
const css = fs.readFileSync(path.join(dist, cssLink[1]), 'utf8');
template = template.replace(cssLink[0], () => `<style>${css}</style>`);
if (!HEAD_RE.test(template) || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--seo-head--> or <!--app-html--> markers');
}

const fill = (head, body) => template.replace(HEAD_RE, head).replace('<!--app-html-->', body);

const outFile = (route) =>
  route === '/' ? path.join(dist, 'index.html') : path.join(dist, `${route.slice(1)}.html`);

const write = (file, html) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
};

// SPA shell must be written before index.html is overwritten by the homepage render
write(path.join(dist, 'app-shell.html'), fill(
  '<title>XPM Tutors</title>\n    <meta name="robots" content="noindex">',
  ''
));

const problems = [];
for (const route of SEO_ROUTES) {
  const body = await render(route.path);
  const h1s = (body.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) problems.push(`${route.path}: ${h1s} <h1> elements`);
  if (body.includes('Page not found')) problems.push(`${route.path}: rendered the 404 page`);
  write(outFile(route.path), fill(renderHeadTags(route), body));
}

const notFoundBody = await render('/__not-found__');
write(path.join(dist, '404.html'), fill(
  '<title>Page Not Found | XPM Tutors</title>\n    <meta name="robots" content="noindex">',
  notFoundBody
));

// sitemap.xml — lastmod only where we have a real date (Google ignores invented ones)
const SITE = 'https://www.xpmtutors.com';
const urls = SEO_ROUTES.map(r => [
  '  <url>',
  `    <loc>${r.path === '/' ? `${SITE}/` : SITE + r.path}</loc>`,
  r.lastmod ? `    <lastmod>${r.lastmod}</lastmod>` : null,
  `    <changefreq>${r.changefreq}</changefreq>`,
  `    <priority>${r.priority.toFixed(1)}</priority>`,
  '  </url>',
].filter(Boolean).join('\n'));
write(path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
write(path.join(dist, 'sitemap-index.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${SITE}/sitemap.xml</loc>\n    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>\n  </sitemap>\n</sitemapindex>\n`);

console.log(`Prerendered ${SEO_ROUTES.length} routes + 404.html + app-shell.html; sitemap.xml has ${SEO_ROUTES.length} URLs`);
if (problems.length) {
  console.error('Prerender problems:\n  ' + problems.join('\n  '));
  process.exit(1);
}
