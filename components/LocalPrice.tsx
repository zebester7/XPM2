/**
 * Shows a USD price in the visitor's local currency (Canada → CAD, UK → GBP, Australia → AUD, …).
 *
 * The prerendered HTML (what Google indexes) always shows USD. After hydration, /api/geo returns
 * the visitor's currency and today's rate; amounts are rounded to a clean figure. If the lookup
 * fails, the USD price simply stays.
 */
import { useEffect, useState } from 'react';

export interface Currency {
  currency: string;
  rate: number;
  country: string | null;
}

const USD: Currency = { currency: 'USD', rate: 1, country: null };
let lookup: Promise<Currency> | null = null;

function fetchCurrency(): Promise<Currency> {
  lookup ??= fetch('/api/geo')
    .then(r => (r.ok ? r.json() : USD))
    .then((d: Currency) => (d && typeof d.rate === 'number' && d.rate > 0 && /^[A-Z]{3}$/.test(d.currency) ? d : USD))
    .catch(() => USD);
  return lookup;
}

export function useLocalCurrency(): Currency {
  const [cur, setCur] = useState<Currency>(USD);
  useEffect(() => {
    let live = true;
    fetchCurrency().then(c => live && setCur(c));
    return () => { live = false; };
  }, []);
  return cur;
}

/** Rounds to a clean price: 694 → 695, 139,712 → 140,000 */
function roundNice(n: number): number {
  if (n < 20) return Math.round(n);
  const step = Math.pow(10, Math.floor(Math.log10(n)) - 2) * 5;
  return Math.round(n / step) * step;
}

export function formatPrice(usd: number, cur: Currency): string {
  const amount = cur.currency === 'USD' ? usd : roundNice(usd * cur.rate);
  try {
    return new Intl.NumberFormat('en', { style: 'currency', currency: cur.currency, maximumFractionDigits: 0 }).format(amount);
  } catch {
    return `${cur.currency} ${Math.round(amount).toLocaleString('en')}`;
  }
}
