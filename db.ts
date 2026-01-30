
import { User, Question, Review, Subject, Teacher, StudyGroup, GroupMessage, AppSettings, PastPaper, BlogPost, LearningMaterial } from './types';
import { MOCK_REVIEWS, SUBJECTS_DATA, MOCK_PAST_PAPERS } from './constants';

const STORAGE_KEYS = {
  USERS: 'academia_users',
  QUESTIONS: 'academia_questions',
  REVIEWS: 'academia_reviews',
  SUBJECTS: 'academia_subjects',
  TEACHERS: 'academia_teachers',
  PAST_PAPERS: 'academia_past_papers',
  GROUPS: 'academia_groups',
  GROUP_MESSAGES: 'academia_group_messages',
  CURRENT_USER: 'academia_user',
  SETTINGS: 'academia_settings',
  BLOGS: 'academia_blogs',
  MATERIALS: 'academia_materials'
};

// Safety Wrapper for localStorage access with Error Recovery
const safeGet = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return defaultValue;
    return JSON.parse(item);
  } catch (e) {
    console.error(`XPM Storage Error [${key}]: Corrupted data detected. Falling back to defaults.`);
    return defaultValue;
  }
};

const safeSet = (key: string, value: any) => {
  try {
    const stringified = JSON.stringify(value);
    localStorage.setItem(key, stringified);
  } catch (e) {
    // QUOTA GUARD: If localStorage is full (usually 5MB limit), clear non-essential cache
    console.warn("XPM Storage Quota Hit: Clearing volatile caches to maintain stability.");
    try {
      localStorage.removeItem(STORAGE_KEYS.GROUP_MESSAGES);
      localStorage.removeItem(STORAGE_KEYS.REVIEWS); // Will re-init from mock on next load
      localStorage.setItem(key, JSON.stringify(value));
    } catch (innerError) {
      console.error("Critical Storage Failure: Device storage may be physically full.");
    }
  }
};

const initializeDB = () => {
  // Use a 'lazy' approach: only write defaults if they don't exist to save disk I/O on cold start
  if (!localStorage.getItem(STORAGE_KEYS.REVIEWS)) {
    safeSet(STORAGE_KEYS.REVIEWS, MOCK_REVIEWS);
  }
  if (!localStorage.getItem(STORAGE_KEYS.QUESTIONS)) safeSet(STORAGE_KEYS.QUESTIONS, []);
  if (!localStorage.getItem(STORAGE_KEYS.SUBJECTS)) safeSet(STORAGE_KEYS.SUBJECTS, SUBJECTS_DATA);
  if (!localStorage.getItem(STORAGE_KEYS.PAST_PAPERS)) {
    const initialPapers: PastPaper[] = MOCK_PAST_PAPERS.map(p => ({
      ...p,
      level: p.subject.includes('(9702)') || p.subject.includes('(9701)') ? 'AS Level' : 'O Level'
    }));
    safeSet(STORAGE_KEYS.PAST_PAPERS, initialPapers);
  }
  if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
    safeSet(STORAGE_KEYS.SETTINGS, { subscriptionFee: 1500, originalPrice: 3999 });
  }
  if (!localStorage.getItem(STORAGE_KEYS.TEACHERS)) {
    safeSet(STORAGE_KEYS.TEACHERS, [
      { id: 't1', name: 'Sir Zubair', subjects: ['Physics', 'Mathematics'], whatsapp: '923009508592', registrationStatus: 'active', isVerified: true, attendance: [], activeTenures: [] },
      { id: 't2', name: 'Ma\'am Sarah', subjects: ['Biology'], whatsapp: '923000000000', registrationStatus: 'active', isVerified: true, attendance: [], activeTenures: [] }
    ]);
  }
  if (!localStorage.getItem(STORAGE_KEYS.GROUPS)) safeSet(STORAGE_KEYS.GROUPS, []);
  if (!localStorage.getItem(STORAGE_KEYS.GROUP_MESSAGES)) safeSet(STORAGE_KEYS.GROUP_MESSAGES, []);
  if (!localStorage.getItem(STORAGE_KEYS.MATERIALS)) safeSet(STORAGE_KEYS.MATERIALS, []);
  if (!localStorage.getItem(STORAGE_KEYS.BLOGS)) {
    safeSet(STORAGE_KEYS.BLOGS, [
      {
        id: "b1",
        title: "How to Get A* in O Level Physics: The Ultimate Strategy",
        excerpt: "Mastering Physics 5054 or 0625 requires more than just memorizing formulas. Discover the XPM method...",
        content: "Detailed content about physics strategy...",
        date: Date.now() - 86400000,
        category: "Study Guides",
        author: "XPM Academic Team"
      }
    ]);
  }
  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    safeSet(STORAGE_KEYS.USERS, [
      {
        id: 'super-admin-1',
        name: 'Zubair Ahmad',
        email: 'zubairahmadisb7p2@gmail.com',
        password: '12345678',
        phoneNumber: '923009508592',
        role: 'admin',
        enrolledSubjects: [],
        completedTopics: [],
        registeredAt: Date.now(),
        subscriptionStatus: 'active'
      }
    ]);
  }
};

initializeDB();

