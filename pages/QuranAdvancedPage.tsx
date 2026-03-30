import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuranAdvancedPage: React.FC = () => {
  useEffect(() => {
    document.title = "Hifz Program | Complete Quran Memorization | XPM Tutors";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join our Hifz program and memorize the entire Quran with professional guidance. Daily sessions with certified Hafiz instructors. Become a Hafiz with XPM.');
    }
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100/80 rounded-full mb-6 border border-orange-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-700">ADVANCED LEVEL • HIFZ</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                <span className="text-orange-600">Complete Hifz</span> Program
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Memorize the entire Quran with structured guidance. Our comprehensive Hifz program combines daily sessions, revision techniques, and expert mentoring to help you become a Hafiz.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Structured 2-3 year memorization timeline',
                  'Daily intensive Hifz sessions (1-2 hours)',
                  'Repetition & revision techniques',
                  'Complete Quran memorization with Tajweed'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923009508592?text=Assalamu%20Alaikum%20I%20want%20to%20join%20the%20Complete%20Hifz%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-orange-500 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition transform hover:-translate-y-1 text-center text-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.842 5.404 2.439 7.623l.375 1.414 1.53-1.506c2.117 1.627 4.767 2.469 7.402 2.469 5.428 0 9.854-4.426 9.854-9.854 0-2.635-.846-5.291-2.443-7.577A9.835 9.835 0 0011.968 5.41c-5.428 0-9.847 4.426-9.847 9.851 0 .533.043 1.06.123 1.579l.26 1.561-1.534.381c-.766.184-1.41.653-1.756 1.286A10.021 10.021 0 001.5 12.208c0-5.428 4.426-9.854 9.854-9.854z"/>
                  </svg>
                  Start Your Hifz Journey
                </a>
                <Link
                  to="/quran-tutoring"
                  className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-200 font-black rounded-2xl hover:bg-orange-50 transition"
                >
                  View All Levels
                </Link>
              </div>
            </div>

            {/* Content Cards */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">What is Hifz?</h3>
                <p className="text-slate-600">Complete memorization of the entire Quran (30 Juzs). A lifetime achievement recognized across Islamic communities worldwide.</p>
              </div>

              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-amber-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Commitment</h3>
                <p className="text-slate-600">2-3 years of dedicated daily learning. Most students complete in 2 years with consistent effort and 1-2 hour daily sessions.</p>
              </div>

              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-yellow-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🏅</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Support</h3>
                <p className="text-slate-600">Certified Hafiz instructors, personalized revision plans, and community support throughout your memorization journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Your Hifz Journey</h2>
            <p className="text-xl text-slate-600">Structured phases designed for sustainable memorization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: 'Phase 1: Foundation',
                duration: 'Months 1-6',
                content: 'Juzs 1-10 memorization. Building habits and learning techniques.',
                icon: '🌱'
              },
              {
                phase: 'Phase 2: Acceleration',
                duration: 'Months 7-18',
                content: 'Juzs 11-25 with consistent daily practice. Deep memorization with refinement.',
                icon: '⚡'
              },
              {
                phase: 'Phase 3: Completion',
                duration: 'Months 19-30',
                content: 'Juzs 26-30 plus comprehensive revision of all Juzs. Final polishing.',
                icon: '🏆'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{item.phase}</h3>
                <p className="text-sm text-orange-600 font-black mb-3">{item.duration}</p>
                <p className="text-slate-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">What Makes Our Hifz Program Special</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Certified Hafiz Instructors',
                desc: 'Learn directly from experienced Hafiz teachers who completed their memorization and understand the challenges.'
              },
              {
                title: 'Daily Structured Sessions',
                desc: 'Consistent 1-2 hour daily sessions with new memorization combined with revision of previous Juzs.'
              },
              {
                title: 'Personalized Revision Plans',
                desc: 'Custom revision schedules tailored to your memorization pace and retention patterns.'
              },
              {
                title: 'Psychological Support',
                desc: 'Guidance on maintaining motivation, handling difficult Juzs, and managing the mental demands of Hifz.'
              },
              {
                title: 'Flexible Scheduling',
                desc: 'Adjust sessions around your work or studies. Options for summer intensives or year-round learning.'
              },
              {
                title: 'Community & Accountability',
                desc: 'Join a community of other Hafiz aspirants. Weekly progress tracking and motivational support.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-orange-100 text-orange-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Hifz Program Investment</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { plan: 'Standard Hifz', price: '2,500 PKR/session', desc: 'Daily sessions (7 days/week) - Full commitment path' },
              { plan: 'Intensive Hifz', price: '3,500 PKR/session', desc: '1-on-1 personalized coaching with daily support' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-orange-200 hover:shadow-lg transition">
                <h3 className="text-2xl font-black text-slate-900 mb-2">{item.plan}</h3>
                <div className="text-3xl font-black text-orange-600 mb-2">{item.price}</div>
                <p className="text-slate-600 mb-6">{item.desc}</p>
                <a
                  href="https://wa.me/923009508592?text=I%20want%20to%20enroll%20in%20Hifz%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-orange-500 text-white font-black rounded-lg text-center hover:bg-orange-600 transition"
                >
                  Get More Info
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 p-8 rounded-2xl border border-orange-200">
            <p className="text-center text-slate-700">
              <span className="font-black text-orange-600">💡 Custom Packages Available: </span>
              Group classes, flexible schedules, payment plans, and scholarships for deserving students. Contact us via WhatsApp!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Do I need to know Arabic to start Hifz?',
                a: 'No, you can start Hifz without knowing Arabic. Our instructors teach proper pronunciation and Tajweed rules so you memorize correctly.'
              },
              {
                q: 'What if I miss sessions?',
                a: 'We provide make-up sessions. However, consistent attendance is crucial for success. Our flexible scheduling helps accommodate your schedule.'
              },
              {
                q: 'Can I do Hifz alongside work or studies?',
                a: 'Yes! Many of our students balance work/studies with Hifz. 1 hour daily + weekend intensive sessions can work with planning.'
              },
              {
                q: 'How do you assess my progress?',
                a: 'Weekly progress tests, monthly assessments, and quarterly evaluations track your memorization. We adjust the pace based on your ability.'
              },
              {
                q: 'What happens after I complete Hifz?',
                a: 'You receive a certificate of completion recognized by Islamic scholars. Many become Hafiz teachers or continue advanced Islamic studies.'
              }
            ].map((item, idx) => (
              <details key={idx} className="bg-orange-50 p-6 rounded-xl border border-orange-200 group cursor-pointer">
                <summary className="flex items-start gap-4 font-black text-slate-900 text-lg list-none">
                  <span className="text-orange-600 text-xl group-open:rotate-180 transition">+</span>
                  {item.q}
                </summary>
                <p className="mt-4 text-slate-600 ml-8">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Begin Your Sacred Journey to Hifz</h2>
          <p className="text-xl mb-10 text-white/90">Join hundreds of students who have embarked on their Hifz journey. Become a Hafiz with expert guidance and community support.</p>
          <a
            href="https://wa.me/923009508592?text=Assalamu%20Alaikum%20I%20want%20to%20start%20the%20Hifz%20program"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-orange-600 font-black rounded-2xl shadow-xl hover:bg-slate-50 transition text-lg flex items-center justify-center gap-2 mx-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.842 5.404 2.439 7.623l.375 1.414 1.53-1.506c2.117 1.627 4.767 2.469 7.402 2.469 5.428 0 9.854-4.426 9.854-9.854 0-2.635-.846-5.291-2.443-7.577A9.835 9.835 0 0011.968 5.41c-5.428 0-9.847 4.426-9.847 9.851 0 .533.043 1.06.123 1.579l.26 1.561-1.534.381c-.766.184-1.41.653-1.756 1.286A10.021 10.021 0 001.5 12.208c0-5.428 4.426-9.854 9.854-9.854z"/>
            </svg>
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default QuranAdvancedPage;
