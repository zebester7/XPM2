/**
 * Internal Links Structure for SEO
 * Helps organize and manage internal navigation for better crawlability
 */

export interface PageLink {
  path: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  publicPage: boolean;
}

export const INTERNAL_LINKS: Record<string, PageLink> = {
  // Home
  home: {
    path: '/',
    title: 'Home',
    description: 'Welcome to XPM Tutors - O & A Level Physics and Maths tutoring',
    category: 'primary',
    priority: 1.0,
    publicPage: true,
  },

  // Exam Landing Pages
  oLevel: {
    path: '/o-level-tutors',
    title: 'O Level Tutors',
    description: 'Expert O Level Physics and Maths tutoring for Cambridge & Edexcel',
    category: 'exam',
    priority: 0.95,
    publicPage: true,
  },
  oLevelIslamabad: {
    path: '/o-level-tutors-islamabad',
    title: 'O Level Tutors in Islamabad',
    description: 'Top-rated O Level tutors in Islamabad offering expert online tutoring',
    category: 'exam',
    priority: 0.93,
    publicPage: true,
  },
  aLevel: {
    path: '/a-level-tutors',
    title: 'A Level Tutors',
    description: 'Professional A Level Physics and Maths tutoring',
    category: 'exam',
    priority: 0.95,
    publicPage: true,
  },
  aLevelIslamabad: {
    path: '/a-level-tutors-islamabad',
    title: 'A Level Tutors in Islamabad',
    description: 'Expert A Level tutors in Islamabad for university entrance preparation',
    category: 'exam',
    priority: 0.93,
    publicPage: true,
  },
  igcse: {
    path: '/igcse-tutors',
    title: 'IGCSE Tutors',
    description: 'IGCSE Physics and Mathematics tutoring from experienced professionals',
    category: 'exam',
    priority: 0.9,
    publicPage: true,
  },
  sat: {
    path: '/sat-tutors',
    title: 'SAT Preparation',
    description: 'Comprehensive SAT preparation and tutoring',
    category: 'exam',
    priority: 0.9,
    publicPage: true,
  },
  net: {
    path: '/net-entry-test-tutors',
    title: 'NET Entry Test Tutors',
    description: 'NET Entry Test preparation and tutoring',
    category: 'exam',
    priority: 0.85,
    publicPage: true,
  },
  pma: {
    path: '/pma-tutors',
    title: 'PMA Long Course',
    description: 'Military academy preparation - PMA Long Course tutoring',
    category: 'exam',
    priority: 0.85,
    publicPage: true,
  },

  // Learning Resources
  subjects: {
    path: '/subjects',
    title: 'Subjects',
    description: 'Browse all Physics and Maths subjects with comprehensive resources',
    category: 'learning',
    priority: 0.95,
    publicPage: false,
  },
  pastPapers: {
    path: '/past-papers',
    title: 'Past Papers',
    description: 'Download and practice with past exam papers',
    category: 'learning',
    priority: 0.9,
    publicPage: false,
  },
  questions: {
    path: '/questions',
    title: 'Q&A Hub',
    description: 'Ask and answer questions about Physics and Maths',
    category: 'learning',
    priority: 0.85,
    publicPage: false,
  },
  studyGroups: {
    path: '/study-groups',
    title: 'Study Groups',
    description: 'Join and collaborate in study groups',
    category: 'learning',
    priority: 0.8,
    publicPage: false,
  },
  syllabusPrecision: {
    path: '/syllabus-precision',
    title: 'Syllabus Tracker',
    description: 'Track your progress through the syllabus',
    category: 'learning',
    priority: 0.85,
    publicPage: false,
  },

  // Community & Teachers
  teacherDirectory: {
    path: '/teacher-directory',
    title: 'Find Tutors',
    description: 'Browse and connect with verified tutors',
    category: 'community',
    priority: 0.9,
    publicPage: true,
  },
  hireTeacher: {
    path: '/hire-teacher',
    title: 'Hire a Tutor',
    description: 'Find and hire a qualified tutor for personalized learning',
    category: 'community',
    priority: 0.85,
    publicPage: true,
  },
  teacherRegistration: {
    path: '/teacher-registration',
    title: 'Become a Tutor',
    description: 'Register as a tutor and start teaching',
    category: 'community',
    priority: 0.85,
    publicPage: true,
  },

  // Content
  blog: {
    path: '/blog',
    title: 'Blog',
    description: 'Latest articles, tips, and resources for exam preparation',
    category: 'content',
    priority: 0.85,
    publicPage: true,
  },
  reviews: {
    path: '/reviews',
    title: 'Reviews',
    description: 'Read reviews from our community of learners',
    category: 'content',
    priority: 0.8,
    publicPage: true,
  },

  // User Accounts
  dashboard: {
    path: '/dashboard',
    title: 'My Dashboard',
    description: 'Your learning dashboard and progress',
    category: 'account',
    priority: 0.7,
    publicPage: false,
  },
  login: {
    path: '/login',
    title: 'Login',
    description: 'Sign in to your XPM Tutors account',
    category: 'account',
    priority: 0.6,
    publicPage: true,
  },
  signup: {
    path: '/signup',
    title: 'Sign Up',
    description: 'Create your XPM Tutors account',
    category: 'account',
    priority: 0.6,
    publicPage: true,
  },
};

