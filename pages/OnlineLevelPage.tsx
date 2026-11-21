/**
 * /o-level-tutors and /a-level-tutors — online O Level and A Level tutoring, worldwide.
 * One layout, two content sets. Everything is in the prerendered HTML (subject topics use
 * native <details>), so crawlers see all text without JavaScript.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd.tsx';
import DemoBookingForm from '../components/DemoBookingForm.tsx';
import { generateFAQSchema } from '../seoHelper.ts';

type Level = 'O Level' | 'A Level';

interface Subject { name: string; code: string; topics: string }
interface BoardGroup { board: string; quals: string; subjects: Subject[]; note?: string }

interface LevelContent {
  path: string;
  h1: React.ReactNode;
  intro: string;
  whatsapp: string;
  boards: BoardGroup[];
  examNote: string;
  faqs: { question: string; answer: string }[];
  classes: string[];
  defaultClass: string;
  islamabad: { to: string; label: string };
  siblings: [string, string][];
}

const SITE = 'https://www.xpmtutors.com';

const CONTENT: Record<Level, LevelContent> = {
  'O Level': {
    path: '/o-level-tutors',
    h1: <>Online <span className="text-xpm-orange">O Level Tutors</span> for Cambridge &amp; Edexcel</>,
    intro: 'Live one-to-one online O Level tutoring in Physics, Maths, Additional Maths, Chemistry, Biology, Computer Science and more. Lessons follow your exact syllabus, with topical past paper practice for Cambridge O Level and Edexcel International GCSE. For students in Pakistan, the UAE, Saudi Arabia, the UK and worldwide.',
    whatsapp: "Hi XPM Tutors! I'm looking for an online O Level tutor.",
    boards: [
      {
        board: 'Cambridge O Level',
        quals: 'Cambridge International',
        subjects: [
          { name: 'Mathematics (Syllabus D)', code: '4024', topics: 'Number, algebra, graphs, geometry, mensuration, trigonometry, vectors and transformations, probability and statistics.' },
          { name: 'Additional Mathematics', code: '4037', topics: 'Functions, quadratics, indices and logarithms, trigonometric identities, coordinate geometry, differentiation and integration.' },
          { name: 'Physics', code: '5054', topics: 'Physical quantities, kinematics, forces, energy, thermal physics, waves, light, electricity, magnetism and nuclear physics.' },
          { name: 'Chemistry', code: '5070', topics: 'Stoichiometry, atomic structure, bonding, acids and bases, electrolysis, rates, metals and organic chemistry.' },
          { name: 'Biology', code: '5090', topics: 'Cells, biological molecules, enzymes, nutrition, transport, respiration, coordination, reproduction, inheritance and ecology.' },
          { name: 'Computer Science', code: '2210', topics: 'Data representation, hardware, networks, security, algorithms, pseudocode, programming and databases.' },
          { name: 'Economics', code: '2281', topics: 'Basic economic problem, markets, government and the economy, development and international trade.' },
          { name: 'English Language', code: '1123', topics: 'Directed writing, composition, comprehension and summary writing.' },
          { name: 'Islamiyat & Pakistan Studies', code: '2058 · 2059', topics: 'Source-based and essay questions with past paper practice.' },
        ],
      },
      {
        board: 'Edexcel International GCSE',
        quals: 'Pearson Edexcel',
        note: 'Many schools in Pakistan and the Gulf offer Edexcel International GCSE alongside or instead of Cambridge O Level.',
        subjects: [
          { name: 'Mathematics A', code: '4MA1', topics: 'Number, algebra, sequences, functions and graphs, geometry, vectors, statistics and probability.' },
          { name: 'Further Pure Mathematics', code: '4PM1', topics: 'Logarithms, quadratic functions, calculus, trigonometry, series and vectors.' },
          { name: 'Physics', code: '4PH1', topics: 'Forces and motion, electricity, waves, energy, solids and liquids, magnetism, radioactivity and astrophysics.' },
          { name: 'Chemistry', code: '4CH1', topics: 'Principles of chemistry, inorganic chemistry, physical chemistry and organic chemistry.' },
          { name: 'Biology', code: '4BI1', topics: 'Organisms, nutrition, respiration, coordination, reproduction, genetics and ecology.' },
        ],
      },
    ],
    examNote: 'Cambridge O Level exams are held in the May/June and October/November series. Your tutor plans backwards from your exam session so the syllabus is finished with time left for past papers.',
    faqs: [
      { question: 'How does online O Level tutoring work?', answer: 'Lessons are live one-to-one video calls with your tutor. The tutor explains each topic on a shared screen, works through questions with you and sets topical past paper practice between lessons, so every lesson is focused on your syllabus and your weak areas.' },
      { question: 'Which O Level subjects do you tutor?', answer: 'Mathematics (4024), Additional Mathematics (4037), Physics (5054), Chemistry (5070), Biology (5090), Computer Science (2210), Economics (2281), English Language (1123), Islamiyat and Pakistan Studies, plus Edexcel International GCSE Maths, Further Pure Maths, Physics, Chemistry and Biology.' },
      { question: 'Do you tutor Edexcel as well as Cambridge?', answer: 'Yes. We tutor Cambridge O Level and Pearson Edexcel International GCSE. Tell us your board and syllabus code when you book and your tutor will follow it exactly.' },
      { question: 'Can I get an online O Level tutor outside Pakistan?', answer: 'Yes. Lessons are online and scheduled in your time zone, so students join from the UAE, Saudi Arabia, Qatar, Kuwait, Oman, the UK and other countries.' },
      { question: 'How much does online O Level tutoring cost?', answer: 'Fees depend on the subject and how many lessons you take each week. Book a free trial and we will share the fee for your plan on WhatsApp before you commit.' },
      { question: 'Is there a free trial lesson?', answer: 'Yes. Fill in the form on this page; WhatsApp opens with your details and we reply to arrange a free trial lesson with a tutor for your subject.' },
    ],
    classes: ['O Level Year 1 (Class 9)', 'O Level Year 2 (Class 10)', 'O Level Year 3 (Class 11)', 'Private candidate', 'Other'],
    defaultClass: 'O Level Year 2 (Class 10)',
    islamabad: { to: '/o-level-tutors-islamabad', label: 'O Level tutors in Islamabad' },
    siblings: [['/a-level-tutors', 'Online A Level Tutors'], ['/igcse-tutors', 'IGCSE Tutors']],
  },
  'A Level': {
    path: '/a-level-tutors',
    h1: <>Online <span className="text-xpm-orange">A Level Tutors</span> for Cambridge &amp; Edexcel</>,
    intro: 'Live one-to-one online A Level tutoring in Physics, Mathematics, Further Maths, Chemistry, Biology, Computer Science and Economics. AS and A2 lessons follow your exact syllabus, with exam technique and past paper practice for Cambridge International A Level and Edexcel International A Level. For students in Pakistan, the UAE, Saudi Arabia, the UK and worldwide.',
    whatsapp: "Hi XPM Tutors! I'm looking for an online A Level tutor.",
    boards: [
      {
        board: 'Cambridge International AS & A Level',
        quals: 'Cambridge International',
        subjects: [
          { name: 'Mathematics', code: '9709', topics: 'Pure Mathematics 1, 2 and 3, Mechanics, and Probability & Statistics 1 and 2.' },
          { name: 'Further Mathematics', code: '9231', topics: 'Further pure mathematics, further mechanics and further probability and statistics.' },
          { name: 'Physics', code: '9702', topics: 'Kinematics, dynamics, waves, electricity, fields, thermal physics, oscillations, quantum physics, and nuclear and particle physics.' },
          { name: 'Chemistry', code: '9701', topics: 'Physical chemistry, inorganic chemistry, organic chemistry and analysis, including practical skills.' },
          { name: 'Biology', code: '9700', topics: 'Cell structure, biological molecules, enzymes, transport, gas exchange, genetics, homeostasis and ecology.' },
          { name: 'Computer Science', code: '9618', topics: 'Data representation, hardware, networks, databases, algorithms, data structures and programming.' },
          { name: 'Economics', code: '9708', topics: 'Microeconomics, macroeconomics, the price system, government intervention and international economics.' },
          { name: 'Accounting & Business', code: '9706 · 9609', topics: 'Financial and cost accounting; business and its environment, marketing, operations and finance.' },
        ],
      },
      {
        board: 'Edexcel International A Level (IAL)',
        quals: 'Pearson Edexcel',
        note: 'Unit-based International A Levels, popular in Pakistan, the Gulf and the UK. Your tutor plans around the units you are sitting in each series.',
        subjects: [
          { name: 'Mathematics', code: 'P1–P4 · M1 · S1', topics: 'Pure units plus Mechanics and Statistics units.' },
          { name: 'Further Mathematics', code: 'FP1–FP3', topics: 'Further pure units with mechanics or statistics options.' },
          { name: 'Physics', code: 'Units 1–6', topics: 'Mechanics and materials, waves and electricity, fields, thermodynamics, nuclear physics and practical skills.' },
          { name: 'Chemistry', code: 'Units 1–6', topics: 'Structure, bonding, energetics, kinetics, equilibria, organic chemistry and practical skills.' },
          { name: 'Biology', code: 'Units 1–6', topics: 'Molecules, cells, genetics, physiology, ecology and practical skills.' },
        ],
      },
    ],
    examNote: 'Cambridge A Level exams are held in the May/June and October/November series, and Edexcel IAL units can be sat in January, May/June and October. Your tutor plans the year around your exam series and the grades your university offer needs.',
    faqs: [
      { question: 'How does online A Level tutoring work?', answer: 'Lessons are live one-to-one video calls. Your tutor explains each topic on a shared screen, works through exam-style questions with you and sets past paper practice between lessons, focusing on the topics and question types where you lose the most marks.' },
      { question: 'Which A Level subjects do you tutor?', answer: 'Mathematics (9709), Further Mathematics (9231), Physics (9702), Chemistry (9701), Biology (9700), Computer Science (9618), Economics (9708), Accounting and Business, plus Edexcel International A Level Maths, Further Maths, Physics, Chemistry and Biology.' },
      { question: 'Do you tutor both AS and A2?', answer: 'Yes. We tutor AS Level and the full A Level, including students resitting units or papers to improve their grade.' },
      { question: 'Do you tutor UK A Levels (AQA, Edexcel, OCR)?', answer: 'Yes. For UK specifications such as AQA, Pearson Edexcel and OCR, see our UK page, where tutors follow your exam board and specification code.' },
      { question: 'How much does online A Level tutoring cost?', answer: 'Fees depend on the subject and how many lessons you take each week. Book a free trial and we will share the fee for your plan on WhatsApp before you commit.' },
      { question: 'Is there a free trial lesson?', answer: 'Yes. Fill in the form on this page; WhatsApp opens with your details and we reply to arrange a free trial lesson with a tutor for your subject.' },
    ],
    classes: ['AS Level', 'A2 / Full A Level', 'Resit', 'Private candidate', 'Other'],
    defaultClass: 'AS Level',
    islamabad: { to: '/a-level-tutors-islamabad', label: 'A Level tutors in Islamabad' },
    siblings: [['/o-level-tutors', 'Online O Level Tutors'], ['/online-calculus-tutors', 'University Calculus Tutors']],
  },
};

const HOW = [
  { title: 'Live one-to-one lessons', desc: 'A real tutor on a video call, explaining on a shared screen and answering your questions as you go.' },
  { title: 'Your exact syllabus', desc: 'Lessons follow your board and syllabus code, topic by topic, at the pace you need.' },
  { title: 'Topical past papers', desc: 'Practice questions sorted by topic, then full past papers under timed conditions before exams.' },
  { title: 'Your time zone', desc: 'Schedule lessons after school in Pakistan, the Gulf, the UK or anywhere else.' },
];

const REGIONS: [string, string | null][] = [
  ['Pakistan', '/tutors-islamabad'], ['UAE', '/ae'], ['United Kingdom', '/uk'], ['Saudi Arabia', null], ['Qatar', null],
  ['Kuwait', null], ['Oman', null], ['Bahrain', null], ['Malaysia', null], ['Worldwide', null],
];

const OnlineLevelPage: React.FC<{ level: Level }> = ({ level }) => {
  const c = CONTENT[level];
  const whatsappLink = `https://wa.me/923009508592?text=${encodeURIComponent(c.whatsapp)}`;
  const allSubjects = c.boards.flatMap(b => b.subjects.map(s => s.name));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Online ${level} Tutoring`,
    serviceType: `${level} Tutoring`,
    description: c.intro,
    url: SITE + c.path,
    provider: { '@id': `${SITE}/#organization` },
    areaServed: REGIONS.filter(([n]) => n !== 'Worldwide').map(([name]) => ({ '@type': 'Country', name })),
    availableChannel: { '@type': 'ServiceChannel', name: 'Live online lessons' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${level} subjects`,
      itemListElement: [...new Set(allSubjects)].map(name => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Online ${level} ${name} tutoring` } })),
    },
  };

  return (
    <div className="bg-white overflow-x-hidden">
      <JsonLd data={serviceSchema} />
      <JsonLd data={generateFAQSchema(c.faqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-xpm-blue via-blue-800 to-xpm-dark text-white">
        <div className="absolute -top-32 -right-24 w-96 h-96 bg-xpm-orange/20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-24 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 text-center">
          <p className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-[11px] font-black uppercase tracking-widest">
            Live online · One-to-one · {level}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">{c.h1}</h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">{c.intro}</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#book-demo" className="px-8 py-4 bg-xpm-orange hover:bg-orange-600 text-white font-black rounded-2xl shadow-xl shadow-black/20 transition text-lg">
              Book a Free Trial Lesson
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-black rounded-2xl transition text-lg">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* How online lessons work */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">How Online {level} Tutoring Works</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW.map((h, i) => (
              <div key={h.title} className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
                <span className="w-10 h-10 rounded-full bg-xpm-blue text-white font-black flex items-center justify-center">{i + 1}</span>
                <h3 className="mt-5 text-lg font-black text-slate-900">{h.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects by board */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">{level} Subjects &amp; Syllabus Codes</h2>
          <p className="mt-4 text-center text-slate-600 text-lg max-w-2xl mx-auto">Tap a subject to see the topics your tutor covers.</p>
          {c.boards.map(group => (
            <div key={group.board} className="mt-12">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-2xl font-black text-slate-900">{group.board}</h3>
                <span className="text-sm font-bold text-slate-500">{group.quals}</span>
              </div>
              {group.note && <p className="mt-2 text-slate-600">{group.note}</p>}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                {group.subjects.map(s => (
                  <details key={s.name + s.code} className="group rounded-2xl bg-white border border-slate-200 open:border-xpm-blue open:shadow-lg transition">
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none p-5 [&::-webkit-details-marker]:hidden">
                      <span>
                        <span className="block font-black text-slate-900">{level} {s.name}</span>
                        <span className="block text-xs font-bold text-xpm-blue mt-0.5">{s.code}</span>
                      </span>
                      <span className="text-xl leading-none text-xpm-orange transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="px-5 pb-5 -mt-1 text-sm text-slate-600 leading-relaxed">{s.topics}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
          <p className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-slate-700 leading-relaxed">{c.examNote}</p>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Online {level} Tutors, Wherever You Are</h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">Students join from these countries and more, with lessons in their own time zone.</p>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {REGIONS.map(([name, to]) => (
              <li key={name}>
                {to ? (
                  <Link to={to} className="block px-5 py-2.5 rounded-xl bg-xpm-blue text-white font-bold hover:bg-blue-800 transition">{name}</Link>
                ) : (
                  <span className="block px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold">{name}</span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-slate-600">
            Prefer face-to-face lessons? See our <Link to={c.islamabad.to} className="text-xpm-blue font-bold hover:underline">{c.islamabad.label}</Link>.
          </p>
        </div>
      </section>

      <DemoBookingForm
        program={`Online ${level} tutoring`}
        board={level}
        heading={`Book a Free ${level} Trial Lesson`}
        phonePlaceholder="+92 300 1234567"
        level={{ label: 'Year', options: c.classes, defaultValue: c.defaultClass }}
        detail={{ label: 'Exam board', options: ['Cambridge', 'Edexcel', 'Not sure'], defaultValue: 'Cambridge' }}
        askSubject
        subjectPlaceholder={level === 'O Level' ? 'e.g. Physics 5054, Maths 4024' : 'e.g. Physics 9702, Maths 9709'}
        theme={{
          section: 'bg-gradient-to-br from-xpm-blue to-xpm-dark',
          focus: 'focus:border-xpm-blue',
          button: 'bg-xpm-orange hover:bg-orange-600 text-white',
        }}
      />

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">Online {level} Tutoring FAQs</h2>
          <div className="mt-10 space-y-3">
            {c.faqs.map(faq => (
              <details key={faq.question} className="group rounded-2xl bg-white border border-slate-200 open:shadow-md transition">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6 font-black text-slate-900 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base sm:text-lg">{faq.question}</h3>
                  <span className="text-2xl leading-none text-xpm-orange transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="px-5 sm:px-6 pb-6 -mt-1 text-slate-600 leading-relaxed">
                  {faq.answer}
                  {faq.question.includes('UK A Levels') && <> <Link to="/uk" className="text-xpm-blue font-bold hover:underline">UK GCSE &amp; A Level tutors</Link>.</>}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-black text-slate-900">Related Pages</h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-bold">
            {[...c.siblings, [c.islamabad.to, c.islamabad.label] as [string, string], ['/teacher-directory', 'Browse Tutors'], ['/blog', 'Exam Tips Blog']].map(([to, label]) => (
              <li key={to}><Link to={to} className="block px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:border-xpm-blue hover:text-xpm-blue transition">{label}</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OnlineLevelPage;
