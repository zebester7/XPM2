/**
 * Geolocation Helper for detecting user location and serving localized content
 * Detects country via IP-based geolocation services and sets content accordingly
 */

export interface GeoLocation {
  country: string;
  countryCode: string;
  currency: string;
  timezone: string;
  locale: string;
}

// Map country codes to localization data
const COUNTRY_MAP: Record<string, GeoLocation> = {
  'GB': { country: 'United Kingdom', countryCode: 'en-gb', currency: '£', timezone: 'Europe/London', locale: 'en-GB' },
  'US': { country: 'United States', countryCode: 'en-us', currency: '$', timezone: 'America/New_York', locale: 'en-US' },
  'AE': { country: 'United Arab Emirates', countryCode: 'en-ae', currency: 'AED', timezone: 'Asia/Dubai', locale: 'en-AE' },
  'PK': { country: 'Pakistan', countryCode: 'en-pk', currency: 'PKR', timezone: 'Asia/Karachi', locale: 'en-PK' },
};

const DEFAULT_LOCATION: GeoLocation = {
  country: 'Global',
  countryCode: 'x-default',
  currency: '$',
  timezone: 'UTC',
  locale: 'en'
};

/**
 * Get location data from localStorage if previously fetched
 */
function getCachedLocation(): GeoLocation | null {
  try {
    const cached = localStorage.getItem('xpm_user_location');
    if (cached) {
      const location = JSON.parse(cached);
      // Cache for 7 days
      const timestamp = localStorage.getItem('xpm_location_timestamp');
      if (timestamp && Date.now() - parseInt(timestamp) < 7 * 24 * 60 * 60 * 1000) {
        return location;
      }
    }
  } catch (e) {
    console.error('Error reading cached location:', e);
  }
  return null;
}

/**
 * Cache location data to localStorage
 */
function cacheLocation(location: GeoLocation): void {
  try {
    localStorage.setItem('xpm_user_location', JSON.stringify(location));
    localStorage.setItem('xpm_location_timestamp', Date.now().toString());
  } catch (e) {
    console.error('Error caching location:', e);
  }
}

/**
 * Detect user location via IP geolocation
 * Uses free geolocation APIs in fallback order
 */
export async function detectUserLocation(): Promise<GeoLocation> {
  // Check cache first
  const cached = getCachedLocation();
  if (cached) return cached;

  try {
    // Try using ip-api.com (free tier available)
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(5000) // 5 second timeout
    }).catch(() => null);

    if (response?.ok) {
      const data = await response.json();
      const countryCode = data.country_code?.toUpperCase();
      
      if (countryCode && COUNTRY_MAP[countryCode]) {
        const location = COUNTRY_MAP[countryCode];
        cacheLocation(location);
        return location;
      }
    }
  } catch (e) {
    console.warn('Geolocation detection failed:', e);
  }

  // Cache the default and return
  cacheLocation(DEFAULT_LOCATION);
  return DEFAULT_LOCATION;
}

/**
 * Get location from URL path (e.g., /uk/, /us/, /ae/, /pk/)
 */
export function getLocationFromPath(pathname: string): GeoLocation {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0]?.toLowerCase();

  const pathMap: Record<string, string> = {
    'uk': 'GB',
    'us': 'US',
    'ae': 'AE',
    'pk': 'PK'
  };

  if (firstSegment && pathMap[firstSegment]) {
    return COUNTRY_MAP[pathMap[firstSegment]];
  }

  return DEFAULT_LOCATION;
}

/**
 * Get hreflang mapping for a page
 */
