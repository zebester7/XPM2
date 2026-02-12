
import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from '../types.ts';
import Logo from './Logo.tsx';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleOpen = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const navLinks = [
    { name: 'O Level', path: '/o-level-tutors', private: false },
    { name: 'A Level', path: '/a-level-tutors', private: false },
    { name: 'Resources', path: '/subjects', private: true },
    { name: 'Teachers', path: '/teacher-directory', private: false },
    { name: 'Blog', path: '/blog', private: false },
  ];

  const examLink = [
    { name: 'Dashboard', path: '/dashboard', private: true },
  ];

  return (
    <nav className="bg-xpm-blue text-white sticky top-0 z-50 shadow-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <Logo className="h-10 w-10" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              (!link.private || user) && (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    location.pathname === link.path 
                    ? 'bg-white/10 text-xpm-green' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            {examLink.map((link) => (
              (!link.private || user) && (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    location.pathname === link.path 
                    ? 'bg-white/10 text-xpm-green' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            {!user?.teacherProfileId && (
              <Link 
                to="/teacher-registration" 
                className="ml-4 px-4 py-2 bg-xpm-green text-white text-sm font-black rounded-lg hover:bg-green-600 transition shadow-lg shadow-black/10"
              >
                Join as Tutor
              </Link>
            )}

            <Link 
              to="/hire-teacher" 
              className="ml-2 px-4 py-2 bg-xpm-orange text-white text-sm font-black rounded-lg hover:bg-orange-600 transition shadow-lg shadow-black/10"
            >
              Hire a Tutor
            </Link>

            {user ? (
              <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-white/10">
                <div className="flex flex-col items-end">
                  <span className="text-xs font-medium text-white/70">Hi, {user.name}</span>
                  {user.role === 'teacher' && <span className="text-[8px] font-black uppercase text-xpm-green tracking-widest">Registered Tutor</span>}
                </div>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-[10px] font-bold uppercase tracking-widest bg-slate-800 px-2 py-1 rounded shadow-sm">Admin</Link>
                )}
                <button
                  onClick={onLogout}
                  className="text-sm font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3 ml-4">
                <Link to="/login" className="text-sm font-bold hover:text-xpm-green transition">Login</Link>
                <Link to="/signup" className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-black transition border border-white/10">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleOpen}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/5 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-xpm-dark border-t border-white/5 px-2 pt-2 pb-3 space-y-1 shadow-2xl animate-fade-in-up">
          {navLinks.map((link) => (
            (!link.private || user) && (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-base font-bold hover:bg-white/5"
              >
                {link.name}
              </Link>
            )
          ))}
          {examLink.map((link) => (
            (!link.private || user) && (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-base font-bold hover:bg-white/5"
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/teacher-registration"
            onClick={closeMenu}
            className="block px-4 py-3 rounded-lg text-base font-bold bg-xpm-green text-white"
          >
            Join as Tutor
          </Link>
          <Link
            to="/hire-teacher"
            onClick={closeMenu}
            className="block px-4 py-3 rounded-lg text-base font-bold bg-xpm-orange text-white"
          >
            Hire a Tutor
          </Link>
          {user ? (
            <button
              onClick={() => { onLogout(); closeMenu(); }}
              className="w-full text-left block px-4 py-3 rounded-lg text-base font-bold text-slate-400 hover:bg-white/5"
            >
              Logout
            </button>
          ) : (
            <div className="pt-4 space-y-2 px-2">
              <Link to="/login" onClick={closeMenu} className="block px-4 py-3 rounded-lg text-base font-bold text-center border border-white/10">Login</Link>
              <Link to="/signup" onClick={closeMenu} className="block px-4 py-3 rounded-lg text-base font-bold text-center bg-white/10">Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navbar);
