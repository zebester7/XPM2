import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updatePageMeta } from '../seoHelper';
import { addHrefLangTags, generateHreflangs, generateLocalBusinessSchema, addStructuredData } from '../internationalSEOHelper';

const USLandingPage: React.FC = () => {
  useEffect(() => {
    // Update SEO metadata
    updatePageMeta({
      title: 'SAT & AP Exam Prep Tutors USA | Expert Online Tutoring | XPM Tutors',
      description: 'Best SAT and AP exam prep tutors in the USA. Expert online tutoring for high school and college prep. Free trial sessions. Trusted by thousands of US students.',
      keywords: 'SAT tutor, AP tutor, SAT prep, AP exam help, high school tutoring USA, college prep tuition, PSAT tutor, ACT tutoring',
      canonical: 'https://xpmtutors.com/us/'
    });

    // Add hreflang tags
    const hreflangs = generateHreflangs('/us/', true);
    addHrefLangTags(hreflangs);

    // Add LocalBusiness schema
    const localBusinessSchema = generateLocalBusinessSchema('en-us');
    addStructuredData(localBusinessSchema, 'local-business-schema');

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50/50 rounded-full mb-6 border border-amber-200">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">🇺🇸 USA Specialist</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 lg:mb-8 leading-none">
                Best <span className="text-amber-600">SAT & AP</span> Exam Prep Tutors
              </h1>
              
              <h2 className="text-lg sm:text-xl text-slate-600 mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Expert online tutoring for SAT, AP, ACT, and high school subjects. Help thousands of US students achieve their target scores and college admission goals.
              </h2>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-0">
                <Link 
                  to="/hire-teacher" 
                  className="px-8 py-4 lg:py-5 bg-amber-600 text-white font-black rounded-2xl shadow-xl shadow-amber-600/20 hover:bg-amber-700 transition transform hover:-translate-y-1 text-center text-lg"
                >
                  Book Expert Tutor
                </Link>
                <Link 
                  to="/signup" 
                  className="px-8 py-4 lg:py-5 bg-white text-amber-600 border-2 border-amber-600 font-black rounded-2xl hover:bg-amber-50 transition text-center shadow-sm text-lg"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl space-y-8">
              <div className="border-l-4 border-amber-600 pl-6">
                <div className="text-4xl font-black text-amber-600 mb-2">3,200+</div>
                <p className="text-slate-600 font-medium">US Students Tutored</p>
              </div>
              <div className="border-l-4 border-amber-600 pl-6">
                <div className="text-4xl font-black text-amber-600 mb-2">200+</div>
                <p className="text-slate-600 font-medium">Avg SAT Score Improvement</p>
              </div>
              <div className="border-l-4 border-amber-600 pl-6">
                <div className="text-4xl font-black text-amber-600 mb-2">4.9/5</div>
                <p className="text-slate-600 font-medium">Student Satisfaction Rating</p>
              </div>
              <div className="border-l-4 border-amber-600 pl-6">
                <div className="text-4xl font-black text-amber-600 mb-2">95%</div>
                <p className="text-slate-600 font-medium">College Admission Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Prep Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-center">
            SAT, AP & High School Test Prep
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Comprehensive preparation for college entrance exams and Advanced Placement tests
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['SAT Math', 'SAT Reading', 'AP Calculus', 'AP Biology', 'AP Chemistry', 'AP Physics', 'ACT Prep', 'PSAT'].map((exam) => (
              <div key={exam} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border-l-4 border-amber-600">
                <h3 className="text-xl font-black text-slate-900 mb-2">{exam}</h3>
                <p className="text-slate-600 text-sm">Expert preparation and practice tests</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            Why US Students Choose XPM Tutors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Proven SAT Strategies', desc: 'Specific techniques to improve scores by 200+ points' },
              { title: 'AP Expert Tutors', desc: 'Teachers experienced with AP exam formats and grading' },
              { title: 'US Timezone Friendly', desc: 'Convenient scheduling for students across all time zones' },
              { title: 'College Admission Guidance', desc: 'Essay review, college selection, and interview prep' },
              { title: 'Affordable Rates', desc: 'Starting from $20-40/hour with flexible payment plans' },
              { title: 'Track Record of Success', desc: '95% of students admitted to their top college choices' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 border border-slate-200 rounded-2xl hover:border-amber-400 hover:bg-amber-50/30 transition">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-amber-600">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            What Our Students Say
          </h2>
          
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border-l-4 border-amber-600">
            <p className="text-xl text-slate-700 mb-6 italic">
              "XPM Tutors helped me improve my SAT score from 1150 to 1520 in just 4 months. The tutors are incredibly patient and know exactly how to tackle difficult questions. I got accepted to my dream school!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                <span className="text-lg font-black">JM</span>
              </div>
              <div>
                <p className="font-black text-slate-900">Jessica Martinez</p>
                <p className="text-sm text-slate-600">Student, California</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">Ready to Ace Your Exams?</h2>
          <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
            Book your free trial session today and start your journey to top exam scores and college admission success.
          </p>
          <Link 
            to="/hire-teacher"
            className="inline-block px-10 py-4 bg-white text-amber-600 font-black rounded-2xl hover:bg-amber-50 transition shadow-2xl"
          >
            Book Free Trial Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default USLandingPage;
