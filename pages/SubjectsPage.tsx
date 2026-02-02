
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { User, Level } from '../types';
import { SUBJECTS_DATA } from '../constants';

interface SubjectsPageProps {
  user: User;
  onUpdateUser: (user: User) => void;
}

const SubjectsPage: React.FC<SubjectsPageProps> = ({ user, onUpdateUser }) => {
  const [filter, setFilter] = useState<Level | 'All'>('All');

  // Performance: Memoize filtered list to prevent recalculation on unrelated renders
  const subjects = useMemo(() => {
    return filter === 'All' 
      ? SUBJECTS_DATA 
      : SUBJECTS_DATA.filter(s => s.level === filter);
  }, [filter]);

  const toggleEnroll = (id: string) => {
    let newEnrolled = [...user.enrolledSubjects];
    if (newEnrolled.includes(id)) {
      newEnrolled = newEnrolled.filter(sid => sid !== id);
    } else {
      newEnrolled.push(id);
    }
    onUpdateUser({ ...user, enrolledSubjects: newEnrolled });
  };

  const levelOptions: (Level | 'All')[] = [
    'All', 'O Level', 'IGCSE', 'AS Level', 'A2 Level', 
    'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Subject Catalog</h1>
        <p className="text-slate-600 max-w-2xl mx-auto font-medium">Explore elite resources for international boards.</p>
      </div>

      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {levelOptions.map((l) => (
          <button
            key={l}
            onClick={() => setFilter(l as any)}
            className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition shadow-sm ${
              filter === l 
                ? 'bg-xpm-blue text-white shadow-lg' 
                : 'bg-white text-slate-500 border border-slate-100 hover:border-xpm-blue'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map(s => {
          const isEnrolled = user.enrolledSubjects.includes(s.id);
          return (
            <div key={s.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col overflow-hidden group hover:shadow-xl transition-all">
              <div className="h-2 bg-xpm-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-8 flex-grow">
                <span className="inline-block px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-black rounded-md uppercase tracking-widest mb-4">
                  {s.level}
                </span>
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-xpm-blue transition">{s.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {s.description}
                </p>
                <div className="flex items-center text-[10px] text-slate-400 font-black uppercase tracking-widest mb-6">
                  <svg className="w-4 h-4 mr-1.5 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.082 0.477 4 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.75 0 3.418 0.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332 0.477-4.5 1.253" /></svg>
                  {s.topics.length} Chapters Indexed
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                {isEnrolled ? (
                  <>
                    <Link to={`/subjects/${s.id}`} className="text-xpm-blue font-black text-xs uppercase tracking-widest hover:underline">Access Workspace</Link>
                    <button 
                      onClick={() => toggleEnroll(s.id)}
                      className="text-[10px] text-slate-400 font-black uppercase hover:text-red-500 transition"
                    >
                      Unenroll
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => toggleEnroll(s.id)}
                    className="w-full py-3 bg-slate-900 text-white font-black rounded-xl hover:bg-xpm-blue transition text-[10px] uppercase tracking-widest shadow-lg"
                  >
                    Enroll Now
                  </button>
                )}
              </div>
            </div>
          );
        })}
        {subjects.length === 0 && (
          <div className="col-span-full py-20 text-center opacity-30">
            <p className="text-xl font-black uppercase tracking-widest">No subjects listed for this level</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectsPage;
