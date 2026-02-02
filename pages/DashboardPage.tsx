
import React, { useState, useMemo, useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { User, Question, Subject, Review } from '../types.ts';
import { db } from '../db.ts';
import StudentDashboard from './StudentDashboard.tsx';
import TeacherDashboard from './TeacherDashboard.tsx';
import AdminPage from './AdminPage.tsx';

interface DashboardPageProps {
  user: User;
  questions: Question[];
  reviews: Review[];
  onReplyQuestion: (id: string, reply: string) => void;
  onDeleteReview: (id: string) => void;
  onUserApproved?: (user: User) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ 
  user, 
  questions, 
  reviews, 
  onReplyQuestion, 
  onDeleteReview, 
  onUserApproved 
}) => {
  // Memoize static data retrieval
  const allSubjects = useMemo(() => db.getSubjects(), []);
  const isSuperAdmin = useMemo(() => user.email === 'zubairahmadisb7p2@gmail.com', [user.email]);
  
  const [activePerspective, setActivePerspective] = useState<'admin' | 'student' | 'teacher'>(
    isSuperAdmin ? 'admin' : (user.role === 'teacher' ? 'teacher' : 'student')
  );

  // Switch Perspective optimization
  const switchPerspective = useCallback((perspective: 'admin' | 'student' | 'teacher') => {
    setActivePerspective(perspective);
  }, []);

  if (!isSuperAdmin) {
    if (user.role === 'teacher') {
      return <TeacherDashboard user={user} />;
    }
    return <StudentDashboard user={user} questions={questions} allSubjects={allSubjects} />;
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-xpm-blue uppercase tracking-widest bg-xpm-blue/5 px-3 py-1 rounded-full">Super Admin Hub</span>
            </div>
            <div className="flex bg-slate-100 p-1 rounded-xl">
              {(['admin', 'student', 'teacher'] as const).map((p) => (
                <button 
                  key={p}
                  onClick={() => switchPerspective(p)}
                  className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                    activePerspective === p ? 'bg-white text-xpm-blue shadow-sm' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {p === 'admin' ? 'Control' : p === 'student' ? 'Student' : 'Faculty'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="animate-fade-in-up">
        {activePerspective === 'admin' && (
          <AdminPage 
            adminUser={user}
            questions={questions} 
            reviews={reviews} 
            onReplyQuestion={onReplyQuestion} 
            onDeleteReview={onDeleteReview}
            onUserApproved={onUserApproved}
          />
        )}
        {activePerspective === 'student' && (
          <StudentDashboard 
            user={user} 
            questions={questions} 
            allSubjects={allSubjects} 
          />
        )}
        {activePerspective === 'teacher' && (
          <TeacherDashboard user={user} />
        )}
      </div>
    </div>
  );
};

export default React.memo(DashboardPage);
