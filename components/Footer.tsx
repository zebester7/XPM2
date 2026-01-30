
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <Logo className="h-12 w-12" />
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed text-lg">
              Xpert Physics & Maths Tutors. Empowering O & A Level students with expert resources, syllabus tracking, and personalized teaching.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xpm-orange mb-6 uppercase tracking-widest text-xs">Learning</h4>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li><Link to="/past-papers" className="hover:text-xpm-green transition">Past Papers</Link></li>
              <li><Link to="/subjects" className="hover:text-xpm-green transition">Subjects</Link></li>
              <li><Link to="/questions" className="hover:text-xpm-green transition">Q&A Hub</Link></li>
              <li><Link to="/reviews" className="hover:text-xpm-green transition">Feedback</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xpm-orange mb-6 uppercase tracking-widest text-xs">Portal</h4>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li><Link to="/login" className="hover:text-xpm-green transition">Login</Link></li>
              <li><Link to="/signup" className="hover:text-xpm-green transition">Join Now</Link></li>
              <li><Link to="/dashboard" className="hover:text-xpm-green transition">My Progress</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} XPM Tutors. EST 2024. Dedicated to Academic Excellence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
