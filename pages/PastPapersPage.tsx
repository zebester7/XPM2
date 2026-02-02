
import React, { useState, useEffect, useMemo } from 'react';
import { db } from '../db';
import { Board, Level, PastPaper } from '../types';

interface PastPapersPageProps {
  statuses: Record<string, 'Attempted' | 'Completed'>;
  onSetStatus: (id: string, s: 'Attempted' | 'Completed') => void;
}

const PastPapersPage: React.FC<PastPapersPageProps> = ({ statuses, onSetStatus }) => {
  const [search, setSearch] = useState('');
  const [boardFilter, setBoardFilter] = useState<Board | 'All'>('All');
  const [levelFilter, setLevelFilter] = useState<Level | 'All'>('All');
  const [papers, setPapers] = useState<PastPaper[]>([]);

  useEffect(() => {
    setPapers(db.getPastPapers());
  }, []);

  // Performance: Memoize filtered papers to handle potentially large datasets smoothly
  const filteredPapers = useMemo(() => {
    const s = search.toLowerCase();
    return papers.filter(p => {
      const matchesSearch = p.subject.toLowerCase().includes(s) || p.year.toString().includes(s);
      const matchesBoard = boardFilter === 'All' || p.board === boardFilter;
      const matchesLevel = levelFilter === 'All' || p.level === levelFilter;
      return matchesSearch && matchesBoard && matchesLevel;
    });
  }, [papers, search, boardFilter, levelFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10 text-center lg:text-left">
        <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Past Paper Repository</h1>
        <p className="text-slate-500 font-medium italic">Track your progress and access the high-yield question bank for A/O levels.</p>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Search Subject or Year</label>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g. Physics 9702"
                className="w-full px-6 py-3 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:border-xpm-blue focus:bg-white outline-none font-bold text-sm transition shadow-inner"
              />
              <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Board</label>
            <select
              value={boardFilter}
              onChange={(e) => setBoardFilter(e.target.value as any)}
              className="w-full px-6 py-3 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:border-xpm-blue focus:bg-white outline-none font-bold text-sm transition appearance-none cursor-pointer shadow-inner"
            >
              <option value="All">All Boards</option>
              <option value="Cambridge">Cambridge (CAIE)</option>
              <option value="Edexcel">Pearson Edexcel</option>
              <option value="Federal Board">Federal Board</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Level</label>
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value as any)}
              className="w-full px-6 py-3 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:border-xpm-blue focus:bg-white outline-none font-bold text-sm transition appearance-none cursor-pointer shadow-inner"
            >
              <option value="All">All Levels</option>
              <option value="O Level">O Level</option>
              <option value="IGCSE">IGCSE</option>
              <option value="AS Level">AS Level</option>
              <option value="A2 Level">A2 Level</option>
              <option value="Federal Board">Federal Board</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Syllabus Details</th>
                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Board/Level</th>
                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Session</th>
                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">My Progress</th>
                <th className="px-8 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Resource Access</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-50">
              {filteredPapers.map(p => (
                <tr key={p.id} className="hover:bg-slate-50 transition group">
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="text-sm font-black text-slate-900 group-hover:text-xpm-blue transition">{p.subject}</div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="text-[10px] font-black text-xpm-blue uppercase tracking-widest">{p.board}</div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{p.level}</div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="text-sm font-black text-slate-700">{p.year}</div>
                    <div className="text-[9px] font-black text-xpm-orange uppercase tracking-widest">{p.session}</div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <select
                      value={statuses[p.id] || 'None'}
                      onChange={(e) => onSetStatus(p.id, e.target.value as any)}
                      className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl border transition-all ${
                        statuses[p.id] === 'Completed' ? 'bg-xpm-green/10 text-xpm-green border-xpm-green/20' :
                        statuses[p.id] === 'Attempted' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                        'bg-slate-50 text-slate-400 border-slate-100'
                      }`}
                    >
                      <option value="None">Unsolved</option>
                      <option value="Attempted">Attempted</option>
                      <option value="Completed">Mastered</option>
                    </select>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-right space-x-3">
                    <a 
                      href={p.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-4 py-2 bg-xpm-blue/5 text-xpm-blue text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-xpm-blue hover:text-white transition shadow-sm"
                    >
                      Paper
                    </a>
                    {p.msUrl && (
                      <a 
                        href={p.msUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 bg-xpm-green/5 text-xpm-green text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-xpm-green hover:text-white transition shadow-sm"
                      >
                        Scheme
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PastPapersPage);
