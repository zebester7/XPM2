import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuranTutoringPage: React.FC = () => {
  useEffect(() => {
    document.title = "Online Quran Classes with Tajweed | Female Quran Tutors for Kids | Hifz Program 2026";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert Online Quran tutoring with Tajweed mastery, Hifz programs, and qualified female Qaris. Learn Quran with excellence. Book your free trial class now.');
    }
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Online Quran Tutoring with Tajweed",
          "description": "Professional online Quran classes with Tajweed rules, Hifz programs, and qualified Qaris",
          "provider": {
            "@type": "Organization",
            "name": "XPM Tutors",
            "url": "https://xpmtutors.com"
          },
          "areaServed": "Global",
          "offers": {
            "@type": "Offer",
            "name": "Free Demo Quran Class",
            "price": "0",
            "priceCurrency": "USD",
            "url": "https://xpmtutors.com/hire-teacher"
          }
        })}
      </script>

      {/* Hero Section - Serene Design */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-slate-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/80 rounded-full mb-6 border border-emerald-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">Quranic Excellence Online</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                Learn <span className="text-emerald-600">Quran with Tajweed</span> from Qualified Qaris
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Master proper Quranic recitation with certified female Qaris. From Tajweed fundamentals to comprehensive Hifz programs, we provide serene, respectful online learning experiences for all ages.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Certified female Qaris with excellence credentials',
                  'Comprehensive Tajweed rules and proper pronunciation',
                  'Flexible Hifz programs tailored to your pace',
                  '1-on-1 personalized attention and correction'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923009508592?text=Assalamu%20Alaikum%20I%20would%20like%20to%20book%20a%20free%20Quran%20tutoring%20trial%20class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-500 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition transform hover:-translate-y-1 text-center text-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.842 5.404 2.439 7.623l.375 1.414 1.53-1.506c2.117 1.627 4.767 2.469 7.402 2.469 5.428 0 9.854-4.426 9.854-9.854 0-2.635-.846-5.291-2.443-7.577A9.835 9.835 0 0011.968 5.41c-5.428 0-9.847 4.426-9.847 9.851 0 .533.043 1.06.123 1.579l.26 1.561-1.534.381c-.766.184-1.41.653-1.756 1.286A10.021 10.021 0 001.5 12.208c0-5.428 4.426-9.854 9.854-9.854z"/>
                  </svg>
                  WhatsApp: Book Free Trial
                </a>
                <Link
                  to="/quran-beginner"
                  className="px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-200 font-black rounded-2xl hover:bg-emerald-50 transition"
                >
                  Explore Levels
                </Link>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3-13c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-6 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Tajweed Mastery</h3>
                <p className="text-slate-600">Learn proper articulation points (Makhraj) and rules with expert guidance from qualified Qaris certified in Tajweed.</p>
              </div>

              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16V4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v4h8v-4h4c1.1 0 2-.9 2-2V6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Hifz Programs</h3>
                <p className="text-slate-600">Structured memorization programs designed for different ages and learning speeds with proven retention techniques.</p>
              </div>

              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Female Qaris</h3>
                <p className="text-slate-600">Respectfully taught by experienced female Quranic scholars ensuring a serene and comfortable learning environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Levels - Browse All */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Our Quran Learning Path</h2>
            <p className="text-xl text-slate-600">Structured programs from beginner to master level</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                level: 'Beginner',
                title: 'Quranic Foundations',
                features: ['Arabic letters & pronunciation', 'Basic Tajweed rules', 'Surah Al-Fatiha learning', 'Weekly sessions'],
                path: '/quran-beginner',
                color: 'blue'
              },
              {
                level: 'Intermediate',
                title: 'Tajweed Mastery',
                features: ['Advanced Tajweed rules', 'Surah memorization', 'Clarification of difficult verses', 'Bi-weekly sessions'],
                path: '/quran-intermediate',
                color: 'emerald'
              },
              {
                level: 'Advanced',
                title: 'Hifz Program',
                features: ['Structured memorization', 'Revision techniques', 'Tarteel perfection', 'Daily sessions'],
                path: '/quran-advanced',
                color: 'amber'
              },
              {
                level: 'Expert',
                title: 'Scholarly Study',
                features: ['Detailed Tafsir (exegesis)', 'Linguistic analysis', 'Advanced recitation', 'Personalized sessions'],
                path: '/quran-expert',
                color: 'purple'
              }
            ].map((program, idx) => (
              <Link key={idx} to={program.path} className="block group">
                <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition h-full">
                  <div className={`h-2 ${idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-emerald-500' : idx === 2 ? 'bg-amber-500' : 'bg-purple-500'}`}></div>
                  <div className="p-8">
                    <div className="text-sm font-black uppercase tracking-wider text-slate-500 mb-2">{program.level}</div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition">{program.title}</h3>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-2 px-4 font-black rounded-lg transition text-white text-sm ${idx === 0 ? 'bg-blue-500 group-hover:bg-blue-600' : idx === 1 ? 'bg-emerald-500 group-hover:bg-emerald-600' : idx === 2 ? 'bg-amber-500 group-hover:bg-amber-600' : 'bg-purple-500 group-hover:bg-purple-600'}`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8">Why XPM for Quran Learning?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Certified Instructors',
                    desc: 'Our Qaris hold certifications in Tajweed and have years of teaching experience'
                  },
                  {
                    title: 'Serene Environment',
                    desc: 'Respectful, peaceful learning setting dedicated to Islamic education excellence'
                  },
                  {
                    title: 'Flexible Scheduling',
                    desc: 'Classes at times convenient for students across different time zones'
                  },
                  {
                    title: 'Progress Tracking',
                    desc: 'Regular assessments and detailed feedback for continuous improvement'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-100">
                        <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-12 rounded-3xl border border-emerald-100">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                </svg>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Begin Your Quranic Journey</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Join hundreds of students learning Quran with proper Tajweed. Our structured programs ensure steady progress and genuine understanding.
                </p>
                <Link
                  to="/hire-teacher"
                  className="inline-block px-8 py-4 bg-emerald-500 text-white font-black rounded-xl hover:bg-emerald-600 transition"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Experience Excellence in Quranic Learning</h2>
          <p className="text-xl mb-10 text-white/90">Book your first free class today and discover the difference expert instruction makes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923009508592?text=Assalamu%20Alaikum%20I%20would%20like%20to%20reserve%20a%20free%20Quran%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl shadow-xl shadow-black/20 hover:bg-slate-50 transition transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.842 5.404 2.439 7.623l.375 1.414 1.53-1.506c2.117 1.627 4.767 2.469 7.402 2.469 5.428 0 9.854-4.426 9.854-9.854 0-2.635-.846-5.291-2.443-7.577A9.835 9.835 0 0011.968 5.41c-5.428 0-9.847 4.426-9.847 9.851 0 .533.043 1.06.123 1.579l.26 1.561-1.534.381c-.766.184-1.41.653-1.756 1.286A10.021 10.021 0 001.5 12.208c0-5.428 4.426-9.854 9.854-9.854z"/>
              </svg>
              Reserve Free Class on WhatsApp
            </a>
            <Link
              to="/quran-beginner"
              className="inline-block px-10 py-5 bg-emerald-50 text-emerald-600 font-black rounded-2xl shadow-xl shadow-black/20 hover:bg-white transition text-lg"
            >
              Explore All Levels
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuranTutoringPage;
