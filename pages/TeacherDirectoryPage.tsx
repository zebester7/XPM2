
import React, { useState } from 'react';
import { Teacher } from '../types';
import { db } from '../db';

const TeacherDirectoryPage: React.FC = () => {
  const [teachers] = useState<Teacher[]>(db.getTeachers());

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-xpm-blue text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase">Direct Expert Access</h1>
          <p className="text-xl text-white/60 font-medium">No middleman. Contact our subject specialists directly on WhatsApp.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map(teacher => (
            <div key={teacher.id} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center group relative overflow-hidden">
              {teacher.isVerified && (
                <div className="absolute top-8 right-8 bg-xpm-green text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg">
                  Verified XPM Faculty
                </div>
              )}
              
              <div className="w-24 h-24 bg-xpm-blue/5 text-xpm-blue rounded-[2rem] flex items-center justify-center font-black text-4xl mb-6 group-hover:bg-xpm-blue group-hover:text-white transition-all shadow-sm overflow-hidden">
                {teacher.photo ? (
                  <img src={teacher.photo} className="w-full h-full object-cover" alt={teacher.name} />
                ) : (
                  teacher.name[0]
                )}
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{teacher.name}</h3>
              <div className="flex gap-2 mb-4">
                 <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${teacher.mode === 'Online' ? 'bg-indigo-50 text-indigo-500' : teacher.mode === 'Physical' ? 'bg-orange-50 text-orange-500' : 'bg-green-50 text-green-500'}`}>
                    {teacher.mode || 'Expert'}
                 </span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {teacher.subjects.map(s => (
                  <span key={s} className="px-3 py-1 bg-slate-50 border border-slate-100 text-[10px] font-black uppercase text-slate-400 rounded-lg">{s}</span>
                ))}
              </div>

              {teacher.bio && (
                <p className="text-slate-500 text-xs font-medium leading-relaxed mb-8 line-clamp-3 italic">"{teacher.bio}"</p>
              )}
              
              <a 
                href={`https://wa.me/${teacher.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] text-white font-black rounded-2xl hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-500/20 mt-auto"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Contact via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDirectoryPage;
