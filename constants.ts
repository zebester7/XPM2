
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
      { id: 'e2281-1', title: 'The basic economic problem and opportunity cost', resources: [] },
      { id: 'e2281-2', title: 'Productive efficiency and resource allocation', resources: [] },
      { id: 'e2281-3', title: 'Demand and price elasticity of demand', resources: [] },
      { id: 'e2281-4', title: 'Supply and price elasticity of supply', resources: [] },
      { id: 'e2281-5', title: 'Market equilibrium and disequilibrium', resources: [] },
      { id: 'e2281-6', title: 'Market structures (perfect competition, monopoly)', resources: [] },
      { id: 'e2281-7', title: 'Costs, revenue and profits', resources: [] },
      { id: 'e2281-8', title: 'Labor market and wage determination', resources: [] },
      { id: 'e2281-9', title: 'Inflation, unemployment and economic growth', resources: [] },
      { id: 'e2281-10', title: 'Government economic objectives and policies', resources: [] },
      { id: 'e2281-11', title: 'Fiscal policy and taxation', resources: [] },
      { id: 'e2281-12', title: 'Monetary policy and interest rates', resources: [] },
      { id: 'e2281-13', title: 'Exchange rates and balance of payments', resources: [] },
      { id: 'e2281-14', title: 'International trade and comparative advantage', resources: [] },
      { id: 'e2281-15', title: 'Development economics and poverty', resources: [] },
      { id: 'e2281-16', title: 'Environment and sustainability in economics', resources: [] }
    ]
  },
  {
    id: 'bus-7115',
    name: 'Business Studies',
    level: 'O Level',
    description: 'Cambridge O Level Business Studies (7115) - Foundations of entrepreneurship and corporate strategy.',
    topics: [
      { id: 'bs7115-1', title: 'Nature of business activity and business types', resources: [] },
      { id: 'bs7115-2', title: 'Business ownership and governance', resources: [] },
      { id: 'bs7115-3', title: 'Organizational structures and delegation', resources: [] },
      { id: 'bs7115-4', title: 'Management functions and roles', resources: [] },
      { id: 'bs7115-5', title: 'Recruitment, selection and training', resources: [] },
      { id: 'bs7115-6', title: 'Motivation and employee performance', resources: [] },
      { id: 'bs7115-7', title: 'Leadership styles and organizational culture', resources: [] },
      { id: 'bs7115-8', title: 'Marketing fundamentals and market research', resources: [] },
      { id: 'bs7115-9', title: 'Market segmentation, targeting and positioning', resources: [] },
      { id: 'bs7115-10', title: 'Product and pricing strategies', resources: [] },
      { id: 'bs7115-11', title: 'Distribution and promotional strategies', resources: [] },
      { id: 'bs7115-12', title: 'Production methods and efficiency', resources: [] },
      { id: 'bs7115-13', title: 'Quality control and improvement', resources: [] },
      { id: 'bs7115-14', title: 'Supply chain and inventory management', resources: [] },
      { id: 'bs7115-15', title: 'Financial records and accounting', resources: [] },
      { id: 'bs7115-16', title: 'Profitability and financial analysis', resources: [] },
      { id: 'bs7115-17', title: 'Budgeting and cash flow management', resources: [] },
      { id: 'bs7115-18', title: 'Break-even analysis and investment decisions', resources: [] },
      { id: 'bs7115-19', title: 'Economic influences on business', resources: [] },
      { id: 'bs7115-20', title: 'Ethical and social responsibility in business', resources: [] }
    ]
  },
  {
    id: 'acc-7707',
    name: 'Accounting',
    level: 'O Level',
    description: 'Cambridge O Level Principles of Accounts (7707).',
    topics: [
      { id: 'acc7707-1', title: 'Nature and purpose of accounting', resources: [] },
      { id: 'acc7707-2', title: 'The accounting equation and double entry', resources: [] },
      { id: 'acc7707-3', title: 'Ledger accounts and trial balance', resources: [] },
      { id: 'acc7707-4', title: 'Adjustments for financial statements', resources: [] },
      { id: 'acc7707-5', title: 'Profit and loss accounts and balance sheets', resources: [] },
      { id: 'acc7707-6', title: 'Accounting for capital, drawings and reserves', resources: [] },
      { id: 'acc7707-7', title: 'Bank reconciliation statements', resources: [] },
      { id: 'acc7707-8', title: 'Control accounts', resources: [] },
      { id: 'acc7707-9', title: 'Depreciation of fixed assets', resources: [] },
      { id: 'acc7707-10', title: 'Bad and doubtful debts', resources: [] },
      { id: 'acc7707-11', title: 'Partnership and sole trader accounts', resources: [] },
      { id: 'acc7707-12', title: 'Computerized accounting basics', resources: [] }
    ]
  },
  {
    id: 'eng-1123',
    name: 'English Language',
    level: 'O Level',
    description: 'Cambridge O Level English Language (1123) - Focused on reading, writing and grammar.',
    topics: [
      { id: 'eng1123-1', title: 'Reading and comprehension skills', resources: [] },
      { id: 'eng1123-2', title: 'Analysis of language and style', resources: [] },
      { id: 'eng1123-3', title: 'Summary and synthesis of texts', resources: [] },
      { id: 'eng1123-4', title: 'Directed writing (letters, reports)', resources: [] },
      { id: 'eng1123-5', title: 'Persuasive and argumentative writing', resources: [] },
      { id: 'eng1123-6', title: 'Narrative and descriptive writing', resources: [] },
      { id: 'eng1123-7', title: 'Grammar and sentence structures', resources: [] },
      { id: 'eng1123-8', title: 'Punctuation and spelling', resources: [] },
      { id: 'eng1123-9', title: 'Paragraphing and text organization', resources: [] },
      { id: 'eng1123-10', title: 'Vocabulary and word usage', resources: [] }
    ]
  },
  {
    id: 'is-2058',
    name: 'Islamiyat',
    level: 'O Level',
    description: 'Cambridge O Level Islamiyat (2058).',
    topics: [
      { id: 'is2058-1', title: 'The nature and importance of the Quran', resources: [] },
      { id: 'is2058-2', title: 'Historical context of revelation', resources: [] },
      { id: 'is2058-3', title: 'Selected Quranic teachings (Surah Al-Fatiha and others)', resources: [] },
      { id: 'is2058-4', title: 'Life of Prophet Muhammad (PBUH) - Early life and prophethood', resources: [] },
      { id: 'is2058-5', title: 'Prophet Muhammad (PBUH) - Makkah period and migration', resources: [] },
      { id: 'is2058-6', title: 'Prophet Muhammad (PBUH) - Madinah period and achievements', resources: [] },
      { id: 'is2058-7', title: 'Biographies of other Prophets and Messengers', resources: [] },
      { id: 'is2058-8', title: 'The First four Rightly Guided Caliphs', resources: [] },
      { id: 'is2058-9', title: 'The Five Pillars of Islam', resources: [] },
      { id: 'is2058-10', title: 'Islamic beliefs and the Articles of Faith', resources: [] },
      { id: 'is2058-11', title: 'Hadith - nature, authenticity and classification', resources: [] },
      { id: 'is2058-12', title: 'Ijma, Qiyas and other sources of Islamic law', resources: [] }
    ]
  },
  {
    id: 'ps-2059',
    name: 'Pakistan Studies',
    level: 'O Level',
    description: 'Cambridge O Level Pakistan Studies (2059) - History and Geography components.',
    topics: [
      { id: 'ps2059-1', title: 'Mughal Empire (1526-1707) and governance', resources: [] },
      { id: 'ps2059-2', title: 'Decline of the Mughal Empire', resources: [] },
      { id: 'ps2059-3', title: 'British expansion and Company rule (1757-1857)', resources: [] },
      { id: 'ps2059-4', title: 'British Raj and development of India (1858-1901)', resources: [] },
      { id: 'ps2059-5', title: 'Indian nationalism and independence movement (1901-1947)', resources: [] },
      { id: 'ps2059-6', title: 'Religious reform movements in South Asia', resources: [] },
      { id: 'ps2059-7', title: 'Pakistan Movement and creation of Pakistan (1947)', resources: [] },
      { id: 'ps2059-8', title: 'Pakistan 1947-1971: Early years and challenges', resources: [] },
      { id: 'ps2059-9', title: 'Pakistan 1971 onwards: Nation building and development', resources: [] },
      { id: 'ps2059-10', title: 'Pakistan foreign policy and international relations', resources: [] },
      { id: 'ps2059-11', title: 'Physical characteristics: location, size and boundaries', resources: [] },
      { id: 'ps2059-12', title: 'Relief features: mountains, plateaus and plains', resources: [] },
      { id: 'ps2059-13', title: 'Climate zones and weather patterns', resources: [] },
      { id: 'ps2059-14', title: 'Water resources: rivers, lakes and glaciers', resources: [] },
      { id: 'ps2059-15', title: 'Agricultural regions and development', resources: [] },
      { id: 'ps2059-16', title: 'Minerals and energy resources of Pakistan', resources: [] }
    ]
  },
  {
    id: 'soc-2251',
    name: 'Sociology',
    level: 'O Level',
    description: 'Cambridge O Level Sociology (2251).',
    topics: [
      { id: 'soc2251-1', title: 'Sociology: Definitions and perspectives', resources: [] },
      { id: 'soc2251-2', title: 'Sociological theories and methods', resources: [] },
      { id: 'soc2251-3', title: 'Culture and socialization', resources: [] },
      { id: 'soc2251-4', title: 'Identity and social roles', resources: [] },
      { id: 'soc2251-5', title: 'Social inequality and stratification', resources: [] },
      { id: 'soc2251-6', title: 'Gender and inequality', resources: [] },
      { id: 'soc2251-7', title: 'Family structures and relationships', resources: [] },
      { id: 'soc2251-8', title: 'Socialization within the family', resources: [] },
      { id: 'soc2251-9', title: 'Education system and socialization', resources: [] },
      { id: 'soc2251-10', title: 'Educational inequality and achievement', resources: [] },
      { id: 'soc2251-11', title: 'Crime and deviance', resources: [] },
      { id: 'soc2251-12', title: 'Social control and the law', resources: [] },
      { id: 'soc2251-13', title: 'Media and society', resources: [] },
      { id: 'soc2251-14', title: 'Media representation and audiences', resources: [] }
    ]
  },
  {
    id: 'eng-lit-1119',
    name: 'English Literature',
    level: 'O Level',
    description: 'Cambridge O Level English Literature (1119) - Critical analysis of poetry, prose and drama.',
    topics: [
      { id: 'englit1119-1', title: 'Drama: Context and key themes', resources: [] },
      { id: 'englit1119-2', title: 'Drama: Characterization and key scenes', resources: [] },
      { id: 'englit1119-3', title: 'Drama: Language and dramatic techniques', resources: [] },
      { id: 'englit1119-4', title: 'Poetry: Anthology poems and themes', resources: [] },
      { id: 'englit1119-5', title: 'Poetry: Poetic techniques and devices', resources: [] },
      { id: 'englit1119-6', title: 'Poetry: Unseen poetry analysis', resources: [] },
      { id: 'englit1119-7', title: 'Prose: Set novels and contexts', resources: [] },
      { id: 'englit1119-8', title: 'Prose: Characterization and themes', resources: [] },
      { id: 'englit1119-9', title: 'Prose: Narrative perspective and style', resources: [] },
      { id: 'englit1119-10', title: 'Unseen prose passages: analysis and comparison', resources: [] },
      { id: 'englit1119-11', title: 'Literary terminology and critical concepts', resources: [] },
      { id: 'englit1119-12', title: 'Writing analytical essays and comparisons', resources: [] }
    ]
  },
  {
    id: 'hist-2158',
    name: 'History',
    level: 'O Level',
    description: 'Cambridge O Level History (2158) - World history and contextual analysis.',
    topics: [
      { id: 'hist2158-1', title: 'Medieval Realms: Western Europe c.1300-1400', resources: [] },
      { id: 'hist2158-2', title: 'Medieval Realms: England and France c.1400-1550', resources: [] },
      { id: 'hist2158-3', title: 'Early Modern Empires: Spain c.1490-1600', resources: [] },
      { id: 'hist2158-4', title: 'Early Modern Empires: Ottomans c.1500-1700', resources: [] },
      { id: 'hist2158-5', title: 'Ideas, Authority and Religion: Reformation', resources: [] },
      { id: 'hist2158-6', title: 'Ideas, Authority and Religion: Religious conflict 1517-1661', resources: [] },
      { id: 'hist2158-7', title: 'European Social and Economic Change c.1650-1750', resources: [] },
      { id: 'hist2158-8', title: 'European Social and Economic Change c.1750-1900', resources: [] },
      { id: 'hist2158-9', title: 'Revolutionary movements 1789-1900', resources: [] },
      { id: 'hist2158-10', title: 'Nationalism and national unification c.1850-1920', resources: [] },
      { id: 'hist2158-11', title: 'Early modern warfare and alliances', resources: [] },
      { id: 'hist2158-12', title: 'Nineteenth century imperialism and conflicts', resources: [] },
      { id: 'hist2158-13', title: 'World War I and consequences', resources: [] },
      { id: 'hist2158-14', title: 'Cold War era diplomacy and conflicts', resources: [] }
    ]
  },
  {
    id: 'geog-2217',
    name: 'Geography',
    level: 'O Level',
    description: 'Cambridge O Level Geography (2217) - Physical and human geography with fieldwork.',
    topics: [
      { id: 'geog2217-1', title: 'Plate tectonics and earthquakes', resources: [] },
      { id: 'geog2217-2', title: 'Volcanic activity and hazards', resources: [] },
      { id: 'geog2217-3', title: 'Weathering, erosion and landforms', resources: [] },
      { id: 'geog2217-4', title: 'The water cycle and river landscapes', resources: [] },
      { id: 'geog2217-5', title: 'Coastal processes and landforms', resources: [] },
      { id: 'geog2217-6', title: 'Weather, climate and atmospheric circulation', resources: [] },
      { id: 'geog2217-7', title: 'Climate zones and biomes', resources: [] },
      { id: 'geog2217-8', title: 'Soil formation and characteristics', resources: [] },
      { id: 'geog2217-9', title: 'Ecosystems and biodiversity', resources: [] },
      { id: 'geog2217-10', title: 'Population growth and migration', resources: [] },
      { id: 'geog2217-11', title: 'Settlement patterns and urbanization', resources: [] },
      { id: 'geog2217-12', title: 'Economic activities and development', resources: [] },
      { id: 'geog2217-13', title: 'Sustainable development and resource management', resources: [] },
      { id: 'geog2217-14', title: 'Environmental issues and human impact', resources: [] },
      { id: 'geog2217-15', title: 'Geographical research and fieldwork methods', resources: [] }
    ]
  },
  {
    id: 'urdu-3248',
    name: 'Urdu Language',
    level: 'O Level',
    description: 'Cambridge O Level Urdu Language (3248) - Reading, writing and speaking skills.',
    topics: [
      { id: 'urdu3248-1', title: 'Listening comprehension and response', resources: [] },
      { id: 'urdu3248-2', title: 'Speaking and oral interaction', resources: [] },
      { id: 'urdu3248-3', title: 'Reading for information and meaning', resources: [] },
      { id: 'urdu3248-4', title: 'Specialized reading (poetry, prose)', resources: [] },
      { id: 'urdu3248-5', title: 'Directed writing (letters, reports, essays)', resources: [] },
      { id: 'urdu3248-6', title: 'Composition and creative writing', resources: [] },
      { id: 'urdu3248-7', title: 'Grammar and sentence structures', resources: [] },
      { id: 'urdu3248-8', title: 'Vocabulary and word usage', resources: [] },
      { id: 'urdu3248-9', title: 'Spelling and punctuation', resources: [] },
      { id: 'urdu3248-10', title: 'Urdu culture and literature', resources: [] }
    ]
  },
  {
    id: 'add-math-4029',
    name: 'Additional Mathematics',
    level: 'O Level',
    description: 'Cambridge O Level Additional Mathematics (4029) - Extended algebra, calculus and trigonometry.',
    topics: [
      { id: 'addmath4029-1', title: 'Quadratic equations and inequalities', resources: [] },
      { id: 'addmath4029-2', title: 'Surds and logarithms', resources: [] },
      { id: 'addmath4029-3', title: 'Exponential and logarithmic functions', resources: [] },
      { id: 'addmath4029-4', title: 'Polynomials and remainder theorem', resources: [] },
      { id: 'addmath4029-5', title: 'Partial fractions and rational functions', resources: [] },
      { id: 'addmath4029-6', title: 'Trigonometric identities and equations', resources: [] },
      { id: 'addmath4029-7', title: 'Circular measure and sectors', resources: [] },
      { id: 'addmath4029-8', title: 'Trigonometric functions and graphs', resources: [] },
      { id: 'addmath4029-9', title: 'Calculus: differentiation from first principles', resources: [] },
      { id: 'addmath4029-10', title: 'Calculus: differentiation rules and applications', resources: [] },
      { id: 'addmath4029-11', title: 'Calculus: integration and area', resources: [] },
      { id: 'addmath4029-12', title: 'Series and sequences', resources: [] },
      { id: 'addmath4029-13', title: 'Arithmetic and geometric progressions', resources: [] },
      { id: 'addmath4029-14', title: 'Binomial expansion', resources: [] },
      { id: 'addmath4029-15', title: 'Vectors in two dimensions', resources: [] },
      { id: 'addmath4029-16', title: 'Matrix algebra', resources: [] }
    ]
  },
  {
    id: 'stat-4040',
    name: 'Statistics',
    level: 'O Level',
    description: 'Cambridge O Level Statistics (4040) - Data analysis, probability and distributions.',
    topics: [
      { id: 'stat4040-1', title: 'Data types and sampling methods', resources: [] },
      { id: 'stat4040-2', title: 'Data presentation (graphs, charts, tables)', resources: [] },
      { id: 'stat4040-3', title: 'Measures of central tendency (mean, median, mode)', resources: [] },
      { id: 'stat4040-4', title: 'Measures of dispersion (range, variance, standard deviation)', resources: [] },
      { id: 'stat4040-5', title: 'Probability and theoretical distributions', resources: [] },
      { id: 'stat4040-6', title: 'Binomial distribution and Poisson distribution', resources: [] },
      { id: 'stat4040-7', title: 'Normal distribution', resources: [] },
      { id: 'stat4040-8', title: 'Hypothesis testing and significance tests', resources: [] },
      { id: 'stat4040-9', title: 't-tests and chi-squared tests', resources: [] },
      { id: 'stat4040-10', title: 'Correlation and regression analysis', resources: [] },
      { id: 'stat4040-11', title: 'Time series analysis and forecasting', resources: [] },
      { id: 'stat4040-12', title: 'Confidence intervals and estimation', resources: [] }
    ]
  },
  {
    id: 'art-6090',
    name: 'Art & Design',
    level: 'O Level',
    description: 'Cambridge O Level Art & Design (6090) - Visual communication and practical artistic skills.',
    topics: [
      { id: 'art6090-1', title: 'Observational and analytical drawing', resources: [] },
      { id: 'art6090-2', title: 'Color theory and composition', resources: [] },
      { id: 'art6090-3', title: 'Art historical context and analysis', resources: [] },
      { id: 'art6090-4', title: 'Design principles and visual problem solving', resources: [] },
      { id: 'art6090-5', title: 'Visual research and experimentation', resources: [] },
      { id: 'art6090-6', title: 'Drawing for investigation and development', resources: [] },
      { id: 'art6090-7', title: 'Materials and processes (painting, printmaking, sculpture)', resources: [] },
      { id: 'art6090-8', title: 'Artwork production and refinement', resources: [] },
      { id: 'art6090-9', title: 'Critical appreciation and evaluation', resources: [] },
      { id: 'art6090-10', title: 'Presentation and portfolio skills', resources: [] }
    ]
  },
  {
    id: 'music-6001',
    name: 'Music',
    level: 'O Level',
    description: 'Cambridge O Level Music (6001) - Performance, composition and musical knowledge.',
    topics: [
      { id: 'music6001-1', title: 'Music literacy and notation', resources: [] },
      { id: 'music6001-2', title: 'Listening and analyzing music', resources: [] },
      { id: 'music6001-3', title: 'Musical elements and harmony', resources: [] },
      { id: 'music6001-4', title: 'Musical forms and structures', resources: [] },
      { id: 'music6001-5', title: 'Composition techniques and songwriting', resources: [] },
      { id: 'music6001-6', title: 'Orchestration and instrumentation', resources: [] },
      { id: 'music6001-7', title: 'Performance skills and techniques', resources: [] },
      { id: 'music6001-8', title: 'Music technology and recording', resources: [] },
      { id: 'music6001-9', title: 'Musical genres and styles', resources: [] },
      { id: 'music6001-10', title: 'Music history and cultural contexts', resources: [] }
    ]
  },
  {
    id: 'pe-7044',
    name: 'Physical Education',
    level: 'O Level',
    description: 'Cambridge O Level Physical Education (7044) - Anatomy, physiology and sports science.',
    topics: [
      { id: 'pe7044-1', title: 'Structure of the human body and bones', resources: [] },
      { id: 'pe7044-2', title: 'Muscles and the muscular system', resources: [] },
      { id: 'pe7044-3', title: 'The cardiovascular system', resources: [] },
      { id: 'pe7044-4', title: 'The respiratory system', resources: [] },
      { id: 'pe7044-5', title: 'Biomechanics and movement analysis', resources: [] },
      { id: 'pe7044-6', title: 'Energy systems and ATP production', resources: [] },
      { id: 'pe7044-7', title: 'Fitness components and testing', resources: [] },
      { id: 'pe7044-8', title: 'Training methods and programs', resources: [] },
      { id: 'pe7044-9', title: 'Sports psychology and motivation', resources: [] },
      { id: 'pe7044-10', title: 'Nutrition and supplementation in sport', resources: [] },
      { id: 'pe7044-11', title: 'Injury prevention and treatment', resources: [] },
      { id: 'pe7044-12', title: 'Sport sociology and culture', resources: [] }
    ]
  },
  {
    id: 'law-7084',
    name: 'Law',
    level: 'O Level',
    description: 'Cambridge O Level Law (7084) - Legal systems, rights and justice.',
    topics: [
      { id: 'law7084-1', title: 'Nature of law and sources of law', resources: [] },
      { id: 'law7084-2', title: 'Courts, judges and legal procedures', resources: [] },
      { id: 'law7084-3', title: 'Lawyers and the legal profession', resources: [] },
      { id: 'law7084-4', title: 'Constitutional law and government', resources: [] },
      { id: 'law7084-5', title: 'Human rights and fundamental freedoms', resources: [] },
      { id: 'law7084-6', title: 'Introduction to contract law', resources: [] },
      { id: 'law7084-7', title: 'Formation of contracts and terms', resources: [] },
      { id: 'law7084-8', title: 'Breach of contract and remedies', resources: [] },
      { id: 'law7084-9', title: 'Introduction to tort law', resources: [] },
      { id: 'law7084-10', title: 'Negligence and liability', resources: [] },
      { id: 'law7084-11', title: 'Criminal law basics', resources: [] },
      { id: 'law7084-12', title: 'Criminal procedure and punishment', resources: [] }
    ]
  },
  {
    id: 'envmgmt-5014',
    name: 'Environmental Management',
    level: 'O Level',
    description: 'Cambridge O Level Environmental Management (5014) - Ecosystems and sustainability.',
    topics: [
      { id: 'envmgmt5014-1', title: 'Introduction to environmental management', resources: [] },
      { id: 'envmgmt5014-2', title: 'Energy flows in ecosystems', resources: [] },
      { id: 'envmgmt5014-3', title: 'Nutrient cycles and biogeochemical cycles', resources: [] },
      { id: 'envmgmt5014-4', title: 'Biodiversity and ecosystems', resources: [] },
      { id: 'envmgmt5014-5', title: 'Conservation and protected areas', resources: [] },
      { id: 'envmgmt5014-6', title: 'Renewable resources management', resources: [] },
      { id: 'envmgmt5014-7', title: 'Non-renewable resources and depletion', resources: [] },
      { id: 'envmgmt5014-8', title: 'Pollution types and impacts', resources: [] },
      { id: 'envmgmt5014-9', title: 'Pollution control and remediation', resources: [] },
      { id: 'envmgmt5014-10', title: 'Global environmental issues', resources: [] },
      { id: 'envmgmt5014-11', title: 'Sustainable development solutions', resources: [] }
    ]
  },
  {
    id: 'food-6065',
    name: 'Food & Nutrition',
    level: 'O Level',
    description: 'Cambridge O Level Food & Nutrition (6065) - Nutrition science and food preparation.',
    topics: [
      { id: 'food6065-1', title: 'Nutrients and their functions', resources: [] },
      { id: 'food6065-2', title: 'Dietary guidelines and recommended intakes', resources: [] },
      { id: 'food6065-3', title: 'Nutrition for different age groups', resources: [] },
      { id: 'food6065-4', title: 'Food safety and hygiene', resources: [] },
      { id: 'food6065-5', title: 'Food preservation and storage', resources: [] },
      { id: 'food6065-6', title: 'Food science and cooking methods', resources: [] },
      { id: 'food6065-7', title: 'Nutrition and health conditions', resources: [] },
      { id: 'food6065-8', title: 'Recipe development and meal planning', resources: [] },
      { id: 'food6065-9', title: 'Food labeling and consumer information', resources: [] },
      { id: 'food6065-10', title: 'Sustainability and food supply', resources: [] }
    ]
  },
  {
    id: 'marine-5096',
    name: 'Marine Science',
    level: 'O Level',
    description: 'Cambridge O Level Marine Science (5096) - Ocean ecosystems and marine resources.',
    topics: [
      { id: 'marine5096-1', title: 'Ocean characteristics and properties', resources: [] },
      { id: 'marine5096-2', title: 'Waves, tides and ocean currents', resources: [] },
      { id: 'marine5096-3', title: 'Marine habitats and ecosystems', resources: [] },
      { id: 'marine5096-4', title: 'Marine organisms and adaptations', resources: [] },
      { id: 'marine5096-5', title: 'Marine food webs and energy flow', resources: [] },
      { id: 'marine5096-6', title: 'Coastal zones and estuaries', resources: [] },
      { id: 'marine5096-7', title: 'Coral reefs and biodiversity hotspots', resources: [] },
      { id: 'marine5096-8', title: 'Marine resource management', resources: [] },
      { id: 'marine5096-9', title: 'Marine pollution and conservation', resources: [] },
      { id: 'marine5096-10', title: 'Ocean acidification and climate change', resources: [] }
    ]
  },
  {
    id: 'thinking-4290',
    name: 'Thinking Skills',
    level: 'O Level',
    description: 'Cambridge O Level Thinking Skills (4290) - Critical and creative thinking.',
    topics: [
      { id: 'thinking4290-1', title: 'Understanding arguments and claims', resources: [] },
      { id: 'thinking4290-2', title: 'Analyzing evidence and reasoning', resources: [] },
      { id: 'thinking4290-3', title: 'Identifying bias and assumptions', resources: [] },
      { id: 'thinking4290-4', title: 'Evaluating sources and credibility', resources: [] },
      { id: 'thinking4290-5', title: 'Identifying logical fallacies', resources: [] },
      { id: 'thinking4290-6', title: 'Problem solving techniques', resources: [] },
      { id: 'thinking4290-7', title: 'Creative thinking and brainstorming', resources: [] },
      { id: 'thinking4290-8', title: 'Decision making frameworks', resources: [] },
      { id: 'thinking4290-9', title: 'Interpreting graphics and data', resources: [] },
      { id: 'thinking4290-10', title: 'Written and verbal reasoning', resources: [] }
    ]
  },
  {
    id: 'german-3155',
    name: 'German Language',
    level: 'O Level',
    description: 'Cambridge O Level German Language (3155) - Communication in German.',
    topics: [
      { id: 'german3155-1', title: 'Listening comprehension and understanding', resources: [] },
      { id: 'german3155-2', title: 'Speaking and oral interaction', resources: [] },
      { id: 'german3155-3', title: 'Reading and comprehension skills', resources: [] },
      { id: 'german3155-4', title: 'Specialized reading (texts, articles, literature)', resources: [] },
      { id: 'german3155-5', title: 'Writing skills and directed writing', resources: [] },
      { id: 'german3155-6', title: 'German grammar and structures', resources: [] },
      { id: 'german3155-7', title: 'Vocabulary and expressions', resources: [] },
      { id: 'german3155-8', title: 'German culture and lifestyle', resources: [] },
      { id: 'german3155-9', title: 'German literature and media', resources: [] },
      { id: 'german3155-10', title: 'Composition and creative writing', resources: [] }
    ]
  },
  {
    id: 'french-3015',
    name: 'French Language',
    level: 'O Level',
    description: 'Cambridge O Level French Language (3015) - Communication in French.',
    topics: [
      { id: 'french3015-1', title: 'Listening comprehension and understanding', resources: [] },
      { id: 'french3015-2', title: 'Speaking and oral interaction', resources: [] },
      { id: 'french3015-3', title: 'Reading and comprehension skills', resources: [] },
      { id: 'french3015-4', title: 'Specialized reading (texts, articles, literature)', resources: [] },
      { id: 'french3015-5', title: 'Writing skills and directed writing', resources: [] },
      { id: 'french3015-6', title: 'French grammar and structures', resources: [] },
      { id: 'french3015-7', title: 'Vocabulary and expressions', resources: [] },
      { id: 'french3015-8', title: 'French culture and lifestyle', resources: [] },
      { id: 'french3015-9', title: 'French literature and media', resources: [] },
      { id: 'french3015-10', title: 'Composition and creative writing', resources: [] }
    ]
  },
  {
    id: 'spanish-3185',
    name: 'Spanish Language',
    level: 'O Level',
    description: 'Cambridge O Level Spanish Language (3185) - Communication in Spanish.',
    topics: [
      { id: 'spanish3185-1', title: 'Listening comprehension and understanding', resources: [] },
      { id: 'spanish3185-2', title: 'Speaking and oral interaction', resources: [] },
      { id: 'spanish3185-3', title: 'Reading and comprehension skills', resources: [] },
      { id: 'spanish3185-4', title: 'Specialized reading (texts, articles, literature)', resources: [] },
      { id: 'spanish3185-5', title: 'Writing skills and directed writing', resources: [] },
      { id: 'spanish3185-6', title: 'Spanish grammar and structures', resources: [] },
      { id: 'spanish3185-7', title: 'Vocabulary and expressions', resources: [] },
      { id: 'spanish3185-8', title: 'Hispanic culture and lifestyle', resources: [] },
      { id: 'spanish3185-9', title: 'Spanish literature and media', resources: [] },
      { id: 'spanish3185-10', title: 'Composition and creative writing', resources: [] }
    ]
  },
  {
    id: 'arabic-3180',
    name: 'Arabic Language',
    level: 'O Level',
    description: 'Cambridge O Level Arabic Language (3180) - Communication in Arabic.',
    topics: [
      { id: 'arabic3180-1', title: 'Listening comprehension and understanding', resources: [] },
      { id: 'arabic3180-2', title: 'Speaking and oral interaction', resources: [] },
      { id: 'arabic3180-3', title: 'Reading and comprehension skills', resources: [] },
      { id: 'arabic3180-4', title: 'Specialized reading (texts, articles, literature)', resources: [] },
      { id: 'arabic3180-5', title: 'Writing skills and directed writing', resources: [] },
      { id: 'arabic3180-6', title: 'Arabic grammar and structures', resources: [] },
      { id: 'arabic3180-7', title: 'Vocabulary and expressions', resources: [] },
      { id: 'arabic3180-8', title: 'Arab culture and lifestyle', resources: [] },
      { id: 'arabic3180-9', title: 'Arabic literature and media', resources: [] },
      { id: 'arabic3180-10', title: 'Composition and creative writing', resources: [] }
    ]
  },
  {
    id: 'chinese-3001',
    name: 'Chinese Language',
    level: 'O Level',
    description: 'Cambridge O Level Chinese Language (3001) - Communication in Mandarin Chinese.',
    topics: [
      { id: 'chinese3001-1', title: 'Listening comprehension and understanding', resources: [] },
      { id: 'chinese3001-2', title: 'Speaking and oral interaction', resources: [] },
      { id: 'chinese3001-3', title: 'Reading and comprehension skills', resources: [] },
      { id: 'chinese3001-4', title: 'Specialized reading (texts, articles, literature)', resources: [] },
      { id: 'chinese3001-5', title: 'Writing skills and directed writing', resources: [] },
      { id: 'chinese3001-6', title: 'Chinese characters (Hanzi) and strokes', resources: [] },
      { id: 'chinese3001-7', title: 'Pinyin and romanization', resources: [] },
      { id: 'chinese3001-8', title: 'Chinese culture and civilization', resources: [] },
      { id: 'chinese3001-9', title: 'Chinese literature and media', resources: [] },
      { id: 'chinese3001-10', title: 'Composition and creative writing', resources: [] }
    ]
  },
  {
    id: 'agri-5038',
    name: 'Agriculture',
    level: 'O Level',
    description: 'Cambridge O Level Agriculture (5038) - Farming science and land management.',
    topics: [
      { id: 'agri5038-1', title: 'Climate and meteorology', resources: [] },
      { id: 'agri5038-2', title: 'Soil formation and properties', resources: [] },
      { id: 'agri5038-3', title: 'Plant growth and physiology', resources: [] },
      { id: 'agri5038-4', title: 'Crop production and cultivation', resources: [] },
      { id: 'agri5038-5', title: 'Crop protection and pest management', resources: [] },
      { id: 'agri5038-6', title: 'Animal husbandry and livestock', resources: [] },
      { id: 'agri5038-7', title: 'Farm machinery and equipment', resources: [] },
      { id: 'agri5038-8', title: 'Farm economics and business management', resources: [] },
      { id: 'agri5038-9', title: 'Sustainable and organic farming', resources: [] },
      { id: 'agri5038-10', title: 'Agricultural practices and innovations', resources: [] }
    ]
  },
  {
    id: 'envsc-5129',
    name: 'Environmental Science',
    level: 'O Level',
    description: 'Cambridge O Level Environmental Science (5129) - Integrated environmental study.',
    topics: [
      { id: 'envsc5129-1', title: 'Living organisms and adaptation', resources: [] },
      { id: 'envsc5129-2', title: 'Ecosystems and habitats', resources: [] },
      { id: 'envsc5129-3', title: 'Energy transfer in ecosystems', resources: [] },
      { id: 'envsc5129-4', title: 'Nutrient cycles', resources: [] },
      { id: 'envsc5129-5', title: 'Populations and communities', resources: [] },
      { id: 'envsc5129-6', title: 'Human impact on environments', resources: [] },
      { id: 'envsc5129-7', title: 'Pollution and waste management', resources: [] },
      { id: 'envsc5129-8', title: 'Natural resources and sustainability', resources: [] },
      { id: 'envsc5129-9', title: 'Conservation strategies', resources: [] },
      { id: 'envsc5129-10', title: 'Environmental monitoring and fieldwork', resources: [] }
    ]
  },
  {
    id: 'travel-7096',
    name: 'Travel & Tourism',
    level: 'O Level',
    description: 'Cambridge O Level Travel & Tourism (7096) - Tourism industry and destinations.',
    topics: [
      { id: 'travel7096-1', title: 'Nature of tourism and types of tourists', resources: [] },
      { id: 'travel7096-2', title: 'Tourism organizations and roles', resources: [] },
      { id: 'travel7096-3', title: 'Tourism destinations and attractions', resources: [] },
      { id: 'travel7096-4', title: 'Accommodation and hospitality services', resources: [] },
      { id: 'travel7096-5', title: 'Transport and access to destinations', resources: [] },
      { id: 'travel7096-6', title: 'Customer service in tourism', resources: [] },
      { id: 'travel7096-7', title: 'Tourism marketing and promotion', resources: [] },
      { id: 'travel7096-8', title: 'Financial aspects of tourism', resources: [] },
      { id: 'travel7096-9', title: 'Sustainable and responsible tourism', resources: [] },
      { id: 'travel7096-10', title: 'Tourism impacts on communities and environment', resources: [] }
    ]
  },
  {
    id: 'pharma-5104',
    name: 'Pharmaceutical Science',
    level: 'O Level',
    description: 'Cambridge O Level Pharmaceutical Science (5104) - Drug chemistry and formulation.',
    topics: [
      { id: 'pharma5104-1', title: 'Introduction to pharmaceutical science and careers', resources: [] },
      { id: 'pharma5104-2', title: 'Chemistry of drugs and natural products', resources: [] },
      { id: 'pharma5104-3', title: 'Drug action and pharmacology', resources: [] },
      { id: 'pharma5104-4', title: 'Drug formulations and dosage forms', resources: [] },
      { id: 'pharma5104-5', title: 'Drug delivery systems and bioavailability', resources: [] },
      { id: 'pharma5104-6', title: 'Formulation development and testing', resources: [] },
      { id: 'pharma5104-7', title: 'Quality control and assurance processes', resources: [] },
      { id: 'pharma5104-8', title: 'Pharmacokinetics and drug metabolism', resources: [] },
      { id: 'pharma5104-9', title: 'Drug interactions and adverse effects', resources: [] },
      { id: 'pharma5104-10', title: 'Pharmaceutical regulations and business', resources: [] },
      { id: 'pharma5104-11', title: 'Contemporary pharmaceutical issues and innovations', resources: [] }
    ]
  },

  // --- CAMBRIDGE IGCSE (FULL SYLLABUS INDEX) ---
  {
    id: 'igcse-math-0580',
    name: 'Mathematics',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Mathematics (0580) - Core curriculum including number, algebra, geometry and statistics.',
    topics: [
      { id: 'igcse-m0580-1', title: 'Number and calculation', resources: [] },
      { id: 'igcse-m0580-2', title: 'Percentages, profit, loss and discount', resources: [] },
      { id: 'igcse-m0580-3', title: 'Factorization', resources: [] },
      { id: 'igcse-m0580-4', title: 'Algebraic fractions and formulae', resources: [] },
      { id: 'igcse-m0580-5', title: 'Exponents and radicals', resources: [] },
      { id: 'igcse-m0580-6', title: 'Equations and inequalities', resources: [] },
      { id: 'igcse-m0580-7', title: 'Sequences and series', resources: [] },
      { id: 'igcse-m0580-8', title: 'Relations and functions', resources: [] },
      { id: 'igcse-m0580-9', title: 'Trigonometry and bearings', resources: [] },
      { id: 'igcse-m0580-10', title: 'Geometry and constructions', resources: [] },
      { id: 'igcse-m0580-11', title: 'Vectors and transformations', resources: [] },
      { id: 'igcse-m0580-12', title: 'Mensuration - areas and volumes', resources: [] },
      { id: 'igcse-m0580-13', title: 'Coordinate geometry and graphs', resources: [] },
      { id: 'igcse-m0580-14', title: 'Probability', resources: [] },
      { id: 'igcse-m0580-15', title: 'Statistics and data analysis', resources: [] },
      { id: 'igcse-m0580-16', title: 'Financial mathematics', resources: [] }
    ]
  },
  {
    id: 'igcse-phys-0625',
    name: 'Physics',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Physics (0625) - Forces, energy, waves and particle physics.',
    topics: [
      { id: 'igcse-p0625-1', title: 'General physics and measurement', resources: [] },
      { id: 'igcse-p0625-2', title: 'Motion, forces and energy', resources: [] },
      { id: 'igcse-p0625-3', title: 'Kinematics and dynamics', resources: [] },
      { id: 'igcse-p0625-4', title: 'Work, energy and power', resources: [] },
      { id: 'igcse-p0625-5', title: 'Pressure', resources: [] },
      { id: 'igcse-p0625-6', title: 'Thermal effects and properties of matter', resources: [] },
      { id: 'igcse-p0625-7', title: 'Waves', resources: [] },
      { id: 'igcse-p0625-8', title: 'Sound', resources: [] },
      { id: 'igcse-p0625-9', title: 'Light', resources: [] },
      { id: 'igcse-p0625-10', title: 'Magnetism and electromagnetism', resources: [] },
      { id: 'igcse-p0625-11', title: 'Electricity and circuits', resources: [] },
      { id: 'igcse-p0625-12', title: 'Modern physics and nuclear physics', resources: [] },
      { id: 'igcse-p0625-13', title: 'Atom structure and atomic reactions', resources: [] },
      { id: 'igcse-p0625-14', title: 'Fundamental particles and forces', resources: [] }
    ]
  },
  {
    id: 'igcse-chem-0620',
    name: 'Chemistry',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Chemistry (0620) - Atomic structure, bonding, reactions and energetics.',
    topics: [
      { id: 'igcse-c0620-1', title: 'Particulate nature of matter', resources: [] },
      { id: 'igcse-c0620-2', title: 'Atomic structure and the periodic table', resources: [] },
      { id: 'igcse-c0620-3', title: 'Bonding and structure', resources: [] },
      { id: 'igcse-c0620-4', title: 'Stoichiometry and the mole concept', resources: [] },
      { id: 'igcse-c0620-5', title: 'Electricity and chemical change', resources: [] },
      { id: 'igcse-c0620-6', title: 'Thermodynamics and energy changes', resources: [] },
      { id: 'igcse-c0620-7', title: 'Rates of reaction and equilibrium', resources: [] },
      { id: 'igcse-c0620-8', title: 'Group chemistry and periodicity', resources: [] },
      { id: 'igcse-c0620-9', title: 'Organic chemistry and hydrocarbons', resources: [] },
      { id: 'igcse-c0620-10', title: 'Functional group chemistry', resources: [] },
      { id: 'igcse-c0620-11', title: 'Chemical analysis and qualitative testing', resources: [] },
      { id: 'igcse-c0620-12', title: 'Quantitative analysis and calculations', resources: [] }
    ]
  },
  {
    id: 'igcse-bio-0610',
    name: 'Biology',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Biology (0610) - Cell biology, genetics, evolution and ecosystems.',
    topics: [
      { id: 'igcse-b0610-1', title: 'Cell and cell division', resources: [] },
      { id: 'igcse-b0610-2', title: 'Biological molecules and enzymes', resources: [] },
      { id: 'igcse-b0610-3', title: 'Nutrition and transport', resources: [] },
      { id: 'igcse-b0610-4', title: 'Respiration and energy transfer', resources: [] },
      { id: 'igcse-b0610-5', title: 'Excretion and osmoregulation', resources: [] },
      { id: 'igcse-b0610-6', title: 'Nervous and endocrine control', resources: [] },
      { id: 'igcse-b0610-7', title: 'Reproduction and growth', resources: [] },
      { id: 'igcse-b0610-8', title: 'Inheritance and variation', resources: [] },
      { id: 'igcse-b0610-9', title: 'Selection and evolution', resources: [] },
      { id: 'igcse-b0610-10', title: 'Ecology and ecosystems', resources: [] },
      { id: 'igcse-b0610-11', title: 'Recycling and interdependence', resources: [] },
      { id: 'igcse-b0610-12', title: 'Human influence on ecosystems', resources: [] }
    ]
  },
  {
    id: 'igcse-cs-0984',
    name: 'Computer Science',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Computer Science (0984) - Programming, networks and theory.',
    topics: [
      { id: 'igcse-cs0984-1', title: 'Information and data', resources: [] },
      { id: 'igcse-cs0984-2', title: 'Hardware and software', resources: [] },
      { id: 'igcse-cs0984-3', title: 'Networks and the internet', resources: [] },
      { id: 'igcse-cs0984-4', title: 'Cybersecurity', resources: [] },
      { id: 'igcse-cs0984-5', title: 'Programming fundamentals', resources: [] },
      { id: 'igcse-cs0984-6', title: 'Data types and structures', resources: [] },
      { id: 'igcse-cs0984-7', title: 'Algorithms and logic', resources: [] },
      { id: 'igcse-cs0984-8', title: 'Computational thinking', resources: [] },
      { id: 'igcse-cs0984-9', title: 'Program design and development', resources: [] },
      { id: 'igcse-cs0984-10', title: 'Database design and SQL', resources: [] }
    ]
  },
  {
    id: 'igcse-eng-0500',
    name: 'English Language',
    level: 'IGCSE',
    description: 'Cambridge IGCSE English Language (0500) - Reading, writing, speaking and listening.',
    topics: [
      { id: 'igcse-e0500-1', title: 'Reading skills and comprehension', resources: [] },
      { id: 'igcse-e0500-2', title: 'Vocabulary and terminology', resources: [] },
      { id: 'igcse-e0500-3', title: 'Grammar and syntax', resources: [] },
      { id: 'igcse-e0500-4', title: 'Punctuation and spelling', resources: [] },
      { id: 'igcse-e0500-5', title: 'Writing skills and composition', resources: [] },
      { id: 'igcse-e0500-6', title: 'Formal and persuasive writing', resources: [] },
      { id: 'igcse-e0500-7', title: 'Creative and narrative writing', resources: [] },
      { id: 'igcse-e0500-8', title: 'Analysis of texts and author technique', resources: [] },
      { id: 'igcse-e0500-9', title: 'Speaking and listening skills', resources: [] },
      { id: 'igcse-e0500-10', title: 'Communication and public speaking', resources: [] }
    ]
  },
  {
    id: 'igcse-englit-0486',
    name: 'English Literature',
    level: 'IGCSE',
    description: 'Cambridge IGCSE English Literature (0486) - Poetry, drama, prose and writing.',
    topics: [
      { id: 'igcse-el0486-1', title: 'Poetry analysis and interpretation', resources: [] },
      { id: 'igcse-el0486-2', title: 'Poetic devices and techniques', resources: [] },
      { id: 'igcse-el0486-3', title: 'Drama and theatrical elements', resources: [] },
      { id: 'igcse-el0486-4', title: 'Character development and conflict', resources: [] },
      { id: 'igcse-el0486-5', title: 'Prose and narrative structure', resources: [] },
      { id: 'igcse-el0486-6', title: 'Theme and symbolism', resources: [] },
      { id: 'igcse-el0486-7', title: 'Context and historical setting', resources: [] },
      { id: 'igcse-el0486-8', title: 'Writing and critical response', resources: [] },
      { id: 'igcse-el0486-9', title: 'Literary comparison and contrast', resources: [] },
      { id: 'igcse-el0486-10', title: 'Personal study and textual analysis', resources: [] }
    ]
  },
  {
    id: 'igcse-history-0977',
    name: 'History',
    level: 'IGCSE',
    description: 'Cambridge IGCSE History (0977) - Modern history from 1750s to present day.',
    topics: [
      { id: 'igcse-h0977-1', title: 'The Age of Enlightenment and Revolution', resources: [] },
      { id: 'igcse-h0977-2', title: 'Industrial Revolution and social change', resources: [] },
      { id: 'igcse-h0977-3', title: 'Peak of European power and imperialism', resources: [] },
      { id: 'igcse-h0977-4', title: 'World War I causes and consequences', resources: [] },
      { id: 'igcse-h0977-5', title: 'Search for political stability 1919-1939', resources: [] },
      { id: 'igcse-h0977-6', title: 'Depression and the rise of totalitarianism', resources: [] },
      { id: 'igcse-h0977-7', title: 'World War II causes and course', resources: [] },
      { id: 'igcse-h0977-8', title: 'The Cold War and its impact', resources: [] },
      { id: 'igcse-h0977-9', title: 'Decolonization and independence movements', resources: [] },
      { id: 'igcse-h0977-10', title: 'Modern international relations', resources: [] }
    ]
  },
  {
    id: 'igcse-geo-0460',
    name: 'Geography',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Geography (0460) - Physical and human geography.',
    topics: [
      { id: 'igcse-g0460-1', title: 'Earth in the Universe', resources: [] },
      { id: 'igcse-g0460-2', title: 'Plate tectonics and landforms', resources: [] },
      { id: 'igcse-g0460-3', title: 'Rocks, weathering and soil formation', resources: [] },
      { id: 'igcse-g0460-4', title: 'Weather, climate and ecosystems', resources: [] },
      { id: 'igcse-g0460-5', title: 'Tropical rainforests and deserts', resources: [] },
      { id: 'igcse-g0460-6', title: 'Rivers and coasts', resources: [] },
      { id: 'igcse-g0460-7', title: 'Population dynamics and migration', resources: [] },
      { id: 'igcse-g0460-8', title: 'Settlement and urbanization', resources: [] },
      { id: 'igcse-g0460-9', title: 'Economic development and resources', resources: [] },
      { id: 'igcse-g0460-10', title: 'Industry and agriculture', resources: [] },
      { id: 'igcse-g0460-11', title: 'Globalisation and trade', resources: [] },
      { id: 'igcse-g0460-12', title: 'Environmental management and sustainability', resources: [] }
    ]
  },
  {
    id: 'igcse-bus-0450',
    name: 'Business Studies',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Business Studies (0450) - Business fundamentals and management.',
    topics: [
      { id: 'igcse-b0450-1', title: 'Nature of business activity', resources: [] },
      { id: 'igcse-b0450-2', title: 'Business objectives and stakeholders', resources: [] },
      { id: 'igcse-b0450-3', title: 'Business organization and finance', resources: [] },
      { id: 'igcse-b0450-4', title: 'Human resource management', resources: [] },
      { id: 'igcse-b0450-5', title: 'Marketing and market research', resources: [] },
      { id: 'igcse-b0450-6', title: 'Product and pricing strategies', resources: [] },
      { id: 'igcse-b0450-7', title: 'Promotion and distribution', resources: [] },
      { id: 'igcse-b0450-8', title: 'Operations and production management', resources: [] },
      { id: 'igcse-b0450-9', title: 'Business growth and integration', resources: [] },
      { id: 'igcse-b0450-10', title: 'International business and trade', resources: [] },
      { id: 'igcse-b0450-11', title: 'Information technology in business', resources: [] },
      { id: 'igcse-b0450-12', title: 'Social responsibility and ethics', resources: [] }
    ]
  },
  {
    id: 'igcse-eco-0455',
    name: 'Economics',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Economics (0455) - Microeconomics and macroeconomics.',
    topics: [
      { id: 'igcse-ec0455-1', title: 'Economics fundamentals and choices', resources: [] },
      { id: 'igcse-ec0455-2', title: 'Factors of production and specialization', resources: [] },
      { id: 'igcse-ec0455-3', title: 'Demand and supply', resources: [] },
      { id: 'igcse-ec0455-4', title: 'Price elasticity of demand', resources: [] },
      { id: 'igcse-ec0455-5', title: 'Price elasticity of supply', resources: [] },
      { id: 'igcse-ec0455-6', title: 'Market equilibrium and disequilibrium', resources: [] },
      { id: 'igcse-ec0455-7', title: 'Costs and revenue', resources: [] },
      { id: 'igcse-ec0455-8', title: 'Profit and competition', resources: [] },
      { id: 'igcse-ec0455-9', title: 'Market structures', resources: [] },
      { id: 'igcse-ec0455-10', title: 'Government intervention in markets', resources: [] },
      { id: 'igcse-ec0455-11', title: 'Macroeconomics and development', resources: [] },
      { id: 'igcse-ec0455-12', title: 'Inflation and unemployment', resources: [] },
      { id: 'igcse-ec0455-13', title: 'International trade and exchange rates', resources: [] },
      { id: 'igcse-ec0455-14', title: 'Economic growth and sustainability', resources: [] }
    ]
  },
  {
    id: 'igcse-acc-0452',
    name: 'Accounting',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Accounting (0452) - Recording transactions and financial reporting.',
    topics: [
      { id: 'igcse-a0452-1', title: 'Nature and purpose of accounting', resources: [] },
      { id: 'igcse-a0452-2', title: 'Accounting equation and double entry', resources: [] },
      { id: 'igcse-a0452-3', title: 'Books of original entry', resources: [] },
      { id: 'igcse-a0452-4', title: 'The ledger and trial balance', resources: [] },
      { id: 'igcse-a0452-5', title: 'Bank reconciliation', resources: [] },
      { id: 'igcse-a0452-6', title: 'Depreciation and accruals', resources: [] },
      { id: 'igcse-a0452-7', title: 'Profit and loss accounts', resources: [] },
      { id: 'igcse-a0452-8', title: 'Balance sheets and working capital', resources: [] },
      { id: 'igcse-a0452-9', title: 'Financial statements analysis', resources: [] },
      { id: 'igcse-a0452-10', title: 'Budgeting and cash flow', resources: [] },
      { id: 'igcse-a0452-11', title: 'Partnership and company accounts', resources: [] },
      { id: 'igcse-a0452-12', title: 'Accounting standards and concepts', resources: [] }
    ]
  },
  {
    id: 'igcse-urdu-0667',
    name: 'Urdu Language',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Urdu Language (0667) - Reading, writing and communication.',
    topics: [
      { id: 'igcse-u0667-1', title: 'Listening and understanding', resources: [] },
      { id: 'igcse-u0667-2', title: 'Speaking and pronunciation', resources: [] },
      { id: 'igcse-u0667-3', title: 'Urdu script and characters', resources: [] },
      { id: 'igcse-u0667-4', title: 'Grammar and tenses', resources: [] },
      { id: 'igcse-u0667-5', title: 'Vocabulary building and usage', resources: [] },
      { id: 'igcse-u0667-6', title: 'Reading comprehension', resources: [] },
      { id: 'igcse-u0667-7', title: 'Writing and composition', resources: [] },
      { id: 'igcse-u0667-8', title: 'Formal and informal writing', resources: [] },
      { id: 'igcse-u0667-9', title: 'Urdu literature and culture', resources: [] },
      { id: 'igcse-u0667-10', title: 'Communication skills', resources: [] }
    ]
  },
  {
    id: 'igcse-isl-0493',
    name: 'Islamic Studies',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Islamic Studies (0493) - Belief, practice and ethics.',
    topics: [
      { id: 'igcse-is0493-1', title: 'Islamic beliefs and theology', resources: [] },
      { id: 'igcse-is0493-2', title: 'The Quran and Hadith', resources: [] },
      { id: 'igcse-is0493-3', title: 'Ibadah - acts of worship', resources: [] },
      { id: 'igcse-is0493-4', title: 'Islamic law and Sharia', resources: [] },
      { id: 'igcse-is0493-5', title: 'Family and relationships', resources: [] },
      { id: 'igcse-is0493-6', title: 'Islamic ethics and morality', resources: [] },
      { id: 'igcse-is0493-7', title: 'Ummah and social responsibility', resources: [] },
      { id: 'igcse-is0493-8', title: 'Islamic history and scholars', resources: [] },
      { id: 'igcse-is0493-9', title: 'Islam in the modern world', resources: [] },
      { id: 'igcse-is0493-10', title: 'Inter-faith dialogue and coexistence', resources: [] }
    ]
  },
  {
    id: 'igcse-german-0525',
    name: 'German Language',
    level: 'IGCSE',
    description: 'Cambridge IGCSE German Language (0525) - Communication and cultural awareness.',
    topics: [
      { id: 'igcse-g0525-1', title: 'Listening skills and comprehension', resources: [] },
      { id: 'igcse-g0525-2', title: 'Speaking and oral communication', resources: [] },
      { id: 'igcse-g0525-3', title: 'Pronunciation and intonation', resources: [] },
      { id: 'igcse-g0525-4', title: 'German grammar fundamentals', resources: [] },
      { id: 'igcse-g0525-5', title: 'Verb forms and tenses', resources: [] },
      { id: 'igcse-g0525-6', title: 'Sentence structure and syntax', resources: [] },
      { id: 'igcse-g0525-7', title: 'Reading comprehension and texts', resources: [] },
      { id: 'igcse-g0525-8', title: 'Written expression and composition', resources: [] },
      { id: 'igcse-g0525-9', title: 'German culture and society', resources: [] },
      { id: 'igcse-g0525-10', title: 'Advanced German communication', resources: [] }
    ]
  },
  {
    id: 'igcse-french-0520',
    name: 'French Language',
    level: 'IGCSE',
    description: 'Cambridge IGCSE French Language (0520) - Practical communication skills.',
    topics: [
      { id: 'igcse-f0520-1', title: 'Listening and understanding', resources: [] },
      { id: 'igcse-f0520-2', title: 'Speaking and conversation', resources: [] },
      { id: 'igcse-f0520-3', title: 'Pronunciation and accent', resources: [] },
      { id: 'igcse-f0520-4', title: 'French grammar basics', resources: [] },
      { id: 'igcse-f0520-5', title: 'Tenses and verb conjugation', resources: [] },
      { id: 'igcse-f0520-6', title: 'Syntax and sentence building', resources: [] },
      { id: 'igcse-f0520-7', title: 'Reading comprehension', resources: [] },
      { id: 'igcse-f0520-8', title: 'Writing and written composition', resources: [] },
      { id: 'igcse-f0520-9', title: 'French civilisation and culture', resources: [] },
      { id: 'igcse-f0520-10', title: 'Communication in context', resources: [] }
    ]
  },
  {
    id: 'igcse-spanish-0530',
    name: 'Spanish Language',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Spanish Language (0530) - Language proficiency and cultural understanding.',
    topics: [
      { id: 'igcse-s0530-1', title: 'Listening comprehension', resources: [] },
      { id: 'igcse-s0530-2', title: 'Speaking and speech production', resources: [] },
      { id: 'igcse-s0530-3', title: 'Pronunciation and phonetics', resources: [] },
      { id: 'igcse-s0530-4', title: 'Spanish grammar fundamentals', resources: [] },
      { id: 'igcse-s0530-5', title: 'Verb system and tenses', resources: [] },
      { id: 'igcse-s0530-6', title: 'Complex sentence structures', resources: [] },
      { id: 'igcse-s0530-7', title: 'Reading comprehension and materials', resources: [] },
      { id: 'igcse-s0530-8', title: 'Writing and text production', resources: [] },
      { id: 'igcse-s0530-9', title: 'Hispanic culture and traditions', resources: [] },
      { id: 'igcse-s0530-10', title: 'Sociolinguistics and communication', resources: [] }
    ]
  },
  {
    id: 'igcse-art-0400',
    name: 'Art & Design',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Art & Design (0400) - Visual communication and artistic practice.',
    topics: [
      { id: 'igcse-art0400-1', title: 'Visual language and design elements', resources: [] },
      { id: 'igcse-art0400-2', title: 'Colour theory and application', resources: [] },
      { id: 'igcse-art0400-3', title: 'Form, shape and composition', resources: [] },
      { id: 'igcse-art0400-4', title: 'Drawing techniques and media', resources: [] },
      { id: 'igcse-art0400-5', title: 'Painting and printmaking', resources: [] },
      { id: 'igcse-art0400-6', title: '3D art and sculpture', resources: [] },
      { id: 'igcse-art0400-7', title: 'Graphic design and communication', resources: [] },
      { id: 'igcse-art0400-8', title: 'Photography and digital media', resources: [] },
      { id: 'igcse-art0400-9', title: 'Art history and context', resources: [] },
      { id: 'igcse-art0400-10', title: 'Portfolio development and presentation', resources: [] }
    ]
  },
  {
    id: 'igcse-music-0500',
    name: 'Music',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Music (0500) - Performance, composition and listening.',
    topics: [
      { id: 'igcse-mus0500-1', title: 'Music theory fundamentals', resources: [] },
      { id: 'igcse-mus0500-2', title: 'Notation and reading music', resources: [] },
      { id: 'igcse-mus0500-3', title: 'Instruments and the orchestra', resources: [] },
      { id: 'igcse-mus0500-4', title: 'Harmony and chord progressions', resources: [] },
      { id: 'igcse-mus0500-5', title: 'Melody composition and development', resources: [] },
      { id: 'igcse-mus0500-6', title: 'Rhythm and time signatures', resources: [] },
      { id: 'igcse-mus0500-7', title: 'Music styles and genres', resources: [] },
      { id: 'igcse-mus0500-8', title: 'Listening and analysis', resources: [] },
      { id: 'igcse-mus0500-9', title: 'Performance techniques', resources: [] },
      { id: 'igcse-mus0500-10', title: 'Music technology and recording', resources: [] }
    ]
  },
  {
    id: 'igcse-pe-0413',
    name: 'Physical Education',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Physical Education (0413) - Sport, fitness and training.',
    topics: [
      { id: 'igcse-pe0413-1', title: 'Sport and society', resources: [] },
      { id: 'igcse-pe0413-2', title: 'Anatomy and physiology', resources: [] },
      { id: 'igcse-pe0413-3', title: 'Fitness components and testing', resources: [] },
      { id: 'igcse-pe0413-4', title: 'Training principles and methods', resources: [] },
      { id: 'igcse-pe0413-5', title: 'Sport psychology and emotions', resources: [] },
      { id: 'igcse-pe0413-6', title: 'Skill development and techniques', resources: [] },
      { id: 'igcse-pe0413-7', title: 'Movement analysis and mechanics', resources: [] },
      { id: 'igcse-pe0413-8', title: 'Nutrition and performance', resources: [] },
      { id: 'igcse-pe0413-9', title: 'Ethics and fair play in sport', resources: [] },
      { id: 'igcse-pe0413-10', title: 'Sports organization and management', resources: [] }
    ]
  },
  {
    id: 'igcse-envs-0680',
    name: 'Environmental Management',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Environmental Management (0680) - Resources and sustainability.',
    topics: [
      { id: 'igcse-em0680-1', title: 'Ecosystems and biomes', resources: [] },
      { id: 'igcse-em0680-2', title: 'Energy resources and flows', resources: [] },
      { id: 'igcse-em0680-3', title: 'Sustainable management of resources', resources: [] },
      { id: 'igcse-em0680-4', title: 'Freshwater systems and management', resources: [] },
      { id: 'igcse-em0680-5', title: 'Soil conservation and agriculture', resources: [] },
      { id: 'igcse-em0680-6', title: 'Forestry and woodland management', resources: [] },
      { id: 'igcse-em0680-7', title: 'Wildlife conservation and protection', resources: [] },
      { id: 'igcse-em0680-8', title: 'Natural hazards and risks', resources: [] },
      { id: 'igcse-em0680-9', title: 'Pollution and environmental damage', resources: [] },
      { id: 'igcse-em0680-10', title: 'Population and settlement planning', resources: [] }
    ]
  },
  {
    id: 'igcse-chinese-0523',
    name: 'Chinese Language',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Chinese Language (0523) - Communication and cultural learning.',
    topics: [
      { id: 'igcse-ch0523-1', title: 'Listening and comprehension', resources: [] },
      { id: 'igcse-ch0523-2', title: 'Speaking and oral interaction', resources: [] },
      { id: 'igcse-ch0523-3', title: 'Pinyin and romanization', resources: [] },
      { id: 'igcse-ch0523-4', title: 'Chinese characters and writing', resources: [] },
      { id: 'igcse-ch0523-5', title: 'Grammar and sentence patterns', resources: [] },
      { id: 'igcse-ch0523-6', title: 'Tones and pronunciation', resources: [] },
      { id: 'igcse-ch0523-7', title: 'Reading comprehension', resources: [] },
      { id: 'igcse-ch0523-8', title: 'Written expression', resources: [] },
      { id: 'igcse-ch0523-9', title: 'Chinese culture and traditions', resources: [] },
      { id: 'igcse-ch0523-10', title: 'Contemporary China and society', resources: [] }
    ]
  },
  {
    id: 'igcse-arabic-0544',
    name: 'Arabic Language',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Arabic Language (0544) - Language skills and cultural awareness.',
    topics: [
      { id: 'igcse-ar0544-1', title: 'Listening skills and understanding', resources: [] },
      { id: 'igcse-ar0544-2', title: 'Speaking and conversation', resources: [] },
      { id: 'igcse-ar0544-3', title: 'Arabic script and writing systems', resources: [] },
      { id: 'igcse-ar0544-4', title: 'Grammar and sentence structure', resources: [] },
      { id: 'igcse-ar0544-5', title: 'Verb conjugation and tenses', resources: [] },
      { id: 'igcse-ar0544-6', title: 'Vocabulary and communication', resources: [] },
      { id: 'igcse-ar0544-7', title: 'Reading comprehension', resources: [] },
      { id: 'igcse-ar0544-8', title: 'Written composition and essays', resources: [] },
      { id: 'igcse-ar0544-9', title: 'Arab culture and civilisation', resources: [] },
      { id: 'igcse-ar0544-10', title: 'Modern Arab world and issues', resources: [] }
    ]
  },
  {
    id: 'igcse-firstlang-0109',
    name: 'First Language English',
    level: 'IGCSE',
    description: 'Cambridge IGCSE First Language English (0109) - Extended reading and writing.',
    topics: [
      { id: 'igcse-fle0109-1', title: 'Reading and comprehension skills', resources: [] },
      { id: 'igcse-fle0109-2', title: 'Textual analysis and evaluation', resources: [] },
      { id: 'igcse-fle0109-3', title: 'Writing for different audiences', resources: [] },
      { id: 'igcse-fle0109-4', title: 'Creative and imaginative writing', resources: [] },
      { id: 'igcse-fle0109-5', title: 'Formal and discursive writing', resources: [] },
      { id: 'igcse-fle0109-6', title: 'Descriptive and narrative techniques', resources: [] },
      { id: 'igcse-fle0109-7', title: 'Argument and persuasive writing', resources: [] },
      { id: 'igcse-fle0109-8', title: 'Writer intent and voice', resources: [] },
      { id: 'igcse-fle0109-9', title: 'Paper 2 and extended writing', resources: [] },
      { id: 'igcse-fle0109-10', title: 'Grammar, spelling and punctuation', resources: [] }
    ]
  },
  {
    id: 'igcse-thinsk-0983',
    name: 'Thinking Skills',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Thinking Skills (0983) - Logic, reasoning and problem-solving.',
    topics: [
      { id: 'igcse-ts0983-1', title: 'Problem solving and techniques', resources: [] },
      { id: 'igcse-ts0983-2', title: 'Critical thinking and reasoning', resources: [] },
      { id: 'igcse-ts0983-3', title: 'Logic and argument analysis', resources: [] },
      { id: 'igcse-ts0983-4', title: 'Deductive reasoning', resources: [] },
      { id: 'igcse-ts0983-5', title: 'Inductive reasoning and inference', resources: [] },
      { id: 'igcse-ts0983-6', title: 'Creative thinking and innovation', resources: [] },
      { id: 'igcse-ts0983-7', title: 'Decision making and analysis', resources: [] },
      { id: 'igcse-ts0983-8', title: 'Data interpretation and statistics', resources: [] },
      { id: 'igcse-ts0983-9', title: 'Fallacies and bias detection', resources: [] },
      { id: 'igcse-ts0983-10', title: 'Research and evidence evaluation', resources: [] }
    ]
  },
  {
    id: 'igcse-ict-0417',
    name: 'Information and Communication Technology',
    level: 'IGCSE',
    description: 'Cambridge IGCSE ICT (0417) - Digital literacy and technology skills.',
    topics: [
      { id: 'igcse-ict0417-1', title: 'ICT fundamentals and systems', resources: [] },
      { id: 'igcse-ict0417-2', title: 'Internet and online services', resources: [] },
      { id: 'igcse-ict0417-3', title: 'Web design and development', resources: [] },
      { id: 'igcse-ict0417-4', title: 'Database creation and management', resources: [] },
      { id: 'igcse-ict0417-5', title: 'Spreadsheets and data analysis', resources: [] },
      { id: 'igcse-ict0417-6', title: 'Presentations and multimedia', resources: [] },
      { id: 'igcse-ict0417-7', title: 'Document production and publishing', resources: [] },
      { id: 'igcse-ict0417-8', title: 'Cyber security and data protection', resources: [] },
      { id: 'igcse-ict0417-9', title: 'Project management and planning', resources: [] },
      { id: 'igcse-ict0417-10', title: 'E-commerce and digital communication', resources: [] }
    ]
  },
  {
    id: 'igcse-socstud-0987',
    name: 'Social Studies',
    level: 'IGCSE',
    description: 'Cambridge IGCSE Social Studies (0987) - Society, development and citizenship.',
    topics: [
      { id: 'igcse-ss0987-1', title: 'Identity and culture', resources: [] },
      { id: 'igcse-ss0987-2', title: 'Social groups and society', resources: [] },
      { id: 'igcse-ss0987-3', title: 'Beliefs and ideologies', resources: [] },
      { id: 'igcse-ss0987-4', title: 'Political systems and governance', resources: [] },
      { id: 'igcse-ss0987-5', title: 'Citizens and rights', resources: [] },
      { id: 'igcse-ss0987-6', title: 'Economic systems and work', resources: [] },
      { id: 'igcse-ss0987-7', title: 'Development and inequality', resources: [] },
      { id: 'igcse-ss0987-8', title: 'Global cooperation and conflict', resources: [] },
      { id: 'igcse-ss0987-9', title: 'Environmental and social change', resources: [] },
      { id: 'igcse-ss0987-10', title: 'Research and social investigation', resources: [] }
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
