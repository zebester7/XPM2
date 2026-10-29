import React from 'react';
import { Link } from 'react-router-dom';
import { SEO_ROUTES, RouteSeo } from '../seoRoutes.ts';

const GROUPS: { name: string; match: (path: string) => boolean }[] = [
  { name: 'Exam Tutoring', match: p => /-tutors(-islamabad)?$/.test(p) },
  { name: 'Quran Courses', match: p => p.startsWith('/quran') },
  { name: 'Services & Community', match: p => ['/ir-services', '/hire-teacher', '/teacher-directory', '/reviews', '/mishal-razzaq'].includes(p) },
  { name: 'Regional Pages', match: p => /^\/(uk|us|ae|pk)(\/blog)?$/.test(p) },
  { name: 'Blog Articles', match: p => p === '/blog' || p.startsWith('/blog/') },
];

const grouped = GROUPS.map(group => ({
  name: group.name,
  routes: SEO_ROUTES.filter(r => group.match(r.path)),
}));

const RouteCard: React.FC<{ route: RouteSeo }> = ({ route }) => (
  <Link
    to={route.path}
    className="group block p-4 rounded-lg border border-slate-200 hover:border-xpm-blue hover:bg-xpm-blue/5 transition-all"
  >
    <h3 className="font-bold text-slate-900 group-hover:text-xpm-blue transition-colors">{route.label}</h3>
    <p className="text-sm text-slate-600 mt-2 line-clamp-2">{route.description}</p>
  </Link>
);

const SitemapPage: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Site Map</h1>
        <p className="text-lg text-slate-600">
          Every public page on XPM Tutors: O Level, A Level, IGCSE, SAT and entry test tutoring, Quran courses,
          regional pages and blog articles. A machine-readable version is at{' '}
          <a href="/sitemap.xml" className="text-xpm-blue font-bold hover:underline">/sitemap.xml</a>.
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-xpm-blue/20">Main Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RouteCard route={SEO_ROUTES.find(r => r.path === '/')!} />
          </div>
        </div>
        {grouped.map(group => (
          <div key={group.name}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-xpm-blue/20">{group.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.routes.map(route => <RouteCard key={route.path} route={route} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SitemapPage;
