import React from 'react';

interface SchemaMarkupProps {
  type: 'service' | 'offer' | 'organization' | 'breadcrumb';
  data?: Record<string, any>;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data = {} }) => {
  const getSchema = () => {
    switch (type) {
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "XPM Tutors Service",
          "description": data.description || "Professional tutoring services",
          "provider": {
            "@type": "Organization",
            "name": "XPM Tutors",
            "url": "https://xpmtutors.com",
            "logo": "https://xpmtutors.com/xpm-logo.svg",
            "sameAs": [
              "https://facebook.com/xpmtutors",
              "https://twitter.com/xpmtutors",
              "https://linkedin.com/company/xpmtutors"
            ]
          },
          "areaServed": "Global",
          "serviceType": data.serviceType || "Online Tutoring",
          "offers": {
            "@type": "Offer",
            "name": data.offerName || "Free Demo Class",
            "price": "0",
            "priceCurrency": "USD",
            "url": "https://xpmtutors.com/hire-teacher"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "5000"
          }
        };

      case 'offer':
        return {
          "@context": "https://schema.org",
          "@type": "Offer",
          "name": data.name || "Free Demo Class",
          "description": data.description || "Book your free trial tutoring session",
          "price": data.price || "0",
          "priceCurrency": data.currency || "USD",
          "url": data.url || "https://xpmtutors.com/hire-teacher",
          "offeredBy": {
            "@type": "Organization",
            "name": "XPM Tutors",
            "url": "https://xpmtutors.com"
          },
          "availability": "https://schema.org/InStock",
          "validFrom": new Date().toISOString()
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "XPM Tutors",
          "description": "Expert online tutoring for O Level, A Level, IGCSE, SAT, and entrance exams",
          "url": "https://xpmtutors.com",
          "logo": "https://xpmtutors.com/xpm-logo.svg",
          "sameAs": [
            "https://facebook.com/xpmtutors",
            "https://twitter.com/xpmtutors",
            "https://linkedin.com/company/xpmtutors"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "support@xpmtutors.com"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "5000"
          }
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.breadcrumbs?.map((crumb: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
          })) || []
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }}
    />
  );
};

// Helper function for easy schema generation
export const generateSchemaScript = (type: 'service' | 'offer' | 'organization' | 'breadcrumb', data?: Record<string, any>) => {
  const getSchema = () => {
    switch (type) {
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.name || "XPM Tutors Service",
          "description": data?.description || "Professional tutoring services",
          "provider": {
            "@type": "Organization",
            "name": "XPM Tutors",
            "url": "https://xpmtutors.com"
          },
          "areaServed": "Global",
          "offers": {
            "@type": "Offer",
            "name": data?.offerName || "Free Demo Class",
            "price": "0",
            "priceCurrency": "USD"
          }
        };
      default:
        return {};
    }
  };

  return JSON.stringify(getSchema());
};

export default SchemaMarkup;
