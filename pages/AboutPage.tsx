/**
 * /about — who runs XPM Tutors, what it teaches and how lessons work.
 * Plain, checkable facts only: search engines and AI assistants use this page to understand the academy.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd.tsx';

const SITE = 'https://www.xpmtutors.com';
const WHATSAPP_LINK = `https://wa.me/923009508592?text=${encodeURIComponent('Hi XPM Tutors! I would like to know more about your tutoring.')}`;

const FACTS: [string, React.ReactNode][] = [
  ['Full name', 'XPM Tutors (Xpert Physics & Maths Tutors)'],
  ['Founded', '2024, in Islamabad, Pakistan'],
  ['Founder', 'Zubair Ahmad (Sir Zubair), Physics and Mathematics tutor'],
  ['Teaching', 'One-to-one online lessons worldwide, home tuition in Islamabad, small-group Digital SAT classes'],
  ['Students from', 'Pakistan, the United Kingdom, the United States, the UAE and other countries'],
  ['Free trial', 'Yes, before any regular lessons'],
  ['Contact', <>WhatsApp <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-xpm-blue font-bold hover:underline">+92 300 9508592</a> · <a href="mailto:support@xpmtutors.com" className="text-xpm-blue font-bold hover:underline">support@xpmtutors.com</a></>],
];

const PROGRAMS = [
  { name: 'O Level tutoring', to: '/o-level-tutors' },
  { name: 'A Level tutoring', to: '/a-level-tutors' },
  { name: 'IGCSE tutoring', to: '/igcse-tutors' },
  { name: 'Digital SAT preparation', to: '/sat-tutors' },
  { name: 'Digital SAT small-group weekend prep (US)', to: '/us' },
  { name: 'NUST NET entry test preparation', to: '/net-entry-test-tutors' },
  { name: 'Home and online tutors in Islamabad', to: '/tutors-islamabad' },
  { name: 'GCSE and A Level tutoring for UK students', to: '/uk' },
  { name: 'GCSE, IGCSE and IB tutoring in the UAE', to: '/ae' },
  { name: 'Global Perspectives IR support', to: '/ir-services' },
  { name: 'Online Quran classes', to: '/quran-tutoring' },
  { name: 'The Healing Mind with Mishal Razzaq', to: '/mishal-razzaq' },
];

const STEPS = [
  'You book a free trial on WhatsApp or through the form on any page, with the level, subject and times that suit you.',
  'We match you with a tutor for that subject and level, and you meet them in the free trial.',
  'If it is a good fit, lessons are scheduled around your school timetable and time zone.',
  'Lessons follow your syllabus topic by topic, with past paper practice as exams get closer.',
];

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About XPM Tutors',
  url: `${SITE}/about`,
  mainEntity: { '@id': `${SITE}/#organization` },
};

const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE}/about#founder`,
  name: 'Zubair Ahmad',
  alternateName: 'Sir Zubair',
  jobTitle: 'Founder and Physics & Mathematics Tutor',
  knowsAbout: ['Physics', 'Mathematics'],
  worksFor: { '@id': `${SITE}/#organization` },
  url: `${SITE}/about`,
};

const AboutPage: React.FC = () => (
  <div className="bg-white overflow-x-hidden">
    <JsonLd data={aboutSchema} />
    <JsonLd data={founderSchema} />

    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          About <span className="text-xpm-blue">XPM Tutors</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
          XPM Tutors is a tutoring academy founded in Islamabad in 2024 by Zubair Ahmad, a Physics and Mathematics tutor.
          We teach O Level, A Level, IGCSE, GCSE, IB, Matric, FSc, Digital SAT and NUST NET students one-to-one online,
          and offer home tuition in Islamabad.
        </p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">At a Glance</h2>
        <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {FACTS.map(([term, value]) => (
            <div key={term} className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
              <dt className="font-black text-slate-900">{term}</dt>
              <dd className="sm:col-span-2 text-slate-600">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section id="founder" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our Founder</h2>
        <div className="mt-8 p-8 bg-white rounded-2xl border border-slate-200">
          <h3 className="text-xl font-black text-slate-900">Zubair Ahmad (Sir Zubair)</h3>
          <p className="text-sm font-bold text-xpm-blue mt-1">Founder · Physics &amp; Mathematics Tutor</p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Zubair Ahmad started XPM Tutors, short for Xpert Physics &amp; Maths Tutors, in Islamabad in 2024. He teaches
            Physics and Mathematics himself and matches students in other subjects with tutors who specialise in them.
            Students and parents can reach him directly on WhatsApp.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">How Lessons Work</h2>
        <ol className="mt-8 space-y-4">
          {STEPS.map((step, idx) => (
            <li key={idx} className="flex gap-4">
              <span className="w-9 h-9 shrink-0 rounded-full bg-xpm-blue text-white font-black flex items-center justify-center">{idx + 1}</span>
              <p className="text-slate-600 leading-relaxed pt-1.5">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">What We Teach</h2>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PROGRAMS.map(p => (
            <li key={p.to}>
              <Link to={p.to} className="block p-4 bg-white rounded-xl border border-slate-200 font-bold text-slate-800 hover:border-xpm-blue hover:text-xpm-blue transition">
                {p.name} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="py-16 bg-gradient-to-br from-xpm-blue to-xpm-dark text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white tracking-tight">Talk to Us</h2>
        <p className="mt-4 text-blue-100 text-lg">Tell us the level and subject and we will arrange a free trial.</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/hire-teacher" className="px-8 py-4 bg-xpm-orange hover:bg-orange-600 text-white font-black rounded-2xl transition text-lg">Book a Free Trial</Link>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-xpm-blue font-black rounded-2xl hover:bg-slate-50 transition text-lg">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
