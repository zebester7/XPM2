/**
 * /french-tutoring — online French lessons: one-to-one tutoring and small group classes.
 *
 * Everything is in the prerendered HTML: the level tabs hide panels with the `hidden`
 * attribute and the FAQ uses native <details>, so crawlers see all text without JavaScript.
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd.tsx';
import DemoBookingForm from '../components/DemoBookingForm.tsx';
import { generateFAQSchema } from '../seoHelper.ts';

const SITE = 'https://www.xpmtutors.com';
const WHATSAPP_LINK = `https://wa.me/923009508592?text=${encodeURIComponent("Bonjour XPM Tutors! I'd like to learn French.")}`;

type Format = 'One-to-one lessons' | 'Group classes';

const Icon: React.FC<{ d: string; className?: string }> = ({ d, className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <path d={d} />
  </svg>
);
const ICONS = {
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  check: 'M20 6 9 17l-5-5',
  mic: 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8',
  ear: 'M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4',
  book: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  pen: 'M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z',
  plus: 'M12 5v14M5 12h14',
};

const FORMATS: { key: Format; icon: string; title: string; tagline: string; points: string[]; accent: string }[] = [
  {
    key: 'One-to-one lessons',
    icon: ICONS.user,
    title: 'One-to-One French Tutoring',
    tagline: 'A private French tutor who works only on your goals.',
    points: [
      'Lessons planned around your level, syllabus or exam date',
      'Plenty of speaking time with instant correction',
      'Times that fit your school, work and time zone',
      'Ideal for exam preparation and fast progress',
    ],
    accent: 'from-blue-700 to-indigo-800',
  },
  {
    key: 'Group classes',
    icon: ICONS.users,
    title: 'French Group Classes',
    tagline: 'Learn alongside other students at the same level.',
    points: [
      'Small groups matched by CEFR level',
      'A fixed weekly timetable that builds a habit',
      'Practise real conversations with classmates',
      'A budget-friendly way to learn with a teacher',
    ],
    accent: 'from-rose-600 to-red-700',
  },
];

const LEVELS = [
  { code: 'A1', name: 'Beginner', can: 'Introduce yourself, ask and answer simple questions, and use everyday phrases for greetings, numbers, family and shopping.' },
  { code: 'A2', name: 'Elementary', can: 'Talk about your routine, past weekends and plans, and handle simple situations such as ordering food, asking directions and booking a room.' },
  { code: 'B1', name: 'Intermediate', can: 'Hold conversations on familiar topics, describe experiences and opinions, and understand the main points of clear speech and short articles.' },
  { code: 'B2', name: 'Upper intermediate', can: 'Speak fluently with French speakers, argue a point of view, and follow films, news and longer texts on a wide range of topics.' },
  { code: 'C1', name: 'Advanced', can: 'Express yourself spontaneously and precisely, and use French effectively for study and work, including formal writing.' },
  { code: 'C2', name: 'Mastery', can: 'Understand virtually everything you hear or read and express fine shades of meaning, close to an educated native speaker.' },
];

const EXAMS = [
  { name: 'Cambridge O Level French', code: '3015', desc: 'Reading, writing and grammar practice with past papers for O Level students.' },
  { name: 'Cambridge IGCSE French', code: '0520', desc: 'Listening, reading, speaking and writing, including speaking exam role-plays.' },
  { name: 'GCSE French', code: 'AQA · Edexcel', desc: 'Foundation and Higher tier preparation, from vocabulary to the speaking exam.' },
  { name: 'A Level French', code: '9898 · AQA · Edexcel', desc: 'Essay writing, literature and film topics, and the individual research project.' },
  { name: 'IB French', code: 'B · ab initio', desc: 'Language B and ab initio preparation, including the individual oral.' },
  { name: 'DELF & DALF', code: 'A1 – C2', desc: 'Preparation for the official French diplomas, with timed practice for all four papers.' },
  { name: 'TEF & TCF Canada', code: 'Immigration', desc: 'Targeted practice for the French tests used for Canadian immigration and citizenship.' },
];

const SKILLS = [
  { icon: ICONS.mic, title: 'Speaking', desc: 'Every lesson gets you talking, with pronunciation help from the very first class.' },
  { icon: ICONS.ear, title: 'Listening', desc: 'Real French audio and video, so you understand people speaking at natural speed.' },
  { icon: ICONS.book, title: 'Grammar & vocabulary', desc: 'Verbs, tenses and genders explained clearly, then practised until they stick.' },
  { icon: ICONS.pen, title: 'Reading & writing', desc: 'From short messages to exam essays, with corrections and model answers.' },
];

const AUDIENCES = [
  { title: 'School students', desc: 'O Level, IGCSE, GCSE, A Level and IB French, aligned with your syllabus.' },
  { title: 'Kids learning French', desc: 'Fun, patient French lessons for kids, with songs, games and lots of speaking.' },
  { title: 'Adults & beginners', desc: 'Learn French for travel, work or simply for the love of the language.' },
  { title: 'Moving to Canada or France', desc: 'TEF, TCF and DELF preparation for immigration, study and work abroad.' },
];

const FAQS = [
  {
    question: 'Can I learn French online from complete beginner level?',
    answer: 'Yes. Many of our students start with no French at all. Your tutor begins with pronunciation, greetings and everyday phrases and builds up step by step through the A1 and A2 levels.',
  },
  {
    question: 'What is the difference between one-to-one French tutoring and group classes?',
    answer: 'One-to-one lessons are planned entirely around you, so they suit exam preparation and fast progress. Group classes bring together students at the same level on a fixed weekly timetable, which is a budget-friendly way to learn and gives you classmates to practise conversation with.',
  },
  {
    question: 'Do you prepare students for O Level, IGCSE, GCSE and A Level French?',
    answer: 'Yes. We prepare students for Cambridge O Level French (3015), Cambridge IGCSE French (0520), GCSE French, A Level French and IB French, using past papers and practice for the speaking exams.',
  },
  {
    question: 'Do you offer DELF, TEF Canada and TCF Canada preparation?',
    answer: 'Yes. We prepare students for the DELF and DALF diplomas and for the TEF Canada and TCF Canada tests used for Canadian immigration, with timed practice for each section of the exam.',
  },
  {
    question: 'How are French lessons taught online?',
    answer: 'Lessons are live video calls with your tutor, with shared notes and exercises on screen. You can join from a laptop, tablet or phone, from Pakistan, the UK, the UAE, the US or anywhere else.',
  },
  {
    question: 'Is there a free trial French class?',
    answer: 'Yes. Book a free trial using the form on this page. WhatsApp opens with your details filled in, and we reply to arrange a time with a French tutor.',
  },
];

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Online French Lessons: One-to-One Tutoring and Group Classes',
  description: 'Learn French online from beginner (A1) to advanced (C2) with one-to-one tutoring or small group classes, including O Level, IGCSE, GCSE, A Level, IB, DELF and TEF/TCF Canada preparation.',
  url: `${SITE}/french-tutoring`,
  inLanguage: 'fr',
  provider: { '@id': `${SITE}/#organization` },
  educationalLevel: 'Beginner to advanced (CEFR A1–C2)',
  teaches: ['French speaking', 'French listening', 'French grammar', 'French reading and writing'],
  hasCourseInstance: [
    { '@type': 'CourseInstance', name: 'One-to-one French tutoring', courseMode: 'Online' },
    { '@type': 'CourseInstance', name: 'French group classes', courseMode: 'Online' },
  ],
};

const FrenchTutoringPage: React.FC = () => {
  const [format, setFormat] = useState<Format>('One-to-one lessons');
  const [level, setLevel] = useState('A1');

  const choose = (f: Format) => () => setFormat(f);

  return (
    <div className="bg-white overflow-x-hidden">
      <JsonLd data={courseSchema} />
      <JsonLd data={generateFAQSchema(FAQS)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f4d] via-[#12306e] to-[#0b1f4d] text-white">
        <div className="absolute inset-x-0 top-0 flex h-1.5" aria-hidden="true">
          <span className="flex-1 bg-blue-600" /><span className="flex-1 bg-white" /><span className="flex-1 bg-red-600" />
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            <p className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-[11px] font-black uppercase tracking-widest">
              Online French Lessons · A1 to C2
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Learn French Online with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-rose-300">Personal Tutor</span> or in a Group
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Live French classes online for kids, school students and adults. Choose one-to-one French tutoring or small group
              classes, from your very first <em>bonjour</em> to O Level, IGCSE, GCSE, DELF and TEF Canada exams.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#book-demo" className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black rounded-2xl shadow-xl shadow-red-900/30 transition text-lg">
                Book a Free Trial Class
              </a>
              <a href="#formats" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-black rounded-2xl transition text-lg">
                Compare Lesson Options
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 hidden sm:block" aria-hidden="true">
            <div className="relative mx-auto max-w-sm">
              <div className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur p-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center font-black">FR</span>
                  <div>
                    <p className="font-black">Your French Tutor</p>
                    <p className="text-xs text-blue-200">Live lesson · online</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-sm">
                  <p className="rounded-2xl rounded-tl-sm bg-white text-slate-900 px-4 py-2.5 w-fit font-bold">Bonjour ! Comment ça va ?</p>
                  <p className="rounded-2xl rounded-tr-sm bg-red-600 px-4 py-2.5 w-fit ml-auto font-bold">Ça va très bien, merci !</p>
                  <p className="rounded-2xl rounded-tl-sm bg-white text-slate-900 px-4 py-2.5 w-fit font-bold">Parfait ! On commence ?</p>
                </div>
              </div>
              <span className="absolute -top-5 -left-6 rotate-[-8deg] rounded-xl bg-white text-[#0b1f4d] px-3 py-1.5 text-sm font-black shadow-lg">Merci</span>
              <span className="absolute -bottom-5 -right-4 rotate-[6deg] rounded-xl bg-red-600 px-3 py-1.5 text-sm font-black shadow-lg">Salut !</span>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section id="formats" className="py-16 lg:py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">Two Ways to Learn French</h2>
          <p className="mt-4 text-center text-slate-600 text-lg max-w-2xl mx-auto">
            Private lessons or a class with others. Both are live, online and taught by a French tutor.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {FORMATS.map(f => (
              <article key={f.key} className="flex flex-col rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition overflow-hidden">
                <div className={`bg-gradient-to-br ${f.accent} p-8 text-white`}>
                  <span className="inline-flex w-12 h-12 rounded-2xl bg-white/15 items-center justify-center"><Icon d={f.icon} /></span>
                  <h3 className="mt-5 text-2xl font-black">{f.title}</h3>
                  <p className="mt-2 text-white/85">{f.tagline}</p>
                </div>
                <ul className="p-8 space-y-3 flex-1">
                  {f.points.map(p => (
                    <li key={p} className="flex gap-3 text-slate-700">
                      <Icon d={ICONS.check} className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="px-8 pb-8">
                  <a href="#book-demo" onClick={choose(f.key)}
                    className="block text-center py-3.5 rounded-2xl font-black border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition">
                    Try {f.key === 'Group classes' ? 'a group class' : 'a one-to-one lesson'} free
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CEFR levels */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">French Courses for Every Level</h2>
          <p className="mt-4 text-center text-slate-600 text-lg max-w-2xl mx-auto">
            Our French courses follow the CEFR scale used by DELF, DALF and schools worldwide. Pick a level to see what you will be able to do.
          </p>
          <div role="tablist" aria-label="French levels" className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-2">
            {LEVELS.map(l => (
              <button key={l.code} id={`tab-${l.code}`} type="button" role="tab" aria-selected={level === l.code} aria-controls={`panel-${l.code}`}
                onClick={() => setLevel(l.code)}
                className={`py-3 rounded-2xl font-black transition border-2 ${level === l.code ? 'bg-[#12306e] border-[#12306e] text-white shadow-lg' : 'bg-white border-slate-200 text-slate-700 hover:border-[#12306e]'}`}>
                {l.code}
              </button>
            ))}
          </div>
          {LEVELS.map(l => (
            <div key={l.code} id={`panel-${l.code}`} role="tabpanel" aria-labelledby={`tab-${l.code}`} hidden={level !== l.code}
              className="mt-6 rounded-3xl bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 p-8 sm:p-10">
              <h3 className="text-2xl font-black text-slate-900">{l.code} · {l.name} French</h3>
              <p className="mt-3 text-lg text-slate-700 leading-relaxed">By the end of this level you can: {l.can}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">What You Practise in Every Lesson</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((s, i) => (
              <div key={s.title} className="p-7 rounded-3xl bg-white border border-slate-200">
                <span className={`inline-flex w-12 h-12 rounded-2xl items-center justify-center ${i % 2 ? 'bg-rose-100 text-red-700' : 'bg-blue-100 text-blue-800'}`}>
                  <Icon d={s.icon} />
                </span>
                <h3 className="mt-5 text-lg font-black text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exams */}
      <section className="py-16 lg:py-24 bg-[#0b1f4d] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-center tracking-tight">French Exam Preparation</h2>
          <p className="mt-4 text-center text-blue-100 text-lg max-w-2xl mx-auto">
            School exams, official diplomas and immigration tests, with past papers and timed practice.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXAMS.map(e => (
              <div key={e.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-black">{e.name}</h3>
                  <span className="shrink-0 text-[10px] font-black uppercase tracking-wider bg-red-600/90 rounded-lg px-2 py-1">{e.code}</span>
                </div>
                <p className="mt-2 text-blue-100 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">Who Our French Classes Are For</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCES.map(a => (
              <div key={a.title} className="p-7 rounded-3xl border-2 border-slate-100 hover:border-blue-200 transition">
                <h3 className="text-lg font-black text-slate-900">{a.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-slate-600">
            Students join from Pakistan, the <Link to="/uk" className="text-xpm-blue font-bold hover:underline">UK</Link>, the{' '}
            <Link to="/ae" className="text-xpm-blue font-bold hover:underline">UAE</Link> and beyond. In Islamabad?{' '}
            <Link to="/tutors-islamabad" className="text-xpm-blue font-bold hover:underline">See our Islamabad tutors</Link>.
          </p>
        </div>
      </section>

      {/* Booking: key remounts the form so a format chosen above becomes its default */}
      <DemoBookingForm
        key={format}
        program="French Lessons"
        board="French"
        heading="Book a Free French Trial Class"
        phonePlaceholder="+92 300 1234567"
        level={{
          label: 'Current French level',
          options: ['Complete beginner', 'A1 – A2 (basic)', 'B1 – B2 (intermediate)', 'C1 – C2 (advanced)', 'O Level / IGCSE French', 'GCSE / A Level / IB French', 'DELF / DALF', 'TEF / TCF Canada', 'Not sure'],
          defaultValue: 'Complete beginner',
        }}
        detail={{ label: 'Lesson format', options: ['One-to-one lessons', 'Group classes', 'Not sure yet'], defaultValue: format }}
        offer="free trial French class"
        cta="Book My Free French Class"
        theme={{
          section: 'bg-gradient-to-br from-[#12306e] via-[#0b1f4d] to-red-900',
          focus: 'focus:border-blue-700',
          button: 'bg-red-600 hover:bg-red-500 text-white',
        }}
      />

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">French Lessons: Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {FAQS.map(faq => (
              <details key={faq.question} className="group rounded-2xl bg-white border border-slate-200 open:shadow-md transition">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6 font-black text-slate-900 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base sm:text-lg">{faq.question}</h3>
                  <Icon d={ICONS.plus} className="w-5 h-5 shrink-0 text-red-600 transition-transform group-open:rotate-45" />
                </summary>
                <p className="px-5 sm:px-6 pb-6 -mt-1 text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition">
              Ask a Question on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-black text-slate-900">More Courses at XPM Tutors</h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-bold">
            {[
              ['/igcse-tutors', 'IGCSE Tutors'],
              ['/o-level-tutors', 'O Level Tutors'],
              ['/a-level-tutors', 'A Level Tutors'],
              ['/quran-tutoring', 'Online Quran Classes'],
              ['/hire-teacher', 'Hire a Tutor'],
            ].map(([to, label]) => (
              <li key={to}><Link to={to} className="block px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:border-xpm-blue hover:text-xpm-blue transition">{label}</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FrenchTutoringPage;
