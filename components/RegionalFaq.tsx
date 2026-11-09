import React from 'react';
import { Link } from 'react-router-dom';
import JsonLd from './JsonLd.tsx';
import { generateFAQSchema } from '../seoHelper.ts';

type Region = 'uk' | 'us' | 'ae';

interface Faq {
  question: string;
  answer: string;
}

// Answers restate what each landing page already says, so the FAQ schema matches visible content
const FAQS: Record<Region, Faq[]> = {
  uk: [
    {
      question: 'Which subjects do you tutor for UK students?',
      answer: 'We tutor GCSE, IGCSE and A Level Mathematics, Further Maths, Physics, Chemistry, Biology, English, Economics, Computer Science and Geography.',
    },
    {
      question: 'Can lessons be scheduled around UK school hours?',
      answer: 'Yes. Lessons are online and scheduled in UK time, with evening and weekend sessions available.',
    },
    {
      question: 'Do you help with university applications?',
      answer: 'Yes. Alongside subject tutoring we help with personal statements, interview preparation and UCAS guidance.',
    },
    {
      question: 'Is there a free trial session?',
      answer: 'Yes. You can book a free trial session before committing to regular lessons.',
    },
  ],
  us: [
    {
      question: 'Which exams and subjects do you tutor for US students?',
      answer: 'We tutor SAT Math, SAT Reading, the PSAT and ACT, and AP Calculus, AP Biology, AP Chemistry and AP Physics.',
    },
    {
      question: 'Can lessons be scheduled in my US time zone?',
      answer: 'Yes. Lessons are online and can be scheduled for students in any US time zone.',
    },
    {
      question: 'Do you help with college applications?',
      answer: 'Yes. We offer college admission guidance including essay review, college selection and interview preparation.',
    },
    {
      question: 'Is there a free trial session?',
      answer: 'Yes. You can book a free trial session before committing to regular lessons.',
    },
  ],
  ae: [
    {
      question: 'Which curricula do you cover for students in the UAE?',
      answer: 'We cover the IB Programme, IGCSE, Cambridge O and A Levels, the British and American curricula, and CBSE, ICSE and other Indian curricula.',
    },
    {
      question: 'Can lessons be scheduled around UAE school hours?',
      answer: 'Yes. Lessons are scheduled in UAE time and arranged around the school day.',
    },
    {
      question: 'Which currencies can I pay in?',
      answer: 'You can pay in AED, USD, GBP and other currencies.',
    },
    {
      question: 'Is there a free trial session?',
      answer: 'Yes. You can book a free trial session before committing to regular lessons.',
    },
  ],
};

const ACCENTS: Record<Region, string> = {
  uk: 'text-blue-600',
  us: 'text-red-600',
  ae: 'text-emerald-600',
};

const RegionalFaq: React.FC<{ region: Region }> = ({ region }) => {
  const faqs = FAQS[region];
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <JsonLd data={generateFAQSchema(faqs)} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white p-6 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-black text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-slate-600">
          Still have a question?{' '}
          <Link to="/hire-teacher" className={`font-black ${ACCENTS[region]} hover:underline`}>
            Book a free trial and ask your tutor
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default RegionalFaq;
