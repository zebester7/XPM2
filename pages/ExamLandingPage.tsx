
import React from 'react';
import { Link } from 'react-router-dom';

interface ExamLandingPageProps {
  exam: string;
}

const ExamLandingPage: React.FC<ExamLandingPageProps> = ({ exam }) => {
  const contentMap: Record<string, any> = {
    'O Level': {
      title: 'Online O Level Tutors',
      description: 'Achieve an A* in your Cambridge or Edexcel O Levels with our expert online coaching.',
      keywords: ['O Level Physics Tutor', 'O Level Maths Tutor', 'IGCSE Online Tutoring'],
      longText: 'Mastering the O Level curriculum requires a deep understanding of conceptual logic. Our tutors specialize in Physics (5054), Mathematics Syllabus D (4024), and Chemistry (5070). We provide daily topical past paper practice and specialized revision sessions to ensure you are exam-ready.'
    },
    'A Level': {
      title: 'A Level Online Tutors',
      description: 'Expert A Level tutoring for Science and Mathematics to secure your university place.',
      keywords: ['A Level Physics Tutor', 'A Level Maths Tutor', 'Advanced Mechanics Coaching'],
      longText: 'A Level Physics and Mathematics are notorious for their difficulty. XPM Tutors breaks down complex topics like Quantum Physics and Advanced Integration into manageable segments. Our mentors are top achievers who have navigated these exact boards successfully.'
    },
    'SAT': {
      title: 'Digital SAT Online Prep',
      description: 'Score 1500+ on the Digital SAT with our proven strategies and math drills.',
      keywords: ['SAT Online Tutor', 'SAT Math Prep', 'College Board Strategies'],
      longText: 'The new Digital SAT requires a change in strategy. We focus on time-management, vocabulary precision, and math logic that helps students outsmart the adaptive testing model used by the College Board.'
    }
  };

  const data = contentMap[exam] || {
    title: `${exam} Online Preparation`,
    description: `Expert coaching and resources for ${exam} aspirants globally.`,
    keywords: [`${exam} Tutor`, `Online ${exam} Coaching`],
    longText: `Prepare for ${exam} with the best minds in the industry. Our platform offers structured syllabi, expert doubt clearance, and 24/7 WhatsApp support.`
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-xpm-blue py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter uppercase">{data.title}</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium">{data.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Program Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {data.longText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
             <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <h3 className="text-xl font-black mb-4 uppercase">Core Subjects</h3>
                <ul className="space-y-3">
                   {['Physics', 'Mathematics', 'Chemistry', 'Computer Science'].map(s => (
                     <li key={s} className="flex items-center gap-2 text-slate-600 font-bold">
                        <span className="text-xpm-green">✓</span> {s}
                     </li>
                   ))}
                </ul>
             </div>
             <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <h3 className="text-xl font-black mb-4 uppercase">Key Benefits</h3>
                <ul className="space-y-3">
                   {['Live 1-on-1 Sessions', 'Topical Past Papers', 'Recorded Lessons', 'WhatsApp Support'].map(s => (
                     <li key={s} className="flex items-center gap-2 text-slate-600 font-bold">
                        <span className="text-xpm-orange">✦</span> {s}
                     </li>
                   ))}
                </ul>
             </div>
          </div>

          <div className="text-center">
            <Link to="/hire-teacher" className="inline-block px-12 py-5 bg-xpm-orange text-white font-black rounded-2xl shadow-xl hover:bg-orange-600 transition uppercase tracking-widest text-sm">
               Hire a Specialist for {exam}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Geo-Specific Targeting Footer */}
      <section className="bg-slate-900 py-12 text-white/40 text-[10px] font-black uppercase tracking-[0.3em] text-center">
        <div className="max-w-7xl mx-auto px-4">
          Online {exam} Tutors in United Kingdom • Online {exam} Tutors in UAE • Online {exam} Tutors in Pakistan • Online {exam} Tutors in Saudi Arabia
        </div>
      </section>
    </div>
  );
};

export default ExamLandingPage;
