/**
 * /online-calculus-tutors — university and engineering calculus tutoring, worldwide.
 *
 * Price is set in USD (US$500 / month for 20 one-hour classes) and shown to each visitor in their
 * local currency after hydration (see LocalPrice). The prerendered HTML and Course schema use USD.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd.tsx';
import DemoBookingForm from '../components/DemoBookingForm.tsx';
import { generateFAQSchema } from '../seoHelper.ts';
import { useLocalCurrency, formatPrice } from '../components/LocalPrice.tsx';

const SITE = 'https://www.xpmtutors.com';
const PRICE_USD = 500;
const CLASSES_PER_MONTH = 20;
const WHATSAPP_LINK = `https://wa.me/923009508592?text=${encodeURIComponent("Hi XPM Tutors! I'm a university student and I'd like help with calculus.")}`;

const Check: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const COURSES = [
  { symbol: 'd/dx', name: 'Calculus I · Differential Calculus', topics: 'Limits and continuity, derivatives, chain rule, implicit differentiation, related rates, optimisation, curve sketching, L’Hôpital’s rule.' },
  { symbol: '∫', name: 'Calculus II · Integral Calculus & Series', topics: 'Integration by parts, trig substitution, partial fractions, improper integrals, areas and volumes, sequences, series and convergence tests, Taylor series.' },
  { symbol: '∂', name: 'Calculus III · Multivariable Calculus', topics: 'Vectors, partial derivatives, gradients, Lagrange multipliers, double and triple integrals, polar, cylindrical and spherical coordinates.' },
  { symbol: '∇', name: 'Vector Calculus', topics: 'Vector fields, line and surface integrals, divergence and curl, Green’s, Stokes’ and the divergence theorem.' },
  { symbol: 'y′', name: 'Differential Equations', topics: 'First and second order ODEs, separable and linear equations, systems, Laplace transforms, series solutions and an introduction to PDEs.' },
  { symbol: 'ℒ', name: 'Engineering Mathematics', topics: 'The calculus in first and second year engineering maths: Fourier series, Laplace transforms, complex numbers and applied problems.' },
];

const REGIONS = [
  { code: 'US', name: 'United States', desc: 'Calculus I, II and III, differential equations and AP Calculus AB/BC for college and high school students.' },
  { code: 'CA', name: 'Canada', desc: 'First-year differential and integral calculus and multivariable calculus for university and engineering students.' },
  { code: 'UK', name: 'United Kingdom', desc: 'Year 1 and Year 2 engineering mathematics modules, plus A Level Maths and Further Maths calculus.' },
  { code: 'AU', name: 'Australia & New Zealand', desc: 'First-year university mathematics and engineering calculus units.' },
  { code: 'EU', name: 'Europe', desc: 'English-taught engineering and science programmes: Analysis, Calculus and Mathematics for Engineers.' },
  { code: '+', name: 'Middle East, Asia & beyond', desc: 'Engineering students in the UAE, Saudi Arabia, Pakistan, India, Malaysia, Singapore and elsewhere.' },
];

const INCLUDED = [
  `${CLASSES_PER_MONTH} live one-hour classes a month`,
  '5 classes a week, scheduled in your time zone',
  'Follows your own university course and syllabus',
  'Step-by-step explanations of problem sets and practice questions',
  'Midterm and final exam preparation with past paper practice',
  'Free trial class before you pay',
];

const FAQS = [
  {
    question: 'How much does online calculus tutoring cost?',
    answer: `US$${PRICE_USD} a month for ${CLASSES_PER_MONTH} live one-hour classes, five days a week. That works out to US$${PRICE_USD / CLASSES_PER_MONTH} per class. The page shows the approximate price in your local currency, for example Canadian dollars, British pounds or Australian dollars.`,
  },
  {
    question: 'Can you help with the calculus course at my university?',
    answer: 'Yes. Share your course outline or syllabus and your tutor will follow it topic by topic, whether it is Calculus I, II or III, multivariable or vector calculus, differential equations or an engineering mathematics module.',
  },
  {
    question: 'I study engineering. Is this the right course for me?',
    answer: 'Yes. Most of our calculus students are first and second year engineering students. Lessons focus on the methods you need for your maths modules and how they are used in physics, mechanics and circuits.',
  },
  {
    question: 'Which countries and time zones do you teach?',
    answer: 'Students join from the United States, Canada, the United Kingdom, Australia, Europe, the Middle East and Asia. Classes are scheduled in your local time zone.',
  },
  {
    question: 'Will the tutor do my assignments or online quizzes for me?',
    answer: 'No. Your tutor explains the methods with similar worked examples and checks your understanding, so you can complete graded work yourself and do well in exams. We do not complete assessed work for students.',
  },
  {
    question: 'Is there a free trial class?',
    answer: 'Yes. Book a free trial class using the form on this page. WhatsApp opens with your details filled in, and we reply to arrange a time.',
  },
];

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Online Calculus Tutoring for University & Engineering Students',
  description: 'Live online calculus classes for university and engineering students: Calculus I, II and III, multivariable and vector calculus, differential equations and engineering mathematics.',
  url: `${SITE}/online-calculus-tutors`,
  provider: { '@id': `${SITE}/#organization` },
  educationalLevel: 'University',
  teaches: COURSES.map(c => c.name.split(' · ').pop()),
  offers: {
    '@type': 'Offer',
    category: 'Paid',
    price: String(PRICE_USD),
    priceCurrency: 'USD',
    description: `${CLASSES_PER_MONTH} one-hour classes per month`,
    url: `${SITE}/online-calculus-tutors`,
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Online',
    courseWorkload: 'PT20H',
    courseSchedule: { '@type': 'Schedule', duration: 'PT1H', repeatFrequency: 'P1D', repeatCount: CLASSES_PER_MONTH },
  },
};

const PricingCard: React.FC = () => {
  const cur = useLocalCurrency();
  const local = cur.currency !== 'USD';
  return (
    <div className="max-w-md mx-auto rounded-3xl bg-white text-slate-900 shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-3 text-center text-sm font-black uppercase tracking-widest text-slate-900">
        Monthly Plan
      </div>
      <div className="p-8 sm:p-10">
        <p className="text-center" aria-live="polite">
          <span className="text-5xl sm:text-6xl font-black tracking-tight tabular-nums">{formatPrice(PRICE_USD, cur)}</span>
          <span className="text-slate-500 font-bold"> / month</span>
        </p>
        <p className="mt-2 text-center text-slate-600 font-medium min-h-[1.5rem]">
          {CLASSES_PER_MONTH} classes · about {formatPrice(PRICE_USD / CLASSES_PER_MONTH, cur)} per class
        </p>
        <p className="mt-1 text-center text-xs text-slate-400 min-h-[1rem]">
          {local ? `Approximate, converted from US$${PRICE_USD} at today’s exchange rate.` : 'Prices in US dollars.'}
        </p>
        <ul className="mt-8 space-y-3">
          {INCLUDED.map(item => (
            <li key={item} className="flex gap-3">
              <Check className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
        <a href="#book-demo" className="mt-8 block text-center py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-lg transition">
          Start With a Free Class
        </a>
      </div>
    </div>
  );
};

const CalculusTutorsPage: React.FC = () => (
  <div className="bg-white overflow-x-hidden">
    <JsonLd data={courseSchema} />
    <JsonLd data={generateFAQSchema(FAQS)} />

    {/* Hero */}
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] bg-amber-500/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-24 w-[28rem] h-[28rem] bg-indigo-500/25 rounded-full blur-3xl" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 text-center lg:text-left">
          <p className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/15 text-[11px] font-black uppercase tracking-widest text-amber-300">
            University &amp; Engineering Maths · Worldwide
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Calculus Tutors</span> for University &amp; Engineering Students
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Live calculus classes five days a week for students in the US, Canada, the UK, Australia and worldwide.
            Calculus I, II and III, multivariable and vector calculus, differential equations and engineering mathematics,
            taught around your own university course.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="#book-demo" className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-2xl shadow-xl shadow-amber-500/20 transition text-lg">
              Book a Free Trial Class
            </a>
            <a href="#pricing" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black rounded-2xl transition text-lg">
              See Pricing
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 hidden sm:block" aria-hidden="true">
          <div className="relative mx-auto max-w-sm rounded-3xl bg-white/[0.06] border border-white/10 backdrop-blur p-8 font-serif shadow-2xl">
            <p className="text-amber-300 text-xs font-sans font-black uppercase tracking-widest">Today’s class</p>
            <p className="mt-6 text-3xl italic">∫ x e<sup>x</sup> dx</p>
            <p className="mt-3 text-slate-300 italic">= x e<sup>x</sup> − ∫ e<sup>x</sup> dx</p>
            <p className="mt-3 text-2xl italic text-amber-200">= e<sup>x</sup>(x − 1) + C</p>
            <div className="mt-8 h-px bg-white/10" />
            <p className="mt-6 text-xl italic text-slate-300">∇ · F = ∂P/∂x + ∂Q/∂y + ∂R/∂z</p>
            <span className="absolute -top-4 -right-4 rotate-6 rounded-xl bg-amber-400 text-slate-950 px-3 py-1.5 text-sm font-sans font-black shadow-lg">Calc II</span>
          </div>
        </div>
      </div>
    </section>

    {/* Courses */}
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">University Calculus Courses We Tutor</h2>
        <p className="mt-4 text-center text-slate-600 text-lg max-w-2xl mx-auto">
          From first-semester limits to second-year differential equations, matched to your course outline.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map(c => (
            <article key={c.name} className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition">
              <span className="inline-flex min-w-12 h-12 px-3 rounded-2xl bg-slate-900 text-amber-300 items-center justify-center font-serif italic text-xl" aria-hidden="true">{c.symbol}</span>
              <h3 className="mt-5 text-lg font-black text-slate-900">{c.name}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{c.topics}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-slate-600">
          Still at school? We also tutor AP Calculus AB/BC, A Level Further Maths and IB Maths HL. See our{' '}
          <Link to="/a-level-tutors" className="text-indigo-700 font-bold hover:underline">A Level tutors</Link>.
        </p>
      </div>
    </section>

    {/* Regions */}
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">Calculus Help Wherever You Study</h2>
        <p className="mt-4 text-center text-slate-600 text-lg max-w-2xl mx-auto">
          Engineering and science students join from universities around the world, with classes in their own time zone.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REGIONS.map(r => (
            <div key={r.name} className="p-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-200 transition">
              <h3 className="flex items-center gap-3 text-lg font-black text-slate-900"><span className="inline-flex w-9 h-9 rounded-xl bg-slate-900 text-amber-300 text-xs font-black items-center justify-center" aria-hidden="true">{r.code}</span>{r.name}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">How Your Month Works</h2>
        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ['Free trial class', 'Meet your tutor, share your course outline and the topics you find hardest.'],
            ['A plan for your semester', 'Your tutor maps the month to your lectures, problem sets and exam dates.'],
            ['Five classes a week', 'One hour a day, so new topics are explained before lectures move on.'],
            ['Exam preparation', 'Before midterms and finals, classes switch to past papers and timed practice.'],
          ].map(([title, desc], i) => (
            <li key={title} className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200">
              <span className="w-10 h-10 shrink-0 rounded-full bg-slate-900 text-amber-300 font-black flex items-center justify-center">{i + 1}</span>
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-1">{title}</h3>
                <p className="text-slate-600">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Pricing */}
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-center tracking-tight">Simple Monthly Pricing</h2>
        <p className="mt-4 mb-12 text-center text-slate-300 text-lg max-w-2xl mx-auto">
          One plan, shown in your local currency. No sign-up fee and a free trial class first.
        </p>
        <PricingCard />
      </div>
    </section>

    <DemoBookingForm
      program="Online Calculus Tutoring"
      board="University"
      heading="Book a Free Calculus Trial Class"
      phonePlaceholder="+1 416 555 0123"
      level={{
        label: 'Course',
        options: ['Calculus I', 'Calculus II', 'Calculus III / Multivariable', 'Vector Calculus', 'Differential Equations', 'Engineering Mathematics', 'AP Calculus / A Level', 'Other'],
        defaultValue: 'Calculus I',
      }}
      detail={{
        label: 'Where you study',
        options: ['United States', 'Canada', 'United Kingdom', 'Australia / New Zealand', 'Europe', 'UAE / Gulf', 'Pakistan / India', 'Other'],
        defaultValue: 'United States',
      }}
      askSubject
      subjectLabel="University and programme"
      subjectPlaceholder="e.g. Mechanical Engineering, Year 1"
      offer="free trial calculus class"
      cta="Book My Free Calculus Class"
      theme={{
        section: 'bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950',
        focus: 'focus:border-amber-500',
        button: 'bg-amber-400 hover:bg-amber-300 text-slate-950',
      }}
    />

    {/* FAQ */}
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center tracking-tight">Calculus Tutoring FAQs</h2>
        <div className="mt-10 space-y-3">
          {FAQS.map(faq => (
            <details key={faq.question} className="group rounded-2xl bg-white border border-slate-200 open:shadow-md transition">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6 font-black text-slate-900 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base sm:text-lg">{faq.question}</h3>
                <span className="text-2xl leading-none text-amber-500 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
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
        <h2 className="text-xl font-black text-slate-900">More From XPM Tutors</h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-bold">
          {[
            ['/a-level-tutors', 'A Level Maths & Physics'],
            ['/sat-tutors', 'Digital SAT Tutors'],
            ['/us', 'SAT Group Prep (US)'],
            ['/uk', 'UK GCSE & A Level'],
            ['/ae', 'UAE Tutoring'],
            ['/about', 'About XPM Tutors'],
          ].map(([to, label]) => (
            <li key={to}><Link to={to} className="block px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:border-indigo-400 hover:text-indigo-700 transition">{label}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default CalculusTutorsPage;