export const db = {
  getUsers: (): User[] => safeGet<User[]>(STORAGE_KEYS.USERS, []),
  saveUser: (user: User) => {
    const users = db.getUsers();
    const index = users.findIndex(u => u.id === user.id || u.email === user.email);
    if (index > -1) { users[index] = { ...users[index], ...user }; }
    else { users.push(user); }
    safeSet(STORAGE_KEYS.USERS, users);
  },

  getSettings: (): AppSettings => safeGet<AppSettings>(STORAGE_KEYS.SETTINGS, { subscriptionFee: 1500, originalPrice: 3999 }),
  saveSettings: (settings: AppSettings) => safeSet(STORAGE_KEYS.SETTINGS, settings),

  getSubjects: (): Subject[] => safeGet<Subject[]>(STORAGE_KEYS.SUBJECTS, []),
  updateSubject: (updatedSubject: Subject) => {
    const subjects = db.getSubjects();
    const index = subjects.findIndex(s => s.id === updatedSubject.id);
    if (index > -1) {
      subjects[index] = updatedSubject;
      safeSet(STORAGE_KEYS.SUBJECTS, subjects);
    }
    return subjects;
  },

  getLearningMaterials: (): LearningMaterial[] => safeGet<LearningMaterial[]>(STORAGE_KEYS.MATERIALS, []),
  saveLearningMaterial: (material: LearningMaterial) => {
    const materials = db.getLearningMaterials();
    const index = materials.findIndex(m => m.id === material.id);
    if (index > -1) { materials[index] = material; } else { materials.push(material); }
    safeSet(STORAGE_KEYS.MATERIALS, materials);
    return materials;
  },
  deleteLearningMaterial: (id: string) => {
    const materials = db.getLearningMaterials().filter(m => m.id !== id);
    safeSet(STORAGE_KEYS.MATERIALS, materials);
    return materials;
  },

  getPastPapers: (): PastPaper[] => safeGet<PastPaper[]>(STORAGE_KEYS.PAST_PAPERS, []),
  savePastPaper: (paper: PastPaper) => {
    const papers = db.getPastPapers();
    const index = papers.findIndex(p => p.id === paper.id);
    if (index > -1) { papers[index] = paper; }
    else { papers.push(paper); }
    safeSet(STORAGE_KEYS.PAST_PAPERS, papers);
    return papers;
  },
  deletePastPaper: (id: string) => {
    const papers = db.getPastPapers().filter(p => p.id !== id);
    safeSet(STORAGE_KEYS.PAST_PAPERS, papers);
    return papers;
  },

  getTeachers: (): Teacher[] => safeGet<Teacher[]>(STORAGE_KEYS.TEACHERS, []),
  saveTeacher: (teacher: Teacher) => {
    const ts = db.getTeachers();
    const idx = ts.findIndex(t => t.id === teacher.id);
    if (idx > -1) { ts[idx] = teacher; } else { ts.push(teacher); }
    safeSet(STORAGE_KEYS.TEACHERS, ts);
    return ts;
  },
  deleteTeacher: (id: string) => {
    const ts = db.getTeachers().filter(t => t.id !== id);
    safeSet(STORAGE_KEYS.TEACHERS, ts);
    return ts;
  },

  getGroups: (): StudyGroup[] => safeGet<StudyGroup[]>(STORAGE_KEYS.GROUPS, []),
  saveGroup: (group: StudyGroup) => {
    const gs = db.getGroups();
    const idx = gs.findIndex(g => g.id === group.id);
    if (idx > -1) { gs[idx] = group; } else { gs.push(group); }
    safeSet(STORAGE_KEYS.GROUPS, gs);
    return gs;
  },

  getGroupMessages: (): GroupMessage[] => safeGet<GroupMessage[]>(STORAGE_KEYS.GROUP_MESSAGES, []),
  addGroupMessage: (msg: GroupMessage) => {
    const msgs = db.getGroupMessages();
    msgs.push(msg);
    if (msgs.length > 300) msgs.shift(); // Reduce history limit for better mobile performance
    safeSet(STORAGE_KEYS.GROUP_MESSAGES, msgs);
    return msgs;
  },

  getQuestions: (): Question[] => safeGet<Question[]>(STORAGE_KEYS.QUESTIONS, []),
  addQuestion: (q: Question) => {
    const qs = db.getQuestions();
    qs.unshift(q);
    safeSet(STORAGE_KEYS.QUESTIONS, qs);
    return qs;
  },
  updateQuestion: (updatedQ: Question) => {
    const qs = db.getQuestions();
    const index = qs.findIndex(q => q.id === updatedQ.id);
    if (index > -1) {
      qs[index] = updatedQ;
      safeSet(STORAGE_KEYS.QUESTIONS, qs);
    }
    return qs;
  },

  getReviews: (): Review[] => safeGet<Review[]>(STORAGE_KEYS.REVIEWS, []),
  addReview: (r: Review) => {
    const reviews = db.getReviews();
    reviews.unshift(r);
    safeSet(STORAGE_KEYS.REVIEWS, reviews);
    return reviews;
  },
  deleteReview: (id: string) => {
    const reviews = db.getReviews().filter(r => r.id !== id);
    safeSet(STORAGE_KEYS.REVIEWS, reviews);
    return reviews;
  },

  getBlogs: (): BlogPost[] => safeGet<BlogPost[]>(STORAGE_KEYS.BLOGS, []),
  saveBlog: (blog: BlogPost) => {
    const blogs = db.getBlogs();
    const index = blogs.findIndex(b => b.id === blog.id);
    if (index > -1) { blogs[index] = blog; } else { blogs.unshift(blog); }
    safeSet(STORAGE_KEYS.BLOGS, blogs);
    return blogs;
  },
  deleteBlog: (id: string) => {
    const blogs = db.getBlogs().filter(b => b.id !== id);
    safeSet(STORAGE_KEYS.BLOGS, blogs);
    return blogs;
  }
};
