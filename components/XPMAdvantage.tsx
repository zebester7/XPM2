import React from 'react';
import { Link } from 'react-router-dom';

interface XPMAdvantageProps {
  showBackground?: boolean;
  variant?: 'light' | 'dark';
}

const XPMAdvantage: React.FC<XPMAdvantageProps> = ({ showBackground = true, variant = 'light' }) => {
  const bgClass = showBackground 
    ? variant === 'dark' 
      ? 'bg-slate-900' 
      : 'bg-slate-50'
    : 'bg-transparent';

  const textClass = variant === 'dark' ? 'text-white' : 'text-slate-900';
  
  return (
    <section className={`py-16 lg:py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-black ${textClass} mb-4`}>
            The <span className="text-xpm-blue">XPM Advantage</span>
          </h2>
          <p className={`text-xl ${variant === 'dark' ? 'text-white/70' : 'text-slate-600'}`}>
            Why 5,000+ students trust XPM Tutors for their academic success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Trust Builder 1: Free Demo Class */}
          <div className={`relative overflow-hidden rounded-3xl ${variant === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-slate-100'} p-8 lg:p-10 group hover:shadow-xl transition-all`}>
            <div className="absolute inset-0 bg-gradient-to-br from-xpm-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-xpm-orange to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-xpm-orange/30 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>

              <h3 className={`text-2xl font-black ${textClass} mb-3`}>Free Demo Class</h3>
              <p className={`${variant === 'dark' ? 'text-white/60' : 'text-slate-600'} mb-6 text-base leading-relaxed`}>
                Experience our teaching quality risk-free. Book your personalized trial session today and see why students choose XPM.
              </p>

              <Link
                to="/hire-teacher"
                className="inline-flex items-center gap-2 px-6 py-3 bg-xpm-orange text-white font-black rounded-xl hover:bg-orange-600 transition"
              >
                <span>Book Your Free Trial</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Trust Builder 2: 100% Punctuality */}
          <div className={`relative overflow-hidden rounded-3xl ${variant === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-slate-100'} p-8 lg:p-10 group hover:shadow-xl transition-all`}>
            <div className="absolute inset-0 bg-gradient-to-br from-xpm-green/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-xpm-green to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>

              <h3 className={`text-2xl font-black ${textClass} mb-3`}>
                100% Punctuality Rate
              </h3>
              <p className={`${variant === 'dark' ? 'text-white/60' : 'text-slate-600'} mb-6 text-base leading-relaxed`}>
                Your time matters. Every session starts exactly on time. Our reliability badge represents our commitment to consistent, professional service.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-xpm-green/10 rounded-lg">
                <span className="text-2xl">✓</span>
                <span className="font-bold text-xpm-green">Reliability Certified</span>
              </div>
            </div>
          </div>

          {/* Trust Builder 3: Expert Tutors */}
          <div className={`relative overflow-hidden rounded-3xl ${variant === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-slate-100'} p-8 lg:p-10 group hover:shadow-xl transition-all`}>
            <div className="absolute inset-0 bg-gradient-to-br from-xpm-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-xpm-blue to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-xpm-blue/30 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v4h8v-4zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>

              <h3 className={`text-2xl font-black ${textClass} mb-3`}>Expert Tutors</h3>
              <p className={`${variant === 'dark' ? 'text-white/60' : 'text-slate-600'} mb-6 text-base leading-relaxed`}>
                7+ years of expertise in physics, mathematics, geoscience, and more. Our tutors are subject matter experts committed to your success.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-xpm-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className={`font-black ${textClass}`}>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className={`text-lg mb-6 ${variant === 'dark' ? 'text-white/70' : 'text-slate-600'}`}>
            Start your learning journey with XPM's trusted advantage model
          </p>
          <Link
            to="/hire-teacher"
            className={`inline-flex items-center gap-2 px-10 py-4 font-black rounded-2xl transition transform hover:-translate-y-1 ${
              variant === 'dark'
                ? 'bg-xpm-orange text-white hover:bg-orange-600'
                : 'bg-xpm-blue text-white hover:bg-blue-700'
            }`}
          >
            Get Started Now
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default XPMAdvantage;
