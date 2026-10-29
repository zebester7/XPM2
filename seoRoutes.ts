/**
 * Single source of truth for every indexable URL on the site.
 * Used by the prerenderer (head tags, sitemap.xml), the client (head tags on
 * navigation) and the Breadcrumb component.
 */
import { blogPosts } from './blogData.ts';

export const SITE_URL = 'https://www.xpmtutors.com';

export interface RouteSeo {
  path: string;
  title: string;
  description: string;
  /** Short label used in breadcrumbs and internal link lists */
  label: string;
  /** Parent path for breadcrumbs; omitted for top-level pages */
  parent?: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly';
  lastmod?: string;
  ogType?: 'website' | 'article';
}

const staticRoutes: RouteSeo[] = [
  {
    path: '/',
    label: 'Home',
    title: 'Online O & A Level Tutors for All Subjects | XPM Tutors',
    description: 'Online O Level, A Level, IGCSE, SAT and NET tutoring with expert Physics, Maths and Chemistry tutors. Book a free trial session with XPM Tutors.',
    priority: 1.0,
    changefreq: 'weekly',
  },

  // Exam tutoring
  {
    path: '/o-level-tutors',
    label: 'O Level Tutors',
    title: 'Online O Level Tutors | Cambridge & Edexcel | XPM Tutors',
    description: 'Online O Level tutors for Cambridge and Edexcel: Physics 5054, Maths 4024, Chemistry 5070, Biology and more. Topical past paper practice. Free trial.',
    priority: 0.95,
    changefreq: 'weekly',
  },
  {
    path: '/o-level-tutors-islamabad',
    label: 'O Level Tutors in Islamabad',
    parent: '/o-level-tutors',
    title: 'O Level Tutors in Islamabad | Online Tutoring | XPM Tutors',
    description: 'O Level tutors for Islamabad students. Cambridge and Edexcel Physics, Maths, Chemistry and all subjects, taught online one-to-one. Free trial session.',
    priority: 0.9,
    changefreq: 'weekly',
  },
  {
    path: '/a-level-tutors',
    label: 'A Level Tutors',
    title: 'Online A Level Tutors | Physics, Maths, Chemistry | XPM Tutors',
    description: 'Online A Level tutors for Physics 9702, Maths 9709, Chemistry 9701, Biology and Further Maths. Exam technique and university prep. Book a free trial.',
    priority: 0.95,
    changefreq: 'weekly',
  },
  {
    path: '/a-level-tutors-islamabad',
    label: 'A Level Tutors in Islamabad',
    parent: '/a-level-tutors',
    title: 'A Level Tutors in Islamabad | Online Tutoring | XPM Tutors',
    description: 'A Level tutors for Islamabad students. Cambridge Physics, Mathematics, Chemistry and Biology taught online one-to-one. Free trial session available.',
    priority: 0.9,
    changefreq: 'weekly',
  },
  {
    path: '/igcse-tutors',
    label: 'IGCSE Tutors',
    title: 'Online IGCSE Tutors | Maths, Physics, Chemistry | XPM Tutors',
    description: 'Online IGCSE tutors for Maths, Physics, Chemistry and Biology, with structured syllabus coverage and past paper practice. Book a free trial session.',
    priority: 0.9,
    changefreq: 'weekly',
  },
  {
    path: '/sat-tutors',
    label: 'SAT Tutors',
    title: 'Digital SAT Tutors | Online SAT Prep | XPM Tutors',
    description: 'Online Digital SAT tutoring for Math and Reading & Writing. Adaptive-test strategy, timed practice and score tracking with expert SAT tutors.',
    priority: 0.85,
    changefreq: 'weekly',
  },
  {
    path: '/net-entry-test-tutors',
    label: 'NET Entry Test Tutors',
    title: 'NUST NET Entry Test Preparation Online | XPM Tutors',
    description: 'Online NUST NET entry test preparation covering Maths, Physics, Chemistry and English, with timed mock tests and doubt-clearing sessions.',
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/pma-tutors',
    label: 'PMA Long Course Tutors',
    title: 'PMA Long Course Test Preparation Online | XPM Tutors',
    description: 'Online preparation for the PMA Long Course test with structured syllabi, expert doubt clearance and practice papers from experienced tutors.',
    priority: 0.8,
    changefreq: 'weekly',
  },

  // Services
  {
    path: '/ir-services',
    label: 'IR Writing Support',
    title: 'O Level Global Perspectives IR Support | XPM Tutors',
    description: 'One-to-one guidance for the O Level Global Perspectives Individual Report: topic choice, research, structure and referencing. Book a free demo.',
    priority: 0.85,
    changefreq: 'monthly',
  },
  {
    path: '/hire-teacher',
    label: 'Hire a Tutor',
    title: 'Hire an Online Tutor | One-to-One Coaching | XPM Tutors',
    description: 'Hire a one-to-one online tutor for O Level, A Level, IGCSE, SAT or entry tests. Tell us your subject and schedule and book a free trial class.',
    priority: 0.85,
    changefreq: 'monthly',
  },
  {
    path: '/teacher-directory',
    label: 'Find Tutors',
    title: 'Online Tutor Directory | Contact Tutors Directly | XPM Tutors',
    description: 'Browse XPM Tutors subject specialists for O Level, A Level, IGCSE and more, and contact them directly on WhatsApp.',
    priority: 0.85,
    changefreq: 'weekly',
  },
  {
    path: '/reviews',
    label: 'Reviews',
    title: 'Student Reviews & Testimonials | XPM Tutors',
    description: 'Read reviews from students and parents who have studied O Level, A Level and Quran courses with XPM Tutors.',
    priority: 0.7,
    changefreq: 'weekly',
  },
  {
    path: '/mishal-razzaq',
    label: 'The Healing Mind',
    title: 'The Healing Mind with Mishal Razzaq | XPM Tutors',
    description: 'The Healing Mind by Mishal Razzaq: sessions on emotions, habits and wellbeing that bring together Islamic teachings and modern neuroscience.',
    priority: 0.7,
    changefreq: 'monthly',
  },

  // Quran
  {
    path: '/quran-tutoring',
    label: 'Quran Tutoring',
    title: 'Online Quran Classes with Tajweed | Female Tutors | XPM Tutors',
    description: 'Online Quran classes with Tajweed and Hifz programs for kids and adults, taught by qualified Qaris including female tutors. Book a free trial class.',
    priority: 0.85,
    changefreq: 'monthly',
  },
  {
    path: '/quran-beginner',
    label: 'Beginner (Quranic Foundations)',
    parent: '/quran-tutoring',
    title: 'Quran for Beginners | Arabic Letters & Tajweed | XPM Tutors',
    description: 'Beginner Quran course: learn the Arabic letters, basic Tajweed and Surah Al-Fatiha online with a qualified teacher. Free demo class available.',
    priority: 0.75,
    changefreq: 'monthly',
  },
  {
    path: '/quran-intermediate',
    label: 'Intermediate (Tajweed Mastery)',
    parent: '/quran-tutoring',
    title: 'Online Tajweed Course | Intermediate Quran Classes | XPM Tutors',
    description: 'Intermediate Tajweed course: makharij, rules of noon and meem sakinah, madd and fluent recitation with certified Qaris. Free demo class.',
    priority: 0.75,
    changefreq: 'monthly',
  },
  {
    path: '/quran-advanced',
    label: 'Advanced (Hifz Program)',
    parent: '/quran-tutoring',
    title: 'Online Hifz Program | Quran Memorization Classes | XPM Tutors',
    description: 'Online Hifz program to memorize the complete Quran, with daily sessions and structured revision guided by certified Hafiz instructors.',
    priority: 0.75,
    changefreq: 'monthly',
  },
  {
    path: '/quran-expert',
    label: 'Expert (Quran Scholarship)',
    parent: '/quran-tutoring',
    title: 'Advanced Quran Studies Online | Tafsir & Arabic | XPM Tutors',
    description: 'Advanced Quran studies for experienced learners: Tafsir, Quranic Arabic and linguistics, and classical interpretation with qualified scholars.',
    priority: 0.7,
    changefreq: 'monthly',
  },

  // Regional
  {
    path: '/uk',
    label: 'United Kingdom',
    title: 'UK GCSE & A Level Tutors Online | XPM Tutors',
    description: 'Online GCSE, IGCSE and A Level tutors for students in the UK. One-to-one Maths, Physics and Chemistry lessons at UK-friendly times. Free trial.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/us',
    label: 'United States',
    title: 'SAT & AP Tutors in the USA | Online Exam Prep | XPM Tutors',
    description: 'Online SAT and AP exam prep tutors for US high school students. One-to-one Math and Science coaching scheduled in US time zones. Free trial.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/ae',
    label: 'UAE',
    title: 'IB & IGCSE Tutors in Dubai & UAE | XPM Tutors',
    description: 'Online IB and IGCSE tutors for students in Dubai and across the UAE. One-to-one lessons scheduled for UAE time zones. Free trial session.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/pk',
    label: 'Pakistan',
    title: 'O & A Level Tutors in Pakistan | Online Classes | XPM Tutors',
    description: 'Online O Level and A Level tutors for students across Pakistan. Cambridge Physics, Maths, Chemistry and Biology taught one-to-one. Free trial.',
    priority: 0.85,
    changefreq: 'monthly',
  },

  // Blog
  {
    path: '/blog',
    label: 'Blog',
    title: 'Exam Tips & Study Guides Blog | XPM Tutors',
    description: 'Study guides and exam tips for O Level, A Level, GCSE, IGCSE, IB, SAT and AP from the XPM Tutors team.',
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/uk/blog',
    label: 'UK Blog',
    parent: '/uk',
    title: 'GCSE & A Level Exam Tips | UK Student Blog | XPM Tutors',
    description: 'GCSE, IGCSE and A Level exam strategies for UK students: revision plans, common mistakes and subject guides for Maths, Physics and Chemistry.',
    priority: 0.7,
    changefreq: 'weekly',
  },
  {
    path: '/us/blog',
    label: 'US Blog',
    parent: '/us',
    title: 'SAT & AP Exam Blog | College Prep Tips | XPM Tutors',
    description: 'SAT and AP exam prep articles for US students: Digital SAT strategy, AP Calculus, Biology and Chemistry guides, and college application advice.',
    priority: 0.7,
    changefreq: 'weekly',
  },
  {
    path: '/ae/blog',
    label: 'UAE Blog',
    parent: '/ae',
    title: 'IB & IGCSE Blog for UAE Students | XPM Tutors',
    description: 'IB and IGCSE study guides for students in Dubai and the UAE: curriculum choices, IB Maths levels, exam stress and online class scheduling.',
    priority: 0.7,
    changefreq: 'weekly',
  },

  {
    path: '/sitemap',
    label: 'Sitemap',
    title: 'Sitemap | All Pages | XPM Tutors',
    description: 'A full list of XPM Tutors pages: O Level, A Level, IGCSE, SAT and entry test tutoring, Quran classes, regional pages and blog articles.',
    priority: 0.3,
    changefreq: 'monthly',
  },
];