export function getHreflangs(pagePathname: string): Array<{ rel: string; href: string }> {
  // Remove regional prefix if present
  const basePath = pagePathname.replace(/^\/(uk|us|ae|pk)\//, '/');
  
  // Build hreflang links for all regions
  const regions = ['uk', 'us', 'ae', 'pk'];
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://xpmtutors.com';
  
  const links = regions.map(region => ({
    rel: `alternate`,
    hrefValue: `hreflang`,
    href: `${baseUrl}/${region}${basePath === '/' ? '' : basePath}`
  }));

  // Add x-default
  links.push({
    rel: 'alternate',
    href: `${baseUrl}${basePath}`
  });

  return links;
}

/**
 * Get course keywords for specific locale
 */
export function getLocalizedKeywords(countryCode: string): string[] {
  const keywordMap: Record<string, string[]> = {
    'en-gb': [
      'GCSE tutor',
      'A Level tutor UK',
      'IGCSE tutor',
      'Cambridge exam preparation',
      'Maths tutor London',
      'Physics tutor UK',
      'Chemistry tutor UK',
      'English tutor UK',
      'Online tutoring UK',
      'GCSE revision help',
      'A Level revision UK',
      'British curriculum tutor',
      'UK online education'
    ],
    'en-us': [
      'SAT tutor',
      'AP exam help',
      'High school tutoring',
      'College prep tuition',
      'Math tutor USA',
      'Physics tutor US',
      'Chemistry tutor USA',
      'English tutor USA',
      'ACT prep',
      'PSAT tutor',
      'AP Chemistry help',
      'US online tutoring',
      'American education tutor'
    ],
    'en-ae': [
      'IB tutor Dubai',
      'IGCSE tutor UAE',
      'Cambridge exam Dubai',
      'Maths tutor Dubai',
      'Physics tutor UAE',
      'Chemistry tutor Dubai',
      'Online tutor UAE',
      'ISC tutor UAE',
      'CBSE tutor Dubai',
      'CAD curriculum',
      'UAE education tutor',
      'Expatriate tutoring',
      'Gulf region education'
    ],
    'en-pk': [
      'O Level tutor Pakistan',
      'A Level tutor Pakistan',
      'IGCSE tutor Pakistan',
      'Cambridge tutor Pakistan',
      'Maths tutor Pakistan',
      'Physics tutor Pakistan',
      'Chemistry tutor Pakistan',
      'English tutor Pakistan',
      'Online tutor Pakistan',
      'Islamabad tuition',
      'Karachi tutoring',
      'Lahore online classes',
      'Pakistani education tutor'
    ]
  };

  return keywordMap[countryCode] || keywordMap['en-us'];
}

/**
 * Get hero text for specific locale
 */
export function getLocalizedHeroText(countryCode: string): { heading: string; subheading: string } {
  const heroMap: Record<string, { heading: string; subheading: string }> = {
    'en-gb': {
      heading: 'Best GCSE & A Level Tutors in the UK',
      subheading: 'Expert online tutoring for Cambridge, IGCSE, and A Levels. Trusted by thousands of UK students.'
    },
    'en-us': {
      heading: 'Best SAT & AP Exam Prep in the USA',
      subheading: 'Expert online tutoring for SAT, AP, and High School. Trusted by thousands of US students.'
    },
    'en-ae': {
      heading: 'Best IB & IGCSE Tutors in Dubai & UAE',
      subheading: 'Expert online tutoring for IB, IGCSE, and Cambridge. Trusted by thousands of UAE students.'
    },
    'en-pk': {
      heading: 'Best O & A Level Tutors in Pakistan',
      subheading: 'Expert online tutoring for O Levels, A Levels, and IGCSE. Trusted by thousands of Pakistani students.'
    }
  };

  return heroMap[countryCode] || {
    heading: 'Online O & A Level Expert Subject Tutoring',
    subheading: 'Elite online tutors for O Level, A Level, IGCSE, SAT, and NET worldwide.'
  };
}

/**
 * Get pricing currency for locale
 */
export function getCurrencyInfo(countryCode: string): { symbol: string; name: string } {
  const currencyMap: Record<string, { symbol: string; name: string }> = {
    'en-gb': { symbol: '£', name: 'GBP' },
    'en-us': { symbol: '$', name: 'USD' },
    'en-ae': { symbol: 'AED', name: 'AED' },
    'en-pk': { symbol: 'PKR', name: 'PKR' }
  };

  return currencyMap[countryCode] || { symbol: '$', name: 'USD' };
}

/**
 * Get country name from code
 */
export function getCountryName(countryCode: string): string {
  for (const [code, location] of Object.entries(COUNTRY_MAP)) {
    if (location.countryCode === countryCode) {
      return location.country;
    }
  }
  return 'Global';
}
