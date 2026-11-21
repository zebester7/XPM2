/**
 * Visitor country → local currency and today's USD exchange rate, for showing prices locally.
 *
 * Country comes from Vercel's `x-vercel-ip-country` header (no IP is stored or sent anywhere).
 * Rates come from open.er-api.com (free, no key; only "USD" is sent), cached in memory for 12 hours,
 * with a built-in fallback table so a price is always shown.
 */

const EURO = ['AT', 'BE', 'HR', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES'];

export const COUNTRY_CURRENCY = {
  US: 'USD', CA: 'CAD', GB: 'GBP', AU: 'AUD', NZ: 'NZD', IE: 'EUR',
  ...Object.fromEntries(EURO.map(c => [c, 'EUR'])),
  CH: 'CHF', SE: 'SEK', NO: 'NOK', DK: 'DKK', PL: 'PLN', CZ: 'CZK', HU: 'HUF', RO: 'RON', TR: 'TRY',
  AE: 'AED', SA: 'SAR', QA: 'QAR', KW: 'KWD', BH: 'BHD', OM: 'OMR', JO: 'JOD', EG: 'EGP',
  PK: 'PKR', IN: 'INR', BD: 'BDT', LK: 'LKR', NP: 'NPR',
  SG: 'SGD', MY: 'MYR', HK: 'HKD', JP: 'JPY', KR: 'KRW', CN: 'CNY', TW: 'TWD', ID: 'IDR', PH: 'PHP', TH: 'THB', VN: 'VND',
  ZA: 'ZAR', NG: 'NGN', KE: 'KES', GH: 'GHS', MA: 'MAD',
  BR: 'BRL', MX: 'MXN', AR: 'ARS', CL: 'CLP', CO: 'COP',
};

// Approximate rates (units per 1 USD), used only if the live rate service is unreachable
const FALLBACK_RATES = {
  USD: 1, CAD: 1.39, GBP: 0.76, AUD: 1.53, NZD: 1.72, EUR: 0.86, CHF: 0.80, SEK: 9.5, NOK: 10.1, DKK: 6.4,
  PLN: 3.65, CZK: 21, HUF: 335, RON: 4.4, TRY: 42, AED: 3.6725, SAR: 3.75, QAR: 3.64, KWD: 0.307, BHD: 0.376,
  OMR: 0.385, JOD: 0.709, EGP: 48, PKR: 281, INR: 88, BDT: 122, LKR: 300, NPR: 140, SGD: 1.30, MYR: 4.2,
  HKD: 7.78, JPY: 152, KRW: 1420, CNY: 7.1, TWD: 30.5, IDR: 16500, PHP: 58, THB: 32.5, VND: 26300,
  ZAR: 17.5, NGN: 1500, KES: 129, GHS: 11, MAD: 9.2, BRL: 5.4, MXN: 18.5, ARS: 1400, CLP: 950, COP: 3900,
};

let cache = { at: 0, rates: null };
const TTL = 12 * 60 * 60 * 1000;

async function liveRates() {
  if (cache.rates && Date.now() - cache.at < TTL) return cache.rates;
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD', { signal: AbortSignal.timeout(3000) });
    const data = await res.json();
    if (data?.result === 'success' && data.rates?.CAD) {
      cache = { at: Date.now(), rates: data.rates };
      return data.rates;
    }
  } catch (err) {
    console.error('Exchange rate fetch failed:', err.message);
  }
  return null;
}

export async function geoCurrency(req) {
  const raw = String(req.headers['x-vercel-ip-country'] || '').toUpperCase();
  const country = /^[A-Z]{2}$/.test(raw) ? raw : null;
  const currency = (country && COUNTRY_CURRENCY[country]) || 'USD';
  if (currency === 'USD') return { country, currency, rate: 1, source: 'fixed' };
  const rates = await liveRates();
  const rate = rates?.[currency] ?? FALLBACK_RATES[currency];
  return { country, currency, rate, source: rates?.[currency] ? 'live' : 'fallback' };
}