const truncate = (text: string, max: number) =>
  text.length <= max ? text : text.slice(0, text.lastIndexOf(' ', max - 1)).replace(/[,.;:]$/, '') + '…';

/** "Headline | XPM Tutors", dropping the brand suffix when it would push the title past ~60 chars */
const blogTitle = (title: string) => {
  const headline = title.split('|')[0].trim();
  const branded = `${headline} | XPM Tutors`;
  return branded.length <= 62 ? branded : headline;
};

const blogRoutes: RouteSeo[] = blogPosts.map(post => ({
  path: `/blog/${post.slug}`,
  label: post.title.split('|')[0].trim(),
  parent: '/blog',
  title: blogTitle(post.title),
  description: truncate(post.excerpt, 158),
  priority: 0.6,
  changefreq: 'monthly',
  lastmod: post.publishedAt,
  ogType: 'article',
}));

export const SEO_ROUTES: RouteSeo[] = [...staticRoutes, ...blogRoutes];

const byPath = new Map(SEO_ROUTES.map(r => [r.path, r]));

export const normalizePath = (pathname: string) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';

export function getRouteSeo(pathname: string): RouteSeo | undefined {
  return byPath.get(normalizePath(pathname));
}

export function canonicalUrl(pathname: string): string {
  const path = normalizePath(pathname);
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/** Breadcrumb trail from Home down to the given page, following `parent` links */
export function getBreadcrumbTrail(pathname: string): RouteSeo[] {
  const trail: RouteSeo[] = [];
  let current = getRouteSeo(pathname);
  while (current) {
    trail.unshift(current);
    current = current.parent ? byPath.get(current.parent) : undefined;
  }
  if (trail.length && trail[0].path !== '/') trail.unshift(byPath.get('/')!);
  return trail;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Per-page <head> tags, injected by the prerenderer between the seo-head markers */
export function renderHeadTags(route: RouteSeo): string {
  const url = canonicalUrl(route.path);
  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}">`,
    `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:title" content="${escapeHtml(route.title)}">`,
    `<meta property="og:description" content="${escapeHtml(route.description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}">`,
  ].join('\n    ');
}

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/** Client-side equivalent of renderHeadTags, run on every navigation */
export function applyRouteSeo(pathname: string) {
  const route = getRouteSeo(pathname);
  if (!route) return;
  const url = canonicalUrl(route.path);
  document.title = route.title;
  setMeta('meta[name="description"]', 'name', 'description', route.description);
  setMeta('meta[property="og:title"]', 'property', 'og:title', route.title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', route.description);
  setMeta('meta[property="og:url"]', 'property', 'og:url', url);
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', route.title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', route.description);
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}
