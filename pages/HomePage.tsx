import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Review } from '../types.ts';
import XPMAdvantage from '../components/XPMAdvantage.tsx';
import SchemaMarkup from '../components/SchemaMarkup.tsx';
import HealingMindSidebar from '../components/HealingMindSidebar.tsx';

function useIsVisible(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIntersecting(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isIntersecting;
}

const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isVisible = useIsVisible(countRef);
  const hasStarted = useRef(false);
  useEffect(() => {
    if (isVisible && !hasStarted.current) {
      hasStarted.current = true;
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isVisible, end, duration]);
  return <span ref={countRef}>{count}{suffix}</span>;
};

const HealingMindFAQ: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is the relationship between Islam and mental health?",
      answer: "Islam is not a clinical psychology system, but it's a comprehensive worldview and lifestyle that addresses the human condition—including suffering, resilience, meaning, and wellbeing. Through spiritual practice, meaning and purpose, community, ethical framework, hope, and practical tools like tawakkul (trust) and sabr (patience), Islam supports mental and emotional health. It complements—not replaces—professional mental health care."
    },
    {
      question: "Can Islam help with anxiety and depression?",
      answer: "Yes. For anxiety: tawakkul (trust in Allah) interrupts the worry loop, dhikr (remembrance) calms the nervous system, and prayer activates your body's natural calming response. For depression: understanding your purpose, knowing you're not alone, and Islamic hope grounded in theology all combat depression. Professional help is crucial for clinical conditions—Islam works alongside professional care."
    },
    {
      question: "Is this a replacement for therapy or psychiatric medication?",
      answer: "No. Islamic practice complements professional care; it doesn't replace it. For clinical depression, anxiety disorders, trauma, or suicidality, professional help is essential. The integration model works best: medication (neuroscience), therapy (coping and thinking), Islamic practice (meaning and community) together."
    },
    {
      question: "Who can benefit from this teaching?",
      answer: "Muslims benefit from deepening their tradition; non-Muslims benefit from learning universal wisdom about suffering, resilience, and meaning. This teaching serves students, parents, professionals, researchers, and anyone seeking to understand faith and mental health."
    }
  ];

  return (
    <div className="space-y-4">
      {faqItems.map((item, idx) => (
        <div key={idx} className="border-2 rounded-xl overflow-hidden bg-white" style={{ borderColor: '#0F5C4D' }}>
          <button
            onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
            className="w-full px-6 py-4 flex items-center justify-between font-bold transition"
            style={{ backgroundColor: 'rgba(248, 245, 238, 0.8)', color: '#0F5C4D' }}
          >
            <span className="text-left">{item.question}</span>
            <span className="text-2xl" style={{ color: '#C7A96B' }}>{expandedFaq === idx ? '−' : '+'}</span>
          </button>
          {expandedFaq === idx && (
            <div className="px-6 py-4 border-t-2" style={{ borderColor: '#0F5C4D', color: '#1F2933' }}>
              <p className="leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const HomePage: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  const displayReviews = reviews.filter(r => r.rating === 5).slice(0, 20);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section - SEO Optimized H1 */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-xpm-blue/5 rounded-full mb-6 border border-xpm-blue/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-xpm-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-xpm-green"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-xpm-blue">Largest tutoring network across the globe</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 lg:mb-8 leading-none">
                Online <span className="text-xpm-blue">O & A Level</span> Expert Subject Tutoring for All Subjects
              </h1>
              
              <h2 className="text-lg sm:text-xl text-slate-600 mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                XPM Tutors is a trusted global provider of expert O Level and A Level tutors, delivering premium online tutoring for Cambridge, IGCSE, SAT, NET, and PMA students across 20+ countries. Our qualified tutors help students improve grades, master difficult concepts, and achieve top exam results through personalized, results-driven learning.
              </h2>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-0">
                <Link 
                  to="/hire-teacher" 
                  className="px-10 py-4 lg:py-5 bg-xpm-orange text-white font-black rounded-2xl shadow-xl shadow-xpm-orange/20 hover:bg-orange-600 transition transform hover:-translate-y-1 text-center text-lg"
                >
                  Book Expert Tutor
                </Link>
                <Link 
                  to="/signup" 
                  className="px-10 py-4 lg:py-5 bg-white text-xpm-blue border-2 border-xpm-blue/10 font-black rounded-2xl hover:bg-slate-50 transition text-center shadow-sm text-lg"
                >
                  Join Student Portal
                </Link>
              </div>
            </div>

            {/* Desktop Vertical Review Column */}
            <div className="hidden lg:block relative h-[600px] overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-50 to-transparent z-20"></div>
              <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20"></div>
              
              <div className="flex flex-col space-y-6 animate-scroll-vertical group-hover:pause-animation">
                {[...displayReviews, ...displayReviews].map((t, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 bg-xpm-blue text-white rounded-xl flex items-center justify-center font-black text-xs">
                          {t.userName[0]}
                        </div>
                        <span className="font-black text-slate-900 text-sm tracking-tight">{t.userName}</span>
                      </div>
                      <div className="flex text-xpm-orange">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm italic leading-relaxed">"{t.comment}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Horizontal Review Slider */}
            <div className="lg:hidden mt-8">
              <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar gap-4">
                {displayReviews.map((t, i) => (
                  <div key={i} className="min-w-[280px] snap-center bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-xpm-blue text-white rounded-lg flex items-center justify-center font-black text-[10px]">
                          {t.userName[0]}
                        </div>
                        <span className="font-black text-slate-900 text-xs tracking-tight">{t.userName}</span>
                      </div>
                      <div className="flex text-xpm-orange">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs italic leading-relaxed line-clamp-3">"{t.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center lg:text-left">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Why Choose XPM for Online O/A Level Tutoring?</h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
            XPM Tutors provides expert online tutoring for <span className="font-bold text-xpm-blue">O Levels, A Levels, IGCSE, SAT, NET, and PMA</span> aspirants. Our qualified faculty specializes in Physics, Mathematics, Chemistry, and Computer Science.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Whether you are preparing for Cambridge (CAIE), Edexcel, or the Federal Board, our mentors offer personalized guidance tailored to international standards. From mastering complex mechanics in A Level Physics to achieving perfect scores in SAT Math, XPM Tutors is your ultimate partner.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-xpm-blue py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="transition-transform hover:scale-105">
              <div className="text-4xl lg:text-7xl font-black text-xpm-green mb-3 tracking-tighter">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-white/50 font-black uppercase tracking-widest text-xs">Solved Papers</div>
            </div>
            <div className="transition-transform hover:scale-105">
              <div className="text-4xl lg:text-7xl font-black text-xpm-green mb-3 tracking-tighter">
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <div className="text-white/50 font-black uppercase tracking-widest text-xs">Countries Served</div>
            </div>
            <div className="transition-transform hover:scale-105">
              <div className="text-4xl lg:text-7xl font-black text-xpm-orange mb-3 tracking-tighter">
                <AnimatedCounter end={1500} suffix="+" />
              </div>
              <div className="text-white/50 font-black uppercase tracking-widest text-xs">Successful Alumni</div>
            </div>
            <div className="transition-transform hover:scale-105">
              <div className="text-4xl lg:text-7xl font-black text-xpm-orange mb-3 tracking-tighter">
                <AnimatedCounter end={2024} />
              </div>
              <div className="text-white/50 font-black uppercase tracking-widest text-xs">ESTABLISHED</div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </section>

      {/* Services/Exam Boards Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight">Expert Online Tutors for Every Goal</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Targeted preparation for international exam boards and competitive entry tests.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'O Level Tutors', desc: 'Expert guidance for Physics, Maths, and Chemistry (0580, 5054).', link: '/o-level-tutors' },
              { title: 'A Level Tutors', desc: 'Master advanced mechanics and calculus with A* strategies.', link: '/a-level-tutors' },
              { title: 'SAT Preparation', desc: 'Specialized Math and English coaching for Ivy League goals.', link: '/sat-tutors' },
              { title: 'NET Entry Test', desc: 'Focused preparation for NUST Engineering Test aspirants.', link: '/net-entry-test-tutors' },
              { title: 'IGCSE Support', desc: 'Curated resources for Cambridge and Edexcel IGCSE boards.', link: '/igcse-tutors' },
              { title: 'PMA Long Course', desc: 'Comprehensive coaching for PMA written test success.', link: '/pma-tutors' }
            ].map((service, idx) => (
              <Link key={idx} to={service.link} className="p-8 lg:p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 hover:border-xpm-blue group">
                <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 group-hover:text-xpm-blue transition">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-6 text-sm lg:text-base">{service.desc}</p>
                <span className="text-[10px] font-black text-xpm-blue uppercase tracking-widest group-hover:underline">Explore Program →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center uppercase tracking-tighter">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="border-b border-slate-100 pb-8">
              <h4 className="text-lg font-black text-slate-900 mb-2">How do I hire an online O Level tutor?</h4>
              <p className="text-slate-600 font-medium">You can browse our <Link to="/o-level-tutors" className="text-xpm-blue font-bold hover:underline">expert O Level tutors</Link>, select your subject, and book a trial session directly through our portal or WhatsApp. We also offer <Link to="/o-level-tutors-islamabad" className="text-xpm-blue font-bold hover:underline">specialized tutoring in Islamabad</Link>.</p>
            </div>
            <div className="border-b border-slate-100 pb-8">
              <h4 className="text-lg font-black text-slate-900 mb-2">Do you provide tutoring for SAT and NET Entry Tests?</h4>
              <p className="text-slate-600 font-medium">Yes, XPM Tutors has specialized programs for SAT (Digital SAT) and university entry tests like NUST NET.</p>
            </div>
            <div className="border-b border-slate-100 pb-8">
              <h4 className="text-lg font-black text-slate-900 mb-2">Are XPM tutors verified for Cambridge and Edexcel?</h4>
              <p className="text-slate-600 font-medium">Absolutely. Every tutor on our platform undergoes a rigorous document verification process before teaching. All our <Link to="/o-level-tutors" className="text-xpm-blue font-bold hover:underline">O Level tutors</Link> are qualified and experienced with Cambridge and Edexcel boards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized O Level Section */}
      <section className="py-24 bg-gradient-to-br from-xpm-blue/5 to-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-12 rounded-[2.5rem] border border-xpm-blue/20 shadow-sm">
            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Looking for O Level Tutors?</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              XPM Tutors specializes in expert <span className="font-bold">O Level tutoring for Cambridge and Edexcel</span>. With a 95%+ A* pass rate and expert tutors across Pakistan, UK, UAE, and beyond, we help students master Physics, Mathematics, Chemistry, and all O Level subjects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <h4 className="font-black text-slate-900">Islamabad-Based Experts</h4>
                  <p className="text-sm text-slate-600">Top-rated tutors from Islamabad institutions</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h4 className="font-black text-slate-900">Global Availability</h4>
                  <p className="text-sm text-slate-600">Online sessions from anywhere, anytime</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <h4 className="font-black text-slate-900">Proven Results</h4>
                  <p className="text-sm text-slate-600">95%+ A* pass rate for our students</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/o-level-tutors" className="px-8 py-4 bg-xpm-blue text-white font-black rounded-lg hover:bg-blue-700 transition uppercase tracking-widest text-sm">
                Browse All O Level Tutors
              </Link>
              <Link to="/o-level-tutors-islamabad" className="px-8 py-4 bg-xpm-orange text-white font-black rounded-lg hover:bg-orange-600 transition uppercase tracking-widest text-sm">
                O Level Tutors in Islamabad
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* A Level Specialized Section */}
      <section className="py-24 bg-xpm-blue/5 border-t border-xpm-blue/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-12 rounded-[2.5rem] border border-xpm-blue/20 shadow-sm">
            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Ace Your A Levels With Expert Tutoring</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              Preparing for <span className="font-bold">Cambridge A Levels</span>? XPM Tutors provides specialized coaching for Physics, Mathematics, Chemistry, Biology, Computer Science, and more. Our tutors help you achieve A* grades and secure admission to top universities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex gap-3">
                <span className="text-2xl">📖</span>
                <div>
                  <h4 className="font-black text-slate-900">University-Track Mentors</h4>
                  <p className="text-sm text-slate-600">A* achievers guiding you to top universities</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-black text-slate-900">Holistic Preparation</h4>
                  <p className="text-sm text-slate-600">Academics + UCAS + interview prep</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-black text-slate-900">Proven Results</h4>
                  <p className="text-sm text-slate-600">Students admitted to Oxford, Cambridge, Imperial</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/a-level-tutors" className="px-8 py-4 bg-xpm-blue text-white font-black rounded-lg hover:bg-blue-900 transition uppercase tracking-widest text-sm">
                Browse All A Level Tutors
              </Link>
              <Link to="/a-level-tutors-islamabad" className="px-8 py-4 bg-xpm-orange text-white font-black rounded-lg hover:bg-orange-600 transition uppercase tracking-widest text-sm">
                A Level Tutors in Islamabad
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* XPM Advantage Section */}
      <XPMAdvantage showBackground={true} variant="light" />

      {/* THE HEALING MIND SECTION */}
      <HealingMindSidebar />
      <SchemaMarkup 
        pageTitle="The Healing Mind: Islam, Philosophy & Neuroscience"
        pageDescription="Discover how Islam addresses depression, anxiety, and emotional pain through neuroscience-informed teaching by Prof. Mishal Razzaq."
        canonical="https://xpmtutors.com"
      />

      {/* Hero Section */}
      <section data-section="top" className="py-20 md:py-32 text-white" style={{ background: 'linear-gradient(135deg, #0F5C4D 0%, #0A4A3E 50%, #12324A 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-2 rounded-full mb-6 border-2" style={{ borderColor: '#C7A96B', backgroundColor: 'rgba(199, 169, 107, 0.1)' }}>
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: '#C7A96B' }}>Scholarly Islamic Wellness</p>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              The Healing Mind
            </h2>
            <p className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#C7A96B' }}>Islam, Philosophy & Neuroscience</p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl leading-relaxed opacity-90">
              Where ancient wisdom meets modern science to address depression, anxiety, trauma, and existential emptiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#healing-topics"
                className="inline-block px-8 py-4 font-bold rounded-lg hover:opacity-90 transition shadow-xl text-navy-900"
                style={{ backgroundColor: '#C7A96B' }}
              >
                Explore the Framework
              </a>
              <a 
                href="#healing-contact"
                className="inline-block px-8 py-4 font-bold rounded-lg hover:opacity-90 transition border-2"
                style={{ borderColor: '#C7A96B', color: '#F8F5EE', backgroundColor: 'rgba(15, 92, 77, 0.5)' }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Prof. Section */}
      <section data-section="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8F5EE' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#12324A' }}>
                About Prof. Mishal Razzaq
              </h3>
              <p className="text-lg mb-4 leading-relaxed" style={{ color: '#1F2933' }}>
                Prof. Mishal Razzaq is a specialized educator and thoughtful guide in the intersection of Islamic psychology, philosophy, and neuroscience-informed mental wellness.
              </p>
              <p className="text-lg mb-4 leading-relaxed" style={{ color: '#1F2933' }}>
                With a deep commitment to bridging faith and reason, she brings together rigorous intellectual inquiry, compassionate human understanding, and scholarly engagement with Islamic teachings to address emotional, psychological, and spiritual struggles.
              </p>
            </div>
            <div className="p-10 rounded-2xl shadow-xl border-2" style={{ backgroundColor: 'rgba(248, 245, 238, 0.7)', borderColor: '#0F5C4D' }}>
              <h4 className="text-2xl font-bold mb-8" style={{ color: '#0F5C4D' }}>Core Expertise</h4>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <span className="text-2xl font-bold" style={{ color: '#0F5C4D' }}>✦</span>
                  <span style={{ color: '#1F2933' }}><strong>Islamic Psychology:</strong> Faith and emotional wellbeing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl font-bold" style={{ color: '#0F5C4D' }}>✦</span>
                  <span style={{ color: '#1F2933' }}><strong>Neuroscience of Faith:</strong> Brain science validating spiritual practice</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl font-bold" style={{ color: '#0F5C4D' }}>✦</span>
                  <span style={{ color: '#1F2933' }}><strong>Islamic Philosophy:</strong> Purpose, meaning, consciousness</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl font-bold" style={{ color: '#0F5C4D' }}>✦</span>
                  <span style={{ color: '#1F2933' }}><strong>Faith-Based Healing:</strong> Trauma recovery and resilience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Topics */}
      <section data-section="topics" id="healing-topics" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8F5EE' }}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black mb-4 text-center" style={{ color: '#12324A' }}>
            Understanding the Mind, Heart, and Spirit
          </h3>
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto" style={{ color: '#1F2933' }}>A Scholarly Exploration</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Neuroscience & Mind",
                description: "How your brain works, stress responses, and the science behind Islamic practices like prayer and dhikr",
                icon: "🧠"
              },
              {
                title: "Depression & Hope",
                description: "Understanding depression through both neuroscience and faith, with practical tools for healing",
                icon: "🌟"
              },
              {
                title: "Anxiety & Trust",
                description: "How tawakkul (trust) and Islamic practices interrupt anxiety cycles and restore peace",
                icon: "🤝"
              },
              {
                title: "Trauma & Healing",
                description: "Faith-based approaches to healing from trauma through forgiveness, renewal, and community",
                icon: "💚"
              },
              {
                title: "Purpose & Meaning",
                description: "Finding identity and direction through Islamic philosophy and values",
                icon: "🎯"
              },
              {
                title: "Community & Belonging",
                description: "How Islamic community structure combats loneliness and supports wellbeing",
                icon: "👥"
              }
            ].map((topic, idx) => (
              <div key={idx} className="p-8 rounded-xl shadow-md hover:shadow-lg transition border-2 bg-white" style={{ borderColor: '#0F5C4D' }}>
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#0F5C4D' }}>{topic.title}</h4>
                <p style={{ color: '#1F2933' }}>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Framework */}
      <section data-section="framework" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8F5EE' }}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black mb-4 text-center" style={{ color: '#12324A' }}>
            The Islamic Framework for Mental Wellbeing
          </h3>
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto" style={{ color: '#1F2933' }}>Timeless Wisdom for Modern Challenges</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Tawakkul", subtitle: "Trust & Release", description: "Place your trust in Allah after doing your best. This interrupts anxiety loops and restores peace." },
              { name: "Sabr", subtitle: "Patient Perseverance", description: "Active perseverance through difficulty with faith that 'with hardship comes ease.'" },
              { name: "Salah", subtitle: "Prayer as Foundation", description: "Five daily practices that regulate the nervous system and create spiritual connection." },
              { name: "Dhikr", subtitle: "Sacred Remembrance", description: "Repetitive, meaningful phrases that interrupt rumination and calm the mind." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl shadow-md hover:shadow-lg transition border-l-4 bg-white" style={{ borderColor: '#C7A96B', backgroundColor: 'rgba(15, 92, 77, 0.04)' }}>
                <h4 className="text-2xl font-black mb-2" style={{ color: '#0F5C4D' }}>{item.name}</h4>
                <p className="text-sm font-bold mb-3 uppercase tracking-widest" style={{ color: '#C7A96B' }}>{item.subtitle}</p>
                <p style={{ color: '#1F2933' }} className="leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section data-section="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(248, 245, 238, 0.7)' }}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black mb-4 text-center" style={{ color: '#12324A' }}>
            Services & Engagement
          </h3>
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto" style={{ color: '#1F2933' }}>How to Connect and Learn</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl shadow-md border-2 hover:border-" style={{ borderColor: '#0F5C4D' }}>
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#0F5C4D' }}>Educational Lectures</h4>
              <p className="mb-4" style={{ color: '#1F2933' }}>In-depth presentations on Islamic psychology topics. Available in-person or virtual.</p>
              <p className="text-sm font-bold" style={{ color: '#C7A96B' }}>For: Universities, conferences, communities</p>
            </div>
            <div className="p-8 rounded-xl shadow-md border-2 hover:border-" style={{ borderColor: '#0F5C4D' }}>
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#0F5C4D' }}>Workshops & Sessions</h4>
              <p className="mb-4" style={{ color: '#1F2933' }}>Interactive workshops combining teaching, practice, and dialogue on mental wellness.</p>
              <p className="text-sm font-bold" style={{ color: '#C7A96B' }}>For: Student groups, professional development</p>
            </div>
            <div className="p-8 rounded-xl shadow-md border-2 hover:border-" style={{ borderColor: '#0F5C4D' }}>
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#0F5C4D' }}>Mentoring & Guidance</h4>
              <p className="mb-4" style={{ color: '#1F2933' }}>One-on-one or small-group mentoring for faith-based guidance on emotional wellbeing.</p>
              <p className="text-sm font-bold" style={{ color: '#C7A96B' }}>For: Students, professionals, parents</p>
            </div>
            <div className="p-8 rounded-xl shadow-md border-2 hover:border-" style={{ borderColor: '#0F5C4D' }}>
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#0F5C4D' }}>Speaking & Collaboration</h4>
              <p className="mb-4" style={{ color: '#1F2933' }}>Speaking engagements at conferences, interfaith dialogues, and media collaborations.</p>
              <p className="text-sm font-bold" style={{ color: '#C7A96B' }}>For: Academic conferences, media partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-section="faq" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8F5EE' }}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black mb-4 text-center" style={{ color: '#12324A' }}>
            Questions & Answers
          </h3>
          <p className="text-lg text-center mb-16" style={{ color: '#1F2933' }}>Understanding Islam and Mental Wellness</p>
          <HealingMindFAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section data-section="contact" id="healing-contact" className="py-20 md:py-28 text-white px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #0F5C4D 0%, #0A4A3E 50%, #12324A 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Engage?</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're seeking to learn, attend a workshop, explore mentoring, or collaborate—we welcome genuine seekers of all backgrounds.
          </p>
          <div className="p-10 rounded-2xl border-2 mb-8" style={{ backgroundColor: 'rgba(199, 169, 107, 0.1)', borderColor: '#C7A96B' }}>
            <p className="text-lg font-bold mb-3" style={{ color: '#C7A96B' }}>Connect via Email</p>
            <a 
              href="mailto:mishalrazaq665@gmail.com"
              className="text-3xl md:text-4xl font-black hover:opacity-90 transition"
              style={{ color: '#C7A96B' }}
            >
              mishalrazaq665@gmail.com
            </a>
          </div>
          <p className="opacity-80">
            Please include: your interest (lectures, workshops, mentoring, collaboration), your context, and any specific needs.
          </p>
        </div>
      </section>
        @keyframes scrollVertical { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        .animate-scroll-vertical { animation: scrollVertical 60s linear infinite; }
        .group-hover\\:pause-animation:hover { animation-play-state: paused; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default HomePage;