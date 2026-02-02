
import React, { useState, useEffect, Suspense, lazy, useCallback, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { User, Review, Question } from './types.ts';
import { db } from './db.ts';
import { SettingsProvider } from './SettingsContext.tsx';

// Components
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

// Optimized Lazy Loading
const HomePage = lazy(() => import('./pages/HomePage.tsx'));
const LoginPage = lazy(() => import('./pages/LoginPage.tsx'));
const SignupPage = lazy(() => import('./pages/SignupPage.tsx'));
const DashboardPage = lazy(() => import('./pages/DashboardPage.tsx'));
const SubjectsPage = lazy(() => import('./pages/SubjectsPage.tsx'));
const SubjectDetailPage = lazy(() => import('./pages/SubjectDetailPage.tsx'));
const PastPapersPage = lazy(() => import('./pages/PastPapersPage.tsx'));
const QuestionsPage = lazy(() => import('./pages/QuestionsPage.tsx'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage.tsx'));
const AdminPage = lazy(() => import('./pages/AdminPage.tsx'));
const HireTeacherPage = lazy(() => import('./pages/HireTeacherPage.tsx'));
const SyllabusPrecisionPage = lazy(() => import('./pages/SyllabusPrecisionPage.tsx'));
const StudyGroupsPage = lazy(() => import('./pages/StudyGroupsPage.tsx'));
const TeacherDirectoryPage = lazy(() => import('./pages/TeacherDirectoryPage.tsx'));
const PaymentPage = lazy(() => import('./pages/PaymentPage.tsx'));
const TeacherRegistrationPage = lazy(() => import('./pages/TeacherRegistrationPage.tsx'));
const ExamLandingPage = lazy(() => import('./pages/ExamLandingPage.tsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));

const LoadingScreen = React.memo(() => (
  <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-xpm-blue border-t-transparent rounded-full animate-spin"></div>
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hydrating Environment...</span>
    </div>
  </div>
));

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="animate-page-fade">
      {children}
    </div>
  );
};

const ProtectedRoute: React.FC<{ user: User | null; children: React.ReactNode }> = ({ user, children }) => {
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Initial Load Optimization: Run once
    const initData = () => {
      const savedUser = localStorage.getItem('academia_user');
      if (savedUser) {
        try {
          const parsed = JSON.parse(savedUser);
          const users = db.getUsers();
          const freshUser = users.find(u => u.id === parsed.id);
          setUser(freshUser || parsed);
        } catch (e) {
          localStorage.removeItem('academia_user');
        }
      }
      setQuestions(db.getQuestions());
      setReviews(db.getReviews());
    };
    
    // Defer non-critical DB reads slightly to prioritize Hero paint
    const timeout = setTimeout(initData, 20);
    return () => clearTimeout(timeout);
  }, []);

  // Memoize handlers to prevent child re-renders
  const handleLogin = useCallback((userData: User) => {
    setUser(userData);
    localStorage.setItem('academia_user', JSON.stringify(userData));
    db.saveUser(userData);
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('academia_user');
  }, []);

  const updateUser = useCallback((updated: User) => {
    setUser(updated);
    localStorage.setItem('academia_user', JSON.stringify(updated));
    db.saveUser(updated);
  }, []);

  const handleAddQuestion = useCallback((q: Question) => {
    setQuestions(prev => [q, ...prev]);
    db.addQuestion(q);
  }, []);

  const handleReplyQuestion = useCallback((id: string, reply: string) => {
    setQuestions(prev => prev.map(q => q.id === id ? { ...q, reply } : q));
    const qs = db.getQuestions();
    const target = qs.find(item => item.id === id);
    if (target) {
      db.updateQuestion({ ...target, reply });
    }
  }, []);

  const handleAddReview = useCallback((r: Review) => {
    setReviews(prev => [r, ...prev]);
    db.addReview(r);
  }, []);

  const handleDeleteReview = useCallback((id: string) => {
    setReviews(prev => prev.filter(r => r.id !== id));
    db.deleteReview(id);
  }, []);

  return (
    <SettingsProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Navbar user={user} onLogout={handleLogout} />
          <main className="flex-grow relative">
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route path="/" element={<PageWrapper><HomePage reviews={reviews} /></PageWrapper>} />
                <Route path="/login" element={<PageWrapper>{!user ? <LoginPage onLogin={handleLogin} /> : <Navigate to="/dashboard" replace />}</PageWrapper>} />
                <Route path="/signup" element={<PageWrapper>{!user ? <SignupPage onSignup={handleLogin} /> : <Navigate to="/dashboard" replace />}</PageWrapper>} />
                <Route path="/payment" element={<PageWrapper>{user ? <PaymentPage user={user} onUpdateUser={updateUser} /> : <Navigate to="/login" replace />}</PageWrapper>} />
                <Route path="/teacher-registration" element={<PageWrapper>{user ? <TeacherRegistrationPage user={user} onUpdateUser={updateUser} /> : <Navigate to="/login" replace />}</PageWrapper>} />
                
                <Route path="/o-level-tutors" element={<PageWrapper><ExamLandingPage exam="O Level" /></PageWrapper>} />
                <Route path="/a-level-tutors" element={<PageWrapper><ExamLandingPage exam="A Level" /></PageWrapper>} />
                <Route path="/igcse-tutors" element={<PageWrapper><ExamLandingPage exam="IGCSE" /></PageWrapper>} />
                <Route path="/sat-tutors" element={<PageWrapper><ExamLandingPage exam="SAT" /></PageWrapper>} />
                <Route path="/net-entry-test-tutors" element={<PageWrapper><ExamLandingPage exam="NET Entry Test" /></PageWrapper>} />
                <Route path="/pma-tutors" element={<PageWrapper><ExamLandingPage exam="PMA Long Course" /></PageWrapper>} />
                <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />

                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute user={user}>
                      <PageWrapper>
                        <DashboardPage 
                          user={user!} 
                          questions={questions} 
                          reviews={reviews}
                          onReplyQuestion={handleReplyQuestion}
                          onDeleteReview={handleDeleteReview}
                          onUserApproved={updateUser}
                        />
                      </PageWrapper>
                    </ProtectedRoute>
                  } 
                />
                
                <Route path="/subjects" element={<ProtectedRoute user={user}><PageWrapper><SubjectsPage user={user!} onUpdateUser={updateUser} /></PageWrapper></ProtectedRoute>} />
                <Route path="/subjects/:id" element={<ProtectedRoute user={user}><PageWrapper><SubjectDetailPage user={user!} onUpdateUser={updateUser} /></PageWrapper></ProtectedRoute>} />
                <Route path="/past-papers" element={<ProtectedRoute user={user}><PageWrapper><PastPapersPage statuses={{}} onSetStatus={() => {}} /></PageWrapper></ProtectedRoute>} />
                <Route path="/questions" element={<ProtectedRoute user={user}><PageWrapper><QuestionsPage user={user!} questions={questions} onAddQuestion={handleAddQuestion} /></PageWrapper></ProtectedRoute>} />
                <Route path="/reviews" element={<PageWrapper><ReviewsPage user={user} reviews={reviews} onAddReview={handleAddReview} /></PageWrapper>} />
                <Route path="/hire-teacher" element={<PageWrapper><HireTeacherPage user={user} /></PageWrapper>} />
                <Route path="/syllabus-precision" element={<ProtectedRoute user={user}><PageWrapper><SyllabusPrecisionPage user={user!} /></PageWrapper></ProtectedRoute>} />
                <Route path="/study-groups" element={<ProtectedRoute user={user}><PageWrapper><StudyGroupsPage user={user!} /></PageWrapper></ProtectedRoute>} />
                <Route path="/teacher-directory" element={<PageWrapper><TeacherDirectoryPage /></PageWrapper>} />
                
                <Route 
                  path="/admin" 
                  element={user?.role === 'admin' ? 
                    <PageWrapper>
                      <AdminPage 
                        questions={questions} 
                        reviews={reviews} 
                        onReplyQuestion={handleReplyQuestion} 
                        onDeleteReview={handleDeleteReview}
                        onUserApproved={updateUser}
                      />
                    </PageWrapper> : <Navigate to="/" replace />
                  } 
                />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </SettingsProvider>
  );
};

export default App;
