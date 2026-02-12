
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <Logo className="h-12 w-12" />
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed text-lg">
              Xpert Physics & Maths Tutors. Empowering O & A Level students with expert resources, syllabus tracking, and personalized teaching.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xpm-orange mb-6 uppercase tracking-widest text-xs">Exam Preparation</h4>
            <ul className="space-y-3 text-slate-300 font-medium text-sm">
              <li><Link to="/o-level-tutors" className="hover:text-xpm-green transition">O Level Tutors</Link></li>
              <li><Link to="/a-level-tutors" className="hover:text-xpm-green transition">A Level Tutors</Link></li>
              <li><Link to="/igcse-tutors" className="hover:text-xpm-green transition">IGCSE Tutors</Link></li>
              <li><Link to="/sat-tutors" className="hover:text-xpm-green transition">SAT Preparation</Link></li>
              <li><Link to="/net-entry-test-tutors" className="hover:text-xpm-green transition">NET Entry Test</Link></li>
              <li><Link to="/pma-tutors" className="hover:text-xpm-green transition">PMA Course</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xpm-orange mb-6 uppercase tracking-widest text-xs">Learning Resources</h4>
            <ul className="space-y-3 text-slate-300 font-medium text-sm">
              <li><Link to="/subjects" className="hover:text-xpm-green transition">Subjects</Link></li>
              <li><Link to="/past-papers" className="hover:text-xpm-green transition">Past Papers</Link></li>
              <li><Link to="/questions" className="hover:text-xpm-green transition">Q&A Hub</Link></li>
              <li><Link to="/study-groups" className="hover:text-xpm-green transition">Study Groups</Link></li>
              <li><Link to="/syllabus-precision" className="hover:text-xpm-green transition">Syllabus Tracker</Link></li>
              <li><Link to="/blog" className="hover:text-xpm-green transition">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xpm-orange mb-6 uppercase tracking-widest text-xs">Community & Account</h4>
            <ul className="space-y-3 text-slate-300 font-medium text-sm">
              <li><Link to="/teacher-directory" className="hover:text-xpm-green transition">Find Tutors</Link></li>
              <li><Link to="/hire-teacher" className="hover:text-xpm-green transition">Hire a Tutor</Link></li>
              <li><Link to="/teacher-registration" className="hover:text-xpm-green transition">Become a Tutor</Link></li>
              <li><Link to="/reviews" className="hover:text-xpm-green transition">Reviews</Link></li>
              <li><Link to="/login" className="hover:text-xpm-green transition">Login</Link></li>
              <li><Link to="/signup" className="hover:text-xpm-green transition">Sign Up</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-xs text-slate-400">
              <p className="font-bold mb-3 text-slate-300">Popular Subjects</p>
              <div className="flex flex-wrap gap-2">
                <Link to="/subjects" className="text-[10px] bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 transition">Physics</Link>
                <Link to="/subjects" className="text-[10px] bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 transition">Mathematics</Link>
                <Link to="/subjects" className="text-[10px] bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 transition">Chemistry</Link>
                <Link to="/subjects" className="text-[10px] bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 transition">Biology</Link>
              </div>
            </div>
            <div className="text-xs text-slate-400">
              <p className="font-bold mb-3 text-slate-300">Quick Links</p>
              <div className="flex flex-wrap gap-2">
                <Link to="/" className="text-[10px] bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 transition">Home</Link>
                <Link to="/dashboard" className="text-[10px] bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 transition">Dashboard</Link>
                <Link to="/past-papers" className="text-[10px] bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 transition">Resources</Link>
                <Link to="/sitemap" className="text-[10px] bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 transition">Sitemap</Link>
              </div>
            </div>
            <div className="text-xs text-slate-400">
              <p className="font-bold mb-3 text-slate-300">Support</p>
              <p className="hover:text-xpm-green transition cursor-pointer">Contact: support@xpmtutors.com</p>
              <p className="text-[10px] mt-2">Available 24/7</p>
            </div>
          </div>

          <div className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} XPM Tutors. EST 2024. Dedicated to Academic Excellence.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
