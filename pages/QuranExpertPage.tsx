import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuranExpertPage: React.FC = () => {
  useEffect(() => {
    document.title = "Quran Scholarship Program | Advanced Islamic Studies | XPM Tutors";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master advanced Islamic scholarship including Tafsir, Quranic linguistics, and scholarly interpretation. For advanced learners and academic students.');
    }
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-purple-50 via-violet-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100/80 rounded-full mb-6 border border-purple-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-700">EXPERT LEVEL • SCHOLARLY</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                <span className="text-purple-600">Quran Scholarship</span> Program
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Deep dive into Quranic scholarship with advanced Tafsir, linguistic analysis, and scholarly interpretation. Perfect for students pursuing Islamic studies or becoming scholars.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Complete Quranic Tafsir study (Al-Qurtubi, Ibn Kathir)',
                  'Arabic linguistics and Quranic grammar mastery',
                  'Historical context and revelation circumstances',
                  'Personalized 1-on-1 advanced sessions'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923009508592?text=Assalamu%20Alaikum%20I%20am%20interested%20in%20Quran%20Scholarship%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-purple-600 text-white font-black rounded-2xl shadow-xl shadow-purple-600/20 hover:bg-purple-700 transition transform hover:-translate-y-1 text-center text-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.842 5.404 2.439 7.623l.375 1.414 1.53-1.506c2.117 1.627 4.767 2.469 7.402 2.469 5.428 0 9.854-4.426 9.854-9.854 0-2.635-.846-5.291-2.443-7.577A9.835 9.835 0 0011.968 5.41c-5.428 0-9.847 4.426-9.847 9.851 0 .533.043 1.06.123 1.579l.26 1.561-1.534.381c-.766.184-1.41.653-1.756 1.286A10.021 10.021 0 001.5 12.208c0-5.428 4.426-9.854 9.854-9.854z"/>
                  </svg>
                  Inquire About Program
                </a>
                <Link
                  to="/quran-tutoring"
                  className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-200 font-black rounded-2xl hover:bg-purple-50 transition"
                >
                  View All Levels
                </Link>
              </div>
            </div>

            {/* Content Cards */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-purple-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">For Whom?</h3>
                <p className="text-slate-600">Advanced learners, university students, Islamic scholars, teachers, or anyone seeking deep Quranic knowledge and academic excellence.</p>
              </div>

              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-violet-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Program Structure</h3>
                <p className="text-slate-600">Flexible personalized curriculum based on your academic goals and existing knowledge. Customizable duration from 6 months to ongoing.</p>
              </div>

              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-fuchsia-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-fuchsia-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Credentials</h3>
                <p className="text-slate-600">Learn from scholars with advanced Islamic education. Prepare to teach, write, or pursue higher Islamic studies internationally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Areas */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Study Areas & Specializations</h2>
            <p className="text-xl text-slate-600">Choose your path based on academic interests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Tafsir & Quranic Exegesis',
                description: 'Study major Tafsir works (Al-Qurtubi, Ibn Kathir, At-Tabari) and understand scholarly interpretations of Quranic verses.',
                icon: '📖'
              },
              {
                title: 'Quranic Arabic & Linguistics',
                description: 'Master Classical Arabic grammar, Quranic vocabulary patterns, and linguistic analysis of Quranic words.',
                icon: '🔤'
              },
              {
                title: 'Historicity & Context',
                description: 'Learn about historical events, revelation circumstances (Asbab An-Nuzul), and Quranic wisdom in context.',
                icon: '📜'
              },
              {
                title: 'Hadith & Islamic Jurisprudence',
                description: 'Study authentic Hadith collections and how Quranic verses are applied in Islamic law and practice.',
                icon: '⚖️'
              },
              {
                title: 'Advanced Tajweed Studies',
                description: 'For those already proficient: master rare Qirats and variant recitations with theological significance.',
                icon: '🎵'
              },
              {
                title: 'Research & Academic Writing',
                description: 'Develop skills in Islamic scholarship: research methodology, thesis writing, and academic presentations.',
                icon: '✍️'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Personalized Learning Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: '1-on-1 Expert Sessions',
                desc: 'Personalized instruction from experienced Islamic scholars with specialized knowledge in your chosen area.'
              },
              {
                title: 'Flexible Scheduling',
                desc: 'Sessions tailored to your academic calendar, work commitments, or research needs. Weekly, bi-weekly, or custom schedules.'
              },
              {
                title: 'Research Guidance',
                desc: 'Support with academic research, thesis writing, and preparation for university-level Islamic studies programs.'
              },
              {
                title: 'Academic Materials',
                desc: 'Access to original Islamic texts, reference works, and curated scholarly resources specifically for your studies.'
              },
              {
                title: 'Discussion & Debate',
                desc: 'Engage in scholarly discussions about varying interpretations and develop critical thinking in Islamic studies.'
              },
              {
                title: 'Certification Path',
                desc: 'Structured programs leading to recognized certificates or credentials in Islamic scholarship and Quranic studies.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-purple-100 text-purple-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Topics */}
      <section className="py-16 lg:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Sample Topics & Modules</h2>
            <p className="text-xl text-slate-600">Examples from our comprehensive curriculum</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Surah Al-Baqarah: Deep Tafsir and Context',
              'Quranic Vocabulary: Synonyms and Subtle Meanings',
              'Asbab An-Nuzul: Revelation Circumstances and Wisdom',
              'Ijaz Al-Quran: The Miraculous Nature of the Quran',
              'Mansukh and Nasikh: Abrogated and Abrogating Verses',
              'Islamic Law Principles: Deriving Rulings from Quranic Verses',
              'Comparative Tafsir: Different Scholarly Perspectives',
              'Modern Pseudo-Scholarship: Critical Analysis and Refutation',
              'Quranic Narratives: Stories and Their Lessons',
              'Signs of Allah (Ayat): Understanding Creation Through Quran',
              'Advanced Recitation Variants: Different Qirats Explained',
              'Thesis & Research: Academic Projects in Quranic Studies'
            ].map((topic, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-purple-100 hover:shadow-md transition"
              >
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-slate-700">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Custom Program Pricing</h2>
            <p className="text-slate-600 mt-2">Personalized programs tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                plan: 'Standard Scholar',
                price: '4,000 PKR/session',
                desc: 'Bi-weekly expert sessions with curriculum guidance'
              },
              {
                plan: 'Intensive Scholar',
                price: '6,000 PKR/session',
                desc: 'Weekly deep-dive sessions with research support'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border-2 border-purple-200 hover:shadow-lg transition">
                <h3 className="text-2xl font-black text-slate-900 mb-2">{item.plan}</h3>
                <div className="text-3xl font-black text-purple-600 mb-2">{item.price}</div>
                <p className="text-slate-600 mb-6">{item.desc}</p>
                <a
                  href="https://wa.me/923009508592?text=I%20am%20interested%20in%20Quran%20Scholarship%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-purple-600 text-white font-black rounded-lg text-center hover:bg-purple-700 transition"
                >
                  Get Details
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-100 to-violet-100 p-8 rounded-2xl border border-purple-300 text-center">
            <p className="text-slate-800 font-black mb-3">
              🎓 Group Classes & Customized Packages Available
            </p>
            <p className="text-slate-700">
              Discuss your specific academic goals with our lead scholars. We offer customized programs for university students, researchers, and serious scholars pursuing Islamic studies at advanced levels.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is the prerequisite level for this program?',
                a: 'Advanced Quranic knowledge is recommended. You should have completed intermediate-level courses or have equivalent knowledge. Entry assessments help tailor the program.'
              },
              {
                q: 'Can I combine multiple specializations?',
                a: 'Absolutely! Many students pursue combined tracks like Tafsir + Arabic Linguistics. The curriculum is flexible and personalized to your goals.'
              },
              {
                q: 'Will this prepare me for Islamic universities?',
                a: 'Yes. Our curriculum aligns with university-level Islamic studies programs. Many alumni have successfully enrolled in Al-Azhar, Umm Al-Qura, and other prestigious institutions.'
              },
              {
                q: 'Is the instruction in English or Arabic?',
                a: 'We offer instruction in both English and Urdu. Arabic texts are studied in their original form with English/Urdu explanations when needed.'
              },
              {
                q: 'Can I focus on just one area of specialization?',
                a: 'Yes, completely customizable. You can focus exclusively on Tafsir, Arabic Linguistics, or any other area based on your academic interests.'
              }
            ].map((item, idx) => (
              <details key={idx} className="bg-white p-6 rounded-xl border border-purple-200 group cursor-pointer">
                <summary className="flex items-start gap-4 font-black text-slate-900 text-lg list-none">
                  <span className="text-purple-600 text-xl group-open:rotate-180 transition">+</span>
                  {item.q}
                </summary>
                <p className="mt-4 text-slate-600 ml-8">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Advance Your Islamic Scholarship</h2>
          <p className="text-xl mb-10 text-white/90">Master the Quran at the highest academic level. Perfect for becoming a scholar, teacher, or advancing your Islamic knowledge.</p>
          <a
            href="https://wa.me/923009508592?text=Assalamu%20Alaikum%20I%20want%20to%20discuss%20the%20Quran%20Scholarship%20program%20for%20my%20academic%20goals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-purple-600 font-black rounded-2xl shadow-xl hover:bg-slate-50 transition text-lg flex items-center justify-center gap-2 mx-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.842 5.404 2.439 7.623l.375 1.414 1.53-1.506c2.117 1.627 4.767 2.469 7.402 2.469 5.428 0 9.854-4.426 9.854-9.854 0-2.635-.846-5.291-2.443-7.577A9.835 9.835 0 0011.968 5.41c-5.428 0-9.847 4.426-9.847 9.851 0 .533.043 1.06.123 1.579l.26 1.561-1.534.381c-.766.184-1.41.653-1.756 1.286A10.021 10.021 0 001.5 12.208c0-5.428 4.426-9.854 9.854-9.854z"/>
            </svg>
            Request Scholar Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default QuranExpertPage;
