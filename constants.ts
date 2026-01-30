
import { Subject, PastPaper, Review } from './types';

export const SUBJECTS_DATA: Subject[] = [
  // --- CAMBRIDGE O LEVEL (FULL SYLLABUS INDEX) ---
  {
    id: 'math-4024',
    name: 'Mathematics Syllabus D',
    level: 'O Level',
    description: 'Cambridge O Level Mathematics (4024) - Comprehensive numerical reasoning and geometric logic.',
    topics: [
      { id: 'm4024-1', title: 'Number and calculations', resources: [] },
      { id: 'm4024-2', title: 'Set language and notation', resources: [] },
      { id: 'm4024-3', title: 'Squares, square roots, cubes and cube roots', resources: [] },
      { id: 'm4024-4', title: 'Fractions, decimals and percentages', resources: [] },
      { id: 'm4024-5', title: 'Ratio, proportion and rate', resources: [] },
      { id: 'm4024-6', title: 'Indices and standard form', resources: [] },
      { id: 'm4024-7', title: 'Money and finance', resources: [] },
      { id: 'm4024-8', title: 'Estimation and limits of accuracy', resources: [] },
      { id: 'm4024-9', title: 'Algebraic representation and formulae', resources: [] },
      { id: 'm4024-10', title: 'Algebraic manipulation', resources: [] },
      { id: 'm4024-11', title: 'Functions and graphs', resources: [] },
      { id: 'm4024-12', title: 'Calculus (Basic differentiation)', resources: [] },
      { id: 'm4024-13', title: 'Equations and inequalities', resources: [] },
      { id: 'm4024-14', title: 'Sequences', resources: [] },
      { id: 'm4024-15', title: 'Geometry', resources: [] },
      { id: 'm4024-16', title: 'Mensuration', resources: [] },
      { id: 'm4024-17', title: 'Trigonometry', resources: [] },
      { id: 'm4024-18', title: 'Vectors and transformations', resources: [] },
      { id: 'm4024-19', title: 'Probability', resources: [] },
      { id: 'm4024-20', title: 'Statistics', resources: [] }
    ]
  },
  {
    id: 'phys-5054',
    name: 'Physics',
    level: 'O Level',
    description: 'Cambridge O Level Physics (5054) - The laws of the physical universe from motion to space.',
    topics: [
      { id: 'p5054-1', title: 'Physical quantities, units and measurement', resources: [] },
      { id: 'p5054-2', title: 'Kinematics', resources: [] },
      { id: 'p5054-3', title: 'Dynamics', resources: [] },
      { id: 'p5054-4', title: 'Mass, weight and density', resources: [] },
      { id: 'p5054-5', title: 'Turning effects and elasticity', resources: [] },
      { id: 'p5054-6', title: 'Pressure', resources: [] },
      { id: 'p5054-7', title: 'Energy, work and power', resources: [] },
      { id: 'p5054-8', title: 'Kinetic model of matter', resources: [] },
      { id: 'p5054-9', title: 'Thermal properties and temperature', resources: [] },
      { id: 'p5054-10', title: 'Transfer of thermal energy', resources: [] },
      { id: 'p5054-11', title: 'General wave properties', resources: [] },
      { id: 'p5054-12', title: 'Light and lenses', resources: [] },
      { id: 'p5054-13', title: 'Electromagnetic spectrum', resources: [] },
      { id: 'p5054-14', title: 'Sound', resources: [] },
      { id: 'p5054-15', title: 'Magnetism', resources: [] },
      { id: 'p5054-16', title: 'Static electricity', resources: [] },
      { id: 'p5054-17', title: 'Current electricity', resources: [] },
      { id: 'p5054-18', title: 'D.C. circuits', resources: [] },
      { id: 'p5054-19', title: 'Practical electricity', resources: [] },
      { id: 'p5054-20', title: 'Electromagnetism', resources: [] },
      { id: 'p5054-21', title: 'Nuclear physics and radioactivity', resources: [] },
      { id: 'p5054-22', title: 'Space physics', resources: [] }
    ]
  },
  {
    id: 'chem-5070',
    name: 'Chemistry',
    level: 'O Level',
    description: 'Cambridge O Level Chemistry (5070) - Exploring the building blocks of matter and chemical systems.',
    topics: [
      { id: 'c5070-1', title: 'Experimental chemistry', resources: [] },
      { id: 'c5070-2', title: 'The particulate nature of matter', resources: [] },
      { id: 'c5070-3', title: 'Atoms, elements and compounds', resources: [] },
      { id: 'c5070-4', title: 'Stoichiometry and the mole', resources: [] },
      { id: 'c5070-5', title: 'Electrochemistry', resources: [] },
      { id: 'c5070-6', title: 'Chemical energetics', resources: [] },
      { id: 'c5070-7', title: 'Chemical reactions (Rate & Reversibility)', resources: [] },
      { id: 'c5070-8', title: 'Acids, bases and salts', resources: [] },
      { id: 'c5070-9', title: 'The Periodic Table', resources: [] },
      { id: 'c5070-10', title: 'Metals', resources: [] },
      { id: 'c5070-11', title: 'Chemistry of the environment', resources: [] },
      { id: 'c5070-12', title: 'Organic chemistry (Alkanes, Alkenes, Alcohols)', resources: [] },
      { id: 'c5070-13', title: 'Carboxylic acids and Polymers', resources: [] }
    ]
  },
  {
    id: 'bio-5090',
    name: 'Biology',
    level: 'O Level',
    description: 'Cambridge O Level Biology (5090) - The science of life, from cellular mechanics to ecosystems.',
    topics: [
      { id: 'b5090-1', title: 'Cells and Cell processes', resources: [] },
      { id: 'b5090-2', title: 'Diffusion, Osmosis and Active Transport', resources: [] },
      { id: 'b5090-3', title: 'Biological molecules and Enzymes', resources: [] },
      { id: 'b5090-4', title: 'Plant nutrition and photosynthesis', resources: [] },
      { id: 'b5090-5', title: 'Animal nutrition and digestion', resources: [] },
      { id: 'b5090-6', title: 'Transport in flowering plants', resources: [] },
      { id: 'b5090-7', title: 'Transport in humans', resources: [] },
      { id: 'b5090-8', title: 'Respiration and gas exchange', resources: [] },
      { id: 'b5090-9', title: 'Excretion', resources: [] },
      { id: 'b5090-10', title: 'Coordination and response', resources: [] },
      { id: 'b5090-11', title: 'Hormones, Homeostasis and Drugs', resources: [] },
      { id: 'b5090-12', title: 'Reproduction', resources: [] },
      { id: 'b5090-13', title: 'Inheritance and Variation', resources: [] },
      { id: 'b5090-14', title: 'Ecosystems and Biotechnology', resources: [] }
    ]
  },
  {
    id: 'cs-2210',
    name: 'Computer Science',
    level: 'O Level',
    description: 'Cambridge O Level Computer Science (2210) - Algorithms, logic, and system architecture.',
    topics: [
      { id: 'cs2210-1', title: 'Data representation (Binary, Hex, Sound)', resources: [] },
      { id: 'cs2210-2', title: 'Data transmission and Error checking', resources: [] },
      { id: 'cs2210-3', title: 'Hardware and Computer Architecture', resources: [] },
      { id: 'cs2210-4', title: 'Software (OS and Applications)', resources: [] },
      { id: 'cs2210-5', title: 'The internet and its uses', resources: [] },
      { id: 'cs2210-6', title: 'Automated and emerging technologies (AI/Robotics)', resources: [] },
      { id: 'cs2210-7', title: 'Algorithm design and problem-solving', resources: [] },
      { id: 'cs2210-8', title: 'Programming concepts', resources: [] },
      { id: 'cs2210-9', title: 'Databases', resources: [] },
      { id: 'cs2210-10', title: 'Boolean logic and Gates', resources: [] }
    ]
  },
  {
    id: 'econ-2281',
    name: 'Economics',
    level: 'O Level',
    description: 'Cambridge O Level Economics (2281) - Analyzing global markets and government policy.',
    topics: [
      { id: 'e2281-1', title: 'The basic economic problem', resources: [] },
      { id: 'e2281-2', title: 'The allocation of resources (Demand/Supply)', resources: [] },
      { id: 'e2281-3', title: 'Microeconomic decision makers', resources: [] },
      { id: 'e2281-4', title: 'Government and the macroeconomy', resources: [] },
      { id: 'e2281-5', title: 'Economic development', resources: [] },
      { id: 'e2281-6', title: 'International trade and globalization', resources: [] }
    ]
  },
  {
    id: 'bus-7115',
    name: 'Business Studies',
    level: 'O Level',
    description: 'Cambridge O Level Business Studies (7115) - Foundations of entrepreneurship and corporate strategy.',
    topics: [
      { id: 'bs7115-1', title: 'Understanding business activity', resources: [] },
      { id: 'bs7115-2', title: 'People in business', resources: [] },
      { id: 'bs7115-3', title: 'Marketing', resources: [] },
      { id: 'bs7115-4', title: 'Operations management', resources: [] },
      { id: 'bs7115-5', title: 'Financial information and decisions', resources: [] },
      { id: 'bs7115-6', title: 'External influences on business activity', resources: [] }
    ]
  },
  {
    id: 'acc-7707',
    name: 'Accounting',
    level: 'O Level',
    description: 'Cambridge O Level Principles of Accounts (7707).',
    topics: [
      { id: 'acc7707-1', title: 'Fundamentals of Accounting', resources: [] },
      { id: 'acc7707-2', title: 'Sources and Recording of Data', resources: [] },
      { id: 'acc7707-3', title: 'Verification of Accounting Records', resources: [] },
      { id: 'acc7707-4', title: 'Accounting Procedures', resources: [] },
      { id: 'acc7707-5', title: 'Financial Statements (Sole Traders/Partnerships)', resources: [] },
      { id: 'acc7707-6', title: 'Analysis and Interpretation', resources: [] },
      { id: 'acc7707-7', title: 'Accounting Principles and Policies', resources: [] }
    ]
  },
  {
    id: 'eng-1123',
    name: 'English Language',
    level: 'O Level',
    description: 'Cambridge O Level English Language (1123) - Focused on reading, writing and grammar.',
    topics: [
      { id: 'eng1123-1', title: 'Directed Writing (Letters, Reports, Articles)', resources: [] },
      { id: 'eng1123-2', title: 'Composition (Descriptive, Narrative)', resources: [] },
      { id: 'eng1123-3', title: 'Reading for Meaning', resources: [] },
      { id: 'eng1123-4', title: 'Summary Writing', resources: [] },
      { id: 'eng1123-5', title: 'Language Usage and Grammar', resources: [] }
    ]
  },
  {
    id: 'is-2058',
    name: 'Islamiyat',
    level: 'O Level',
    description: 'Cambridge O Level Islamiyat (2058).',
    topics: [
      { id: 'is2058-1', title: 'The History and Importance of the Quran', resources: [] },
      { id: 'is2058-2', title: 'Life of the Prophet (PBUH) in Makkah', resources: [] },
      { id: 'is2058-3', title: 'Life of the Prophet (PBUH) in Madinah', resources: [] },
      { id: 'is2058-4', title: 'The First Muslim Community', resources: [] },
      { id: 'is2058-5', title: 'Pillars and Articles of Faith', resources: [] },
      { id: 'is2058-6', title: 'Sources of Islamic Law (Hadith/Ijma/Qiyas)', resources: [] }
    ]
  },
  {
    id: 'ps-2059',
    name: 'Pakistan Studies',
    level: 'O Level',
    description: 'Cambridge O Level Pakistan Studies (2059) - History and Geography components.',
    topics: [
      { id: 'ps2059-1', title: 'History: Decline of Mughals and British Arrival', resources: [] },
      { id: 'ps2059-2', title: 'History: Reform Movements and Pakistan Movement', resources: [] },
      { id: 'ps2059-3', title: 'History: Post-Independence Challenges', resources: [] },
      { id: 'ps2059-4', title: 'Geography: Land and Climate of Pakistan', resources: [] },
      { id: 'ps2059-5', title: 'Geography: Natural Resources (Water/Forests/Power)', resources: [] },
      { id: 'ps2059-6', title: 'Geography: Agriculture and Industrial Development', resources: [] }
    ]
  },
  {
    id: 'soc-2251',
    name: 'Sociology',
    level: 'O Level',
    description: 'Cambridge O Level Sociology (2251).',
    topics: [
      { id: 'soc2251-1', title: 'Theory and Methods', resources: [] },
      { id: 'soc2251-2', title: 'Culture, Identity and Socialization', resources: [] },
      { id: 'soc2251-3', title: 'Social Inequality', resources: [] },
      { id: 'soc2251-4', title: 'Family', resources: [] },
      { id: 'soc2251-5', title: 'Education', resources: [] },
      { id: 'soc2251-6', title: 'Crime, Deviance and Social Control', resources: [] },
      { id: 'soc2251-7', title: 'Media', resources: [] }
    ]
  },

  // --- CAMBRIDGE A LEVEL (SAMPLES) ---
  {
    id: 'phys-9702',
    name: 'Physics',
    level: 'AS Level',
    description: 'Cambridge International AS & A Level Physics (9702).',
    topics: [
      { id: 'p9702-1', title: 'Physical quantities and units', resources: [] },
      { id: 'p9702-2', title: 'Kinematics', resources: [] },
      { id: 'p9702-3', title: 'Dynamics', resources: [] }
    ]
  },
  {
    id: 'math-9709',
    name: 'Mathematics',
    level: 'AS Level',
    description: 'Cambridge International AS & A Level Mathematics (9709).',
    topics: [
      { id: 'm9709-1', title: 'Pure Mathematics 1', resources: [] },
      { id: 'm9709-2', title: 'Probability & Statistics 1', resources: [] }
    ]
  },

  // --- FEDERAL BOARD SAMPLES ---
  {
    id: 'fb-phys-9',
    name: 'Physics',
    level: 'Grade 9',
    description: 'FBISE Grade 9 Physics (SSC-I).',
    topics: [
      { id: 'fb-p9-1', title: 'Physical Quantities and Measurement', resources: [] },
      { id: 'fb-p9-2', title: 'Kinematics', resources: [] }
    ]
  }
];

