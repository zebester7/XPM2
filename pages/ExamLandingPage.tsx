
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updatePageMeta } from '../seoHelper.ts';
import Breadcrumb from '../components/Breadcrumb.tsx';

interface ExamLandingPageProps {
  exam: string;
}

const ExamLandingPage: React.FC<ExamLandingPageProps> = ({ exam }) => {
  const contentMap: Record<string, any> = {
    'O Level': {
      title: 'Online O Level Tutors | Expert O Level Tutoring | XPM Tutors',
      description: 'Find the best online O Level tutors for Cambridge & Edexcel. Expert tutors for Physics, Maths, Chemistry & all subjects. Book a free trial session today!',
      keywords: 'O Level tutors, online O Level tutors, O Level Physics tutor, O Level Maths tutor, O Level Chemistry tutor, Cambridge O Level, Edexcel O Level, O Level tuition',
      longText: 'Mastering the O Level curriculum requires a deep understanding of conceptual logic. Our expert O Level tutors specialize in Physics (5054), Mathematics Syllabus D (4024), Chemistry (5070), Biology (5090), Computer Science (2210), and English literature. We provide daily topical past paper practice, personalized study plans, and specialized revision sessions to ensure you achieve A* grades.',
      faqs: [
        { question: 'What are the benefits of hiring an O Level tutor online?', answer: 'Online O Level tutoring provides personalized attention, flexible scheduling, 1-on-1 doubt clearance, past paper practice, and the convenience of learning from home. Our tutors achieve 95%+ A* pass rates.' },
        { question: 'How much does O Level tutoring cost?', answer: 'Our O Level tutoring starts from affordable rates with flexible packages. We offer trial sessions so you can experience our teaching quality before committing.' },
        { question: 'Can online O Level tutors help with exam preparation?', answer: 'Yes! Our O Level tutors specialize in exam preparation with intensive topical revision, timed practice tests, exam technique training, and strategy sessions.' },
        { question: 'Which subjects can O Level tutors teach?', answer: 'We offer tutoring for all O Level subjects including Mathematics, Physics, Chemistry, Biology, Computer Science, English Language, History, and Geography.' },
        { question: 'How do I find the best O Level tutor for my needs?', answer: 'Browse our teacher directory, check tutor qualifications, read student reviews, and book a free trial session to find the perfect match for your learning style.' }
      ],
      serviceArea: ['Pakistan', 'United Kingdom', 'UAE', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain']
    },
    'A Level': {
      title: 'A Level Online Tutors | Expert A Level Tutoring | XPM Tutors',
      description: 'Expert online A Level tutors for Science & Mathematics. Get into top universities with our proven A Level tutoring strategies. Book a free trial!',
      keywords: 'A Level tutors, online A Level tutors, A Level Physics tutor, A Level Maths tutor, A Level Chemistry, A Level preparation',
      longText: 'A Level Physics and Mathematics are notorious for their difficulty. XPM Tutors breaks down complex topics like Quantum Physics and Advanced Integration into manageable segments. Our mentors are top achievers who have navigated these exact boards successfully.',
      faqs: [
        { question: 'What makes a good A Level tutor?', answer: 'Good A Level tutors combine deep subject knowledge with strong teaching skills. They provide personalized attention, exam technique training, and help students achieve top grades for university admission.' },
        { question: 'How can A Level tutors help with university entrance?', answer: 'Our A Level tutors focus on achieving A* grades, which are crucial for competitive university programs like Medicine, Engineering, and Law.' }
      ],
      serviceArea: ['Pakistan', 'United Kingdom', 'UAE', 'Saudi Arabia']
    },
    'SAT': {
      title: 'Digital SAT Online Prep | SAT Tutors | XPM Tutors',
      description: 'SAT tutors specializing in Digital SAT preparation. Score 1500+ with our proven strategies and intensive practice. Expert coaching available online.',
      keywords: 'SAT tutors, Online SAT tutor, SAT Math prep, SAT English, Digital SAT, College Board preparation',
      longText: 'The new Digital SAT requires a change in strategy. We focus on time-management, vocabulary precision, and math logic that helps students outsmart the adaptive testing model used by the College Board.',
      faqs: [
        { question: 'What is the Digital SAT?', answer: 'The Digital SAT is the new format introduced by the College Board, featuring an adaptive test structure and shorter duration (2 hours 45 minutes).' }
      ],
      serviceArea: ['United States', 'Pakistan', 'UAE', 'Canada']
    }
  };

  const data = contentMap[exam] || {
    title: `${exam} Online Preparation`,
    description: `Expert coaching and resources for ${exam} aspirants globally.`,
    keywords: [`${exam} Tutor`, `Online ${exam} Coaching`],
    longText: `Prepare for ${exam} with the best minds in the industry. Our platform offers structured syllabi, expert doubt clearance, and 24/7 WhatsApp support.`,
    faqs: []
  };

  useEffect(() => {
    // Update meta tags for SEO
    updatePageMeta({
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      canonical: `https://www.xpmtutors.com/${exam.toLowerCase().replace(/\s+/g, '-')}-tutors`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `${exam} Tutors | XPM Tutors`,
        "description": data.description,
        "url": `https://www.xpmtutors.com/${exam.toLowerCase().replace(/\s+/g, '-')}-tutors`,
        "image": "https://www.xpmtutors.com/logo.png",
        "priceRange": "$$",
        "areaServed": data.serviceArea || ["Pakistan", "United Kingdom", "UAE"],
        "serviceType": `${exam} Tutoring`,
        "availableLanguage": ["en", "ur"],
        "sameAs": [
          "https://facebook.com/xpmtutors",
          "https://instagram.com/xpmtutors",
          "https://twitter.com/xpmtutors"
        ]
      }
    });
  }, [exam, data]);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />
      
      <section className="bg-xpm-blue py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter uppercase">{data.title.split('|')[0].trim()}</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium">{data.description}</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/hire-teacher" className="inline-block px-8 py-4 bg-xpm-orange text-white font-black rounded-lg hover:bg-orange-600 transition uppercase tracking-widest text-sm">
              Book Free Trial
            </Link>
            <Link to="/teacher-directory" className="inline-block px-8 py-4 bg-white/20 text-white font-black rounded-lg hover:bg-white/30 transition uppercase tracking-widest text-sm border border-white/30">
              Browse Tutors
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Why Choose Our {exam} Tutors?</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              {data.longText}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h4 className="font-black text-slate-900">Expert Qualifications</h4>
                  <p className="text-sm text-slate-600">University-qualified tutors with years of experience</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-black text-slate-900">Proven Track Record</h4>
                  <p className="text-sm text-slate-600">95%+ A* pass rate in {exam} exams</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <h4 className="font-black text-slate-900">Flexible Scheduling</h4>
                  <p className="text-sm text-slate-600">Book sessions that fit your schedule</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
             <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <h3 className="text-xl font-black mb-4 uppercase">Core Subjects</h3>
                <ul className="space-y-3">
                   {['Physics', 'Mathematics', 'Chemistry', 'Computer Science'].map(s => (
                     <li key={s} className="flex items-center gap-2 text-slate-600 font-bold">
                        <span className="text-xpm-green">✓</span> {s}
                     </li>
                   ))}
                </ul>
             </div>
             <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <h3 className="text-xl font-black mb-4 uppercase">Our Services</h3>
                <ul className="space-y-3">
                   {['1-on-1 Live Sessions', 'Past Paper Practice', 'Recorded Lessons', '24/7 WhatsApp Support'].map(s => (
                     <li key={s} className="flex items-center gap-2 text-slate-600 font-bold">
                        <span className="text-xpm-orange">✦</span> {s}
                     </li>
                   ))}
                </ul>
             </div>
          </div>

          {/* Service Area */}
          {data.serviceArea && (
            <div className="bg-xpm-blue/5 p-8 rounded-2xl border border-xpm-blue/10 mb-12">
              <h3 className="text-xl font-black mb-4 text-slate-900 uppercase">Available in These Regions</h3>
              <div className="flex flex-wrap gap-3">
                {data.serviceArea.map(location => (
                  <span key={location} className="px-4 py-2 bg-xpm-blue text-white rounded-lg text-sm font-bold">
                    {location}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {data.faqs && data.faqs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {data.faqs.map((faq, idx) => (
                  <details key={idx} className="group border border-slate-200 rounded-xl overflow-hidden transition hover:border-xpm-blue/30">
                    <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-black text-slate-900 bg-slate-50 hover:bg-slate-100 transition">
                      {faq.question}
                      <span className="transform group-open:rotate-180 transition">▼</span>
                    </summary>
                    <div className="px-6 py-4 text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
            <Link to="/hire-teacher" className="inline-block px-12 py-5 bg-xpm-orange text-white font-black rounded-2xl shadow-xl hover:bg-orange-600 transition uppercase tracking-widest text-sm">
               Hire a Specialist for {exam}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Geo-Specific Targeting Footer */}
      <section className="bg-slate-900 py-12 text-white/40 text-[10px] font-black uppercase tracking-[0.3em] text-center">
        <div className="max-w-7xl mx-auto px-4">
          Online {exam} Tutors in United Kingdom • Online {exam} Tutors in UAE • Online {exam} Tutors in Pakistan • Online {exam} Tutors in Saudi Arabia
        </div>
      </section>
    </div>
  );
};

export default ExamLandingPage;
