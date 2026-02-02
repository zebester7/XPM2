
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { User, Subject, Topic, Level } from '../types';
import { db } from '../db';

// Memoized Chapter Card for Performance
const ChapterCard = React.memo(({ topic, idx, isAdmin, onDelete }: { 
  topic: Topic, 
  idx: number, 
  isAdmin: boolean, 
  onDelete: (id: string) => void 
}) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden performant-list-item">
    <div className="flex justify-between items-start mb-6">
      <div className="w-12 h-12 bg-xpm-blue/5 text-xpm-blue rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-xpm-blue group-hover:text-white transition-colors shadow-sm">
        {topic.index || idx + 1}
      </div>
      {isAdmin && (
        <button 
          onClick={() => onDelete(topic.id)}
          className="p-2 text-slate-300 hover:text-red-500 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
        </button>
      )}
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight group-hover:text-xpm-blue transition-colors">{topic.title}</h3>
    
    <div className="space-y-3">
      {topic.resources.length > 0 ? (
        topic.resources.map((res, ridx) => (
          <a 
            key={ridx}
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-xpm-green/10 hover:border-xpm-green transition group/btn"
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3 shadow-sm text-xpm-green">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <span className="text-xs font-black text-slate-600 group-hover/btn:text-xpm-green transition-colors truncate">{res.title}</span>
          </a>
        ))
      ) : (
        <p className="text-xs text-slate-400 font-medium italic">Learning materials coming soon.</p>
      )}
    </div>
  </div>
));

interface SyllabusPrecisionPageProps {
  user: User;
}

const SyllabusPrecisionPage: React.FC<SyllabusPrecisionPageProps> = ({ user }) => {
  const [subjects, setSubjects] = useState<Subject[]>(() => db.getSubjects());
  
  const [selectedLevel, setSelectedLevel] = useState<Level | 'All'>(() => (localStorage.getItem('xpm_last_level') as Level) || 'O Level');
  const [selectedSubjectName, setSelectedSubjectName] = useState<string>(() => localStorage.getItem('xpm_last_subject') || 'Physics');
  
  const [newTopic, setNewTopic] = useState({ title: '', index: 1, resourceTitle: '', resourceUrl: '', base64File: '' });
  const [fileName, setFileName] = useState<string>('');
  const [isAdding, setIsAdding] = useState(() => localStorage.getItem('xpm_editor_open') === 'true');
  const [showSavedToast, setShowSavedToast] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const levels: (Level | 'All')[] = ['O Level', 'AS Level', 'A2 Level', 'IGCSE', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
  const subjectNames = ['Physics', 'Mathematics', 'Chemistry', 'Biology', 'Computer Science', 'English', 'Islamiyat', 'Pakistan Studies', 'Business', 'Economics'];

  // Persistent Effect
  useEffect(() => {
    localStorage.setItem('xpm_last_level', selectedLevel);
    localStorage.setItem('xpm_last_subject', selectedSubjectName);
    localStorage.setItem('xpm_editor_open', isAdding.toString());
  }, [selectedLevel, selectedSubjectName, isAdding]);

  // Memoized Filter Logic
  const currentSubject = useMemo(() => {
    return subjects.find(s => 
      (selectedLevel === 'All' || s.level === selectedLevel) && 
      (s.name === selectedSubjectName || s.name.includes(selectedSubjectName))
    );
  }, [subjects, selectedLevel, selectedSubjectName]);

  const handleAddChapter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentSubject) return;

    const finalUrl = newTopic.base64File || newTopic.resourceUrl;
    const finalTitle = newTopic.resourceTitle || (newTopic.base64File ? fileName : 'Revision Notes');

    const topicToAdd: Topic = {
      id: `${currentSubject.id}-ch-${Date.now()}`,
      title: newTopic.title,
      index: newTopic.index,
      resources: finalUrl ? [{ title: finalTitle, type: 'pdf', url: finalUrl }] : []
    };

    const updatedSubject = {
      ...currentSubject,
      topics: [...currentSubject.topics, topicToAdd].sort((a, b) => (a.index || 0) - (b.index || 0))
    };

    const newSubjectList = db.updateSubject(updatedSubject);
    setSubjects(newSubjectList);
    setNewTopic({ title: '', index: topicToAdd.index + 1, resourceTitle: '', resourceUrl: '', base64File: '' });
    setFileName('');
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2000);
  };

  const deleteTopic = useCallback((topicId: string) => {
    if (!window.confirm("Are you sure you want to delete this chapter?")) return;
    setSubjects(prev => {
      const target = prev.find(s => s.id === currentSubject?.id);
      if (!target) return prev;
      const updated = { ...target, topics: target.topics.filter(t => t.id !== topicId) };
      db.updateSubject(updated);
      return prev.map(s => s.id === updated.id ? updated : s);
    });
  }, [currentSubject?.id]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {showSavedToast && (
        <div className="fixed bottom-10 right-10 z-[100] bg-xpm-green text-white px-8 py-4 rounded-2xl shadow-2xl font-black uppercase tracking-widest animate-bounce">
          Chapter Saved!
        </div>
      )}

      <div className="bg-xpm-blue text-white pt-16 pb-32 shadow-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h1 className="text-4xl font-black tracking-tight mb-2">Syllabus Precision</h1>
              <p className="text-white/60 font-medium">Optimization active for high-volume content.</p>
            </div>
            {user.role === 'admin' && (
              <button onClick={() => setIsAdding(!isAdding)} className={`mt-4 md:mt-0 px-6 py-3 font-black rounded-xl transition ${isAdding ? 'bg-white text-xpm-blue' : 'bg-xpm-orange text-white'}`}>
                {isAdding ? 'Hide Editor' : 'Add Chapter'}
              </button>
            )}
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap gap-2">
              {levels.map(l => (
                <button key={l} onClick={() => setSelectedLevel(l)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedLevel === l ? 'bg-xpm-green text-white shadow-xl' : 'bg-white/10 hover:bg-white/20'}`}>{l}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {subjectNames.map(name => (
                <button key={name} onClick={() => setSelectedSubjectName(name)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedSubjectName === name ? 'bg-white text-xpm-blue shadow-xl' : 'bg-white/10 hover:bg-white/20'}`}>{name}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 pb-24 relative z-20">
        {user.role === 'admin' && isAdding && (
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border-4 border-xpm-blue/5 mb-12">
            <form onSubmit={handleAddChapter} className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Chapter #</label>
                <input type="number" value={newTopic.index} onChange={(e) => setNewTopic({...newTopic, index: parseInt(e.target.value)})} className="w-full px-5 py-3 bg-slate-50 rounded-xl font-bold" />
              </div>
              <div className="md:col-span-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Topic Title</label>
                <input type="text" value={newTopic.title} onChange={(e) => setNewTopic({...newTopic, title: e.target.value})} className="w-full px-5 py-3 bg-slate-50 rounded-xl font-bold" required />
              </div>
              <div className="md:col-span-4">
                <button type="submit" className="w-full py-4 bg-xpm-blue text-white font-black rounded-2xl uppercase tracking-widest text-sm">Publish Chapter</button>
              </div>
            </form>
          </div>
        )}

        {currentSubject ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSubject.topics.map((topic, idx) => (
              <ChapterCard key={topic.id} topic={topic} idx={idx} isAdmin={user.role === 'admin'} onDelete={deleteTopic} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-20 rounded-[3rem] text-center shadow-sm">
             <p className="text-slate-400 font-black uppercase tracking-widest">No chapters found for selection</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SyllabusPrecisionPage;
