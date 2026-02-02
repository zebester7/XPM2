
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Question, Subject } from '../types';

interface StudentDashboardProps {
  user: User;
  questions: Question[];
  allSubjects: Subject[];
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ user, questions, allSubjects }) => {
  const enrolledIds = user.enrolledSubjects || [];
  const completedIds = user.completedTopics || [];
  const userSubjects = allSubjects.filter(s => enrolledIds.includes(s.id));
  const userQuestions = questions.filter(q => q.userId === user.id);
  
  const totalTopics = userSubjects.reduce((acc, s) => acc + s.topics.length, 0);
  const completedCount = userSubjects.reduce((acc, s) => {
    return acc + s.topics.filter(t => completedIds.includes(t.id)).length;
  }, 0);
  
  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between space-y-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Student Hub: {user.name}</h1>
          <p className="text-slate-500 mt-2 font-medium">Your roadmap to academic distinction.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/syllabus-precision" className="px-6 py-3 bg-white text-xpm-blue border-2 border-xpm-blue/10 font-black rounded-xl hover:bg-slate-50 transition shadow-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Syllabus Index (Notes & Worksheets)
          </Link>
          <Link to="/subjects" className="px-6 py-3 bg-xpm-blue text-white font-black rounded-xl hover:bg-xpm-dark shadow-xl shadow-xpm-blue/10 transition">
            Browse Syllabus
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h3 className="text-xl font-black text-slate-900 mb-8">Course Progress</h3>
            <div className="flex items-center justify-between mb-3 text-xs font-black uppercase tracking-widest">
              <span className="text-slate-400">Total Completion</span>
              <span className="text-xpm-green">{progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden">
              <div className="bg-xpm-green h-4 rounded-full transition-all duration-1000" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-black text-xpm-blue">{enrolledIds.length}</div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Subjects</div>
              </div>
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-black text-xpm-green">{completedCount}</div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Checkpoints</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h3 className="text-xl font-black text-slate-900 mb-6">Recent Doubts</h3>
            {userQuestions.length > 0 ? (
              <div className="space-y-4">
                {userQuestions.slice(0, 3).map(q => (
                  <div key={q.id} className="p-4 bg-slate-50 rounded-2xl text-sm border border-slate-100">
                    <p className="text-slate-700 font-bold line-clamp-1 mb-2">{q.content}</p>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${q.reply ? 'bg-xpm-green/10 text-xpm-green' : 'bg-xpm-orange/10 text-xpm-orange'}`}>
                      {q.reply ? 'Expert Replied' : 'Pending Response'}
                    </span>
                  </div>
                ))}
                <Link to="/questions" className="text-xpm-blue text-sm font-black hover:underline block text-center pt-2">View Conversation History</Link>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-slate-400 text-sm font-medium mb-4">No active questions.</p>
                <Link to="/questions" className="text-xpm-orange font-black text-sm uppercase tracking-widest">Ask a Specialist</Link>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-2xl font-black text-slate-900">Current Syllabi</h3>
          {userSubjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {userSubjects.map(subject => {
                const subjectCompleted = subject.topics.filter(t => completedIds.includes(t.id)).length;
                const subPercent = subject.topics.length > 0 ? Math.round((subjectCompleted / subject.topics.length) * 100) : 0;
                return (
                  <Link key={subject.id} to={`/subjects/${subject.id}`} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all border-b-4 border-b-transparent hover:border-b-xpm-blue">
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-3 py-1 bg-xpm-blue/5 text-xpm-blue text-[10px] font-black uppercase rounded-lg tracking-widest">{subject.level}</span>
                      <span className="text-lg font-black text-slate-300">{subPercent}%</span>
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-6 group-hover:text-xpm-blue transition">{subject.name}</h4>
                    <div className="w-full bg-slate-100 rounded-full h-2 mb-4 overflow-hidden">
                      <div className="bg-xpm-blue h-2 rounded-full shadow-sm" style={{ width: `${subPercent}%` }}></div>
                    </div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{subjectCompleted} / {subject.topics.length} Chapters Finished</p>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200 p-20 text-center">
              <p className="text-slate-400 font-black uppercase tracking-widest mb-8">No subjects enrolled</p>
              <Link to="/subjects" className="px-10 py-4 bg-xpm-orange text-white rounded-2xl font-black shadow-xl shadow-xpm-orange/10 hover:bg-orange-600 transition">Get Enrolled</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
