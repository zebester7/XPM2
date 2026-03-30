import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const StickyDemoButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setShowScroll(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide on hire-teacher page as it already has the CTA
  if (location.pathname === '/hire-teacher') {
    return null;
  }

  return (
    <>
      {/* Bottom Sticky Button */}
      {showScroll && isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-black/80 to-transparent pb-8 md:hidden">
          <Link
            to="/hire-teacher"
            className="block w-full px-6 py-4 bg-gradient-to-r from-xpm-orange to-orange-600 text-white font-black rounded-2xl text-center shadow-2xl shadow-xpm-orange/40 hover:shadow-2xl hover:shadow-xpm-orange/60 transition transform hover:scale-105 text-lg"
          >
            📚 Book Free Trial Class
          </Link>
        </div>
      )}

      {/* Desktop Floating Button */}
      {showScroll && isVisible && (
        <div className="hidden md:fixed md:bottom-8 md:right-8 md:z-40 md:block">
          <div className="relative group">
            <Link
              to="/hire-teacher"
              className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-xpm-orange via-orange-500 to-xpm-orange text-white font-black rounded-full shadow-2xl shadow-xpm-orange/40 hover:shadow-2xl hover:shadow-xpm-orange/60 transition transform group-hover:scale-110 group-hover:-translate-y-2 text-base"
            >
              <span>Book Free Trial</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-xpm-orange/20 animate-pulse"></div>
          </div>
        </div>
      )}

      {/* Close Button for Mobile */}
      {showScroll && isVisible && (
        <button
          onClick={() => setIsVisible(false)}
          className="fixed bottom-0 right-4 z-45 md:hidden p-2 text-white/60 hover:text-white transition"
          aria-label="Close sticky button"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </>
  );
};

export default StickyDemoButton;
