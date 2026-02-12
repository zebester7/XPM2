
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

  // --- CAMBRIDGE AS LEVEL (FULL SYLLABUS INDEX) ---
  {
    id: 'as-math-9709',
    name: 'Mathematics',
    level: 'AS Level',
    description: 'Cambridge International AS Level Mathematics (9709) - Pure Mathematics, Probability & Statistics.',
    topics: [
      { id: 'as-m9709-1', title: 'Quadratic equations and functions', resources: [] },
      { id: 'as-m9709-2', title: 'Indices and surds', resources: [] },
      { id: 'as-m9709-3', title: 'Coordinate geometry and circle equations', resources: [] },
      { id: 'as-m9709-4', title: 'Sequences and series', resources: [] },
      { id: 'as-m9709-5', title: 'Trigonometry and trigonometric equations', resources: [] },
      { id: 'as-m9709-6', title: 'Exponential and logarithmic functions', resources: [] },
      { id: 'as-m9709-7', title: 'Differentiation and applications', resources: [] },
      { id: 'as-m9709-8', title: 'Integration and applications', resources: [] },
      { id: 'as-m9709-9', title: 'Probability and distributions', resources: [] },
      { id: 'as-m9709-10', title: 'Sampling and hypothesis testing', resources: [] }
    ]
  },
  {
    id: 'as-phys-9702',
    name: 'Physics',
    level: 'AS Level',
    description: 'Cambridge International AS Level Physics (9702) - Mechanics, thermodynamics and waves.',
    topics: [
      { id: 'as-p9702-1', title: 'Physical quantities and units', resources: [] },
      { id: 'as-p9702-2', title: 'Kinematics', resources: [] },
      { id: 'as-p9702-3', title: 'Dynamics and Newton\'s laws', resources: [] },
      { id: 'as-p9702-4', title: 'Energy, work and power', resources: [] },
      { id: 'as-p9702-5', title: 'Momentum and collisions', resources: [] },
      { id: 'as-p9702-6', title: 'Density and pressure', resources: [] },
      { id: 'as-p9702-7', title: 'Thermal physics and temperature', resources: [] },
      { id: 'as-p9702-8', title: 'Oscillations and simple harmonic motion', resources: [] },
      { id: 'as-p9702-9', title: 'Waves and wave motion', resources: [] },
      { id: 'as-p9702-10', title: 'Superposition and interference', resources: [] }
    ]
  },
  {
    id: 'as-chem-9701',
    name: 'Chemistry',
    level: 'AS Level',
    description: 'Cambridge International AS Level Chemistry (9701) - Atomic chemistry and bonding.',
    topics: [
      { id: 'as-c9701-1', title: 'Atomic structure and periodicity', resources: [] },
      { id: 'as-c9701-2', title: 'Bonding and structure', resources: [] },
      { id: 'as-c9701-3', title: 'States of matter and kinetic theory', resources: [] },
      { id: 'as-c9701-4', title: 'Chemical equations and stoichiometry', resources: [] },
      { id: 'as-c9701-5', title: 'Mole concept and calculations', resources: [] },
      { id: 'as-c9701-6', title: 'Oxidation and reduction', resources: [] },
      { id: 'as-c9701-7', title: 'Thermodynamics and energetics', resources: [] },
      { id: 'as-c9701-8', title: 'Rates of reaction', resources: [] },
      { id: 'as-c9701-9', title: 'Chemical equilibrium', resources: [] },
      { id: 'as-c9701-10', title: 'Acid-base chemistry and buffers', resources: [] }
    ]
  },
  {
    id: 'as-bio-9700',
    name: 'Biology',
    level: 'AS Level',
    description: 'Cambridge International AS Level Biology (9700) - Cell biology and physiology.',
    topics: [
      { id: 'as-b9700-1', title: 'Cell structure and organisation', resources: [] },
      { id: 'as-b9700-2', title: 'Cell division and growth', resources: [] },
      { id: 'as-b9700-3', title: 'Membranes and transport', resources: [] },
      { id: 'as-b9700-4', title: 'Enzyme action and control', resources: [] },
      { id: 'as-b9700-5', title: 'Nutrition and photosynthesis', resources: [] },
      { id: 'as-b9700-6', title: 'Respiration and energy transfer', resources: [] },
      { id: 'as-b9700-7', title: 'Gaseous exchange and ventilation', resources: [] },
      { id: 'as-b9700-8', title: 'Transport in plants and animals', resources: [] },
      { id: 'as-b9700-9', title: 'Homeostasis and excretion', resources: [] },
      { id: 'as-b9700-10', title: 'Coordination and response', resources: [] }
    ]
  },
  {
    id: 'as-cs-9618',
    name: 'Computer Science',
    level: 'AS Level',
    description: 'Cambridge International AS Level Computer Science (9618) - Theory and programming.',
    topics: [
      { id: 'as-cs9618-1', title: 'Information representation', resources: [] },
      { id: 'as-cs9618-2', title: 'Hardware systems and architecture', resources: [] },
      { id: 'as-cs9618-3', title: 'Software and system organisation', resources: [] },
      { id: 'as-cs9618-4', title: 'Networks and connectivity', resources: [] },
      { id: 'as-cs9618-5', title: 'Cybersecurity and ethics', resources: [] },
      { id: 'as-cs9618-6', title: 'Problem solving and algorithms', resources: [] },
      { id: 'as-cs9618-7', title: 'Programming fundamentals', resources: [] },
      { id: 'as-cs9618-8', title: 'Data structures and types', resources: [] },
      { id: 'as-cs9618-9', title: 'Software development techniques', resources: [] },
      { id: 'as-cs9618-10', title: 'Database design', resources: [] }
    ]
  },
  {
    id: 'as-eng-9093',
    name: 'English Language',
    level: 'AS Level',
    description: 'Cambridge International AS Level English Language (9093) - Linguistic analysis.',
    topics: [
      { id: 'as-e9093-1', title: 'Textual analysis and reading skills', resources: [] },
      { id: 'as-e9093-2', title: 'Grammar and syntax analysis', resources: [] },
      { id: 'as-e9093-3', title: 'Lexis and semantics', resources: [] },
      { id: 'as-e9093-4', title: 'Discourse and pragmatics', resources: [] },
      { id: 'as-e9093-5', title: 'Language variation and change', resources: [] },
      { id: 'as-e9093-6', title: 'Written expression and style', resources: [] },
      { id: 'as-e9093-7', title: 'Persuasive and rhetorical writing', resources: [] },
      { id: 'as-e9093-8', title: 'Speech and conversation analysis', resources: [] },
      { id: 'as-e9093-9', title: 'Text types and genres', resources: [] },
      { id: 'as-e9093-10', title: 'Research and investigation', resources: [] }
    ]
  },
  {
    id: 'as-englit-9695',
    name: 'English Literature',
    level: 'AS Level',
    description: 'Cambridge International AS Level English Literature (9695) - Poetry, drama and prose.',
    topics: [
      { id: 'as-el9695-1', title: 'Poetry and poetic forms', resources: [] },
      { id: 'as-el9695-2', title: 'Drama and theatrical interpretation', resources: [] },
      { id: 'as-el9695-3', title: 'Prose and narrative structure', resources: [] },
      { id: 'as-el9695-4', title: 'Character and voice', resources: [] },
      { id: 'as-el9695-5', title: 'Theme and symbolism', resources: [] },
      { id: 'as-el9695-6', title: 'Language and literary techniques', resources: [] },
      { id: 'as-el9695-7', title: 'Context and historical period', resources: [] },
      { id: 'as-el9695-8', title: 'Critical response and interpretation', resources: [] },
      { id: 'as-el9695-9', title: 'Comparative analysis', resources: [] },
      { id: 'as-el9695-10', title: 'Essay writing and analysis', resources: [] }
    ]
  },
  {
    id: 'as-hist-9389',
    name: 'History',
    level: 'AS Level',
    description: 'Cambridge International AS Level History (9389) - Modern world history.',
    topics: [
      { id: 'as-h9389-1', title: 'The First World War', resources: [] },
      { id: 'as-h9389-2', title: 'International relations 1919-1939', resources: [] },
      { id: 'as-h9389-3', title: 'The Second World War', resources: [] },
      { id: 'as-h9389-4', title: 'The Cold War', resources: [] },
      { id: 'as-h9389-5', title: 'Decolonisation and independence', resources: [] },
      { id: 'as-h9389-6', title: 'The Middle East conflict', resources: [] },
      { id: 'as-h9389-7', title: 'American history and politics', resources: [] },
      { id: 'as-h9389-8', title: 'Asian history and development', resources: [] },
      { id: 'as-h9389-9', title: 'European social and cultural change', resources: [] },
      { id: 'as-h9389-10', title: 'Historical sources and interpretation', resources: [] }
    ]
  },
  {
    id: 'as-geo-9395',
    name: 'Geography',
    level: 'AS Level',
    description: 'Cambridge International AS Level Geography (9395) - Human and physical systems.',
    topics: [
      { id: 'as-g9395-1', title: 'Plate tectonics and landforms', resources: [] },
      { id: 'as-g9395-2', title: 'Weathering and soil formation', resources: [] },
      { id: 'as-g9395-3', title: 'Weather and climate systems', resources: [] },
      { id: 'as-g9395-4', title: 'Population dynamics and migration', resources: [] },
      { id: 'as-g9395-5', title: 'Settlement and urbanisation', resources: [] },
      { id: 'as-g9395-6', title: 'Economic systems and development', resources: [] },
      { id: 'as-g9395-7', title: 'Globalisation and trade', resources: [] },
      { id: 'as-g9395-8', title: 'Environmental challenges and management', resources: [] },
      { id: 'as-g9395-9', title: 'Water and river systems', resources: [] },
      { id: 'as-g9395-10', title: 'Ecosystems and biodiversity', resources: [] }
    ]
  },
  {
    id: 'as-eco-9708',
    name: 'Economics',
    level: 'AS Level',
    description: 'Cambridge International AS Level Economics (9708) - Microeconomic principles.',
    topics: [
      { id: 'as-eco9708-1', title: 'Economic problem and choice', resources: [] },
      { id: 'as-eco9708-2', title: 'Specialisation and exchange', resources: [] },
      { id: 'as-eco9708-3', title: 'Demand and supply', resources: [] },
      { id: 'as-eco9708-4', title: 'Price elasticity of demand', resources: [] },
      { id: 'as-eco9708-5', title: 'Price elasticity of supply', resources: [] },
      { id: 'as-eco9708-6', title: 'Market equilibrium and disequilibrium', resources: [] },
      { id: 'as-eco9708-7', title: 'Costs and revenue', resources: [] },
      { id: 'as-eco9708-8', title: 'Perfect competition', resources: [] },
      { id: 'as-eco9708-9', title: 'Imperfect competition', resources: [] },
      { id: 'as-eco9708-10', title: 'Government intervention', resources: [] }
    ]
  },
  {
    id: 'as-bus-9609',
    name: 'Business',
    level: 'AS Level',
    description: 'Cambridge International AS Level Business (9609) - Business fundamentals.',
    topics: [
      { id: 'as-b9609-1', title: 'Business objectives and structure', resources: [] },
      { id: 'as-b9609-2', title: 'Introduction to management accountancy', resources: [] },
      { id: 'as-b9609-3', title: 'Human resource management', resources: [] },
      { id: 'as-b9609-4', title: 'Marketing strategy and planning', resources: [] },
      { id: 'as-b9609-5', title: 'Operational management', resources: [] },
      { id: 'as-b9609-6', title: 'Finance and capital structure', resources: [] },
      { id: 'as-b9609-7', title: 'Strategic management', resources: [] },
      { id: 'as-b9609-8', title: 'Corporate governance and ethics', resources: [] },
      { id: 'as-b9609-9', title: 'International business', resources: [] },
      { id: 'as-b9609-10', title: 'Business analysis and case studies', resources: [] }
    ]
  },
  {
    id: 'as-acc-9706',
    name: 'Accounting',
    level: 'AS Level',
    description: 'Cambridge International AS Level Accounting (9706) - Financial accounting.',
    topics: [
      { id: 'as-a9706-1', title: 'The accounting equation and double entry', resources: [] },
      { id: 'as-a9706-2', title: 'Ledger accounts and the trial balance', resources: [] },
      { id: 'as-a9706-3', title: 'Books of original entry', resources: [] },
      { id: 'as-a9706-4', title: 'Final accounts and adjustments', resources: [] },
      { id: 'as-a9706-5', title: 'Accounting for depreciation', resources: [] },
      { id: 'as-a9706-6', title: 'Accounting for receivables', resources: [] },
      { id: 'as-a9706-7', title: 'Accounting standards and concepts', resources: [] },
      { id: 'as-a9706-8', title: 'Interpretation of financial statements', resources: [] },
      { id: 'as-a9706-9', title: 'Management accounting basics', resources: [] },
      { id: 'as-a9706-10', title: 'Partnership accounting', resources: [] }
    ]
  },
  {
    id: 'as-urdu-9676',
    name: 'Urdu Language',
    level: 'AS Level',
    description: 'Cambridge International AS Level Urdu Language (9676) - Communication and expression.',
    topics: [
      { id: 'as-u9676-1', title: 'Listening comprehension', resources: [] },
      { id: 'as-u9676-2', title: 'Speaking and oral interaction', resources: [] },
      { id: 'as-u9676-3', title: 'Reading and comprehension', resources: [] },
      { id: 'as-u9676-4', title: 'Writing and expression', resources: [] },
      { id: 'as-u9676-5', title: 'Grammar and sentence structure', resources: [] },
      { id: 'as-u9676-6', title: 'Vocabulary and idiomatic usage', resources: [] },
      { id: 'as-u9676-7', title: 'Urdu literature and texts', resources: [] },
      { id: 'as-u9676-8', title: 'Formal and informal register', resources: [] },
      { id: 'as-u9676-9', title: 'Pakistani culture and society', resources: [] },
      { id: 'as-u9676-10', title: 'Contemporary Urdu language issues', resources: [] }
    ]
  },
  {
    id: 'as-isl-9011',
    name: 'Islamic Studies',
    level: 'AS Level',
    description: 'Cambridge International AS Level Islamic Studies (9011) - Islamic teachings.',
    topics: [
      { id: 'as-is9011-1', title: 'Islamic belief and theology', resources: [] },
      { id: 'as-is9011-2', title: 'The Quran and its teachings', resources: [] },
      { id: 'as-is9011-3', title: 'The Hadith and Sunna', resources: [] },
      { id: 'as-is9011-4', title: 'Islamic law and jurisprudence', resources: [] },
      { id: 'as-is9011-5', title: 'Acts of worship and religious practice', resources: [] },
      { id: 'as-is9011-6', title: 'Islamic ethics and morality', resources: [] },
      { id: 'as-is9011-7', title: 'Family law and relationships', resources: [] },
      { id: 'as-is9011-8', title: 'Islamic history and scholarly tradition', resources: [] },
      { id: 'as-is9011-9', title: 'Islam in the modern world', resources: [] },
      { id: 'as-is9011-10', title: 'Inter-faith relations and dialogue', resources: [] }
    ]
  },
  {
    id: 'as-german-9717',
    name: 'German Language',
    level: 'AS Level',
    description: 'Cambridge International AS Level German Language (9717) - Advanced communication.',
    topics: [
      { id: 'as-g9717-1', title: 'Listening and understanding', resources: [] },
      { id: 'as-g9717-2', title: 'Speaking and interaction', resources: [] },
      { id: 'as-g9717-3', title: 'Reading comprehension', resources: [] },
      { id: 'as-g9717-4', title: 'Writing and composition', resources: [] },
      { id: 'as-g9717-5', title: 'Advanced grammar and syntax', resources: [] },
      { id: 'as-g9717-6', title: 'Vocabulary and idiomatic expression', resources: [] },
      { id: 'as-g9717-7', title: 'German culture and society', resources: [] },
      { id: 'as-g9717-8', title: 'Literature and texts', resources: [] },
      { id: 'as-g9717-9', title: 'Contemporary German-speaking world', resources: [] },
      { id: 'as-g9717-10', title: 'German history and tradition', resources: [] }
    ]
  },
  {
    id: 'as-french-9716',
    name: 'French Language',
    level: 'AS Level',
    description: 'Cambridge International AS Level French Language (9716) - Advanced proficiency.',
    topics: [
      { id: 'as-f9716-1', title: 'Listening and comprehension', resources: [] },
      { id: 'as-f9716-2', title: 'Speaking and oral expression', resources: [] },
      { id: 'as-f9716-3', title: 'Reading and text analysis', resources: [] },
      { id: 'as-f9716-4', title: 'Writing and formal composition', resources: [] },
      { id: 'as-f9716-5', title: 'Complex grammar and structures', resources: [] },
      { id: 'as-f9716-6', title: 'Advanced vocabulary and expressions', resources: [] },
      { id: 'as-f9716-7', title: 'Francophone culture and society', resources: [] },
      { id: 'as-f9716-8', title: 'French literature and authors', resources: [] },
      { id: 'as-f9716-9', title: 'Contemporary France and issues', resources: [] },
      { id: 'as-f9716-10', title: 'French media and communication', resources: [] }
    ]
  },
  {
    id: 'as-spanish-9719',
    name: 'Spanish Language',
    level: 'AS Level',
    description: 'Cambridge International AS Level Spanish Language (9719) - Advanced communication.',
    topics: [
      { id: 'as-s9719-1', title: 'Listening and understanding', resources: [] },
      { id: 'as-s9719-2', title: 'Speaking and interaction', resources: [] },
      { id: 'as-s9719-3', title: 'Reading comprehension and analysis', resources: [] },
      { id: 'as-s9719-4', title: 'Writing and composition', resources: [] },
      { id: 'as-s9719-5', title: 'Advanced Spanish grammar', resources: [] },
      { id: 'as-s9719-6', title: 'Vocabulary and idioms', resources: [] },
      { id: 'as-s9719-7', title: 'Hispanic culture and traditions', resources: [] },
      { id: 'as-s9719-8', title: 'Spanish and Latin American literature', resources: [] },
      { id: 'as-s9719-9', title: 'Contemporary Hispanic world', resources: [] },
      { id: 'as-s9719-10', title: 'Regional varieties and dialects', resources: [] }
    ]
  },
  {
    id: 'as-chinese-9715',
    name: 'Chinese Language',
    level: 'AS Level',
    description: 'Cambridge International AS Level Chinese Language (9715) - Advanced comprehension.',
    topics: [
      { id: 'as-c9715-1', title: 'Listening and understanding', resources: [] },
      { id: 'as-c9715-2', title: 'Speaking and conversation', resources: [] },
      { id: 'as-c9715-3', title: 'Reading comprehension', resources: [] },
      { id: 'as-c9715-4', title: 'Writing and composition', resources: [] },
      { id: 'as-c9715-5', title: 'Chinese characters and writing system', resources: [] },
      { id: 'as-c9715-6', title: 'Grammar and sentence patterns', resources: [] },
      { id: 'as-c9715-7', title: 'Chinese culture and traditions', resources: [] },
      { id: 'as-c9715-8', title: 'Classical and modern Chinese', resources: [] },
      { id: 'as-c9715-9', title: 'Contemporary Chinese society', resources: [] },
      { id: 'as-c9715-10', title: 'Chinese media and communication', resources: [] }
    ]
  },
  {
    id: 'as-arabic-9722',
    name: 'Arabic Language',
    level: 'AS Level',
    description: 'Cambridge International AS Level Arabic Language (9722) - Advanced expression.',
    topics: [
      { id: 'as-a9722-1', title: 'Listening and comprehension', resources: [] },
      { id: 'as-a9722-2', title: 'Speaking and interaction', resources: [] },
      { id: 'as-a9722-3', title: 'Reading and text analysis', resources: [] },
      { id: 'as-a9722-4', title: 'Writing and formal expression', resources: [] },
      { id: 'as-a9722-5', title: 'Arabic grammar and syntax', resources: [] },
      { id: 'as-a9722-6', title: 'Vocabulary and idioms', resources: [] },
      { id: 'as-a9722-7', title: 'Arabic literature and texts', resources: [] },
      { id: 'as-a9722-8', title: 'Arabic culture and history', resources: [] },
      { id: 'as-a9722-9', title: 'Modern Arab world and issues', resources: [] },
      { id: 'as-a9722-10', title: 'Regional varieties of Arabic', resources: [] }
    ]
  },
  {
    id: 'as-law-9084',
    name: 'Law',
    level: 'AS Level',
    description: 'Cambridge International AS Level Law (9084) - Legal systems and concepts.',
    topics: [
      { id: 'as-l9084-1', title: 'Introduction to law and jurisprudence', resources: [] },
      { id: 'as-l9084-2', title: 'Common law system and legislation', resources: [] },
      { id: 'as-l9084-3', title: 'Criminal law principles', resources: [] },
      { id: 'as-l9084-4', title: 'Civil law and contract formation', resources: [] },
      { id: 'as-l9084-5', title: 'Law of tort', resources: [] },
      { id: 'as-l9084-6', title: 'Constitutional and administrative law', resources: [] },
      { id: 'as-l9084-7', title: 'Courts and legal procedure', resources: [] },
      { id: 'as-l9084-8', title: 'Legal professions and ethics', resources: [] },
      { id: 'as-l9084-9', title: 'International law basics', resources: [] },
      { id: 'as-l9084-10', title: 'Law in contemporary society', resources: [] }
    ]
  },
  {
    id: 'as-psych-9990',
    name: 'Psychology',
    level: 'AS Level',
    description: 'Cambridge International AS Level Psychology (9990) - Human behaviour and mind.',
    topics: [
      { id: 'as-p9990-1', title: 'Introduction to psychology and research methods', resources: [] },
      { id: 'as-p9990-2', title: 'Biological psychology and neurotransmitters', resources: [] },
      { id: 'as-p9990-3', title: 'Sensation and perception', resources: [] },
      { id: 'as-p9990-4', title: 'Memory and learning', resources: [] },
      { id: 'as-p9990-5', title: 'States of consciousness and sleep', resources: [] },
      { id: 'as-p9990-6', title: 'Motivation and emotion', resources: [] },
      { id: 'as-p9990-7', title: 'Social psychology and relationships', resources: [] },
      { id: 'as-p9990-8', title: 'Personality and individual differences', resources: [] },
      { id: 'as-p9990-9', title: 'Psychological disorders', resources: [] },
      { id: 'as-p9990-10', title: 'Therapy and counselling', resources: [] }
    ]
  },
  {
    id: 'as-soc-9744',
    name: 'Sociology',
    level: 'AS Level',
    description: 'Cambridge International AS Level Sociology (9744) - Social structures and change.',
    topics: [
      { id: 'as-s9744-1', title: 'The nature of sociology', resources: [] },
      { id: 'as-s9744-2', title: 'Culture and socialisation', resources: [] },
      { id: 'as-s9744-3', title: 'Social structure and differentiation', resources: [] },
      { id: 'as-s9744-4', title: 'Stratification and social inequality', resources: [] },
      { id: 'as-s9744-5', title: 'Education and society', resources: [] },
      { id: 'as-s9744-6', title: 'Family and kinship', resources: [] },
      { id: 'as-s9744-7', title: 'Religion and belief systems', resources: [] },
      { id: 'as-s9744-8', title: 'Media and communication', resources: [] },
      { id: 'as-s9744-9', title: 'Deviance and social control', resources: [] },
      { id: 'as-s9744-10', title: 'Social change and globalisation', resources: [] }
    ]
  },
  {
    id: 'as-art-9704',
    name: 'Art & Design',
    level: 'AS Level',
    description: 'Cambridge International AS Level Art & Design (9704) - Visual arts practice.',
    topics: [
      { id: 'as-art9704-1', title: 'Visual elements and design principles', resources: [] },
      { id: 'as-art9704-2', title: 'Two-dimensional media and techniques', resources: [] },
      { id: 'as-art9704-3', title: 'Three-dimensional form and sculpture', resources: [] },
      { id: 'as-art9704-4', title: 'Photography and digital media', resources: [] },
      { id: 'as-art9704-5', title: 'Graphic design and communication', resources: [] },
      { id: 'as-art9704-6', title: 'Art history and periods', resources: [] },
      { id: 'as-art9704-7', title: 'Artist study and analysis', resources: [] },
      { id: 'as-art9704-8', title: 'Contemporary art and practice', resources: [] },
      { id: 'as-art9704-9', title: 'Design process and development', resources: [] },
      { id: 'as-art9704-10', title: 'Portfolio and personal investigation', resources: [] }
    ]
  },
  {
    id: 'as-music-9703',
    name: 'Music',
    level: 'AS Level',
    description: 'Cambridge International AS Level Music (9703) - Composition and performance.',
    topics: [
      { id: 'as-m9703-1', title: 'Music fundamentals and notation', resources: [] },
      { id: 'as-m9703-2', title: 'Harmonic language and chord theory', resources: [] },
      { id: 'as-m9703-3', title: 'Melody and composition techniques', resources: [] },
      { id: 'as-m9703-4', title: 'Orchestration and instrumentation', resources: [] },
      { id: 'as-m9703-5', title: 'Music performance styles', resources: [] },
      { id: 'as-m9703-6', title: 'Western classical tradition', resources: [] },
      { id: 'as-m9703-7', title: 'World music and traditional forms', resources: [] },
      { id: 'as-m9703-8', title: 'Popular music and contemporary styles', resources: [] },
      { id: 'as-m9703-9', title: 'Music production and technology', resources: [] },
      { id: 'as-m9703-10', title: 'Critical listening and analysis', resources: [] }
    ]
  },
  {
    id: 'as-envs-9649',
    name: 'Environmental Management',
    level: 'AS Level',
    description: 'Cambridge International AS Level Environmental Management (9649) - Ecosystems.',
    topics: [
      { id: 'as-e9649-1', title: 'Ecosystems and biotic communities', resources: [] },
      { id: 'as-e9649-2', title: 'Energy flow and nutrient cycles', resources: [] },
      { id: 'as-e9649-3', title: 'Population dynamics and distribution', resources: [] },
      { id: 'as-e9649-4', title: 'Photosynthesis and primary production', resources: [] },
      { id: 'as-e9649-5', title: 'Succession and climax communities', resources: [] },
      { id: 'as-e9649-6', title: 'Human impact on ecosystems', resources: [] },
      { id: 'as-e9649-7', title: 'Conservation and biodiversity', resources: [] },
      { id: 'as-e9649-8', title: 'Sustainable resource management', resources: [] },
      { id: 'as-e9649-9', title: 'Pollution and environmental problems', resources: [] },
      { id: 'as-e9649-10', title: 'Environmental policy and solutions', resources: [] }
    ]
  },
  {
    id: 'as-think-9694',
    name: 'Thinking Skills',
    level: 'AS Level',
    description: 'Cambridge International AS Level Thinking Skills (9694) - Critical thinking.',
    topics: [
      { id: 'as-t9694-1', title: 'Understanding argument and reasoning', resources: [] },
      { id: 'as-t9694-2', title: 'Recognising logical fallacies', resources: [] },
      { id: 'as-t9694-3', title: 'Deductive and inductive reasoning', resources: [] },
      { id: 'as-t9694-4', title: 'Causal analysis and relationships', resources: [] },
      { id: 'as-t9694-5', title: 'Problem definition and analysis', resources: [] },
      { id: 'as-t9694-6', title: 'Information evaluation and credibility', resources: [] },
      { id: 'as-t9694-7', title: 'Creative problem solving', resources: [] },
      { id: 'as-t9694-8', title: 'Ethical reasoning and judgement', resources: [] },
      { id: 'as-t9694-9', title: 'Decision making frameworks', resources: [] },
      { id: 'as-t9694-10', title: 'Research and evidence analysis', resources: [] }
    ]
  },
  {
    id: 'as-it-9626',
    name: 'Information Technology',
    level: 'AS Level',
    description: 'Cambridge International AS Level Information Technology (9626) - Digital systems.',
    topics: [
      { id: 'as-it9626-1', title: 'Information systems and applications', resources: [] },
      { id: 'as-it9626-2', title: 'Hardware components and peripherals', resources: [] },
      { id: 'as-it9626-3', title: 'Software and operating systems', resources: [] },
      { id: 'as-it9626-4', title: 'Networks and the internet', resources: [] },
      { id: 'as-it9626-5', title: 'Web design and development', resources: [] },
      { id: 'as-it9626-6', title: 'Databases and information management', resources: [] },
      { id: 'as-it9626-7', title: 'Spreadsheets and data analysis', resources: [] },
      { id: 'as-it9626-8', title: 'Website creation and management', resources: [] },
      { id: 'as-it9626-9', title: 'Cyber security and data protection', resources: [] },
      { id: 'as-it9626-10', title: 'IT ethics and professional issues', resources: [] }
    ]
  },

  // --- CAMBRIDGE A2 LEVEL (FULL SYLLABUS INDEX) ---
  {
    id: 'a2-math-9709',
    name: 'Mathematics',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Mathematics (9709) - Advanced Pure Mathematics and Applied.',
    topics: [
      { id: 'a2-m9709-1', title: 'Polynomial and algebraic methods', resources: [] },
      { id: 'a2-m9709-2', title: 'Rational functions and graphs', resources: [] },
      { id: 'a2-m9709-3', title: 'Trigonometric identities and equations', resources: [] },
      { id: 'a2-m9709-4', title: 'Exponential and logarithmic functions', resources: [] },
      { id: 'a2-m9709-5', title: 'Differentiation and applications', resources: [] },
      { id: 'a2-m9709-6', title: 'Integration and differential equations', resources: [] },
      { id: 'a2-m9709-7', title: 'Numerical methods and approximations', resources: [] },
      { id: 'a2-m9709-8', title: 'Complex numbers', resources: [] },
      { id: 'a2-m9709-9', title: 'Matrices and linear transformations', resources: [] },
      { id: 'a2-m9709-10', title: 'Probability distributions and inference', resources: [] }
    ]
  },
  {
    id: 'a2-phys-9702',
    name: 'Physics',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Physics (9702) - Advanced mechanics and modern physics.',
    topics: [
      { id: 'a2-p9702-1', title: 'Circular motion and gravitation', resources: [] },
      { id: 'a2-p9702-2', title: 'Oscillations and resonance', resources: [] },
      { id: 'a2-p9702-3', title: 'Gravitational fields', resources: [] },
      { id: 'a2-p9702-4', title: 'Electric fields and potential', resources: [] },
      { id: 'a2-p9702-5', title: 'Capacitance and energy storage', resources: [] },
      { id: 'a2-p9702-6', title: 'Magnetic fields and forces', resources: [] },
      { id: 'a2-p9702-7', title: 'Electromagnetic induction', resources: [] },
      { id: 'a2-p9702-8', title: 'Alternating currents and power', resources: [] },
      { id: 'a2-p9702-9', title: 'Nuclear physics and mass-energy', resources: [] },
      { id: 'a2-p9702-10', title: 'Quantum physics and photons', resources: [] }
    ]
  },
  {
    id: 'a2-chem-9701',
    name: 'Chemistry',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Chemistry (9701) - Advanced organic and inorganic chemistry.',
    topics: [
      { id: 'a2-c9701-1', title: 'Transition metals and properties', resources: [] },
      { id: 'a2-c9701-2', title: 'Organic synthesis and mechanisms', resources: [] },
      { id: 'a2-c9701-3', title: 'Aromatic chemistry and benzene', resources: [] },
      { id: 'a2-c9701-4', title: 'Carbonyl compounds and carboxylic acids', resources: [] },
      { id: 'a2-c9701-5', title: 'Amines, esters and condensation polymers', resources: [] },
      { id: 'a2-c9701-6', title: 'Amino acids and proteins', resources: [] },
      { id: 'a2-c9701-7', title: 'Polymerisation and macromolecules', resources: [] },
      { id: 'a2-c9701-8', title: 'Advanced spectroscopic analysis', resources: [] },
      { id: 'a2-c9701-9', title: 'Thermodynamics and entropy', resources: [] },
      { id: 'a2-c9701-10', title: 'Kinetics and order of reaction', resources: [] }
    ]
  },
  {
    id: 'a2-bio-9700',
    name: 'Biology',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Biology (9700) - Genetics, ecology and evolution.',
    topics: [
      { id: 'a2-b9700-1', title: 'Nucleic acids and DNA structure', resources: [] },
      { id: 'a2-b9700-2', title: 'Protein synthesis and translation', resources: [] },
      { id: 'a2-b9700-3', title: 'Gene expression and regulation', resources: [] },
      { id: 'a2-b9700-4', title: 'Genetic inheritance and variation', resources: [] },
      { id: 'a2-b9700-5', title: 'Evolution and natural selection', resources: [] },
      { id: 'a2-b9700-6', title: 'Population genetics and evolution', resources: [] },
      { id: 'a2-b9700-7', title: 'Ecology and energy flow', resources: [] },
      { id: 'a2-b9700-8', title: 'Succession and biodiversity', resources: [] },
      { id: 'a2-b9700-9', title: 'Ecosystem management and conservation', resources: [] },
      { id: 'a2-b9700-10', title: 'Responses to stimuli and behaviour', resources: [] }
    ]
  },
  {
    id: 'a2-cs-9618',
    name: 'Computer Science',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Computer Science (9618) - Advanced algorithms and systems.',
    topics: [
      { id: 'a2-cs9618-1', title: 'Advanced algorithm design', resources: [] },
      { id: 'a2-cs9618-2', title: 'Computational complexity and Big O notation', resources: [] },
      { id: 'a2-cs9618-3', title: 'Data structures and abstract data types', resources: [] },
      { id: 'a2-cs9618-4', title: 'Advanced programming paradigms', resources: [] },
      { id: 'a2-cs9618-5', title: 'Artificial intelligence and machine learning', resources: [] },
      { id: 'a2-cs9618-6', title: 'Database management systems', resources: [] },
      { id: 'a2-cs9618-7', title: 'Web technologies and standards', resources: [] },
      { id: 'a2-cs9618-8', title: 'Security protocols and encryption', resources: [] },
      { id: 'a2-cs9618-9', title: 'Software engineering and development', resources: [] },
      { id: 'a2-cs9618-10', title: 'Computing ethics and social impact', resources: [] }
    ]
  },
  {
    id: 'a2-eng-9093',
    name: 'English Language',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level English Language (9093) - Advanced linguistic studies.',
    topics: [
      { id: 'a2-e9093-1', title: 'Phonology and phonetics', resources: [] },
      { id: 'a2-e9093-2', title: 'Morphology and word formation', resources: [] },
      { id: 'a2-e9093-3', title: 'Syntax and sentence structure', resources: [] },
      { id: 'a2-e9093-4', title: 'Semantics and pragmatics', resources: [] },
      { id: 'a2-e9093-5', title: 'Discourse analysis and coherence', resources: [] },
      { id: 'a2-e9093-6', title: 'Sociolinguistics and variation', resources: [] },
      { id: 'a2-e9093-7', title: 'Historical linguistics and language change', resources: [] },
      { id: 'a2-e9093-8', title: 'Language acquisition and development', resources: [] },
      { id: 'a2-e9093-9', title: 'Register and stylistics', resources: [] },
      { id: 'a2-e9093-10', title: 'Language disorders and therapy', resources: [] }
    ]
  },
  {
    id: 'a2-englit-9695',
    name: 'English Literature',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level English Literature (9695) - Major literary works and criticism.',
    topics: [
      { id: 'a2-el9695-1', title: 'Renaissance and early modern literature', resources: [] },
      { id: 'a2-el9695-2', title: 'Romantic poetry and movement', resources: [] },
      { id: 'a2-el9695-3', title: 'Victorian literature and society', resources: [] },
      { id: 'a2-el9695-4', title: 'Modern and contemporary drama', resources: [] },
      { id: 'a2-el9695-5', title: 'Modernist poetry and experimental writing', resources: [] },
      { id: 'a2-el9695-6', title: 'American literature and culture', resources: [] },
      { id: 'a2-el9695-7', title: 'Literary theory and criticism', resources: [] },
      { id: 'a2-el9695-8', title: 'Postcolonial and world literature', resources: [] },
      { id: 'a2-el9695-9', title: 'Gender and representation in literature', resources: [] },
      { id: 'a2-el9695-10', title: 'Literary adaptation and interpretation', resources: [] }
    ]
  },
  {
    id: 'a2-hist-9389',
    name: 'History',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level History (9389) - Thematic and historiographical study.',
    topics: [
      { id: 'a2-h9389-1', title: 'Nationalism and imperialism 1750-1914', resources: [] },
      { id: 'a2-h9389-2', title: 'The origins of World War I', resources: [] },
      { id: 'a2-h9389-3', title: 'Development of communist ideology', resources: [] },
      { id: 'a2-h9389-4', title: 'The rise of fascism and totalitarianism', resources: [] },
      { id: 'a2-h9389-5', title: 'World War II and its consequences', resources: [] },
      { id: 'a2-h9389-6', title: 'Cold War and international relations', resources: [] },
      { id: 'a2-h9389-7', title: 'Post-war decolonisation movements', resources: [] },
      { id: 'a2-h9389-8', title: 'Technology and society 1900-2000', resources: [] },
      { id: 'a2-h9389-9', title: 'Historiographical methodology', resources: [] },
      { id: 'a2-h9389-10', title: 'Primary source analysis and evaluation', resources: [] }
    ]
  },
  {
    id: 'a2-geo-9395',
    name: 'Geography',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Geography (9395) - Applied geographical analysis.',
    topics: [
      { id: 'a2-g9395-1', title: 'Hazards and risk management', resources: [] },
      { id: 'a2-g9395-2', title: 'Climate and natural disasters', resources: [] },
      { id: 'a2-g9395-3', title: 'Economic strategies and development', resources: [] },
      { id: 'a2-g9395-4', title: 'Migration and demographic changes', resources: [] },
      { id: 'a2-g9395-5', title: 'Geopolitics and territorial conflict', resources: [] },
      { id: 'a2-g9395-6', title: 'Urban development and planning', resources: [] },
      { id: 'a2-g9395-7', title: 'Environmental management and conservation', resources: [] },
      { id: 'a2-g9395-8', title: 'Globalisation and cultural geography', resources: [] },
      { id: 'a2-g9395-9', title: 'Geographical enquiry methods', resources: [] },
      { id: 'a2-g9395-10', title: 'Sustainability and future geographies', resources: [] }
    ]
  },
  {
    id: 'a2-eco-9708',
    name: 'Economics',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Economics (9708) - Macroeconomics and policy analysis.',
    topics: [
      { id: 'a2-eco9708-1', title: 'National income and circular flow', resources: [] },
      { id: 'a2-eco9708-2', title: 'Aggregate demand and supply', resources: [] },
      { id: 'a2-eco9708-3', title: 'Inflation and unemployment', resources: [] },
      { id: 'a2-eco9708-4', title: 'Economic growth and development', resources: [] },
      { id: 'a2-eco9708-5', title: 'Money, banking and financial systems', resources: [] },
      { id: 'a2-eco9708-6', title: 'Monetary policy and interest rates', resources: [] },
      { id: 'a2-eco9708-7', title: 'Fiscal policy and government spending', resources: [] },
      { id: 'a2-eco9708-8', title: 'International trade and exchange rates', resources: [] },
      { id: 'a2-eco9708-9', title: 'Balance of payments and capital flows', resources: [] },
      { id: 'a2-eco9708-10', title: 'Economic integration and globalisation', resources: [] }
    ]
  },
  {
    id: 'a2-bus-9609',
    name: 'Business',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Business (9609) - Strategic management and planning.',
    topics: [
      { id: 'a2-b9609-1', title: 'Strategic planning and analysis', resources: [] },
      { id: 'a2-b9609-2', title: 'Market research and consumer behaviour', resources: [] },
      { id: 'a2-b9609-3', title: 'Marketing mix and strategies', resources: [] },
      { id: 'a2-b9609-4', title: 'Operations management systems', resources: [] },
      { id: 'a2-b9609-5', title: 'Supply chain and logistics', resources: [] },
      { id: 'a2-b9609-6', title: 'Financial planning and control', resources: [] },
      { id: 'a2-b9609-7', title: 'Investment appraisal and capital budgeting', resources: [] },
      { id: 'a2-b9609-8', title: 'Organisational behaviour and culture', resources: [] },
      { id: 'a2-b9609-9', title: 'International business and trade', resources: [] },
      { id: 'a2-b9609-10', title: 'Emerging issues and contemporary challenges', resources: [] }
    ]
  },
  {
    id: 'a2-acc-9706',
    name: 'Accounting',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Accounting (9706) - Advanced financial and management accounting.',
    topics: [
      { id: 'a2-a9706-1', title: 'Consolidated financial statements', resources: [] },
      { id: 'a2-a9706-2', title: 'Analysis and interpretation of accounts', resources: [] },
      { id: 'a2-a9706-3', title: 'Cash flow statements and working capital', resources: [] },
      { id: 'a2-a9706-4', title: 'Cost accounting and costing methods', resources: [] },
      { id: 'a2-a9706-5', title: 'Budgeting and standard costing', resources: [] },
      { id: 'a2-a9706-6', title: 'Decision making and relevant costing', resources: [] },
      { id: 'a2-a9706-7', title: 'Performance measurement and control', resources: [] },
      { id: 'a2-a9706-8', title: 'Corporate governance and reporting', resources: [] },
      { id: 'a2-a9706-9', title: 'International accounting standards', resources: [] },
      { id: 'a2-a9706-10', title: 'Strategic management accounting', resources: [] }
    ]
  },
  {
    id: 'a2-urdu-9676',
    name: 'Urdu Language',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Urdu Language (9676) - Advanced communication and literature.',
    topics: [
      { id: 'a2-u9676-1', title: 'Advanced listening comprehension', resources: [] },
      { id: 'a2-u9676-2', title: 'Fluent speaking and debate', resources: [] },
      { id: 'a2-u9676-3', title: 'Complex reading and interpretation', resources: [] },
      { id: 'a2-u9676-4', title: 'Advanced writing and essays', resources: [] },
      { id: 'a2-u9676-5', title: 'Advanced grammar and stylistics', resources: [] },
      { id: 'a2-u9676-6', title: 'Classical Urdu literature', resources: [] },
      { id: 'a2-u9676-7', title: 'Modern Urdu poetry and prose', resources: [] },
      { id: 'a2-u9676-8', title: 'Linguistic analysis and variation', resources: [] },
      { id: 'a2-u9676-9', title: 'Cultural and historical context', resources: [] },
      { id: 'a2-u9676-10', title: 'Communication in professional settings', resources: [] }
    ]
  },
  {
    id: 'a2-isl-9011',
    name: 'Islamic Studies',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Islamic Studies (9011) - Advanced theology and jurisprudence.',
    topics: [
      { id: 'a2-is9011-1', title: 'Advanced Islamic theology and belief', resources: [] },
      { id: 'a2-is9011-2', title: 'Quran exegesis and interpretation', resources: [] },
      { id: 'a2-is9011-3', title: 'Hadith sciences and methodology', resources: [] },
      { id: 'a2-is9011-4', title: 'Islamic jurisprudence and schools of law', resources: [] },
      { id: 'a2-is9011-5', title: 'Islamic ethics and moral philosophy', resources: [] },
      { id: 'a2-is9011-6', title: 'Islamic history and civilisation', resources: [] },
      { id: 'a2-is9011-7', title: 'Contemporary Islamic thought', resources: [] },
      { id: 'a2-is9011-8', title: 'Gender and family in Islamic law', resources: [] },
      { id: 'a2-is9011-9', title: 'Islam and globalisation', resources: [] },
      { id: 'a2-is9011-10', title: 'Inter-faith dialogue and comparative religion', resources: [] }
    ]
  },
  {
    id: 'a2-german-9717',
    name: 'German Language',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level German Language (9717) - Near-native proficiency.',
    topics: [
      { id: 'a2-g9717-1', title: 'Advanced conversational fluency', resources: [] },
      { id: 'a2-g9717-2', title: 'Academic and formal register', resources: [] },
      { id: 'a2-g9717-3', title: 'Complex text analysis and interpretation', resources: [] },
      { id: 'a2-g9717-4', title: 'Advanced creative writing', resources: [] },
      { id: 'a2-g9717-5', title: 'German literature and classics', resources: [] },
      { id: 'a2-g9717-6', title: 'Contemporary German media and journalism', resources: [] },
      { id: 'a2-g9717-7', title: 'German history and philosophy', resources: [] },
      { id: 'a2-g9717-8', title: 'Applied German language in professional contexts', resources: [] },
      { id: 'a2-g9717-9', title: 'Regional cultures and dialects', resources: [] },
      { id: 'a2-g9717-10', title: 'Comparative language and culture analysis', resources: [] }
    ]
  },
  {
    id: 'a2-french-9716',
    name: 'French Language',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level French Language (9716) - Advanced language mastery.',
    topics: [
      { id: 'a2-f9716-1', title: 'Fluent advanced conversation', resources: [] },
      { id: 'a2-f9716-2', title: 'Sophisticated written expression', resources: [] },
      { id: 'a2-f9716-3', title: 'Advanced text comprehension', resources: [] },
      { id: 'a2-f9716-4', title: 'Critical essay writing', resources: [] },
      { id: 'a2-f9716-5', title: 'French literature and authors', resources: [] },
      { id: 'a2-f9716-6', title: 'Contemporary French cinema and media', resources: [] },
      { id: 'a2-f9716-7', title: 'French culture and society', resources: [] },
      { id: 'a2-f9716-8', title: 'Political and social discourse', resources: [] },
      { id: 'a2-f9716-9', title: 'Francophone world and diversity', resources: [] },
      { id: 'a2-f9716-10', title: 'Stylistic analysis and rhetoric', resources: [] }
    ]
  },
  {
    id: 'a2-spanish-9719',
    name: 'Spanish Language',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Spanish Language (9719) - Bilingual competence.',
    topics: [
      { id: 'a2-s9719-1', title: 'Near-native oral proficiency', resources: [] },
      { id: 'a2-s9719-2', title: 'Academic writing and composition', resources: [] },
      { id: 'a2-s9719-3', title: 'Advanced comprehension of complex texts', resources: [] },
      { id: 'a2-s9719-4', title: 'Spanish literature and literary analysis', resources: [] },
      { id: 'a2-s9719-5', title: 'Contemporary Spanish media studies', resources: [] },
      { id: 'a2-s9719-6', title: 'Latin American culture and literature', resources: [] },
      { id: 'a2-s9719-7', title: 'Spanish history and politics', resources: [] },
      { id: 'a2-s9719-8', title: 'Business and professional Spanish', resources: [] },
      { id: 'a2-s9719-9', title: 'Regional Spanish and dialects', resources: [] },
      { id: 'a2-s9719-10', title: 'Language variation and sociolinguistics', resources: [] }
    ]
  },
  {
    id: 'a2-chinese-9715',
    name: 'Chinese Language',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Chinese Language (9715) - Advanced Mandarin proficiency.',
    topics: [
      { id: 'a2-ch9715-1', title: 'Advanced listening and comprehension', resources: [] },
      { id: 'a2-ch9715-2', title: 'Fluent speaking and presentation', resources: [] },
      { id: 'a2-ch9715-3', title: 'Advanced reading of classical and modern texts', resources: [] },
      { id: 'a2-ch9715-4', title: 'Complex Chinese writing and composition', resources: [] },
      { id: 'a2-ch9715-5', title: 'Classical Chinese literature', resources: [] },
      { id: 'a2-ch9715-6', title: 'Modern Chinese poetry and prose', resources: [] },
      { id: 'a2-ch9715-7', title: 'Chinese history and philosophy', resources: [] },
      { id: 'a2-ch9715-8', title: 'Contemporary Chinese media and issues', resources: [] },
      { id: 'a2-ch9715-9', title: 'Chinese language variation and dialects', resources: [] },
      { id: 'a2-ch9715-10', title: 'Chinese culture and traditions', resources: [] }
    ]
  },
  {
    id: 'a2-arabic-9722',
    name: 'Arabic Language',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Arabic Language (9722) - Advanced Arabic communication.',
    topics: [
      { id: 'a2-ar9722-1', title: 'Advanced oral proficiency and discussion', resources: [] },
      { id: 'a2-ar9722-2', title: 'Sophisticated written expression', resources: [] },
      { id: 'a2-ar9722-3', title: 'Literary Arabic and classical texts', resources: [] },
      { id: 'a2-ar9722-4', title: 'Modern Arabic literature and poetry', resources: [] },
      { id: 'a2-ar9722-5', title: 'Arabic media and journalism', resources: [] },
      { id: 'a2-ar9722-6', title: 'Islamic scholarship and theology texts', resources: [] },
      { id: 'a2-ar9722-7', title: 'Modern Arab world and politics', resources: [] },
      { id: 'a2-ar9722-8', title: 'Arabic language variation and dialects', resources: [] },
      { id: 'a2-ar9722-9', title: 'Arabic-speaking cultures and traditions', resources: [] },
      { id: 'a2-ar9722-10', title: 'Bilingual communication and code-switching', resources: [] }
    ]
  },
  {
    id: 'a2-law-9084',
    name: 'Law',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Law (9084) - Advanced jurisprudence and case law.',
    topics: [
      { id: 'a2-l9084-1', title: 'Constitutional law and human rights', resources: [] },
      { id: 'a2-l9084-2', title: 'Criminal procedure and evidence', resources: [] },
      { id: 'a2-l9084-3', title: 'Civil procedure and remedies', resources: [] },
      { id: 'a2-l9084-4', title: 'Contract law and enforcement', resources: [] },
      { id: 'a2-l9084-5', title: 'Tort law and liability', resources: [] },
      { id: 'a2-l9084-6', title: 'Property law and interests', resources: [] },
      { id: 'a2-l9084-7', title: 'Company law and corporate governance', resources: [] },
      { id: 'a2-l9084-8', title: 'Employment law and discrimination', resources: [] },
      { id: 'a2-l9084-9', title: 'International law and treaties', resources: [] },
      { id: 'a2-l9084-10', title: 'Jurisprudence and legal theory', resources: [] }
    ]
  },
  {
    id: 'a2-psych-9990',
    name: 'Psychology',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Psychology (9990) - Advanced psychological theories.',
    topics: [
      { id: 'a2-py9990-1', title: 'Psychological research methods and statistics', resources: [] },
      { id: 'a2-py9990-2', title: 'Brain and behaviour', resources: [] },
      { id: 'a2-py9990-3', title: 'Cognitive psychology and learning', resources: [] },
      { id: 'a2-py9990-4', title: 'Developmental psychology across lifespan', resources: [] },
      { id: 'a2-py9990-5', title: 'Individual differences and personality', resources: [] },
      { id: 'a2-py9990-6', title: 'Social psychology and groups', resources: [] },
      { id: 'a2-py9990-7', title: 'Abnormal psychology and mental health', resources: [] },
      { id: 'a2-py9990-8', title: 'Psychological therapies and intervention', resources: [] },
      { id: 'a2-py9990-9', title: 'Applied psychology in education and work', resources: [] },
      { id: 'a2-py9990-10', title: 'Contemporary psychology issues', resources: [] }
    ]
  },
  {
    id: 'a2-soc-9744',
    name: 'Sociology',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Sociology (9744) - Advanced social theory.',
    topics: [
      { id: 'a2-so9744-1', title: 'Sociological theory and perspectives', resources: [] },
      { id: 'a2-so9744-2', title: 'Research methods in sociology', resources: [] },
      { id: 'a2-so9744-3', title: 'Social stratification and inequality', resources: [] },
      { id: 'a2-so9744-4', title: 'Socialisation and culture', resources: [] },
      { id: 'a2-so9744-5', title: 'Education and social reproduction', resources: [] },
      { id: 'a2-so9744-6', title: 'Family and kinship structures', resources: [] },
      { id: 'a2-so9744-7', title: 'Religion and secularisation', resources: [] },
      { id: 'a2-so9744-8', title: 'Media and mass communication', resources: [] },
      { id: 'a2-so9744-9', title: 'Deviance and social control', resources: [] },
      { id: 'a2-so9744-10', title: 'Social change and globalisation', resources: [] }
    ]
  },
  {
    id: 'a2-art-9704',
    name: 'Art & Design',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Art & Design (9704) - Advanced artistic practice.',
    topics: [
      { id: 'a2-art9704-1', title: 'Advanced sculptural and 3D concepts', resources: [] },
      { id: 'a2-art9704-2', title: 'Contemporary art practice and movements', resources: [] },
      { id: 'a2-art9704-3', title: 'Digital art and new media', resources: [] },
      { id: 'a2-art9704-4', title: 'Photography as fine art', resources: [] },
      { id: 'a2-art9704-5', title: 'Graphic design theory and practice', resources: [] },
      { id: 'a2-art9704-6', title: 'Fashion and textile design', resources: [] },
      { id: 'a2-art9704-7', title: 'Art history and critical analysis', resources: [] },
      { id: 'a2-art9704-8', title: 'Artist research and contextual study', resources: [] },
      { id: 'a2-art9704-9', title: 'Exhibition and curation', resources: [] },
      { id: 'a2-art9704-10', title: 'Professional practice and portfolio', resources: [] }
    ]
  },
  {
    id: 'a2-music-9703',
    name: 'Music',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Music (9703) - Advanced composition and analysis.',
    topics: [
      { id: 'a2-mus9703-1', title: 'Advanced harmonic and tonal analysis', resources: [] },
      { id: 'a2-mus9703-2', title: 'Advanced composition techniques', resources: [] },
      { id: 'a2-mus9703-3', title: 'Orchestration and arrangement', resources: [] },
      { id: 'a2-mus9703-4', title: 'Music history and style periods', resources: [] },
      { id: 'a2-mus9703-5', title: 'Jazz and popular music forms', resources: [] },
      { id: 'a2-mus9703-6', title: 'World music and ethnomusicology', resources: [] },
      { id: 'a2-mus9703-7', title: 'Advanced music technology and production', resources: [] },
      { id: 'a2-mus9703-8', title: 'Musical interpretation and performance', resources: [] },
      { id: 'a2-mus9703-9', title: 'Music criticism and analysis', resources: [] },
      { id: 'a2-mus9703-10', title: 'Contemporary music and innovation', resources: [] }
    ]
  },
  {
    id: 'a2-envs-9649',
    name: 'Environmental Management',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Environmental Management (9649) - Advanced conservation.',
    topics: [
      { id: 'a2-em9649-1', title: 'Ecological principles and systems', resources: [] },
      { id: 'a2-em9649-2', title: 'Biodiversity and conservation strategies', resources: [] },
      { id: 'a2-em9649-3', title: 'Environmental impact assessment', resources: [] },
      { id: 'a2-em9649-4', title: 'Sustainable resource management', resources: [] },
      { id: 'a2-em9649-5', title: 'Environmental policy and legislation', resources: [] },
      { id: 'a2-em9649-6', title: 'Climate change and mitigation', resources: [] },
      { id: 'a2-em9649-7', title: 'Pollution control and remediation', resources: [] },
      { id: 'a2-em9649-8', title: 'Renewable energy and sustainability', resources: [] },
      { id: 'a2-em9649-9', title: 'Environmental ethics and values', resources: [] },
      { id: 'a2-em9649-10', title: 'Global environmental challenges', resources: [] }
    ]
  },
  {
    id: 'a2-think-9694',
    name: 'Thinking Skills',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Thinking Skills (9694) - Advanced analytical thinking.',
    topics: [
      { id: 'a2-th9694-1', title: 'Logical analysis and formal logic', resources: [] },
      { id: 'a2-th9694-2', title: 'Epistemology and theory of knowledge', resources: [] },
      { id: 'a2-th9694-3', title: 'Scientific reasoning and methodology', resources: [] },
      { id: 'a2-th9694-4', title: 'Statistical reasoning and probability', resources: [] },
      { id: 'a2-th9694-5', title: 'Ethical reasoning and dilemmas', resources: [] },
      { id: 'a2-th9694-6', title: 'Critical evaluation and argumentation', resources: [] },
      { id: 'a2-th9694-7', title: 'Decision-making under uncertainty', resources: [] },
      { id: 'a2-th9694-8', title: 'Complex problem-solving', resources: [] },
      { id: 'a2-th9694-9', title: 'Research design and analysis', resources: [] },
      { id: 'a2-th9694-10', title: 'Applied thinking in real-world contexts', resources: [] }
    ]
  },
  {
    id: 'a2-it-9626',
    name: 'Information Technology',
    level: 'A2 Level',
    description: 'Cambridge International A2 Level Information Technology (9626) - Advanced IT systems.',
    topics: [
      { id: 'a2-it9626-1', title: 'Advanced database design and management', resources: [] },
      { id: 'a2-it9626-2', title: 'Advanced networking and infrastructure', resources: [] },
      { id: 'a2-it9626-3', title: 'Cloud computing and virtualisation', resources: [] },
      { id: 'a2-it9626-4', title: 'Business intelligence and analytics', resources: [] },
      { id: 'a2-it9626-5', title: 'Advanced web design and development', resources: [] },
      { id: 'a2-it9626-6', title: 'Systems security and cryptography', resources: [] },
      { id: 'a2-it9626-7', title: 'Mobile and ubiquitous computing', resources: [] },
      { id: 'a2-it9626-8', title: 'IT project management', resources: [] },
      { id: 'a2-it9626-9', title: 'Enterprise systems and ERP', resources: [] },
      { id: 'a2-it9626-10', title: 'Digital transformation and innovation', resources: [] }
    ]
  },

  // --- FEDERAL BOARD GRADE 9 (FBISE SSC-I) ---
  {
    id: 'fbise-eng-9',
    name: 'English',
    level: 'Grade 9',
    description: 'FBISE Grade 9 English (SSC-I) - Reading, writing and communication.',
    topics: [
      { id: 'fbise-e9-1', title: 'Prose and comprehension', resources: [] },
      { id: 'fbise-e9-2', title: 'Poetry and poetic devices', resources: [] },
      { id: 'fbise-e9-3', title: 'Grammar and parts of speech', resources: [] },
      { id: 'fbise-e9-4', title: 'Vocabulary and word usage', resources: [] },
      { id: 'fbise-e9-5', title: 'Tenses and sentence structure', resources: [] },
      { id: 'fbise-e9-6', title: 'Paragraph writing and composition', resources: [] },
      { id: 'fbise-e9-7', title: 'Letter writing and formal communication', resources: [] },
      { id: 'fbise-e9-8', title: 'Reading comprehension skills', resources: [] },
      { id: 'fbise-e9-9', title: 'Summary writing and paraphrasing', resources: [] },
      { id: 'fbise-e9-10', title: 'Essay writing and expression', resources: [] }
    ]
  },
  {
    id: 'fbise-urdu-9',
    name: 'Urdu',
    level: 'Grade 9',
    description: 'FBISE Grade 9 Urdu (SSC-I) - Language skills and literature.',
    topics: [
      { id: 'fbise-u9-1', title: 'Asbaab-e-Waqiat اسباب و قاعات', resources: [] },
      { id: 'fbise-u9-2', title: 'Prose reading and comprehension', resources: [] },
      { id: 'fbise-u9-3', title: 'Poetry and ghazal appreciation', resources: [] },
      { id: 'fbise-u9-4', title: 'Grammar-Morphology', resources: [] },
      { id: 'fbise-u9-5', title: 'Syntax and sentence construction', resources: [] },
      { id: 'fbise-u9-6', title: 'Composition and formal writing', resources: [] },
      { id: 'fbise-u9-7', title: 'Vocabulary and idioms', resources: [] },
      { id: 'fbise-u9-8', title: 'Letter writing and applications', resources: [] },
      { id: 'fbise-u9-9', title: 'Translation and conversion', resources: [] },
      { id: 'fbise-u9-10', title: 'Listening and speaking skills', resources: [] }
    ]
  },
  {
    id: 'fbise-isl-9',
    name: 'Islamic Studies',
    level: 'Grade 9',
    description: 'FBISE Grade 9 Islamic Studies (SSC-I) - Islamic teachings and values.',
    topics: [
      { id: 'fbise-is9-1', title: 'Quran and Tajweed basics', resources: [] },
      { id: 'fbise-is9-2', title: 'Hadith and Sunnah', resources: [] },
      { id: 'fbise-is9-3', title: 'Fiqah and Islamic jurisprudence', resources: [] },
      { id: 'fbise-is9-4', title: 'Islamic history and biography', resources: [] },
      { id: 'fbise-is9-5', title: 'Islamic ethics and morality', resources: [] },
      { id: 'fbise-is9-6', title: 'Aqaid and Islamic beliefs', resources: [] },
      { id: 'fbise-is9-7', title: 'Acts of worship and practices', resources: [] },
      { id: 'fbise-is9-8', title: 'Islamic social values', resources: [] },
      { id: 'fbise-is9-9', title: 'Family and kinship in Islam', resources: [] },
      { id: 'fbise-is9-10', title: 'Islam and modern challenges', resources: [] }
    ]
  },
  {
    id: 'fbise-ss-9',
    name: 'Social Studies',
    level: 'Grade 9',
    description: 'FBISE Grade 9 Social Studies (SSC-I) - Society, history and geography.',
    topics: [
      { id: 'fbise-ss9-1', title: 'Pakistan geography and climate', resources: [] },
      { id: 'fbise-ss9-2', title: 'Population and demographics', resources: [] },
      { id: 'fbise-ss9-3', title: 'Development of Indian subcontinent', resources: [] },
      { id: 'fbise-ss9-4', title: 'Muslim rule and Islamic kingdoms', resources: [] },
      { id: 'fbise-ss9-5', title: 'British rule and colonial India', resources: [] },
      { id: 'fbise-ss9-6', title: 'Independence and partition', resources: [] },
      { id: 'fbise-ss9-7', title: 'Creation of Pakistan', resources: [] },
      { id: 'fbise-ss9-8', title: 'Pakistan government and constitution', resources: [] },
      { id: 'fbise-ss9-9', title: 'Economy and natural resources', resources: [] },
      { id: 'fbise-ss9-10', title: 'Culture and society of Pakistan', resources: [] }
    ]
  },
  {
    id: 'fbise-math-9',
    name: 'Mathematics',
    level: 'Grade 9',
    description: 'FBISE Grade 9 Mathematics (SSC-I) - Algebra, geometry and trigonometry.',
    topics: [
      { id: 'fbise-m9-1', title: 'Matrices and determinants', resources: [] },
      { id: 'fbise-m9-2', title: 'Real numbers and radicals', resources: [] },
      { id: 'fbise-m9-3', title: 'Logarithms and exponentials', resources: [] },
      { id: 'fbise-m9-4', title: 'Algebraic expressions and factorization', resources: [] },
      { id: 'fbise-m9-5', title: 'Linear equations and inequalities', resources: [] },
      { id: 'fbise-m9-6', title: 'Quadratic equations', resources: [] },
      { id: 'fbise-m9-7', title: 'Sequences and series', resources: [] },
      { id: 'fbise-m9-8', title: 'Basic geometry and circle theorems', resources: [] },
      { id: 'fbise-m9-9', title: 'Introduction to trigonometry', resources: [] },
      { id: 'fbise-m9-10', title: 'Statistics and probability basics', resources: [] }
    ]
  },
  {
    id: 'fbise-phys-9',
    name: 'Physics',
    level: 'Grade 9',
    description: 'FBISE Grade 9 Physics (SSC-I) - Mechanics, heat and waves.',
    topics: [
      { id: 'fbise-p9-1', title: 'Physical quantities and measurement', resources: [] },
      { id: 'fbise-p9-2', title: 'Kinematics and motion', resources: [] },
      { id: 'fbise-p9-3', title: 'Dynamics and forces', resources: [] },
      { id: 'fbise-p9-4', title: 'Work, energy and power', resources: [] },
      { id: 'fbise-p9-5', title: 'Circular motion and gravitation', resources: [] },
      { id: 'fbise-p9-6', title: 'Pressure and density', resources: [] },
      { id: 'fbise-p9-7', title: 'Heat and temperature', resources: [] },
      { id: 'fbise-p9-8', title: 'Waves and oscillations', resources: [] },
      { id: 'fbise-p9-9', title: 'Sound and acoustics', resources: [] },
      { id: 'fbise-p9-10', title: 'Introduction to electricity', resources: [] }
    ]
  },
  {
    id: 'fbise-chem-9',
    name: 'Chemistry',
    level: 'Grade 9',
    description: 'FBISE Grade 9 Chemistry (SSC-I) - Atomic structure and chemical reactions.',
    topics: [
      { id: 'fbise-c9-1', title: 'Atomic structure and electrons', resources: [] },
      { id: 'fbise-c9-2', title: 'Periodic table and periodicity', resources: [] },
      { id: 'fbise-c9-3', title: 'Chemical bonding and compounds', resources: [] },
      { id: 'fbise-c9-4', title: 'States of matter', resources: [] },
      { id: 'fbise-c9-5', title: 'Mole concept and stoichiometry', resources: [] },
      { id: 'fbise-c9-6', title: 'Solutions and solubility', resources: [] },
      { id: 'fbise-c9-7', title: 'Acids, bases and salts', resources: [] },
      { id: 'fbise-c9-8', title: 'Chemical reactions and equations', resources: [] },
      { id: 'fbise-c9-9', title: 'Metals and non-metals', resources: [] },
      { id: 'fbise-c9-10', title: 'Oxidation reduction reactions', resources: [] }
    ]
  },
  {
    id: 'fbise-bio-9',
    name: 'Biology',
    level: 'Grade 9',
    description: 'FBISE Grade 9 Biology (SSC-I) - Cell structure, physiology and ecology.',
    topics: [
      { id: 'fbise-b9-1', title: 'Organization of life', resources: [] },
      { id: 'fbise-b9-2', title: 'Cell structure and organelles', resources: [] },
      { id: 'fbise-b9-3', title: 'Cell division and reproduction', resources: [] },
      { id: 'fbise-b9-4', title: 'Bioenergetics and photosynthesis', resources: [] },
      { id: 'fbise-b9-5', title: 'Plant and animal tissues', resources: [] },
      { id: 'fbise-b9-6', title: 'Transport in plants and animals', resources: [] },
      { id: 'fbise-b9-7', title: 'Nutrition and digestion', resources: [] },
      { id: 'fbise-b9-8', title: 'Respiration and gaseous exchange', resources: [] },
      { id: 'fbise-b9-9', title: 'Homeostasis and regulation', resources: [] },
      { id: 'fbise-b9-10', title: 'Ecology and ecosystems', resources: [] }
    ]
  },
  {
    id: 'fbise-cs-9',
    name: 'Computer Science',
    level: 'Grade 9',
    description: 'FBISE Grade 9 Computer Science (SSC-I) - Programming and IT fundamentals.',
    topics: [
      { id: 'fbise-cs9-1', title: 'Computer fundamentals and hardware', resources: [] },
      { id: 'fbise-cs9-2', title: 'Software and operating systems', resources: [] },
      { id: 'fbise-cs9-3', title: 'Data and number systems', resources: [] },
      { id: 'fbise-cs9-4', title: 'Algorithms and flowcharts', resources: [] },
      { id: 'fbise-cs9-5', title: 'Programming basics and syntax', resources: [] },
      { id: 'fbise-cs9-6', title: 'Variables and data types', resources: [] },
      { id: 'fbise-cs9-7', title: 'Control structures and loops', resources: [] },
      { id: 'fbise-cs9-8', title: 'Functions and procedures', resources: [] },
      { id: 'fbise-cs9-9', title: 'Arrays and data structures', resources: [] },
      { id: 'fbise-cs9-10', title: 'Introduction to databases', resources: [] }
    ]
  },
  {
    id: 'fbise-pak-9',
    name: 'Pakistan Studies',
    level: 'Grade 9',
    description: 'FBISE Grade 9 Pakistan Studies (SSC-I) - National history and civics.',
    topics: [
      { id: 'fbise-pak9-1', title: 'Pakistan geographical location', resources: [] },
      { id: 'fbise-pak9-2', title: 'Climate zones and natural resources', resources: [] },
      { id: 'fbise-pak9-3', title: 'Muslims in South Asia', resources: [] },
      { id: 'fbise-pak9-4', title: 'Ali Jinnah and independence movement', resources: [] },
      { id: 'fbise-pak9-5', title: 'Creation and division of India', resources: [] },
      { id: 'fbise-pak9-6', title: 'Constitution of Pakistan', resources: [] },
      { id: 'fbise-pak9-7', title: 'Government structure and institutions', resources: [] },
      { id: 'fbise-pak9-8', title: 'National identity and patriotism', resources: [] },
      { id: 'fbise-pak9-9', title: 'Economy and development programs', resources: [] },
      { id: 'fbise-pak9-10', title: 'International relations and diplomacy', resources: [] }
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
