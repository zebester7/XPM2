import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updatePageMeta } from '../seoHelper';
import { addHrefLangTags, generateHreflangs, generateLocalBusinessSchema, addStructuredData } from '../internationalSEOHelper';

const UKLandingPage: React.FC = () => {
  useEffect(() => {
    // Update SEO metadata
    updatePageMeta({
      title: 'GCSE & A Level Tutors in UK | Expert Online Tutoring | XPM Tutors',
      description: 'Best GCSE and A Level tutors in the UK. Expert online tutoring for Cambridge, IGCSE, and A Levels. Free trial sessions. Trusted by thousands of UK students.',
      keywords: 'GCSE tutor, A Level tutor UK, IGCSE tutor, Cambridge, Maths tutor London, Physics tutor UK, Chemistry tutor, online tutoring UK',
      canonical: 'https://xpmtutors.com/uk/'
    });

    // Add hreflang tags
    const hreflangs = generateHreflangs('/uk/', true);
    addHrefLangTags(hreflangs);

    // Add LocalBusiness schema
    const localBusinessSchema = generateLocalBusinessSchema('en-gb');
    addStructuredData(localBusinessSchema, 'local-business-schema');

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/50 rounded-full mb-6 border border-blue-200">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">🇬🇧 UK Specialist</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 lg:mb-8 leading-none">
                Best <span className="text-blue-600">GCSE & A Level</span> Tutors in the UK
              </h1>
              
              <h2 className="text-lg sm:text-xl text-slate-600 mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Expert online tutoring for Cambridge, IGCSE, and A Levels. Proven track record helping UK students achieve top grades. Free trial session available.
              </h2>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-0">
                <Link 
                  to="/hire-teacher" 
                  className="px-8 py-4 lg:py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition transform hover:-translate-y-1 text-center text-lg"
                >
                  Book Expert Tutor
                </Link>
                <Link 
                  to="/signup" 
                  className="px-8 py-4 lg:py-5 bg-white text-blue-600 border-2 border-blue-600 font-black rounded-2xl hover:bg-blue-50 transition text-center shadow-sm text-lg"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-4xl font-black text-blue-600 mb-2">2,500+</div>
                <p className="text-slate-600 font-medium">UK Students Tutored</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-4xl font-black text-blue-600 mb-2">92%</div>
                <p className="text-slate-600 font-medium">Grade Improvement Rate</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-4xl font-black text-blue-600 mb-2">4.9/5</div>
                <p className="text-slate-600 font-medium">Student Satisfaction Rating</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-4xl font-black text-blue-600 mb-2">100%</div>
                <p className="text-slate-600 font-medium">University Placement Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-center">
            GCSE & A Level Subjects
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Expert tutoring across all major subjects for Cambridge GCSE, IGCSE, and A Level examinations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Mathematics', 'Physics', 'Chemistry', 'English', 'Biology', 'Economics', 'Further Maths', 'Computer Science', 'Geography'].map((subject) => (
              <div key={subject} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border-l-4 border-blue-600">
                <h3 className="text-xl font-black text-slate-900 mb-2">{subject}</h3>
                <p className="text-slate-600 text-sm">Expert tutors specializing in {subject} for GCSE and A Level</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            Why UK Students Choose XPM Tutors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Cambridge Exam Expertise', desc: 'Specialists in GCSE, IGCSE, and A Level Cambridge curriculum' },
              { title: 'Proven Results', desc: 'Average grade improvement of 2-3 grades within 3 months' },
              { title: 'Flexible Scheduling', desc: 'UK timezone friendly, weekend and evening sessions available' },
              { title: 'University Admission Support', desc: 'Help with PS, interview prep, and UCAS guidance' },
              { title: 'Affordable Pricing', desc: 'Competitive rates: from £15-30/hour for group sessions' },
              { title: 'Personalized Plans', desc: 'Custom learning plans based on your exam objectives' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 border border-slate-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50/30 transition">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-blue-600">{idx + 1}</span>
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">Ready to Boost Your Grades?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your free trial session today and see the difference expert tutoring can make.
          </p>
          <Link 
            to="/hire-teacher"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition shadow-2xl"
          >
            Book Free Trial Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UKLandingPage;
