
import React, { useState } from 'react';
import { User, Question } from '../types';
import { SUBJECTS_DATA } from '../constants';

interface QuestionsPageProps {
  user: User;
  questions: Question[];
  onAddQuestion: (q: Question) => void;
}

const QuestionsPage: React.FC<QuestionsPageProps> = ({ user, questions, onAddQuestion }) => {
  const [content, setContent] = useState('');
  const [subject, setSubject] = useState(SUBJECTS_DATA[0].name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newQ: Question = {
      id: 'q-' + Date.now(),
      userId: user.id,
      userName: user.name,
      subject: subject,
      content: content,
      timestamp: Date.now(),
    };

    onAddQuestion(newQ);
    setContent('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Ask a Question</h1>
            <p className="text-slate-600 mb-8">Stuck on a problem? Post your question here and a teacher or teaching assistant will get back to you.</p>
            
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {SUBJECTS_DATA.map(s => <option key={s.id} value={s.name}>{s.name} ({s.level})</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Question</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={6}
                  placeholder="Describe your doubt in detail..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                Submit Question
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Discussions</h2>
          <div className="space-y-6">
            {questions.length > 0 ? (
              questions.map(q => (
                <div key={q.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
                        {q.userName[0]}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-bold text-slate-900">{q.userName}</h4>
                        <span className="text-xs text-slate-400">{new Date(q.timestamp).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase">{q.subject}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6 whitespace-pre-wrap">{q.content}</p>
                  
                  {q.reply ? (
                    <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-bold text-blue-600">Teacher's Reply</span>
                      </div>
                      <p className="text-slate-600 text-sm italic">{q.reply}</p>
                    </div>
                  ) : (
                    <div className="text-xs text-amber-500 font-bold flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Waiting for a teacher response
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-20 text-center">
                <p className="text-slate-500">No questions posted yet. Be the first to ask!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
