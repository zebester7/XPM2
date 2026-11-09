/**
 * International SEO Helper
 * Manages hreflang tags, schema markup for multiple regions,
 * and localized structured data for better SERP performance
 */

export interface HrefLangEntry {
  hreflang: string;
  href: string;
}

/**
 * Manage hreflang tags in document head
 * Tells Google which version of a page is for which region
 */
export function addHrefLangTags(hreflangs: HrefLangEntry[]): void {
  // Remove existing hreflang tags
  const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
  existingHreflangs.forEach(tag => tag.remove());

  // Add new hreflang tags
  hreflangs.forEach(({ hreflang, href }) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = hreflang;
    link.href = href;
    document.head.appendChild(link);
  });
}

/**
 * Generate hreflang URLs for a page across all regions
 */
export function generateHreflangs(pagePath: string, isRegionalPage: boolean = false): HrefLangEntry[] {
  const baseUrl = 'https://www.xpmtutors.com';
  const regions = ['uk', 'us', 'ae', 'pk'];
  const regionMap: Record<string, string> = {
    'uk': 'en-gb',
    'us': 'en-us',
    'ae': 'en-ae',
    'pk': 'en-pk'
  };

  const cleanPath = pagePath.replace(/^\/(uk|us|ae|pk)/, '');
  const entries: HrefLangEntry[] = [];

  // Add regional versions if not already in a specific region
  regions.forEach(region => {
    entries.push({
      hreflang: regionMap[region],
      href: `${baseUrl}/${region}${cleanPath}`
    });
  });

  // Add x-default (point to main site without region)
  entries.push({
    hreflang: 'x-default',
    href: `${baseUrl}${cleanPath}`
  });

  return entries;
}

/**
 * Generate EducationalOrganization schema with localization
 */
export function generateEducationalOrganizationSchema(countryCode: string = 'x-default') {
  const countryDetails: Record<string, any> = {
    'en-gb': {
      name: 'XPM Tutors UK',
      areaServed: 'GB',
      telephone: '+44-20-1111-2222',
      priceRange: '££'
    },
    'en-us': {
      name: 'XPM Tutors USA',
      areaServed: 'US',
      telephone: '+1-888-XPM-TUTOR',
      priceRange: '$$$'
    },
    'en-ae': {
      name: 'XPM Tutors UAE',
      areaServed: 'AE',
      telephone: '+971-4-XXX-XXXX',
      priceRange: 'AED'
    },
    'en-pk': {
      name: 'XPM Tutors Pakistan',
      areaServed: 'PK',
      telephone: '+92-300-XXXXXXX',
      priceRange: '₨'
    }
  };

  const details = countryDetails[countryCode] || countryDetails['en-us'];

  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: details.name,
    description: 'Expert online tutors for O Level, A Level, IGCSE, SAT, AP, IB, and more.',
    url: 'https://www.xpmtutors.com',
    logo: 'https://www.xpmtutors.com/xpm-logo.svg',
    telephone: details.telephone,
    areaServed: details.areaServed,
    priceRange: details.priceRange,
    email: 'support@xpmtutors.com',
    sameAs: [
      'https://www.facebook.com/xpmtutors',
      'https://www.twitter.com/xpmtutors',
      'https://www.linkedin.com/company/xpm-tutors',
      'https://www.instagram.com/xpmtutors'
    ]
  };
}

/**
 * Generate Course schema for specific subject
 */
export function generateCourseSchemaLocalized(courseData: {
  name: string;
  description: string;
  level: string;
  code: string;
  countryCode?: string;
  price?: number;
  currency?: string;
}) {
  const currencyMap: Record<string, string> = {
    'en-gb': 'GBP',
    'en-us': 'USD',
    'en-ae': 'AED',
    'en-pk': 'PKR'
  };

  const currency = courseData.currency || currencyMap[courseData.countryCode || 'en-us'];

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseData.name,
    description: courseData.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'XPM Tutors',
      url: 'https://www.xpmtutors.com'
    },
    ...(courseData.price && {
      offers: {
        '@type': 'Offer',
        currency: currency,
        price: courseData.price
      }
    })
  };
}

/**
 * Online tutoring Service schema for a regional landing page.
 * XPM Tutors teaches online and has no offices in these countries, so this describes
 * the service and the country it serves rather than a LocalBusiness with an address.
 */
export function generateRegionalServiceSchema(countryCode: string) {
  const regions: Record<string, { country: string; path: string; name: string }> = {
    'en-gb': { country: 'United Kingdom', path: '/uk', name: 'Online GCSE & A Level Tutoring for UK Students' },
    'en-us': { country: 'United States', path: '/us', name: 'Online SAT & AP Tutoring for US Students' },
    'en-ae': { country: 'United Arab Emirates', path: '/ae', name: 'Online IB & IGCSE Tutoring for UAE Students' },
    'en-pk': { country: 'Pakistan', path: '/pk', name: 'Online O & A Level Tutoring for Students in Pakistan' },
  };
  const region = regions[countryCode] || regions['en-us'];

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: region.name,
    serviceType: 'Online Tutoring',
    url: `https://www.xpmtutors.com${region.path}`,
    areaServed: { '@type': 'Country', name: region.country },
    provider: { '@id': 'https://www.xpmtutors.com/#organization' },
    offers: {
      '@type': 'Offer',
      name: 'Free Trial Session',
      price: '0',
      priceCurrency: 'USD',
      url: 'https://www.xpmtutors.com/hire-teacher'
    }
  };
}

/**
 * Create breadcrumb schema with localization
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>, countryCode?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Add JSON-LD structured data to document
 */
export function addStructuredData(schema: any, id: string = 'structured-data'): void {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(schema);
}

/**
 * Get SEO recommendations for a country
 */
export function getSEORecommendations(countryCode: string): string[] {
  const recommendations: Record<string, string[]> = {
    'en-gb': [
      'Target GCSE and A Level keywords',
      'Use British English spelling (colour, centre, etc.)',
      'Include Cambridge Exam focus',
      'Mention UK universities',
      'Use GBP pricing'
    ],
    'en-us': [
      'Target SAT and AP keywords',
      'Use American English spelling',
      'Include college prep focus',
      'Mention US universities',
      'Use USD pricing'
    ],
    'en-ae': [
      'Target IB and IGCSE keywords',
      'Include expatriate community messaging',
      'Mention Gulf region availability',
      'Use AED pricing',
      'Focus on quality and global standards'
    ],
    'en-pk': [
      'Target O Level and A Level keywords',
      'Include Pakistan exam boards',
      'Focus on Cambridge curriculum',
      'Use PKR pricing',
      'Emphasize local support and understanding'
    ]
  };

  return recommendations[countryCode] || [];
}