export const MOCK_PAST_PAPERS: PastPaper[] = [
  { id: 'pp1', board: 'Cambridge', level: 'O Level', subject: 'Mathematics (4024)', year: 2023, session: 'Summer', url: 'https://papacambridge.com/cie/cambridge-upper-secondary/cambridge-o-level/mathematics-d-4024/' },
  { id: 'pp2', board: 'Cambridge', level: 'AS Level', subject: 'Physics (9702)', year: 2023, session: 'Summer', url: 'https://papacambridge.com/cie/cambridge-international-as-and-a-levels/physics-9702/' },
  { id: 'pp3', board: 'Federal Board', level: 'Grade 9', subject: 'Physics SSC-I', year: 2022, session: 'Summer', url: 'https://www.fbise.edu.pk/past_papers.php' },
];

export const MOCK_REVIEWS: Review[] = [
  { id: 'r1', userId: 'u1', userName: 'Zayan Ahmed', rating: 5, comment: 'The best resource for O Level Math! The notes are so clear and concise.', timestamp: Date.now() - 100000 },
  { id: 'r2', userId: 'u2', userName: 'Sarah Khan', rating: 5, comment: 'Improved my Physics grade from C to A* in just 3 months. Highly recommend!', timestamp: Date.now() - 200000 },
  { id: 'r3', userId: 'u3', userName: 'Omar Farooq', rating: 5, comment: 'IGCSE Computer Science was a breeze thanks to the organized chapter index here.', timestamp: Date.now() - 300000 },
  { id: 'r4', userId: 'u4', userName: 'Ayesha Malik', rating: 5, comment: 'The 24/7 WhatsApp support is incredibly helpful. Responses are always fast and detailed.', timestamp: Date.now() - 400000 },
  { id: 'r5', userId: 'u5', userName: 'John David', rating: 5, comment: 'Excellent tutoring for A Level Physics from the UK. The logic-based approach is refreshing.', timestamp: Date.now() - 500000 },
  { id: 'r6', userId: 'u6', userName: 'Fatima Zahra', rating: 5, comment: 'The Syllabus Precision tool is a lifesaver. I finally know exactly what I have covered.', timestamp: Date.now() - 600000 },
  { id: 'r7', userId: 'u7', userName: 'Ali Raza', rating: 5, comment: 'Best Digital SAT math prep in the UAE. The drills are challenging but effective.', timestamp: Date.now() - 700000 },
  { id: 'r8', userId: 'u8', userName: 'Hiba Noor', rating: 5, comment: 'Highly qualified tutors who actually care about your progress. 5 stars!', timestamp: Date.now() - 800000 },
  { id: 'r9', userId: 'u9', userName: 'Bilal Hassan', rating: 5, comment: 'The repository of past papers is so well-organized. Saved me hours of searching.', timestamp: Date.now() - 900000 },
  { id: 'r10', userId: 'u10', userName: 'Maria Gomez', rating: 5, comment: 'Great for IGCSE Business Studies. The case study analysis tips were spot on.', timestamp: Date.now() - 1000000 },
  { id: 'r11', userId: 'u11', userName: 'Hamza Khan', rating: 5, comment: 'Amazing NET Entry Test preparation. I got into NUST thanks to XPM!', timestamp: Date.now() - 1100000 },
  { id: 'r12', userId: 'u12', userName: 'Layla Ahmed', rating: 5, comment: 'Physics 5054 was my weakest subject, but now it is my strongest. Thanks Sir Zubair!', timestamp: Date.now() - 1200000 },
  { id: 'r13', userId: 'u13', userName: 'Samiullah', rating: 5, comment: 'The most affordable and high-quality tutoring platform in Pakistan.', timestamp: Date.now() - 1300000 },
  { id: 'r14', userId: 'u14', userName: 'Emily Watson', rating: 5, comment: 'The tutors are very patient and explain concepts with great clarity. Highly recommended for A2 Math.', timestamp: Date.now() - 1400000 },
  { id: 'r15', userId: 'u15', userName: 'Ahmed Al-Saud', rating: 5, comment: 'Excellent service for students in Saudi Arabia. The online platform is very smooth.', timestamp: Date.now() - 1500000 },
  { id: 'r16', userId: 'u16', userName: 'Zunaira Malik', rating: 5, comment: 'The Topical Past Papers are a game changer for O Level Chemistry.', timestamp: Date.now() - 1600000 },
  { id: 'r17', userId: 'u17', userName: 'Usman Ghani', rating: 5, comment: 'Top-notch coaching for PMA long course. Very professional and thorough.', timestamp: Date.now() - 1700000 },
  { id: 'r18', userId: 'u18', userName: 'Rania Shah', rating: 5, comment: 'The study groups are a great way to collaborate with other students. Very helpful!', timestamp: Date.now() - 1800000 },
  { id: 'r19', userId: 'u19', userName: 'Mustafa Ali', rating: 5, comment: 'I love how easy it is to track my syllabus progress on the dashboard.', timestamp: Date.now() - 1900000 },
  { id: 'r20', userId: 'u20', userName: 'Jessica Lim', rating: 5, comment: 'The English 1123 resources are fantastic. My summary writing has improved so much.', timestamp: Date.now() - 2000000 },
  { id: 'r21', userId: 'u21', userName: 'Khadija Bibi', rating: 5, comment: 'Islamiyat and Pak Studies notes are very well structured. Easy to memorize.', timestamp: Date.now() - 2100000 },
  { id: 'r22', userId: 'u22', userName: 'Farhan Saeed', rating: 5, comment: 'The logic-based approach to Mathematics is what makes XPM stand out.', timestamp: Date.now() - 2200000 },
  { id: 'r23', userId: 'u23', userName: 'Nadia Hussain', rating: 5, comment: 'Fast responses on WhatsApp and very polite staff. Great experience!', timestamp: Date.now() - 2300000 },
  { id: 'r24', userId: 'u24', userName: 'Ibrahim Khalil', rating: 5, comment: 'Best tutoring for AS Level Physics in the region. The mechanics section was perfectly taught.', timestamp: Date.now() - 2400000 },
  { id: 'r25', userId: 'u25', userName: 'Sobia Khan', rating: 5, comment: 'My daughter achieved straight As in her IGCSEs thanks to XPM. Truly thankful.', timestamp: Date.now() - 2500000 }
];
