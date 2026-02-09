
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Review } from '../types.ts';

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
                <span className="text-[10px] font-black uppercase tracking-widest text-xpm-blue">Enrollments Open for 2025 Sessions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 lg:mb-8 leading-none">
                Online <span className="text-xpm-blue">O & A Level</span> Expert Subject Tutoring
              </h1>
              
              <h2 className="text-lg sm:text-xl text-slate-600 mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Master Science & Logic with XPM Tutors. Elite tutoring for <span className="text-slate-900 font-bold">IGCSE, SAT, NET, and PMA</span> aspirants across 20+ countries.
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
              <p className="text-slate-600 font-medium">You can browse our expert faculty directory, select your subject, and book a trial session directly through our portal or WhatsApp.</p>
            </div>
            <div className="border-b border-slate-100 pb-8">
              <h4 className="text-lg font-black text-slate-900 mb-2">Do you provide tutoring for SAT and NET Entry Tests?</h4>
              <p className="text-slate-600 font-medium">Yes, XPM Tutors has specialized programs for SAT (Digital SAT) and university entry tests like NUST NET.</p>
            </div>
            <div className="border-b border-slate-100 pb-8">
              <h4 className="text-lg font-black text-slate-900 mb-2">Are XPM tutors verified for Cambridge and Edexcel?</h4>
              <p className="text-slate-600 font-medium">Absolutely. Every tutor on our platform undergoes a rigorous document verification process before teaching.</p>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
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
