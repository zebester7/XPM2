import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { INTERNAL_LINKS, getBreadcrumbs } from '../internalLinks';

interface BreadcrumbProps {
  className?: string;
  showSchema?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '', showSchema = true }) => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname);

  useEffect(() => {
    // Inject BreadcrumbList schema into head
    if (showSchema && breadcrumbs.length > 1) {
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

      // Remove existing breadcrumb schema if any
      const existingSchema = document.querySelector('script[data-schema="breadcrumb"]');
      if (existingSchema) {
        existingSchema.remove();
      }

      // Create and inject new schema
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'breadcrumb');
      script.textContent = JSON.stringify(schemaMarkup);
      document.head.appendChild(script);

      return () => {
        // Clean up on unmount
        const schema = document.querySelector('script[data-schema="breadcrumb"]');
        if (schema) {
          schema.remove();
        }
      };
    }
  }, [breadcrumbs, showSchema]);

  if (breadcrumbs.length <= 1) return null;

  return (
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
  );
};

export default Breadcrumb;
