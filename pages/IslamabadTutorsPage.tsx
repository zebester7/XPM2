/**
 * /tutors-islamabad — hub page for "tutors in Islamabad" searches (home and online tuition).
 * Links out to the more specific Islamabad, exam and Quran pages.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd.tsx';
import DemoBookingForm from '../components/DemoBookingForm.tsx';
import { generateFAQSchema } from '../seoHelper.ts';

const WHATSAPP_LINK = `https://wa.me/923009508592?text=${encodeURIComponent("Hi XPM Tutors! I'm looking for a tutor in Islamabad.")}`;

const LEVELS = [
  { name: 'Grade 1 – 8', desc: 'Strong foundations in Maths, English and Science for primary and middle school students.' },
  { name: 'Matric (SSC)', desc: 'Federal Board and other board Matric preparation, chapter by chapter with past paper practice.' },
  { name: 'FSc / ICS (HSSC)', desc: 'Pre-Engineering, Pre-Medical and ICS subjects for intermediate students.' },
  { name: 'O Level', desc: 'Cambridge O Level Physics, Maths, Chemistry, Biology, Computer Science and more.', to: '/o-level-tutors-islamabad' },
  { name: 'A Level', desc: 'AS and A Level sciences, Mathematics and Further Maths for university-bound students.', to: '/a-level-tutors-islamabad' },
  { name: 'IGCSE', desc: 'Core and Extended IGCSE papers with topical past paper practice.', to: '/igcse-tutors' },
  { name: 'Entry Tests', desc: 'NUST NET preparation with timed MCQ practice and mock tests.', to: '/net-entry-test-tutors' },
  { name: 'Digital SAT', desc: 'One-to-one Digital SAT Math and Reading & Writing preparation.', to: '/sat-tutors' },
  { name: 'French', desc: 'One-to-one French tutoring and group classes, from beginner to IGCSE, GCSE and DELF.', to: '/french-tutoring' },
  { name: 'Quran', desc: 'Quran classes with Tajweed and Hifz programs for children and adults.', to: '/quran-tutoring' },
];

const SUBJECTS = [
  'Physics', 'Mathematics', 'Chemistry', 'Biology', 'Computer Science', 'English',
  'Islamiyat', 'Pakistan Studies', 'Business', 'Economics', 'Global Perspectives', 'French',
];

const STEPS = [
  { title: 'Tell us what you need', desc: 'Book below with the class, subject and whether you want a home tutor or online lessons.' },
  { title: 'Get matched with a tutor', desc: 'We match you with a tutor for your subject and level. For home tuition, tell us your sector so we find a tutor who can reach you.' },
  { title: 'Free trial session', desc: 'Meet your tutor in a free trial session before you commit to regular lessons.' },
  { title: 'Regular lessons', desc: 'Lessons are scheduled around school timings, with topical practice and past papers as exams approach.' },
];

const FAQS = [
  {
    question: 'Do you offer home tuition in Islamabad?',
    answer: 'Yes. Our tutors can teach at your home in Islamabad, or online if you prefer. When you book, tell us your sector and we will match you with a tutor who can reach you.',
  },
  {
    question: 'Which classes and subjects do you teach?',
    answer: 'We teach Grade 1 to 12, Matric, FSc and ICS, O Level, A Level, IGCSE, NUST NET and Digital SAT preparation, and Quran. Subjects include Physics, Mathematics, Chemistry, Biology, Computer Science, English, Islamiyat, Pakistan Studies, Business, Economics, Global Perspectives and French.',
  },
  {
    question: 'Should I choose home tuition or online lessons?',
    answer: 'Both are one-to-one with the same tutors. Home tuition suits students who learn best face to face; online lessons save travel time and make it easier to schedule around school and other classes. You can tell your tutor which you prefer after the free trial.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes. You can book a free trial session with a tutor before committing to regular lessons.',
  },
  {
    question: 'How do I book a tutor?',
    answer: 'Fill in the short form on this page. WhatsApp opens with your details filled in; send the message and we will reply to arrange your free trial.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Home and Online Tutors in Islamabad',
  serviceType: 'Tutoring',
  description: 'One-to-one home tuition and online tutoring in Islamabad for Grade 1–12, Matric, FSc, O Level, A Level, IGCSE, entry tests and Quran.',
  url: 'https://www.xpmtutors.com/tutors-islamabad',
  provider: { '@id': 'https://www.xpmtutors.com/#organization' },
  areaServed: { '@type': 'City', name: 'Islamabad', containedInPlace: { '@type': 'Country', name: 'Pakistan' } },
  availableChannel: [
    { '@type': 'ServiceChannel', name: 'Home tuition in Islamabad' },
    { '@type': 'ServiceChannel', name: 'Online lessons' },
  ],
  offers: { '@type': 'Offer', name: 'Free Trial Session', price: '0', priceCurrency: 'PKR', url: 'https://www.xpmtutors.com/tutors-islamabad' },
};

const IslamabadTutorsPage: React.FC = () => (
  <div className="bg-white overflow-x-hidden">
    <JsonLd data={serviceSchema} />
    <JsonLd data={generateFAQSchema(FAQS)} />

    {/* Hero */}
    <section className="relative py-16 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="inline-block px-4 py-1.5 mb-6 rounded-full bg-xpm-blue/10 border border-xpm-blue/20 text-[10px] font-black uppercase tracking-widest text-xpm-blue">
          Islamabad · Home &amp; Online
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
          Home &amp; Online <span className="text-xpm-blue">Tutors in Islamabad</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          One-to-one tutoring for Grade 1 to 12, Matric, FSc, O Level, A Level and IGCSE. Choose a tutor who comes to your home
          in Islamabad, or learn online. Physics, Maths, Chemistry, Biology, English and more, with a free trial session.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#book-demo" className="px-8 py-4 bg-xpm-orange hover:bg-orange-600 text-white font-black rounded-2xl shadow-xl shadow-xpm-orange/20 transition text-lg">
            Book a Free Trial
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-xpm-blue border-2 border-xpm-blue/20 hover:bg-slate-50 font-black rounded-2xl transition text-lg">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>

    {/* Home or online */}
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">Two Ways to Learn</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl border-2 border-xpm-blue/15 bg-blue-50/40">
            <h3 className="text-xl font-black text-slate-900 mb-2">Home tuition in Islamabad</h3>
            <p className="text-slate-600 leading-relaxed">
              A tutor teaches at your home, one-to-one. Tell us your sector when you book and we will match you with a tutor who
              can reach you.
            </p>
          </div>
          <div className="p-8 rounded-2xl border-2 border-xpm-green/20 bg-green-50/40">
            <h3 className="text-xl font-black text-slate-900 mb-2">Online lessons</h3>
            <p className="text-slate-600 leading-relaxed">
              Live one-to-one lessons with the same tutors, from anywhere. No travel, and easier to fit around school and other classes.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Levels */}
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">Classes We Teach</h2>
        <p className="mt-4 text-center text-slate-600 text-lg max-w-2xl mx-auto">From primary school to university entry tests.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEVELS.map(level => {
            const body = (
              <>
                <h3 className="text-lg font-black text-slate-900 mb-2">{level.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{level.desc}</p>
                {level.to && <span className="mt-3 inline-block text-sm font-black text-xpm-blue">Learn more →</span>}
              </>
            );
            return level.to ? (
              <Link key={level.name} to={level.to} className="block p-6 bg-white rounded-2xl border border-slate-200 hover:border-xpm-blue hover:shadow-lg transition">{body}</Link>
            ) : (
              <div key={level.name} className="p-6 bg-white rounded-2xl border border-slate-200">{body}</div>
            );
          })}
        </div>

        <h3 className="mt-14 text-xl font-black text-slate-900 text-center">Subjects</h3>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {SUBJECTS.map(subject => (
            <li key={subject} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700">{subject}</li>
          ))}
        </ul>
      </div>
    </section>

    {/* How it works */}
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">How It Works</h2>
        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {STEPS.map((step, idx) => (
            <li key={step.title} className="flex gap-4 p-6 rounded-2xl border border-slate-200">
              <span className="w-10 h-10 shrink-0 rounded-full bg-xpm-blue text-white font-black flex items-center justify-center">{idx + 1}</span>
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-1">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <DemoBookingForm
      program="Tutor in Islamabad"
      board="Islamabad"
      heading="Book a Free Trial Session"
      phonePlaceholder="+92 300 1234567"
      level={{ label: 'Class', options: ['Grade 1 – 8', 'Matric', 'FSc / ICS', 'O Level', 'A Level', 'IGCSE', 'Entry Test', 'SAT', 'Quran', 'Other'], defaultValue: 'O Level' }}
      detail={{ label: 'Lesson type', options: ['Home tuition (Islamabad)', 'Online lessons'], defaultValue: 'Home tuition (Islamabad)' }}
      askSubject
      theme={{
        section: 'bg-gradient-to-br from-xpm-blue to-xpm-dark',
        focus: 'focus:border-xpm-blue',
        button: 'bg-xpm-orange hover:bg-orange-600 text-white',
      }}
    />

    {/* FAQ */}
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-4">
          {FAQS.map(faq => (
            <div key={faq.question} className="p-6 bg-white rounded-2xl border border-slate-100">
              <h3 className="text-lg font-black text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default IslamabadTutorsPage;
