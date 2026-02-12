import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { INTERNAL_LINKS, getBreadcrumbs } from '../internalLinks';

interface BreadcrumbProps {
  className?: string;
  showSchema?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '', showSchema = true }) => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname);

  if (breadcrumbs.length <= 1) return null;

  // Schema markup for breadcrumbs
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.title,
      'item': `https://www.xpmtutors.com${item.path}`,
    })),
  };

  return (
    <>
      <nav
        className={`bg-white border-b border-slate-200 ${className}`}
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.path} className="flex items-center">
                {index > 0 && <span className="text-slate-400 mx-2">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-slate-900 font-medium">{item.title}</span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-xpm-blue hover:text-xpm-blue/80 hover:underline transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Schema Markup */}
      {showSchema && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </>
  );
};

export default Breadcrumb;
