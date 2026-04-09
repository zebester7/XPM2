import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updatePageMeta } from '../seoHelper';
import { addHrefLangTags, generateHreflangs, generateLocalBusinessSchema, addStructuredData } from '../internationalSEOHelper';
import { RegionalReviewsSection } from '../components/RegionalReviewsSection';

const UAELandingPage: React.FC = () => {
  useEffect(() => {
    // Update SEO metadata
    updatePageMeta({
      title: 'IB & IGCSE Tutors Dubai | Expert Online Tutoring UAE | XPM Tutors',
      description: 'Best IB and IGCSE tutors in Dubai & UAE. Expert online tutoring for international curriculum. Free trial sessions. Trusted by thousands of UAE students.',
      keywords: 'IB tutor Dubai, IGCSE tutor UAE, Cambridge exam Dubai, Maths tutor Dubai, Physics tutor UAE, Chemistry tutor Dubai, online tutor UAE',
      canonical: 'https://xpmtutors.com/ae/'
    });

    // Add hreflang tags
    const hreflangs = generateHreflangs('/ae/', true);
    addHrefLangTags(hreflangs);

    // Add LocalBusiness schema
    const localBusinessSchema = generateLocalBusinessSchema('en-ae');
    addStructuredData(localBusinessSchema, 'local-business-schema');

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50/50 rounded-full mb-6 border border-emerald-200">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">🇦🇪 UAE Specialist</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 lg:mb-8 leading-none">
                Best <span className="text-emerald-600">IB & IGCSE</span> Tutors in Dubai
              </h1>
              
              <h2 className="text-lg sm:text-xl text-slate-600 mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Expert online tutoring for IB, IGCSE, Cambridge, and international curricula across UAE. Serving the expatriate and local community.
              </h2>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-0">
                <Link 
                  to="/hire-teacher" 
                  className="px-8 py-4 lg:py-5 bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition transform hover:-translate-y-1 text-center text-lg"
                >
                  Book Expert Tutor
                </Link>
                <Link 
                  to="/signup" 
                  className="px-8 py-4 lg:py-5 bg-white text-emerald-600 border-2 border-emerald-600 font-black rounded-2xl hover:bg-emerald-50 transition text-center shadow-sm text-lg"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl space-y-8">
              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="text-4xl font-black text-emerald-600 mb-2">2,800+</div>
                <p className="text-slate-600 font-medium">UAE Students Tutored</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="text-4xl font-black text-emerald-600 mb-2">94%</div>
                <p className="text-slate-600 font-medium">Grade Improvement Rate</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="text-4xl font-black text-emerald-600 mb-2">4.9/5</div>
                <p className="text-slate-600 font-medium">Student Satisfaction Rating</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="text-4xl font-black text-emerald-600 mb-2">15+</div>
                <p className="text-slate-600 font-medium">Years of Gulf Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-center">
            All International Curricula Covered
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Expert tutoring for IB, IGCSE, Cambridge, CBSE, and other international curricula
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['IB Programme', 'IGCSE', 'Cambridge A/O Levels', 'CBSE', 'ICSE', 'Indian Curriculum', 'ICS Curriculum', 'British Curriculum', 'American Curriculum'].map((curriculum) => (
              <div key={curriculum} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border-l-4 border-emerald-600">
                <h3 className="text-xl font-black text-slate-900 mb-2">{curriculum}</h3>
                <p className="text-slate-600 text-sm">Expert tutors specializing in {curriculum}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            Why UAE Students & Expats Choose XPM
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Gulf Experience', desc: '15+ years serving expatriate and local communities in UAE' },
              { title: 'Cultural Understanding', desc: 'Culturally sensitive tutoring respecting local values' },
              { title: 'UAE Timezone Friendly', desc: 'Convenient scheduling aligned with UAE school hours' },
              { title: 'Multi-Currency Support', desc: 'Flexible pricing in AED, USD, GBP, and other currencies' },
              { title: 'International Quality', desc: 'Tutors trained in international standards and practices' },
              { title: 'Home & Online Sessions', desc: 'Flexible delivery options for busy families' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 border border-slate-200 rounded-2xl hover:border-emerald-400 hover:bg-emerald-50/30 transition">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-emerald-600">{idx + 1}</span>
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

      {/* Subjects by Level */}
      <section className="py-16 lg:py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            Expert Subject Coverage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { level: 'Sciences', subjects: ['Physics', 'Chemistry', 'Biology', 'Science'] },
              { level: 'Mathematics', subjects: ['Maths', 'Further Maths', 'Statistics', 'Calculus'] },
              { level: 'Humanities', subjects: ['English', 'History', 'Geography', 'Economics'] }
            ].map((category, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-black text-emerald-600 mb-6">{category.level}</h3>
                <ul className="space-y-3">
                  {category.subjects.map((subject, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                      <span className="text-slate-700 font-medium">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <RegionalReviewsSection region="ae" accentColor="green" />

      {/* Blog Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            Latest UAE IB & IGCSE Tips
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Read expert articles on IB strategies, IGCSE guides, and exam preparation tips for Dubai students
          </p>
          <div className="text-center">
            <Link 
              to="/ae/blog"
              className="inline-block px-8 py-4 bg-green-600 text-white font-black rounded-2xl hover:bg-green-700 transition shadow-lg"
            >
              Read All UAE Blog Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">Ready to Excel in Your Exams?</h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Book your free trial session today and experience the XPM Tutors difference.
          </p>
          <Link 
            to="/hire-teacher"
            className="inline-block px-10 py-4 bg-white text-emerald-600 font-black rounded-2xl hover:bg-emerald-50 transition shadow-2xl"
          >
            Book Free Trial Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UAELandingPage;
