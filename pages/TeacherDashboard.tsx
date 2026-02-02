
import React, { useState } from 'react';
import { User, Teacher, AttendanceEntry } from '../types';
import { db } from '../db';

interface TeacherDashboardProps {
  user: User;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ user }) => {
  const [teacherProfile, setTeacherProfile] = useState<Teacher | null>(() => {
    if (user.teacherProfileId) {
      return db.getTeachers().find(t => t.id === user.teacherProfileId) || null;
    }
    return null;
  });

  const [attendanceForm, setAttendanceForm] = useState({
    studentName: '',
    subject: teacherProfile?.subjects[0] || 'Physics',
    status: 'Present' as 'Present' | 'Absent'
  });

  const handleLogAttendance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teacherProfile) return;

    const newEntry: AttendanceEntry = {
      id: Date.now().toString(),
      date: Date.now(),
      studentName: attendanceForm.studentName,
      subject: attendanceForm.subject,
      status: attendanceForm.status
    };

    const updatedProfile: Teacher = {
      ...teacherProfile,
      attendance: [newEntry, ...teacherProfile.attendance]
    };

    db.saveTeacher(updatedProfile);
    setTeacherProfile(updatedProfile);
    setAttendanceForm({ ...attendanceForm, studentName: '' });
  };

  const updateTenure = (tenureId: string, status: any) => {
    if (!teacherProfile) return;
    const updated = {
      ...teacherProfile,
      activeTenures: teacherProfile.activeTenures.map(t => t.id === tenureId ? { ...t, status } : t)
    };
    db.saveTeacher(updated);
    setTeacherProfile(updated);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between space-y-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Faculty Dashboard: {user.name}</h1>
          <p className="text-slate-500 mt-2 font-medium">Manage your assignments and student attendance.</p>
        </div>
        <div className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 ${teacherProfile?.registrationStatus === 'active' ? 'bg-xpm-green/10 text-xpm-green' : 'bg-amber-50 text-amber-600'}`}>
          <div className={`w-2 h-2 rounded-full ${teacherProfile?.registrationStatus === 'active' ? 'bg-xpm-green' : 'bg-amber-500 animate-pulse'}`}></div>
          {teacherProfile?.registrationStatus === 'active' ? 'Verified Faculty' : 'Pending Verification'}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Attendance Log</h3>
            <form onSubmit={handleLogAttendance} className="space-y-6">
               <div>
                 <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Student Name</label>
                 <input 
                  type="text" 
                  value={attendanceForm.studentName}
                  onChange={e => setAttendanceForm({...attendanceForm, studentName: e.target.value})}
                  placeholder="Enter Student Name"
                  className="w-full px-5 py-3 bg-slate-50 rounded-xl outline-none font-bold text-sm focus:bg-white border-2 border-transparent focus:border-xpm-blue transition shadow-inner"
                  required
                 />
               </div>
               <div>
                 <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Subject</label>
                 <div className="relative">
                    <select 
                      value={attendanceForm.subject}
                      onChange={e => setAttendanceForm({...attendanceForm, subject: e.target.value})}
                      className="w-full px-5 py-3 bg-slate-50 rounded-xl outline-none font-bold text-sm shadow-inner appearance-none cursor-pointer border-2 border-transparent focus:border-xpm-blue"
                    >
                      {teacherProfile?.subjects.map(s => <option key={s} value={s}>{s}</option>) || <option>Physics</option>}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={() => setAttendanceForm({...attendanceForm, status: 'Present'})}
                    className={`py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${attendanceForm.status === 'Present' ? 'bg-xpm-blue text-white shadow-lg' : 'bg-slate-50 text-slate-400'}`}
                  >
                    Present
                  </button>
                  <button 
                    type="button"
                    onClick={() => setAttendanceForm({...attendanceForm, status: 'Absent'})}
                    className={`py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${attendanceForm.status === 'Absent' ? 'bg-xpm-blue text-white shadow-lg' : 'bg-slate-50 text-slate-400'}`}
                  >
                    Absent
                  </button>
               </div>
               <button 
                type="submit" 
                disabled={teacherProfile?.registrationStatus !== 'active'}
                className="w-full py-4 bg-[#7a9ab8] hover:bg-xpm-blue text-white font-black rounded-2xl transition shadow-lg text-xs uppercase tracking-widest disabled:opacity-50"
              >
                Submit Session Record
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
             <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Recent Sessions</h3>
             <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
               {teacherProfile?.attendance.map(a => (
                 <div key={a.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center">
                    <div>
                       <div className="text-xs font-black text-slate-900">{a.studentName}</div>
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{a.subject} • {new Date(a.date).toLocaleDateString()}</div>
                    </div>
                    <span className={`text-[8px] font-black uppercase px-2 py-1 rounded-lg ${a.status === 'Present' ? 'bg-xpm-green/10 text-xpm-green' : 'bg-red-50 text-red-500'}`}>{a.status}</span>
                 </div>
               ))}
               {(teacherProfile?.attendance.length || 0) === 0 && <p className="text-center text-[10px] text-slate-300 font-bold uppercase py-10">No logs found.</p>}
             </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Assignments / Tenures</h3>
              <div className="space-y-6">
                 {teacherProfile?.activeTenures.map(t => (
                   <div key={t.id} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                      <div className="flex justify-between items-start mb-6">
                         <div>
                            <h4 className="text-xl font-black text-slate-900">{t.studentName}</h4>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.subject} • Established {new Date(t.startDate).toLocaleDateString()}</p>
                         </div>
                         <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${t.status === 'Ongoing' ? 'bg-xpm-blue text-white' : 'bg-slate-200 text-slate-500'}`}>
                            {t.status}
                         </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                         <button onClick={() => updateTenure(t.id, 'Completed')} className="py-3 bg-white border border-slate-200 text-xpm-green rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-xpm-green hover:text-white transition">Mark Completion</button>
                         <button onClick={() => updateTenure(t.id, 'Left In Between')} className="py-3 bg-white border border-slate-200 text-red-500 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition">Terminate Assignment</button>
                      </div>
                   </div>
                 ))}
                 {(teacherProfile?.activeTenures.length || 0) === 0 && (
                   <div className="text-center py-20 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
                      <p className="text-slate-400 font-black uppercase tracking-widest mb-2">No active students</p>
                      <p className="text-[10px] text-slate-300 font-bold max-w-xs mx-auto">Your assignments will appear here once booked via the directory.</p>
                   </div>
                 )}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
