/**
 * /us — Digital SAT Small-Group Weekend Prep (US students).
 *
 * Sections: hero → why us → curriculum tabs → pricing → demo form → FAQ → related links.
 * Everything that matters for search (curriculum panels, FAQ answers) is rendered in the
 * prerendered HTML; tabs hide panels with the `hidden` attribute and the FAQ uses native
 * <details>, so no content depends on JavaScript.
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd.tsx';
import { generateFAQSchema } from '../seoHelper.ts';
import { recordDemoRequest } from '../apiClient.ts';

const PAGE_URL = 'https://www.xpmtutors.com/us';
const PRICE_USD = 200;
const WHATSAPP_NUMBER = '923009508592';
const PROGRAM_NAME = 'Digital SAT Small-Group Weekend Prep';

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const VALUE_CARDS = [
  {
    title: 'Ultra-Small Cohorts (Max 5 Students)',
    body: 'No hiding behind muted mics. With five students at most, your tutor works directly with every student in every session.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Topic-Wise Deep Dives',
    body: 'Systematic mastery of the high-yield Digital SAT domains, one topic at a time, instead of random practice sets.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: 'Zero Weekday Burnout',
    body: '2 hours every Saturday and Sunday. School nights stay free for homework, sports and rest.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: '24/7 WhatsApp Support',
    body: 'Stuck on a practice question mid-week? Send it to your tutor on WhatsApp instead of waiting for Saturday.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
];

// Domain names follow the College Board's published Digital SAT content domains (plus a Desmos skills card)
const CURRICULUM = {
  math: {
    label: 'Digital SAT Math',
    intro: 'Two 35-minute modules, 44 questions. A built-in Desmos graphing calculator is available for every Math question, so we teach when to use it and when solving by hand is faster.',
    domains: [
      { name: 'Algebra', topics: ['Linear equations and inequalities', 'Systems of linear equations', 'Linear functions and their graphs'] },
      { name: 'Advanced Math', topics: ['Quadratics and factoring', 'Exponential and nonlinear functions', 'Equivalent expressions'] },
      { name: 'Problem-Solving and Data Analysis', topics: ['Ratios, rates and percentages', 'Reading tables, graphs and scatterplots', 'Probability and statistics'] },
      { name: 'Geometry and Trigonometry', topics: ['Area, volume and angles', 'Right triangles and trigonometry', 'Circles'] },
      { name: 'Desmos Calculator Mastery', topics: ['Graphing to solve equations and systems', 'Regression and tables', 'Checking answers in seconds'] },
    ],
  },
  rw: {
    label: 'Reading & Writing',
    intro: 'Two 32-minute modules, 54 questions, each built on one short passage. We train you to deconstruct a passage quickly and answer from the evidence on the page.',
    domains: [
      { name: 'Craft and Structure', topics: ['Words in context', 'Text structure and purpose', 'Cross-text connections'] },
      { name: 'Information and Ideas', topics: ['Central ideas and details', 'Command of evidence (textual and quantitative)', 'Inferences'] },
      { name: 'Standard English Conventions', topics: ['Sentence boundaries and punctuation', 'Subject-verb and pronoun agreement', 'Verb tense and form'] },
      { name: 'Expression of Ideas', topics: ['Transitions', 'Rhetorical synthesis from notes'] },
    ],
  },
} as const;

type CurriculumTab = keyof typeof CURRICULUM;

const PRICING_INCLUDES = [
  '16 hours of live weekend coaching every month',
  'Maximum 5 students per cohort',
  '24/7 WhatsApp doubt support',
  'Weekly parent scorecards',
  'Analysis of your official Bluebook™ practice tests',
];

const FAQS = [
  {
    question: 'How does the free demo class work?',
    answer: 'Fill in the short form on this page. WhatsApp opens with your details filled in; send the message and we will reply to confirm a time. The demo is a live online class with a tutor, so you can see how the small-group format and topic-by-topic teaching work before you join. There is no charge and no obligation.',
  },
  {
    question: 'Which US time zones do you accommodate?',
    answer: 'We schedule weekend cohorts for students in Eastern (EST), Central (CST) and Pacific (PST) time. When you book, tell us your time zone and we will confirm your class times in your local time.',
  },
  {
    question: 'How does the 24/7 WhatsApp support work?',
    answer: 'Once you join a cohort, you can send your tutor a photo or screenshot of any practice question on WhatsApp, at any time during the week. Your tutor replies with an explanation so you are not stuck until the next weekend class.',
  },
  {
    question: 'What happens if my child misses a session?',
    answer: 'Every live session is recorded, and an HD recording is shared so a missed class can be caught up on before the next one. Questions about the recording can be sent to the tutor on WhatsApp.',
  },
  {
    question: 'How much does the program cost?',
    answer: `One plan: $${PRICE_USD} per month, which covers 16 hours of live weekend coaching in a cohort of at most 5 students, 24/7 WhatsApp support, weekly parent scorecards and analysis of your Bluebook practice tests.`,
  },
  {
    question: 'How long is the Digital SAT?',
    answer: 'The Digital SAT takes 2 hours 14 minutes of testing time: Reading and Writing (two 32-minute modules) and Math (two 35-minute modules), with a 10-minute break between sections. Scores range from 400 to 1600.',
  },
];

// ---------------------------------------------------------------------------
// Structured data
// ---------------------------------------------------------------------------

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: PROGRAM_NAME,
  description: `Live online Digital SAT prep in cohorts of at most 5 students: 2 hours every Saturday and Sunday covering Math (with Desmos) and Reading & Writing, plus 24/7 WhatsApp support. $${PRICE_USD} per month.`,
  url: PAGE_URL,
  provider: { '@id': 'https://www.xpmtutors.com/#organization' },
  educationalLevel: 'High school',
  inLanguage: 'en',
  teaches: ['Digital SAT Math', 'Digital SAT Reading and Writing', 'Desmos graphing calculator'],
  offers: {
    '@type': 'Offer',
    category: 'Paid',
    price: PRICE_USD,
    priceCurrency: 'USD',
    url: PAGE_URL,
    availability: 'https://schema.org/InStock',
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Online',
    courseWorkload: 'PT4H',
    courseSchedule: {
      '@type': 'Schedule',
      repeatFrequency: 'P1W',
      byDay: ['https://schema.org/Saturday', 'https://schema.org/Sunday'],
      duration: 'PT2H',
    },
  },
};

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

const Icon: React.FC<{ d: string; className?: string }> = ({ d, className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <path d={d} />
  </svg>
);

const CheckItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <Icon d="M5 13l4 4L19 7" className="w-5 h-5 mt-0.5 shrink-0 text-emerald-500" />
    <span>{children}</span>
  </li>
);

const Hero: React.FC = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
    <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" aria-hidden="true" />
    <div className="absolute -bottom-40 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" aria-hidden="true" />
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 text-center">
      <p className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/15 text-xs font-black uppercase tracking-widest text-indigo-200">
        New · Weekend Group Program for US Students
      </p>
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-5xl mx-auto">
        Small-Group Online Digital SAT Prep — <span className="text-emerald-400">Master Every Topic in Just 4 Hours a Weekend</span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
        Strictly capped at 5 students per cohort. Get live Saturday &amp; Sunday coaching, topic-by-topic mastery,
        and 24/7 WhatsApp doubt support for just <strong className="text-white">${PRICE_USD}/month</strong>.
      </p>
      <div className="mt-10 flex flex-col items-center gap-5">
        <a
          href="#book-demo"
          className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-lg rounded-2xl shadow-xl shadow-emerald-500/20 transition"
        >
          Book Your Free Live Demo Class
        </a>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold text-slate-200">
          <li>✅ Max 5 Students</li>
          <li>✅ Desmos Prep</li>
          <li>✅ 24/7 WhatsApp Support</li>
        </ul>
      </div>
    </div>
  </section>
);

const WhyUs: React.FC = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">Why Families Choose This Program</h2>
      <p className="mt-4 text-center text-slate-600 text-lg max-w-2xl mx-auto">Group pricing with the attention of a private tutor.</p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {VALUE_CARDS.map(card => (
          <div key={card.title} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:border-indigo-300 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
              <Icon d={card.icon} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">{card.title}</h3>
            <p className="text-slate-600 leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Curriculum: React.FC = () => {
  const [tab, setTab] = useState<CurriculumTab>('math');
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">What We Cover</h2>
        <p className="mt-4 text-center text-slate-600 text-lg max-w-2xl mx-auto">Every domain on the Digital SAT, taught topic by topic.</p>

        <div role="tablist" aria-label="Curriculum sections" className="mt-10 flex justify-center gap-2">
          {(Object.keys(CURRICULUM) as CurriculumTab[]).map(key => (
            <button
              key={key}
              id={`tab-${key}`}
              role="tab"
              aria-selected={tab === key}
              aria-controls={`panel-${key}`}
              onClick={() => setTab(key)}
              className={`px-5 py-3 rounded-xl text-sm sm:text-base font-black transition ${
                tab === key ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
              }`}
            >
              {CURRICULUM[key].label}
            </button>
          ))}
        </div>

        {(Object.keys(CURRICULUM) as CurriculumTab[]).map(key => (
          <div key={key} id={`panel-${key}`} role="tabpanel" aria-labelledby={`tab-${key}`} hidden={tab !== key} className="mt-8">
            <h3 className="sr-only">{CURRICULUM[key].label}</h3>
            <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8">{CURRICULUM[key].intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CURRICULUM[key].domains.map(domain => (
                <div key={domain.name} className="p-6 bg-white rounded-2xl border border-slate-200">
                  <h4 className="font-black text-slate-900 mb-3">{domain.name}</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {domain.topics.map(topic => <CheckItem key={topic}>{topic}</CheckItem>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Pricing: React.FC = () => (
  <section className="py-16 lg:py-24 bg-white" aria-labelledby="pricing-heading">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">One Transparent Plan</h2>
      <div className="mt-12 max-w-md mx-auto rounded-3xl border-2 border-indigo-600 bg-white shadow-2xl shadow-indigo-600/10 overflow-hidden">
        <div className="bg-indigo-600 text-white text-center py-3 text-xs font-black uppercase tracking-widest">{PROGRAM_NAME}</div>
        <div className="p-8">
          <p className="text-center">
            <span className="text-5xl font-black text-slate-900">${PRICE_USD}</span>
            <span className="text-slate-500 font-bold"> / month</span>
          </p>
          <ul className="mt-8 space-y-3 text-slate-700 font-medium">
            {PRICING_INCLUDES.map(item => <CheckItem key={item}>{item}</CheckItem>)}
          </ul>
          <a href="#book-demo" className="mt-8 block w-full py-4 text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-lg rounded-2xl transition">
            Claim Your Free Demo
          </a>
          <p className="mt-4 text-center text-xs text-slate-500">The first demo class is free. No payment details needed to book.</p>
        </div>
      </div>
    </div>
  </section>
);

const TIME_ZONES = ['Eastern (EST)', 'Central (CST)', 'Mountain (MST)', 'Pacific (PST)', 'Other'];
const GRADES = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'Other'];

/**
 * Sends each booking two ways: opens WhatsApp with the details pre-filled (to the academy's
 * number) and saves it to the admin dashboard. If the save fails, the WhatsApp message still
 * carries the booking, so no lead is lost.
 */
const DemoForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', grade: 'Grade 11', timeZone: 'Eastern (EST)' });
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const whatsappText = `Hi XPM Tutors! I'd like a free demo class for the ${PROGRAM_NAME}.\n\nName: ${form.name}\nWhatsApp: ${form.phone}\nGrade: ${form.grade}\nTime zone: ${form.timeZone}`;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opened synchronously inside the submit event; browsers block pop-ups opened after an await
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    recordDemoRequest({
      name: form.name,
      phone: form.phone,
      subjects: [PROGRAM_NAME],
      level: form.grade,
      board: 'Digital SAT',
      preferredTutors: '',
      message: `Time zone: ${form.timeZone}`,
    }).catch(err => console.error('Could not record demo request:', err));
    setStatus('sent');
  };
  const input = 'w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-200 focus:border-indigo-500 outline-none font-medium text-slate-900';

  return (
    <section id="book-demo" className="py-16 lg:py-24 bg-gradient-to-br from-indigo-600 to-indigo-800 scroll-mt-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
          {status === 'sent' ? (
            <div className="text-center" role="status">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">You're booked in!</h2>
              <p className="mt-3 text-slate-600">
                WhatsApp has opened with your booking details. Press <strong>Send</strong> there and we'll confirm your demo time
                in {form.timeZone.split(' ')[0]} time.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl transition">
                WhatsApp didn't open? Tap here
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Book Your Free Live Demo Class</h2>
                <p className="mt-2 text-slate-600">Takes 30 seconds. We confirm your slot on WhatsApp.</p>
                <p className="mt-1 text-xs text-slate-400">Free. No payment details needed.</p>
              </div>
              <label className="block">
                <span className="block text-sm font-bold text-slate-700 mb-1.5">Student or parent name</span>
                <input required autoComplete="name" value={form.name} onChange={set('name')} className={input} />
              </label>
              <label className="block">
                <span className="block text-sm font-bold text-slate-700 mb-1.5">WhatsApp number (with country code)</span>
                <input required type="tel" autoComplete="tel" placeholder="+1 555 123 4567" value={form.phone} onChange={set('phone')} className={input} />
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm font-bold text-slate-700 mb-1.5">Grade</span>
                  <select value={form.grade} onChange={set('grade')} className={input}>
                    {GRADES.map(g => <option key={g}>{g}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="block text-sm font-bold text-slate-700 mb-1.5">Time zone</span>
                  <select value={form.timeZone} onChange={set('timeZone')} className={input}>
                    {TIME_ZONES.map(t => <option key={t}>{t}</option>)}
                  </select>
                </label>
              </div>
              <button type="submit"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-lg rounded-2xl transition">
                Book My Free Demo on WhatsApp
              </button>
              <p className="text-center text-xs text-slate-500">Opens WhatsApp with your details filled in. Just press Send.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Faq: React.FC = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">Frequently Asked Questions</h2>
      <div className="mt-10 space-y-4">
        {FAQS.map(faq => (
          <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-slate-50 open:bg-white open:shadow-md transition">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6 font-black text-slate-900 [&::-webkit-details-marker]:hidden">
              <h3 className="text-base sm:text-lg">{faq.question}</h3>
              <Icon d="M19 9l-7 7-7-7" className="w-5 h-5 shrink-0 text-indigo-600 transition-transform group-open:rotate-180" />
            </summary>
            <p className="px-5 sm:px-6 pb-6 -mt-1 text-slate-600 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const RelatedLinks: React.FC = () => (
  <section className="py-14 bg-slate-50 border-t border-slate-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Link to="/sat-tutors" className="block p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 transition">
        <span className="block font-black text-slate-900">Prefer one-to-one?</span>
        <span className="block text-sm text-slate-600 mt-1">Private Digital SAT tutoring at your own pace.</span>
      </Link>
      <Link to="/blog/sat-math-perfect-score" className="block p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 transition">
        <span className="block font-black text-slate-900">SAT Math study guide</span>
        <span className="block text-sm text-slate-600 mt-1">How to approach the Math section, topic by topic.</span>
      </Link>
      <Link to="/us/blog" className="block p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 transition">
        <span className="block font-black text-slate-900">US exam blog</span>
        <span className="block text-sm text-slate-600 mt-1">SAT, AP and college admissions articles.</span>
      </Link>
    </div>
    <p className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-xs text-slate-500">
      SAT® is a trademark registered by the College Board, which is not affiliated with, and does not endorse, XPM Tutors.
      Bluebook™ is a trademark of the College Board.
    </p>
  </section>
);

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const USLandingPage: React.FC = () => (
  <div className="bg-white overflow-x-hidden">
    <JsonLd data={courseSchema} />
    <JsonLd data={generateFAQSchema(FAQS)} />
    <Hero />
    <WhyUs />
    <Curriculum />
    <Pricing />
    <DemoForm />
    <Faq />
    <RelatedLinks />
  </div>
);

export default USLandingPage;
