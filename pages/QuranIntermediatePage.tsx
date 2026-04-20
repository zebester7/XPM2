import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuranIntermediatePage: React.FC = () => {
  useEffect(() => {
    document.title = "Tajweed Mastery Course | Advanced Quran Rules | XPM Tutors";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master advanced Tajweed rules with our Intermediate course. Learn proper Quranic recitation techniques from certified Qaris. Free demo available.');
    }
    
    // Add structured data for SEO
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Tajweed Mastery - Intermediate Level",
      "description": "Advanced Tajweed course for intermediate Quran learners covering Ghunnah, Qalqalah, Idgham and professional recitation",
      "provider": {
        "@type": "Organization",
        "name": "XPM Tutors",
        "url": "https://xpmtutors.com"
      },
      "courseCode": "QURAN-002",
      "duration": "P6M",
      "coursePrerequisites": "Completion of Quranic Foundations or intermediate-level Quran knowledge",
      "offers": {
        "@type": "Offer",
        "url": "https://xpmtutors.com/quran-intermediate"
      }
    });
    document.head.appendChild(schemaScript);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/80 rounded-full mb-6 border border-emerald-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">INTERMEDIATE LEVEL</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                <span className="text-emerald-600">Tajweed Mastery</span> Program
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Take your Quranic recitation to the next level. Master advanced Tajweed rules with detailed explanations and expert guidance to recite with excellence.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Advanced Tajweed rules (Ghunnah, Qalqalah, etc.)',
                  'Perfect pronunciation of difficult verses',
                  'Surah memorization with proper Tajweed',
                  'Bi-weekly intensive sessions'
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
                  href="https://wa.me/923009508592?text=Assalamu%20Alaikum%20I%20want%20to%20join%20Tajweed%20Mastery%20intermediate%20course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-500 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition transform hover:-translate-y-1 text-center text-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.842 5.404 2.439 7.623l.375 1.414 1.53-1.506c2.117 1.627 4.767 2.469 7.402 2.469 5.428 0 9.854-4.426 9.854-9.854 0-2.635-.846-5.291-2.443-7.577A9.835 9.835 0 0011.968 5.41c-5.428 0-9.847 4.426-9.847 9.851 0 .533.043 1.06.123 1.579l.26 1.561-1.534.381c-.766.184-1.41.653-1.756 1.286A10.021 10.021 0 001.5 12.208c0-5.428 4.426-9.854 9.854-9.854z"/>
                  </svg>
                  Start Free Trial
                </a>
                <Link
                  to="/quran-tutoring"
                  className="px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-200 font-black rounded-2xl hover:bg-emerald-50 transition"
                >
                  View All Levels
                </Link>
              </div>
            </div>

            {/* Content Cards */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Prerequisites</h3>
                <p className="text-slate-600">Completion of Quranic Foundations or intermediate-level Quran knowledge. Perfect for those ready to advance.</p>
              </div>

              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-green-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Course Duration</h3>
                <p className="text-slate-600">4-6 months with bi-weekly intensive sessions. Deep dives into each Tajweed rule.</p>
              </div>

              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-teal-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Your Goal</h3>
                <p className="text-slate-600">Achieve near-perfect Quranic recitation with confidence. Master the rules that professional Qaris use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tajweed Rules */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Advanced Tajweed Rules You'll Master</h2>
            <p className="text-xl text-slate-600">Professional-level Quranic recitation techniques</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { rule: 'Ghunnah', desc: 'Nasal resonance rules for Noon and Meem' },
              { rule: 'Qalqalah', desc: 'Special emphasis on certain letters' },
              { rule: 'Idgham', desc: 'Merging of letters with perfect blending' },
              { rule: 'Ikhfaa', desc: 'Hiding sounds with subtle pronunciation' },
              { rule: 'Madd & Makhraj', desc: 'Elongation rules and articulation points' },
              { rule: 'Hamzah Handling', desc: 'Perfect Hamzah pronunciation techniques' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition">
                <h3 className="text-2xl font-black text-emerald-600 mb-3">{item.rule}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Surahs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Surahs You'll Memorize</h2>
            <p className="text-xl text-slate-600">Complete Tajweed mastery on these chapters</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Al-Baqarah (Selection)', ayahs: 'Verses 1-50' },
              { name: 'Al-Imran (Selection)', ayahs: 'Verses 1-40' },
              { name: 'An-Nas', ayahs: 'Complete (6 verses)' },
              { name: 'Al-Falaq', ayahs: 'Complete (5 verses)' },
              { name: 'Al-Maun', ayahs: 'Complete (7 verses)' },
              { name: 'At-Tawheed', ayahs: 'Complete (4 verses)' },
              { name: 'Al-Kafirun', ayahs: 'Complete (6 verses)' },
              { name: 'Al-Ikhlas', ayahs: 'Complete (4 verses)' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200 text-center hover:shadow-lg transition">
                <h3 className="text-lg font-black text-slate-900 mb-2">{item.name}</h3>
                <p className="text-sm text-slate-600">{item.ayahs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Elevate Your Quran Recitation</h2>
          <p className="text-xl mb-10 text-white/90">Master Tajweed and recite the Quran like the Qaris do. Start your transformation today.</p>
          <a
            href="https://wa.me/923009508592?text=Assalamu%20Alaikum%20I%20want%20to%20start%20Tajweed%20Mastery%20program"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl shadow-xl hover:bg-slate-50 transition text-lg flex items-center justify-center gap-2 mx-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.842 5.404 2.439 7.623l.375 1.414 1.53-1.506c2.117 1.627 4.767 2.469 7.402 2.469 5.428 0 9.854-4.426 9.854-9.854 0-2.635-.846-5.291-2.443-7.577A9.835 9.835 0 0011.968 5.41c-5.428 0-9.847 4.426-9.847 9.851 0 .533.043 1.06.123 1.579l.26 1.561-1.534.381c-.766.184-1.41.653-1.756 1.286A10.021 10.021 0 001.5 12.208c0-5.428 4.426-9.854 9.854-9.854z"/>
            </svg>
            Book Your Free Demo Class
          </a>
        </div>
      </section>
    </div>
  );
};

export default QuranIntermediatePage;
