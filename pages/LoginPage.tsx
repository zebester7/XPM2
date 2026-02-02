
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';
import { db } from '../db';
import Logo from '../components/Logo';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotPhone, setForgotPhone] = useState('');
  const [forgotMsg, setForgotMsg] = useState('');
  
  const [showWelcome, setShowWelcome] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    
    const allUsers = db.getUsers();
    const existingUser = allUsers.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    
    if (existingUser) {
      existingUser.lastLogin = Date.now();
      db.saveUser(existingUser);
      setLoggedInUser(existingUser);
      setShowWelcome(true);
    } else {
      setError('Invalid email or password.');
    }
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotMsg('');
    const allUsers = db.getUsers();
    const user = allUsers.find(u => u.email === forgotEmail && u.phoneNumber === forgotPhone);
    
    if (user) {
      const newPass = Math.random().toString(36).slice(-8).toUpperCase();
      user.password = newPass;
      db.saveUser(user);
      setForgotMsg(`Success! A temporary password "${newPass}" has been sent to your registered contact. Please use it to sign in.`);
    } else {
      setForgotMsg('Error: No account found matching that email and phone number.');
    }
  };

  const finalizeLogin = () => {
    if (loggedInUser) {
      onLogin(loggedInUser);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      {/* Welcome Modal Simulation */}
      {showWelcome && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-xpm-dark/90 backdrop-blur-xl p-4">
          <div className="max-w-xl w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl animate-fade-in-up">
            <div className="bg-xpm-blue p-12 text-center text-white relative">
              <div className="absolute top-6 left-1/2 -translate-x-1/2">
                <Logo className="h-16 w-16" showText={false} />
              </div>
              <h3 className="text-3xl font-black mt-12 mb-4 tracking-tighter">Welcome to the Elite Circle!</h3>
              <p className="text-white/60 font-medium">Dear {loggedInUser?.name}, your path to A* starts here.</p>
            </div>
            <div className="p-12 space-y-6">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs border-b border-slate-100 pb-2">Your Exclusive XPM Perks:</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-xpm-green/10 text-xpm-green rounded-lg flex items-center justify-center text-xs font-black">✓</div>
                  <p className="text-sm text-slate-600 font-medium">Access to <span className="text-slate-900 font-bold">24/7 Expert WhatsApp Support</span> for instant doubt clearance.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-xpm-green/10 text-xpm-green rounded-lg flex items-center justify-center text-xs font-black">✓</div>
                  <p className="text-sm text-slate-600 font-medium">Full <span className="text-slate-900 font-bold">Topic-wise Content Indexing</span> with curated revision notes.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-xpm-green/10 text-xpm-green rounded-lg flex items-center justify-center text-xs font-black">✓</div>
                  <p className="text-sm text-slate-600 font-medium">High-yield <span className="text-slate-900 font-bold">Past Paper Lab</span> with status tracking for every session.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-xpm-green/10 text-xpm-green rounded-lg flex items-center justify-center text-xs font-black">✓</div>
                  <p className="text-sm text-slate-600 font-medium">Interactive <span className="text-slate-900 font-bold">Study Hubs</span> to collaborate with top achievers globally.</p>
                </li>
              </ul>
              <button 
                onClick={finalizeLogin}
                className="w-full py-5 bg-xpm-blue text-white font-black rounded-2xl hover:bg-xpm-dark transition shadow-xl uppercase tracking-widest text-sm mt-4"
              >
                Enter Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 border border-slate-100 relative overflow-hidden">
        {showForgot ? (
          <div className="animate-fade-in-up">
            <button onClick={() => setShowForgot(false)} className="mb-8 text-xpm-blue font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
              ← Back to login
            </button>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Recover Access</h2>
              <p className="text-slate-400 mt-2 font-bold uppercase tracking-widest text-[10px]">Verify your credentials</p>
            </div>
            
            {forgotMsg && (
              <div className={`mb-8 p-4 rounded-2xl text-xs font-black uppercase tracking-widest border text-center ${forgotMsg.startsWith('Success') ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                {forgotMsg}
              </div>
            )}

            <form onSubmit={handleForgot} className="space-y-6">
              <div>
                <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Registered Email</label>
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-xpm-blue focus:bg-white transition"
                  placeholder="e.g. name@student.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Registered Phone (w/ Country Code)</label>
                <input
                  type="text"
                  value={forgotPhone}
                  onChange={(e) => setForgotPhone(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-xpm-blue focus:bg-white transition"
                  placeholder="e.g. 923000000000"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-xpm-orange text-white font-black rounded-2xl hover:bg-orange-600 transition shadow-xl uppercase tracking-widest"
              >
                Send New Password
              </button>
            </form>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                 <Logo className="h-20 w-20" showText={false} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Portal Access</h2>
              <p className="text-slate-400 mt-2 font-bold uppercase tracking-widest text-[10px]">Xpert Physics & Maths Tutors</p>
            </div>

            {error && (
              <div className="mb-8 bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-black uppercase tracking-widest border border-red-100 text-center italic">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-xpm-blue focus:bg-white transition"
                  placeholder="e.g. name@student.com"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
                  <button type="button" onClick={() => setShowForgot(true)} className="text-[10px] font-black text-xpm-blue uppercase tracking-widest hover:underline">Forgot?</button>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-xpm-blue focus:bg-white transition"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-xpm-blue text-white font-black rounded-2xl hover:bg-xpm-dark transition shadow-xl shadow-xpm-blue/10 transform active:scale-95 uppercase tracking-widest"
              >
                Sign In
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-500 text-sm font-medium">
                New to XPM?{' '}
                <Link to="/signup" className="text-xpm-orange font-black hover:underline">Join Now</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
