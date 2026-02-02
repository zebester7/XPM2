
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';
import Logo from '../components/Logo';
import { db } from '../db';

interface SignupPageProps {
  onSignup: (user: User) => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !phone || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    const allUsers = db.getUsers();
    if (allUsers.some(u => u.email === email)) {
      setError('An account with this email already exists.');
      return;
    }

    const newUser: User = {
      id: 'student-' + Date.now(),
      name: name,
      email: email,
      phoneNumber: phone,
      password: password,
      role: 'student',
      enrolledSubjects: [],
      completedTopics: [],
      registeredAt: Date.now(),
      subscriptionStatus: 'active' // Set to active by default for free registration
    };

    onSignup(newUser);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 border border-slate-100">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <Logo className="h-16 w-16" showText={false} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Create Account</h2>
          <p className="text-slate-400 mt-2 font-bold uppercase tracking-widest text-[10px]">Start your A* Journey</p>
        </div>

        {error && (
          <div className="mb-8 bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-black uppercase tracking-widest border border-red-100 text-center italic">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-3.5 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-xpm-blue focus:bg-white transition text-sm font-bold"
              placeholder="e.g. John Doe"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3.5 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-xpm-blue focus:bg-white transition text-sm font-bold"
              placeholder="e.g. name@student.com"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-6 py-3.5 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-xpm-blue focus:bg-white transition text-sm font-bold"
              placeholder="e.g. 923000000000"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-3.5 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-xpm-blue focus:bg-white transition text-sm font-bold"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Confirm</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-6 py-3.5 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-xpm-blue focus:bg-white transition text-sm font-bold"
                placeholder="••••••••"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-5 bg-xpm-orange text-white font-black rounded-2xl hover:bg-orange-600 transition shadow-xl uppercase tracking-widest text-sm mt-4"
          >
            Create My XPM Account
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-500 text-sm font-medium">
            Already have an account?{' '}
            <Link to="/login" className="text-xpm-blue font-black hover:underline">Log in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
