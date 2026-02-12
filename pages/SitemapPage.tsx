import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updatePageMeta } from '../seoHelper';
import { INTERNAL_LINKS, getLinksByCategory, getPublicLinks } from '../internalLinks';

const SitemapPage: React.FC = () => {
  useEffect(() => {
    updatePageMeta({
      title: 'Sitemap - XPM Tutors',
      description: 'Complete sitemap of all pages on XPM Tutors. Browse our O Level, A Level, IGCSE tutoring resources, past papers, study groups, and more.',
      keywords: 'sitemap, site map, pages, xpm tutors',
      canonical: 'https://www.xpmtutors.com/sitemap',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'url': 'https://www.xpmtutors.com',
        'name': 'XPM Tutors',
        'description': 'O & A Level Physics and Maths Tutoring Platform'
      }
    });
  }, []);

  const categories = {
    primary: 'Primary Pages',
    exam: 'Exam Preparation',
    learning: 'Learning Resources',
    community: 'Community & Teachers',
    content: 'Content & Blog',
    account: 'User Accounts',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Site Map</h1>
          <p className="text-lg text-slate-600 mb-8">
            Explore all pages and resources available on XPM Tutors. Our comprehensive platform offers
            tutoring resources for O Level, A Level, IGCSE, SAT, and other exam boards.
          </p>
        </div>

        {/* Navigation Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-xpm-blue/10 rounded-lg p-4 border border-xpm-blue/20">
            <div className="text-2xl font-black text-xpm-blue">{Object.keys(INTERNAL_LINKS).length}</div>
            <div className="text-sm text-slate-600">Total Pages</div>
          </div>
          <div className="bg-xpm-green/10 rounded-lg p-4 border border-xpm-green/20">
            <div className="text-2xl font-black text-xpm-green">{getPublicLinks().length}</div>
            <div className="text-sm text-slate-600">Public Pages</div>
          </div>
          <div className="bg-xpm-orange/10 rounded-lg p-4 border border-xpm-orange/20">
            <div className="text-2xl font-black text-xpm-orange">{Object.keys(categories).length}</div>
            <div className="text-sm text-slate-600">Categories</div>
          </div>
        </div>

        {/* Sitemap by Category */}
        <div className="space-y-12">
          {Object.entries(categories).map(([categoryKey, categoryName]) => {
            const links = getLinksByCategory(categoryKey);
            if (links.length === 0) return null;

            return (
              <div key={categoryKey}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-xpm-blue/20">
                  {categoryName}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="group p-4 rounded-lg border border-slate-200 hover:border-xpm-blue hover:bg-xpm-blue/5 transition-all"
                    >
                      <h3 className="font-bold text-slate-900 group-hover:text-xpm-blue transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                        {link.description}
                      </p>
                      <div className="mt-3 flex items-center text-xs text-slate-500">
                        <span className="bg-slate-100 group-hover:bg-xpm-blue/10 px-2 py-1 rounded transition-colors">
                          {link.path}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Info */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">How to Use This Sitemap</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="text-xpm-green font-bold mr-3">•</span>
                <span>Click any page title to explore that section directly</span>
              </li>
              <li className="flex items-start">
                <span className="text-xpm-green font-bold mr-3">•</span>
                <span>Use the navigation menu for quick access to main sections</span>
              </li>
              <li className="flex items-start">
                <span className="text-xpm-green font-bold mr-3">•</span>
                <span>Explore past papers, questions, and study groups in the Learning Resources section</span>
              </li>
              <li className="flex items-start">
                <span className="text-xpm-green font-bold mr-3">•</span>
                <span>Find qualified tutors in the Community & Teachers section</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Schema Markup */}
        <div className="mt-12 p-6 bg-slate-100 rounded-lg text-xs font-mono text-slate-600 overflow-auto max-h-40">
          <p className="text-slate-700 font-bold mb-2">Machine-Readable Sitemap Data</p>
          <p>XML Sitemap: /sitemap.xml</p>
          <p>Total URLs: {Object.keys(INTERNAL_LINKS).length}</p>
          <p>Last Updated: {new Date().toISOString().split('T')[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
