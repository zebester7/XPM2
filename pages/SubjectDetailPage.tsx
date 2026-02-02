
import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { User, LearningMaterial } from '../types';
import { SUBJECTS_DATA } from '../constants';
import { db } from '../db';

interface SubjectDetailPageProps {
  user: User;
  onUpdateUser: (user: User) => void;
}

const SubjectDetailPage: React.FC<SubjectDetailPageProps> = ({ user, onUpdateUser }) => {
  const { id } = useParams<{ id: string }>();
  const subject = SUBJECTS_DATA.find(s => s.id === id);
  const [materials, setMaterials] = useState<LearningMaterial[]>([]);

  useEffect(() => {
    if (id) {
      setMaterials(db.getLearningMaterials().filter(m => m.subjectId === id));
    }
  }, [id]);

  if (!subject) return <Navigate to="/subjects" />;

  const isCompleted = (topicId: string) => user.completedTopics.includes(topicId);

  const toggleTopic = (topicId: string) => {
    let newCompleted = [...user.completedTopics];
    if (newCompleted.includes(topicId)) {
      newCompleted = newCompleted.filter(tid => tid !== topicId);
    } else {
      newCompleted.push(topicId);
    }
    onUpdateUser({ ...user, completedTopics: newCompleted });
  };

  const completedCount = subject.topics.filter(t => isCompleted(t.id)).length;
  const progress = Math.round((completedCount / subject.topics.length) * 100);

  const categorizedMaterials = {
    Notes: materials.filter(m => m.type === 'Note'),
    'Solved Papers': materials.filter(m => m.type === 'Solved Paper'),
    'Marking Schemes': materials.filter(m => m.type === 'Marking Scheme'),
    Worksheets: materials.filter(m => m.type === 'Worksheet')
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-xpm-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/subjects" className="text-xpm-green text-sm font-bold flex items-center mb-6 hover:text-white transition">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Subjects
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between space-y-6 md:space-y-0">
            <div>
              <span className="px-2 py-1 bg-white/10 text-xs font-bold uppercase rounded mb-3 inline-block tracking-widest">{subject.level}</span>
              <h1 className="text-4xl font-black tracking-tight">{subject.name}</h1>
              <p className="text-white/60 mt-2 max-w-xl font-medium">{subject.description}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl min-w-[240px] border border-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-white/50 uppercase tracking-widest">Syllabus Track</span>
                <span className="text-lg font-black text-xpm-green">{progress}%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full mb-4 overflow-hidden">
                <div className="bg-xpm-green h-2 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
              </div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{completedCount} of {subject.topics.length} topics mastered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Syllabus topics */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Syllabus Breakdown</h2>
            <div className="space-y-4 mb-16">
              {subject.topics.map((topic, idx) => (
                <div 
                  key={topic.id} 
                  className={`p-6 rounded-3xl border transition-all ${
                    isCompleted(topic.id) 
                      ? 'bg-xpm-green/5 border-xpm-green/20 shadow-inner' 
                      : 'bg-white border-slate-100 hover:border-xpm-blue shadow-sm'
                  }`}
                >
                  <div className="flex items-start">
                    <button 
                      onClick={() => toggleTopic(topic.id)}
                      className={`mt-1 flex-shrink-0 w-6 h-6 rounded-xl border-2 flex items-center justify-center transition-all ${
                        isCompleted(topic.id) 
                          ? 'bg-xpm-green border-xpm-green text-white rotate-[360deg]' 
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      {isCompleted(topic.id) && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                    </button>
                    <div className="ml-5 flex-grow">
                      <div className="flex justify-between items-center">
                        <h4 className={`text-lg font-black ${isCompleted(topic.id) ? 'text-xpm-green' : 'text-slate-900'}`}>
                          {idx + 1}. {topic.title}
                        </h4>
                        {isCompleted(topic.id) && <span className="text-[10px] font-black text-xpm-green uppercase tracking-widest">Mastered</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resource Vault Section */}
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
               <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Resource Vault</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(categorizedMaterials).map(([category, items]) => (
                    <div key={category} className="space-y-4">
                       <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">{category}</h4>
                       <div className="space-y-2">
                          {items.length > 0 ? items.map(mat => (
                            <a 
                              key={mat.id}
                              href={mat.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-4 bg-white rounded-2xl border border-slate-100 hover:border-xpm-blue hover:shadow-md transition group"
                            >
                               <div className="flex justify-between items-center">
                                  <span className="text-sm font-bold text-slate-700 group-hover:text-xpm-blue">{mat.title}</span>
                                  <svg className="w-4 h-4 text-slate-300 group-hover:text-xpm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                               </div>
                            </a>
                          )) : (
                            <p className="text-[10px] text-slate-300 italic">No {category.toLowerCase()} uploaded yet.</p>
                          )}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-xpm-orange p-8 rounded-[2.5rem] text-white shadow-xl shadow-xpm-orange/20 transform hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.082 0.477 4 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.75 0 3.418 0.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332 0.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter">1-on-1 Coaching</h3>
              <p className="text-white/80 mb-8 font-medium leading-relaxed">Need help with {subject.name}? Get an expert mentor for personalized drills.</p>
              <Link to="/hire-teacher" className="w-full py-4 bg-white text-xpm-orange text-center font-black rounded-2xl hover:bg-slate-50 transition block shadow-lg">Book a Trial Session</Link>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Subject Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-400 uppercase tracking-widest">Total Topics</span>
                  <span className="text-slate-900">{subject.topics.length}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-400 uppercase tracking-widest">Mastered</span>
                  <span className="text-xpm-green">{completedCount}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Study Strategy</h3>
              <ul className="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <li className="flex items-start"><span className="text-xpm-green font-black mr-3">01</span><span>Analyze past examiner reports.</span></li>
                <li className="flex items-start"><span className="text-xpm-green font-black mr-3">02</span><span>Solve topical solved papers.</span></li>
                <li className="flex items-start"><span className="text-xpm-green font-black mr-3">03</span><span>Master mark scheme logic.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetailPage;
