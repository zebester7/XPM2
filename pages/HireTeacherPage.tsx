
import React, { useState, useEffect } from 'react';
import { User, Teacher } from '../types';
import { db } from '../db';

interface HireTeacherPageProps {
  user: User | null;
}

const HireTeacherPage: React.FC<HireTeacherPageProps> = ({ user }) => {
  const [formData, setFormData] = useState({
    subjects: ['Physics'] as string[],
    teachers: [] as string[],
    level: 'O Level',
    board: 'Cambridge',
    message: ''
  });

  const [availableTeachers, setAvailableTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    setAvailableTeachers(db.getTeachers());
  }, []);

  const availableSubjects = [
    'Physics', 'Mathematics', 'Chemistry', 'Biology', 
    'Computer Science', 'English', 'Islamiyat', 'Pakistan Studies',
    'Business', 'Economics'
  ];

  const toggleSubject = (sub: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(sub) 
        ? prev.subjects.filter(s => s !== sub) 
        : [...prev.subjects, sub]
    }));
  };

  const phoneNumber = "923009508592"; 
  const subjectsStr = formData.subjects.length > 0 ? formData.subjects.join(', ') : "None selected";
  const teachersStr = formData.teachers.length > 0 ? formData.teachers.join(', ') : "Any available expert";
  
  const whatsappBaseText = `Hi XPM Tutors! 👋\n\nI would like to book a trial session.\n\n*Target Subjects:* ${subjectsStr}\n*Academic Level:* ${formData.level}\n*Exam Board:* ${formData.board}\n*Preferred Tutors:* ${teachersStr}\n*Specific Requirements:* ${formData.message || "Not specified"}\n\nLooking forward to hearing from you!`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappBaseText)}`;

  const levels = [
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 
    'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
    'O Level', 'AS Level', 'A2 Level', 'IGCSE', 'Matric', 'FSc'
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-xpm-blue py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-white/10">Premium Tutoring Network</span>
          <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
            Get One-on-One <br/> <span className="text-xpm-orange">Expert Coaching</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
            Personalized learning paths for Grade 1 through 12. Hire verified XPM mentors for guaranteed progress.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Book Trial Session Form (Now First) */}
          <div className="lg:col-span-1 order-1">
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-xpm-blue/5 sticky top-24">
              <h3 className="text-2xl font-black text-slate-900 mb-8 text-center uppercase tracking-tighter">Book Trial Session</h3>
              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Target Subjects</label>
                  <div className="flex flex-wrap gap-2">
                    {availableSubjects.map(sub => (
                      <button
                        key={sub}
                        onClick={() => toggleSubject(sub)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all ${
                          formData.subjects.includes(sub)
                          ? 'bg-xpm-blue border-xpm-blue text-white shadow-md'
                          : 'bg-slate-50 border-slate-100 text-slate-500 hover:border-slate-200'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Level</label>
                    <select 
                      value={formData.level}
                      onChange={(e) => setFormData({...formData, level: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-50 rounded-xl focus:border-xpm-blue outline-none font-bold text-xs transition"
                    >
                      {levels.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                   </div>
                   <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Exam Board</label>
                    <select 
                      value={formData.board}
                      onChange={(e) => setFormData({...formData, board: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-50 rounded-xl focus:border-xpm-blue outline-none font-bold text-xs transition"
                    >
                      <option>Cambridge</option>
                      <option>Edexcel</option>
                      <option>Federal Board</option>
                      <option>IB / AP</option>
                      <option>AQA / OCR</option>
                    </select>
                   </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Requirements</label>
                  <textarea 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your learning goals..."
                    className="w-full px-5 py-3 bg-slate-50 border-2 border-slate-50 rounded-xl focus:border-xpm-blue outline-none font-bold text-xs transition resize-none shadow-inner"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 shadow-md uppercase text-sm tracking-wide"
                  >
                    Contact via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Why Hire XPM Tutors Content (Now Second) */}
          <div className="lg:col-span-2 space-y-12 order-2">
            <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 h-full">
              <h3 className="text-3xl font-black text-slate-900 mb-12 tracking-tight uppercase">Why Hire XPM Tutors?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-xpm-blue/10 text-xpm-blue rounded-2xl flex items-center justify-center font-black">01</div>
                  <h4 className="text-xl font-black text-slate-900">Personalized Pace</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">Every student learns differently. We tailor our teaching speed to your comfort level, from primary grades to A levels.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-xpm-orange/10 text-xpm-orange rounded-2xl flex items-center justify-center font-black">02</div>
                  <h4 className="text-xl font-black text-slate-900">A* Exam Techniques</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">We don't just teach subjects; we teach you how to beat the mark scheme and win the examiner's trust.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireTeacherPage;
