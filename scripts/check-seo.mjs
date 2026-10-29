/**
 * Post-build SEO audit of the prerendered HTML in dist/.
 * Usage: node scripts/check-seo.mjs   (exits 1 on any failure)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const SITE = 'https://www.xpmtutors.com';

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

const fileFor = (url) => {
  const p = url.slice(SITE.length);
  return path.join(dist, p === '/' ? 'index.html' : `${p.slice(1)}.html`);
};

const failures = [];
const fail = (url, msg) => failures.push(`${url.slice(SITE.length) || '/'}: ${msg}`);
const seen = { titles: new Map(), descriptions: new Map() };
const internalLinks = new Set();

for (const url of urls) {
  const file = fileFor(url);
  if (!fs.existsSync(file)) { fail(url, 'no prerendered file'); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const head = html.slice(0, html.indexOf('</head>'));
  const body = html.slice(html.indexOf('<body'));

  const title = head.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = head.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const canonicals = [...head.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map(m => m[1]);
  const robots = [...html.matchAll(/<meta name="robots" content="([^"]+)"/g)].map(m => m[1]);
  const h1s = (body.match(/<h1[\s>]/g) || []).length;

  if (!title) fail(url, 'missing <title>');
  else if (title.length > 65) fail(url, `title is ${title.length} chars`);
  if (!desc) fail(url, 'missing meta description');
  else if (desc.length < 70 || desc.length > 160) fail(url, `description is ${desc.length} chars`);
  if (canonicals.length !== 1) fail(url, `${canonicals.length} canonical tags`);
  else if (canonicals[0] !== url) fail(url, `canonical ${canonicals[0]} != ${url}`);
  if (robots.some(r => r.includes('noindex'))) fail(url, 'noindex present');
  if (h1s !== 1) fail(url, `${h1s} <h1> elements`);
  if (body.includes('Hydrating Environment')) fail(url, 'rendered the loading fallback instead of content');
  if (!/<style>[\s\S]*--tw-/.test(head)) fail(url, 'built stylesheet not inlined');
  if (head.includes('cdn.tailwindcss.com')) fail(url, 'runtime Tailwind CDN still present');

  for (const [k, v] of [['titles', title], ['descriptions', desc]]) {
    if (!v) continue;
    if (seen[k].has(v)) fail(url, `duplicate ${k.slice(0, -1)} with ${seen[k].get(v)}`);
    seen[k].set(v, url);
  }

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      if (!data['@type']) fail(url, 'JSON-LD block without @type');
      if (JSON.stringify(data).includes('"aggregateRating"')) fail(url, 'hard-coded aggregateRating in JSON-LD');
    } catch (e) {
      fail(url, `invalid JSON-LD: ${e.message}`);
    }
  }
  if (url !== `${SITE}/` && !html.includes('"@type":"BreadcrumbList"')) fail(url, 'no BreadcrumbList schema');

  for (const img of body.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]+"/.test(img[0])) fail(url, `<img> without alt: ${img[0].slice(0, 80)}`);
  }
  for (const a of body.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)) internalLinks.add(a[1]);
}

// Orphans: every sitemap URL must be linked from at least one other prerendered page
const linked = new Set([...internalLinks].map(p => (p.length > 1 ? p.replace(/\/$/, '') : p)));
for (const url of urls) {
  const p = url.slice(SITE.length) || '/';
  if (!linked.has(p)) fail(url, 'orphan: no internal link points here');
}

// Internal links must resolve to a prerendered page, a static file or a known app route
const APP_ROUTES = /^\/(login|signup|dashboard|payment|teacher-registration|subjects(\/[^/]+)?|past-papers|questions|syllabus-precision|study-groups|admin|admin-panel)$/;
for (const p of linked) {
  const asPage = path.join(dist, p === '/' ? 'index.html' : `${p.slice(1)}.html`);
  const asFile = path.join(dist, p.slice(1));
  if (!fs.existsSync(asPage) && !(fs.existsSync(asFile) && fs.statSync(asFile).isFile()) && !APP_ROUTES.test(p)) {
    failures.push(`broken internal link: ${p}`);
  }
}

console.log(`Checked ${urls.length} URLs, ${linked.size} distinct internal link targets`);
if (failures.length) {
  console.error(`${failures.length} problems:\n  ` + failures.join('\n  '));
  process.exit(1);
}
console.log('All checks passed');
