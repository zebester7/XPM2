import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const POPULAR_LINKS = [
  { to: '/o-level-tutors', label: 'O Level Tutors' },
  { to: '/a-level-tutors', label: 'A Level Tutors' },
  { to: '/igcse-tutors', label: 'IGCSE Tutors' },
  { to: '/quran-tutoring', label: 'Quran Tutoring' },
  { to: '/blog', label: 'Blog' },
  { to: '/sitemap', label: 'All pages' },
];

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | XPM Tutors';
    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'noindex';
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-4 py-24">
      <div className="max-w-xl text-center">
        <p className="text-sm font-black uppercase tracking-widest text-xpm-orange mb-4">Error 404</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Page not found</h1>
        <p className="text-lg text-slate-600 mb-10">The page you are looking for has moved or no longer exists.</p>
        <ul className="flex flex-wrap justify-center gap-3">
          {POPULAR_LINKS.map(link => (
            <li key={link.to}>
              <Link to={link.to} className="inline-block px-5 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-xpm-blue hover:bg-xpm-blue hover:text-white transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotFoundPage;
