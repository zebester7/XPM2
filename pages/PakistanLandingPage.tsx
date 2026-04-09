import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updatePageMeta } from '../seoHelper';
import { addHrefLangTags, generateHreflangs, generateLocalBusinessSchema, addStructuredData } from '../internationalSEOHelper';

const PakistanLandingPage: React.FC = () => {
  useEffect(() => {
    // Update SEO metadata
    updatePageMeta({
      title: 'O & A Level Tutors Pakistan | Expert Online Classes | XPM Tutors',
      description: 'Best O Level and A Level tutors in Pakistan. Expert online tutoring for Cambridge curriculum. Free trial sessions. Trusted by thousands of Pakistani students.',
      keywords: 'O Level tutor Pakistan, A Level tutor Pakistan, IGCSE tutor Pakistan, Cambridge tutor Pakistan, Maths tutor Pakistan, Physics tutor Pakistan, Online tutor Pakistan',
      canonical: 'https://xpmtutors.com/pk/'
    });

    // Add hreflang tags
    const hreflangs = generateHreflangs('/pk/', true);
    addHrefLangTags(hreflangs);

    // Add LocalBusiness schema
    const localBusinessSchema = generateLocalBusinessSchema('en-pk');
    addStructuredData(localBusinessSchema, 'local-business-schema');

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50/50 rounded-full mb-6 border border-rose-200">
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">🇵🇰 Pakistan Specialist</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 lg:mb-8 leading-none">
                Best <span className="text-rose-600">O & A Level</span> Tutors in Pakistan
              </h1>
              
              <h2 className="text-lg sm:text-xl text-slate-600 mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Expert online tutoring for O Levels, A Levels, and IGCSE Cambridge curriculum. Supporting students across Islamabad, Karachi, Lahore, and all major cities.
              </h2>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-0">
                <Link 
                  to="/hire-teacher" 
                  className="px-8 py-4 lg:py-5 bg-rose-600 text-white font-black rounded-2xl shadow-xl shadow-rose-600/20 hover:bg-rose-700 transition transform hover:-translate-y-1 text-center text-lg"
                >
                  Book Expert Tutor
                </Link>
                <Link 
                  to="/signup" 
                  className="px-8 py-4 lg:py-5 bg-white text-rose-600 border-2 border-rose-600 font-black rounded-2xl hover:bg-rose-50 transition text-center shadow-sm text-lg"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl space-y-8">
              <div className="border-l-4 border-rose-600 pl-6">
                <div className="text-4xl font-black text-rose-600 mb-2">5,200+</div>
                <p className="text-slate-600 font-medium">Pakistani Students Tutored</p>
              </div>
              <div className="border-l-4 border-rose-600 pl-6">
                <div className="text-4xl font-black text-rose-600 mb-2">89%</div>
                <p className="text-slate-600 font-medium">A Grade Achievement Rate</p>
              </div>
              <div className="border-l-4 border-rose-600 pl-6">
                <div className="text-4xl font-black text-rose-600 mb-2">4.9/5</div>
                <p className="text-slate-600 font-medium">Student Satisfaction Rating</p>
              </div>
              <div className="border-l-4 border-rose-600 pl-6">
                <div className="text-4xl font-black text-rose-600 mb-2">10+</div>
                <p className="text-slate-600 font-medium">Years of Pakistan Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cambridge Curriculum Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-center">
            Cambridge O & A Level Expertise
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Comprehensive preparation for Cambridge International Examinations (CIE) and local Pakistan boards
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Mathematics', 'Physics', 'Chemistry', 'English', 'Biology', 'Urdu', 'Economics', 'Computing', 'Geography'].map((subject) => (
              <div key={subject} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border-l-4 border-rose-600">
                <h3 className="text-xl font-black text-slate-900 mb-2">{subject}</h3>
                <p className="text-slate-600 text-sm">Expert O & A Level preparation for Cambridge and local boards</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            Why Pakistani Students Choose XPM Tutors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Cambridge Expertise', desc: 'Deep knowledge of Cambridge exam patterns and marking schemes' },
              { title: 'Pakistan-Focused', desc: 'Understanding of Pakistani education system and requirements' },
              { title: 'Affordable Pricing', desc: 'Competitive rates in PKR with flexible payment options' },
              { title: 'All Cities Coverage', desc: 'Serving Islamabad, Karachi, Lahore, Peshawar, and more' },
              { title: 'University Preparation', desc: 'Help with university entrance exams and preparation' },
              { title: 'Proven Track Record', desc: '89% of students achieve A grades, many enter top universities' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 border border-slate-200 rounded-2xl hover:border-rose-400 hover:bg-rose-50/30 transition">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-rose-600">{idx + 1}</span>
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

      {/* Success Stories */}
      <section className="py-16 lg:py-24 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            Student Success Stories
          </h2>
          
          <div className="space-y-6">
            {[
              {
                name: 'Ahmed Khan',
                city: 'Islamabad',
                quote: 'From C to A* in Mathematics O Levels. The tutors break down complex topics beautifully.',
                grade: 'O Level Math - A*'
              },
              {
                name: 'Fatima Ali',
                city: 'Karachi',
                quote: 'Best decision for my A Level Physics preparation. Very patient and thorough teaching.',
                grade: 'A Level Physics - A'
              }
            ].map((story, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-rose-600">
                <p className="text-lg text-slate-700 mb-4 italic">"{story.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-black text-slate-900">{story.name}</p>
                    <p className="text-sm text-slate-600">{story.city}, Pakistan</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-rose-600">{story.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-rose-600 to-rose-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">شروع کریں اپنی کامیابی کا سفر</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">Start Your Success Journey Today</h3>
          <p className="text-lg text-rose-100 mb-8 max-w-2xl mx-auto">
            Book your free trial session today. Experience quality education that helps you achieve A grades.
          </p>
          <Link 
            to="/hire-teacher"
            className="inline-block px-10 py-4 bg-white text-rose-600 font-black rounded-2xl hover:bg-rose-50 transition shadow-2xl"
          >
            Book Free Trial Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PakistanLandingPage;
