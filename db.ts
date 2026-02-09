
import { User, Question, Review, Subject, Teacher, StudyGroup, GroupMessage, AppSettings, PastPaper, BlogPost, LearningMaterial } from './types.ts';
import { MOCK_REVIEWS, SUBJECTS_DATA, MOCK_PAST_PAPERS } from './constants.ts';

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

const cache: Record<string, any> = {};

const safeGet = <T>(key: string, defaultValue: T): T => {
  if (cache[key]) return cache[key];
  try {
    const item = localStorage.getItem(key);
    if (!item) return defaultValue;
    const parsed = JSON.parse(item);
    cache[key] = parsed;
    return parsed;
  } catch (e) {
    console.error(`XPM Storage Error [${key}]: Corrupted data detected.`);
    return defaultValue;
  }
};

const safeSet = (key: string, value: any) => {
  cache[key] = value;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn("XPM Storage Quota Hit: Clearing volatile caches.");
    localStorage.removeItem(STORAGE_KEYS.GROUP_MESSAGES);
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const initializeDB = () => {
  if (!localStorage.getItem(STORAGE_KEYS.REVIEWS)) safeSet(STORAGE_KEYS.REVIEWS, MOCK_REVIEWS);
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
        content: "# Physics Master Plan\n\nPhysics is not about memorizing equations; it's about understanding the 'why' behind the 'what'. \n\n1. **Conceptual Clarity**: Never skip a definition. Examiners love precise terminology.\n2. **Units & Significant Figures**: 30% of marks are lost in silly unit errors.\n3. **Practical Knowledge**: Study the ATP (Alternative to Practical) papers carefully. They reflect real-world physics.\n\nJoin XPM for 1-on-1 drills to master these concepts.",
        date: Date.now() - 86400000,
        category: "Study Guides",
        author: "Sir Zubair"
      },
      {
        id: "b2",
        title: "IGCSE vs O Level: Which Board is Right for You?",
        excerpt: "Choosing between Cambridge IGCSE and O Level? We break down the differences in grading, content, and global recognition.",
        content: "# The Great Debate: IGCSE vs O Level\n\nMany students in Pakistan and the UAE face the dilemma of choosing between these two similar yet distinct qualifications.\n\n## Content Depth\nWhile the core syllabus is nearly identical for subjects like Maths and Physics, IGCSE often includes more modern practical assessments. O Levels are traditionally more theoretical and linear.\n\n## Grading Systems\n- **IGCSE**: Uses both A*-G and the newer 9-1 grading scale.\n- **O Level**: Uses the classic A* to E scale.\n\n## Global Recognition\nBoth are highly respected by universities worldwide, including ivy leagues and top UK institutions. However, IGCSE is sometimes preferred for its international flavor in humanities.\n\nConsult our advisors if you're still unsure which path matches your strengths.",
        date: Date.now() - 172800000,
        category: "Academic Guidance",
        author: "XPM Counseling Team"
      },
      {
        id: "b3",
        title: "Mastering the Digital SAT: 5 Hacks for a 1500+ Score",
        excerpt: "The Digital SAT is an adaptive beast. Learn how to outsmart the algorithm and manage your time in the Math and English modules.",
        content: "# 2025 Digital SAT Survival Guide\n\nThe move to digital has changed everything. Here is how you win:\n\n## 1. Master the Desmos Calculator\nIn the Math module, Desmos is your best friend. Learn to graph functions instantly to find intercepts and solutions without manual algebra.\n\n## 2. Pacing is Key\nIn the adaptive format, the second module is harder if you do well in the first. Save your energy for the 'Hard' module by finishing the first one quickly but accurately.\n\n## 3. Vocabulary in Context\nStop memorizing random lists. Focus on how words change meaning based on the sentences around them. The Digital SAT prizes logic over rote memorization.\n\nJoin our weekend SAT intensive bootcamps to practice on realistic mock software.",
        date: Date.now() - 259200000,
        category: "Entry Tests",
        author: "SAT Specialist"
      },
      {
        id: "b4",
        title: "5 Common Pitfalls in A Level Mathematics (9709) P1",
        excerpt: "Pure Mathematics 1 is the foundation of your A Level grade. Don't let these silly mistakes cost you the A*.",
        content: "# Avoid These P1 Disasters\n\n## 1. Radians vs Degrees\nAlways check your calculator mode. Integration and Differentiation in calculus are almost always performed in radians.\n\n## 2. Negative Discarding in Quadratics\nWhen solving for 'k' in discriminant problems, don't forget to consider both positive and negative roots.\n\n## 3. Integration Constant (+C)\nYou lose a mark every single time you forget the '+C' in indefinite integrals. It sounds simple, but under exam pressure, it's the most common error.\n\n## 4. Trigonometric Ranges\nAlways look at the given interval (e.g., 0 < x < 360). Ensure you've found all possible solutions within that range.\n\nBook a session with our Math HOD to drill these specific tricky areas.",
        date: Date.now() - 345600000,
        category: "Subject Tips",
        author: "Math Department"
      },
      {
        id: "b5",
        title: "The Topical-to-Yearly Method: The Only Way to Revise",
        excerpt: "Studying hard isn't enough; you must study smart. Discover why starting yearly past papers too early is a mistake.",
        content: "# Effective Past Paper Methodology\n\nMost students jump into yearly papers 2 months before exams. Here is a better way:\n\n- **Phase 1: Topical Drills**: Immediately after finishing a chapter (e.g., Kinematics), solve 10 years of Kinematics questions. This solidifies the specific logic of that topic.\n- **Phase 2: Timed Yearly Papers**: Start these only after finishing 80% of the syllabus. Use them to practice 'mental switching' between different topics.\n- **Phase 3: The 'Black List'**: Keep a notebook of every question you got wrong. Redo these every Sunday until they are effortless.\n\nAt XPM, our Syllabus Precision tool helps you track this exact workflow.",
        date: Date.now() - 432000000,
        category: "Study Hacks",
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
    // notify in-page listeners that teachers changed
    try { window.dispatchEvent(new CustomEvent('teachersUpdated')); } catch (e) {}
    // best-effort backend sync (non-blocking)
    try {
      if (idx > -1) {
        fetch(`/api/teachers/${teacher.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(teacher) }).catch(() => {});
      } else {
        fetch('/api/teachers', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(teacher) }).catch(() => {});
      }
    } catch (e) {}
    return ts;
  },
  deleteTeacher: (id: string) => {
    const ts = db.getTeachers().filter(t => t.id !== id);
    safeSet(STORAGE_KEYS.TEACHERS, ts);
    try { window.dispatchEvent(new CustomEvent('teachersUpdated')); } catch (e) {}
    try { fetch(`/api/teachers/${id}`, { method: 'DELETE' }).catch(() => {}); } catch (e) {}
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
    if (msgs.length > 300) msgs.shift();
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