/**
 * Get links by category for navigation menus
 */
export function getLinksByCategory(category: string): PageLink[] {
  return Object.values(INTERNAL_LINKS).filter(link => link.category === category);
}

/**
 * Get all public links for sitemap
 */
export function getPublicLinks(): PageLink[] {
  return Object.values(INTERNAL_LINKS).filter(link => link.publicPage);
}

/**
 * Get related links for a given page
 */
export function getRelatedLinks(currentPath: string, limit = 5): PageLink[] {
  const current = Object.values(INTERNAL_LINKS).find(link => link.path === currentPath);
  if (!current) return [];
  
  return Object.values(INTERNAL_LINKS)
    .filter(link => link.category === current.category && link.path !== currentPath)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit);
}

/**
 * Generate breadcrumb links
 */
export function getBreadcrumbs(path: string): PageLink[] {
  const links: PageLink[] = [INTERNAL_LINKS.home];
  const link = Object.values(INTERNAL_LINKS).find(l => l.path === path);
  if (link && path !== '/') {
    links.push(link);
  }
  return links;
}

/**
 * Get navigation items for the main menu
 */
export const MAIN_NAV_LINKS = [
  INTERNAL_LINKS.oLevel,
  INTERNAL_LINKS.aLevel,
  INTERNAL_LINKS.subjects,
  INTERNAL_LINKS.teacherDirectory,
  INTERNAL_LINKS.blog,
];

/**
 * Get footer links organized by section
 */
export const FOOTER_SECTIONS = {
  examPrep: [
    INTERNAL_LINKS.oLevel,
    INTERNAL_LINKS.aLevel,
    INTERNAL_LINKS.igcse,
    INTERNAL_LINKS.sat,
    INTERNAL_LINKS.net,
    INTERNAL_LINKS.pma,
  ],
  learning: [
    INTERNAL_LINKS.subjects,
    INTERNAL_LINKS.pastPapers,
    INTERNAL_LINKS.questions,
    INTERNAL_LINKS.studyGroups,
    INTERNAL_LINKS.syllabusPrecision,
    INTERNAL_LINKS.blog,
  ],
  community: [
    INTERNAL_LINKS.teacherDirectory,
    INTERNAL_LINKS.hireTeacher,
    INTERNAL_LINKS.teacherRegistration,
    INTERNAL_LINKS.reviews,
    INTERNAL_LINKS.login,
    INTERNAL_LINKS.signup,
  ],
};
