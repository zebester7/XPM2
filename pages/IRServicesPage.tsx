import React from 'react';
import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd.tsx';
import { generateFAQSchema } from '../seoHelper.ts';

// Booking goes through the demo form so the request reaches the admin dashboard
const BOOK_TRIAL = '/hire-teacher?subject=Global%20Perspectives';

const STAGES = [
  { title: 'Choosing a Topic', desc: 'Help identifying a contemporary global issue and narrowing it to a question you can research properly' },
  { title: 'Finding Sources', desc: 'Guidance on locating credible, varied sources and judging how reliable each one is' },
  { title: 'Planning the Structure', desc: 'Working out how your introduction, perspectives, evaluation and conclusion fit together' },
  { title: 'Analysis and Evaluation', desc: 'Practice comparing different perspectives and weighing up evidence, not just describing it' },
  { title: 'Feedback on Drafts', desc: 'Detailed comments on each draft, explained against the assessment criteria, for you to act on' },
  { title: 'Referencing', desc: 'Teaching you how to cite sources and build a bibliography correctly' },
];

const STEPS = [
  { title: 'Free trial session', desc: 'Tell your tutor where you are with your report and when your school deadline is.' },
  { title: 'A plan to your deadline', desc: 'Together you set a timeline for research, drafting and revision that leaves room for feedback.' },
  { title: 'Draft, feedback, revise', desc: 'You write; your tutor reviews each draft and explains what to strengthen and why.' },
  { title: 'Final check', desc: 'A last review of structure, evaluation and referencing before you submit to your teacher.' },
];

const FAQS = [
  {
    question: 'Will you write my Individual Report for me?',
    answer: 'No. Your Individual Report must be your own work. We teach you how to research, structure and evaluate your report, and give feedback on the drafts you write, so you understand how to improve it yourself.',
  },
  {
    question: 'Which stages of the Individual Report do you help with?',
    answer: 'Every stage: choosing and narrowing a topic, finding and evaluating sources, planning the structure, analysing different perspectives, revising drafts and referencing.',
  },
  {
    question: 'How do the sessions work?',
    answer: 'Sessions are one-to-one and online, and are scheduled around your school deadlines. Between sessions you work on your report, and your tutor gives feedback on what you have written.',
  },
  {
    question: 'When should I start?',
    answer: 'As early as possible once your teacher sets the Individual Report, so there is time for several rounds of feedback before your school\'s internal deadline.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes. You can book a free trial session before committing to regular sessions.',
  },
];

const IRServicesPage: React.FC = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "O Level Global Perspectives Individual Report Coaching",
        "description": "One-to-one online coaching for the O Level Global Perspectives Individual Report: topic choice, research, structure, evaluation, referencing and feedback on drafts.",
        "serviceType": "Global Perspectives Tutoring",
        "url": "https://www.xpmtutors.com/ir-services",
        "provider": { "@id": "https://www.xpmtutors.com/#organization" },
        "areaServed": "Worldwide",
        "offers": {
          "@type": "Offer",
          "name": "Free Trial Session",
          "price": "0",
          "priceCurrency": "USD",
          "url": "https://www.xpmtutors.com/hire-teacher"
        }
      }} />
      <JsonLd data={generateFAQSchema(FAQS)} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-xpm-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-xpm-green/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 rounded-full mb-6 border border-xpm-blue/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-xpm-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-xpm-green"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-xpm-blue">Global Perspectives Coaching</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                O Level Global Perspectives <span className="text-xpm-blue">Individual Report</span> Support
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                One-to-one coaching for your Global Perspectives Individual Report. A tutor guides you from choosing a topic to your
                final draft, explaining what the assessment criteria ask for and giving feedback on the work you write.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Guidance at every stage, from topic choice to final draft',
                  'Help narrowing your topic into a question you can research',
                  'Feedback on your drafts, explained against the assessment criteria',
                  'Coaching on sources, evaluation and referencing'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-xpm-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={BOOK_TRIAL}
                  className="px-8 py-4 bg-xpm-orange text-white font-black rounded-2xl shadow-xl shadow-xpm-orange/20 hover:bg-orange-600 transition transform hover:-translate-y-1 text-center text-lg"
                >
                  Book Your Free Trial
                </Link>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 bg-white text-xpm-blue border-2 border-xpm-blue/20 font-black rounded-2xl hover:bg-slate-50 transition text-center"
                >
                  How It Works
                </a>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg aria-hidden="true" className="w-7 h-7 text-xpm-blue" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Research Guidance</h3>
                <p className="text-slate-600">Work with a tutor who knows what the Individual Report is assessed on and can show you how to research a global issue in depth.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg aria-hidden="true" className="w-7 h-7 text-xpm-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Clear Structure</h3>
                <p className="text-slate-600">Learn how to organise your research, analyse sources critically and build an argument that compares different perspectives.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <svg aria-hidden="true" className="w-7 h-7 text-xpm-orange" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M4 5h16v11H9l-5 4V5z" />
                    <path d="M8 9h8M8 12h5" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Feedback on Every Draft</h3>
                <p className="text-slate-600">Get specific comments on what to strengthen in each draft and why, so you improve the report yourself.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic integrity */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl border-2 border-xpm-blue/15 bg-blue-50/50">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Your report, your work</h2>
            <p className="text-slate-700 leading-relaxed">
              The Individual Report has to be your own work, so we never write it, or any part of it, for you. What we do is
              teach: how to choose and narrow a topic, research it, evaluate sources and perspectives, and structure your report.
              Then we give feedback on the drafts you write. That way you learn the skills the report is assessed on, and the
              report you submit is genuinely yours.
            </p>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Support at Every Stage</h2>
            <p className="text-xl text-slate-600">From choosing a topic to your final draft</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STAGES.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-xpm-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-xpm-blue">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-12 text-center">How It Works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map(faq => (
              <div key={faq.question} className="bg-white p-6 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-black text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-slate-600">
            Also preparing for exams? See our <Link to="/o-level-tutors" className="text-xpm-blue font-bold hover:underline">O Level tutors</Link> for
            every other subject.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-xpm-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Ready to Start Your Individual Report?</h2>
          <p className="text-xl mb-10 text-white/90">Book a free trial session and get a plan for your report, with time for feedback before your deadline.</p>
          <Link
            to={BOOK_TRIAL}
            className="inline-block px-10 py-5 bg-xpm-orange text-white font-black rounded-2xl shadow-xl shadow-black/20 hover:bg-orange-600 transition transform hover:-translate-y-1 text-lg"
          >
            Book Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IRServicesPage;
