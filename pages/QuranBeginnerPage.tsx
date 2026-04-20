import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuranBeginnerPage: React.FC = () => {
  useEffect(() => {
    document.title = "Quranic Foundations for Beginners | Learn Arabic & Tajweed Online | XPM Tutors";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Start your Quran learning journey with our Beginner Quranic Foundations course. Learn Arabic letters, basic Tajweed, and Surah Al-Fatiha. Free demo class available.');
    }
    
    // Add structured data for SEO
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Quranic Foundations - Beginner Level",
      "description": "Complete beginner-friendly Quran learning program covering Arabic letters, Tajweed basics, and Surah Al-Fatiha",
      "provider": {
        "@type": "Organization",
        "name": "XPM Tutors",
        "url": "https://xpmtutors.com"
      },
      "courseCode": "QURAN-001",
      "duration": "P3M",
      "syllabuUrl": "https://xpmtutors.com/quran-beginner",
      "offers": {
        "@type": "Offer",
        "url": "https://xpmtutors.com/quran-beginner"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "150"
      }
    });
    document.head.appendChild(schemaScript);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-emerald-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100/80 rounded-full mb-6 border border-blue-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">BEGINNER LEVEL</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                <span className="text-blue-600">Quranic Foundations</span> for Beginners
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Start your sacred journey with the basics. Learn Arabic letters, proper pronunciation, and Tajweed fundamentals. Perfect for complete beginners of all ages.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Learn Arabic letters (Alif-Ba-Ta) with pronunciation',
                  'Master basic Tajweed rules and proper articulation',
                  'Complete Surah Al-Fatiha memorization',
                  'Weekly 1-on-1 personalized sessions'
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
                  href="https://wa.me/923009508592?text=Assalamu%20Alaikum%20I%20want%20to%20join%20Quranic%20Foundations%20beginner%20class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-500 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition transform hover:-translate-y-1 text-center text-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.842 5.404 2.439 7.623l.375 1.414 1.53-1.506c2.117 1.627 4.767 2.469 7.402 2.469 5.428 0 9.854-4.426 9.854-9.854 0-2.635-.846-5.291-2.443-7.577A9.835 9.835 0 0011.968 5.41c-5.428 0-9.847 4.426-9.847 9.851 0 .533.043 1.06.123 1.579l.26 1.561-1.534.381c-.766.184-1.41.653-1.756 1.286A10.021 10.021 0 001.5 12.208c0-5.428 4.426-9.854 9.854-9.854z"/>
                  </svg>
                  Book Free Trial
                </a>
                <Link
                  to="/quran-tutoring"
                  className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-200 font-black rounded-2xl hover:bg-blue-50 transition"
                >
                  View All Levels
                </Link>
              </div>
            </div>

            {/* Content Cards */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Course Duration</h3>
                <p className="text-slate-600">3-4 months with weekly sessions. Progress at your own pace with flexible scheduling.</p>
              </div>

              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Learning Method</h3>
                <p className="text-slate-600">Interactive 1-on-1 sessions with qualified female Qaris. Personalized feedback after each class.</p>
              </div>

              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-amber-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">After Completion</h3>
                <p className="text-slate-600">Graduate to Tajweed Mastery course. Receive completion certificate and join advanced programs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Course Curriculum</h2>
            <p className="text-xl text-slate-600">12-16 weekly lessons covering fundamental Quranic basics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                week: 'Weeks 1-2',
                title: 'Arabic Alphabet & Pronunciation',
                topics: [
                  'Learn all 28 Arabic letters with perfect pronunciation',
                  'Understand letter sounds and variations',
                  'Practice writing and recognizing letters'
                ]
              },
              {
                week: 'Weeks 3-4',
                title: 'Basic Tajweed Rules',
                topics: [
                  'Introduction to Makhraj (articulation points)',
                  'Learn Noon and Meem rules',
                  'Understand elongation (Maddah) basics'
                ]
              },
              {
                week: 'Weeks 5-8',
                title: 'Surah Al-Fatiha Mastery',
                topics: [
                  'Complete memorization of Surah Al-Fatiha',
                  'Perfect pronunciation and Tajweed',
                  'Meaning and significance explanation'
                ]
              },
              {
                week: 'Weeks 9-12',
                title: 'Additional Short Surahs',
                topics: [
                  'Learn 5-10 short Surahs with proper Tajweed',
                  'Build reading confidence',
                  'Prepare for next level progression'
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition">
                <div className="text-sm font-black uppercase tracking-wider text-blue-600 mb-2">{item.week}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <span className="text-emerald-500 font-bold mt-1">✓</span>
                      <span className="text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'What age is this course suitable for?', a: 'This course is perfect for all ages! We have students from 5 years old to adults. Our instructors adapt the teaching style to each student\'s age and learning pace.' },
              { q: 'Do I need prior Quran knowledge?', a: 'No! This is specifically designed for complete beginners. We start from the very basics of Arabic letters.' },
              { q: 'How long is each session?', a: 'Each session is typically 30-45 minutes, allowing ample time for learning and practice without overwhelming young learners.' },
              { q: 'What if I miss a class?', a: 'We understand life happens! You can reschedule missed classes within 7 days or watch a recorded session.' },
              { q: 'Can I progress to the next level after this?', a: 'Absolutely! Upon completion, you can move to our Tajweed Mastery course or continue with additional short Surahs.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100">
                <h3 className="text-lg font-black text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Begin Your Quranic Journey Today</h2>
          <p className="text-xl mb-10 text-white/90">Start with your free trial class and experience our teaching approach firsthand.</p>
          <a
            href="https://wa.me/923009508592?text=Assalamu%20Alaikum%20Please%20schedule%20my%20free%20Quranic%20Foundations%20trial%20class"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl shadow-xl shadow-black/20 hover:bg-slate-50 transition text-lg flex items-center justify-center gap-2 mx-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.842 5.404 2.439 7.623l.375 1.414 1.53-1.506c2.117 1.627 4.767 2.469 7.402 2.469 5.428 0 9.854-4.426 9.854-9.854 0-2.635-.846-5.291-2.443-7.577A9.835 9.835 0 0011.968 5.41c-5.428 0-9.847 4.426-9.847 9.851 0 .533.043 1.06.123 1.579l.26 1.561-1.534.381c-.766.184-1.41.653-1.756 1.286A10.021 10.021 0 001.5 12.208c0-5.428 4.426-9.854 9.854-9.854z"/>
            </svg>
            Reserve Your Free Trial Class
          </a>
        </div>
      </section>
    </div>
  );
};

export default QuranBeginnerPage;
