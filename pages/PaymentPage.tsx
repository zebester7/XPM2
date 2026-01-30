
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { User, AppSettings } from '../types';
import { db } from '../db';
import Logo from '../components/Logo';

interface CurrencyConfig {
  code: string;
  symbol: string;
  rate: number; // 1 PKR to target
  country: string;
}

const CURRENCIES: Record<string, CurrencyConfig> = {
  PKR: { code: 'PKR', symbol: 'Rs.', rate: 1, country: 'Pakistan' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.0028, country: 'United Kingdom' },
  AED: { code: 'AED', symbol: 'AED', rate: 0.013, country: 'UAE' },
  USD: { code: 'USD', symbol: '$', rate: 0.0036, country: 'Global / USA' }
};

interface PaymentPageProps {
  user: User;
  onUpdateUser: (user: User) => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ user, onUpdateUser }) => {
  const [method, setMethod] = useState<'Easypaisa' | 'JazzCash'>('Easypaisa');
  const [transactionId, setTransactionId] = useState('');
  const [screenshot, setScreenshot] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [settings, setSettings] = useState<AppSettings>(db.getSettings());
  const [selectedCurrency, setSelectedCurrency] = useState<string>('PKR');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Detect Country / Currency
  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz.includes('Karachi')) setSelectedCurrency('PKR');
    else if (tz.includes('London') || tz.includes('Europe')) setSelectedCurrency('GBP');
    else if (tz.includes('Dubai') || tz.includes('Asia/Dubai')) setSelectedCurrency('AED');
    else setSelectedCurrency('USD');
  }, []);

  if (user.subscriptionStatus === 'active' || user.email === 'zubairahmadisb7p2@gmail.com') {
    return <Navigate to="/dashboard" />;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshot(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionId || !screenshot) return;
    setIsSubmitting(true);
    
    const updatedUser: User = {
      ...user,
      subscriptionStatus: 'pending',
      paymentProof: {
        method,
        transactionId,
        screenshot,
        timestamp: Date.now()
      }
    };

    setTimeout(() => {
      onUpdateUser(updatedUser);
      setIsSubmitting(false);
    }, 1500);
  };

  const config = CURRENCIES[selectedCurrency] || CURRENCIES.PKR;
  const localPrice = (settings.subscriptionFee * config.rate).toFixed(selectedCurrency === 'PKR' ? 0 : 2);
  const originalLocalPrice = (settings.originalPrice * config.rate).toFixed(selectedCurrency === 'PKR' ? 0 : 2);

  if (user.subscriptionStatus === 'pending') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center border border-slate-100">
          <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Verification Underway</h2>
          <p className="text-slate-500 font-medium mb-8">
            Your transaction proof is being reviewed by the XPM team. Access is usually granted within <span className="text-slate-900 font-bold">1-4 hours</span>.
          </p>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-400 font-bold uppercase tracking-widest">
            ID: {user.paymentProof?.transactionId}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
             <Logo className="h-10 w-10" showText={false} />
             <span className="text-xs font-black uppercase tracking-[0.2em] text-xpm-blue">Premium Membership</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none">
            Join the <br/> <span className="text-xpm-blue">Elite A* Circle</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm">
            Unlock the full potential of your O/A Levels with expert-curated syllabus trackers and 24/7 support.
          </p>

          {/* Dynamic Pricing Card */}
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 px-5 py-2 bg-xpm-orange text-white text-[10px] font-black uppercase tracking-widest rounded-bl-2xl shadow-lg">
              One-Time Payment
            </div>
            
            <div className="flex flex-col mb-8">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Detected Pricing ({config.country})</span>
               <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-black text-slate-900">
                    {config.symbol}{localPrice}
                  </span>
                  <span className="text-xl text-slate-300 line-through font-bold">{config.symbol}{originalLocalPrice}</span>
               </div>
            </div>

            <div className="space-y-4">
               {['Full Topical Syllabus Access', 'Expert Past Paper Laboratory', '24/7 Private WhatsApp Support', 'Exclusive Community Hubs'].map(item => (
                 <div key={item} className="flex items-center gap-4 text-sm font-bold text-slate-600">
                    <div className="w-5 h-5 bg-xpm-green text-white rounded-full flex items-center justify-center text-[10px]">✓</div>
                    {item}
                 </div>
               ))}
            </div>

            {/* Currency Switcher */}
            <div className="mt-10 pt-8 border-t border-slate-50">
               <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">Wrong Country? Change Currency:</p>
               <div className="flex gap-2">
                  {Object.keys(CURRENCIES).map(c => (
                    <button 
                      key={c}
                      onClick={() => setSelectedCurrency(c)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${selectedCurrency === c ? 'bg-xpm-blue text-white shadow-md' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                    >
                      {c}
                    </button>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white p-10 lg:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100">
          <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight uppercase">Payment Confirmation</h3>
          
          <div className="space-y-6">
            <div className="p-8 bg-xpm-blue/5 rounded-3xl border border-xpm-blue/10 relative">
              <h4 className="text-xs font-black text-xpm-blue uppercase tracking-widest mb-4">Official Transfer Account</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/50 pb-2">
                  <span className="text-xs font-bold text-slate-400">Method</span>
                  <div className="flex gap-2">
                    <button onClick={() => setMethod('Easypaisa')} className={`px-4 py-1.5 text-[10px] font-black rounded-xl transition ${method === 'Easypaisa' ? 'bg-xpm-blue text-white' : 'bg-white text-slate-400 shadow-sm'}`}>Easypaisa</button>
                    <button onClick={() => setMethod('JazzCash')} className={`px-4 py-1.5 text-[10px] font-black rounded-xl transition ${method === 'JazzCash' ? 'bg-xpm-orange text-white' : 'bg-white text-slate-400 shadow-sm'}`}>JazzCash</button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-xs font-bold text-slate-400">Account Name</span>
                  <span className="text-sm font-black text-slate-900 uppercase">Zubair Ahmad</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-xs font-bold text-slate-400">Number</span>
                  <span className="text-lg font-black text-xpm-blue">03009508592</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Transaction ID (11 Digits)</label>
                <input
                  type="text"
                  required
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="Enter Trx ID from SMS"
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:border-xpm-blue focus:bg-white outline-none font-bold text-sm transition shadow-inner"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Success Screenshot</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full py-10 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all ${screenshot ? 'border-xpm-green bg-xpm-green/5' : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-xpm-blue'}`}
                >
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} hidden accept="image/*" />
                  {screenshot ? (
                    <div className="flex flex-col items-center">
                       <svg className="w-10 h-10 text-xpm-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                       <span className="text-xs font-black text-xpm-green uppercase">{fileName} attached</span>
                    </div>
                  ) : (
                    <>
                      <svg className="w-10 h-10 text-slate-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      <span className="text-xs font-bold text-slate-400">Click to upload transfer receipt</span>
                    </>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={!transactionId || !screenshot || isSubmitting}
                className="w-full py-5 bg-xpm-blue text-white font-black rounded-[2rem] hover:bg-xpm-dark transition disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl shadow-xpm-blue/20 uppercase tracking-widest text-sm"
              >
                {isSubmitting ? 'Verifying Transaction...' : 'Request Full Access'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
