import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getBreadcrumbTrail, canonicalUrl } from '../seoRoutes.ts';
import JsonLd from './JsonLd.tsx';

interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '' }) => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbTrail(location.pathname);

  if (breadcrumbs.length <= 1) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: canonicalUrl(item.path),
    })),
  };

  return (
    <nav
      className={`bg-white border-b border-slate-200 ${className}`}
      aria-label="Breadcrumb"
    >
      <JsonLd data={schema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && <span className="text-slate-400 mx-2" aria-hidden="true">/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-slate-900 font-medium" aria-current="page">{item.label}</span>
              ) : (
                <Link
                  to={item.path}
                  className="text-xpm-blue hover:text-xpm-blue/80 hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
