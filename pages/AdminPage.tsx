
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Question, Review, User, Subject, Teacher, AppSettings, PastPaper, Board, Level, BlogPost, LearningMaterial } from '../types';
import { db } from '../db';

interface AdminPageProps {
  adminUser?: User;
  questions: Question[];
  reviews: Review[];
  onReplyQuestion: (id: string, reply: string) => void;
  onDeleteReview: (id: string) => void;
  onUserApproved?: (user: User) => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ adminUser, questions, reviews, onReplyQuestion, onDeleteReview, onUserApproved }) => {
  const [activeTab, setActiveTab] = useState<'questions' | 'students' | 'payments' | 'verifications' | 'reviews' | 'teachers' | 'pastpapers' | 'blogs' | 'settings' | 'security' | 'materials'>('blogs');
  const [replyTexts, setReplyTexts] = useState<Record<string, string>>({});
  
  const [teachers, setTeachers] = useState<Teacher[]>(db.getTeachers());
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [teacherForm, setTeacherForm] = useState<Partial<Teacher>>({
    name: '', phone: '', whatsapp: '', subjects: [], mode: 'Online', bio: '', isVerified: true
  });

  const [pastPapers, setPastPapers] = useState<PastPaper[]>(db.getPastPapers());
  const [newPaper, setNewPaper] = useState<Partial<PastPaper>>({
    board: 'Cambridge', level: 'O Level', year: new Date().getFullYear(), session: 'Summer', subject: '', url: '', msUrl: ''
  });

  const [materials, setMaterials] = useState<LearningMaterial[]>(db.getLearningMaterials());
  const [materialForm, setMaterialForm] = useState<Partial<LearningMaterial>>({
    title: '', type: 'Note', subjectId: '', url: ''
  });

  const [blogs, setBlogs] = useState<BlogPost[]>(db.getBlogs());
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [newBlog, setNewBlog] = useState<Partial<BlogPost>>({
    title: '', excerpt: '', content: '', category: 'Study Guides', author: 'XPM Academic Team'
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    qp: { name: '', data: '' },
    ms: { name: '', data: '' },
    mat: { name: '', data: '' }
  });

  const [appSettings, setAppSettings] = useState<AppSettings>(db.getSettings());
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [passError, setPassError] = useState('');
  const [passSuccess, setPassSuccess] = useState(false);

  const qpInputRef = useRef<HTMLInputElement>(null);
  const msInputRef = useRef<HTMLInputElement>(null);
  const matInputRef = useRef<HTMLInputElement>(null);

  const [usersVersion, setUsersVersion] = useState(0);
  const allUsers = useMemo(() => db.getUsers(), [usersVersion]);

  // If localStorage has only the admin account, try to fetch users from backend and sync
  useEffect(() => {
    try {
      const local = db.getUsers();
      if (!local || local.length <= 1) {
        fetch('/api/users')
          .then(r => r.json())
          .then((remote: any[]) => {
            if (Array.isArray(remote) && remote.length > 0) {
              remote.forEach(u => db.saveUser(u));
              setUsersVersion(v => v + 1);
            }
          })
          .catch(() => {
            // fallback: try loading static db.json (useful when backend not running but repo contains db.json)
            try {
              fetch('/db.json').then(r => r.json()).then((obj: any) => {
                if (obj && Array.isArray(obj.users)) {
                  obj.users.forEach((u: any) => db.saveUser(u));
                  setUsersVersion(v => v + 1);
                }
              }).catch(() => {});
            } catch (e) {}
          });
      }
    } catch (e) {}
  }, []);
  const allSubjects = db.getSubjects();
  const students = allUsers.filter(u => u.role === 'student').sort((a, b) => (b.registeredAt || 0) - (a.registeredAt || 0));
  const pendingPayments = allUsers.filter(u => u.subscriptionStatus === 'pending');
  const pendingVerifications = teachers.filter(t => t.registrationStatus === 'pending');

  const handleFileUpload = (type: 'qp' | 'ms' | 'mat') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedFiles(prev => ({ ...prev, [type]: { name: file.name, data: reader.result as string } }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMaterialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl = uploadedFiles.mat.data || materialForm.url;
    if (!materialForm.title || !materialForm.subjectId || !finalUrl) return alert('Fill required fields');
    const material: LearningMaterial = {
      id: 'mat-' + Date.now(),
      subjectId: materialForm.subjectId!,
      title: materialForm.title!,
      type: materialForm.type as any,
      url: finalUrl,
      createdAt: Date.now()
    };
    setMaterials(db.saveLearningMaterial(material));
    setMaterialForm({ title: '', type: 'Note', subjectId: '', url: '' });
    setUploadedFiles(prev => ({ ...prev, mat: { name: '', data: '' } }));
    alert('Material Published');
  };

  const handleDeleteMaterial = (id: string) => {
    if (confirm('Delete this material?')) setMaterials(db.deleteLearningMaterial(id));
  };

  const handleApprovePayment = (user: User) => {
    const updated = { ...user, subscriptionStatus: 'active' as const };
    db.saveUser(updated);
    if (onUserApproved) onUserApproved(updated);
    alert(`${user.name}'s payment approved!`);
  };

  const handleApproveTeacher = (teacher: Teacher) => {
    if (!confirm(`Approve application for ${teacher.name}?`)) return;
    const updated = { ...teacher, registrationStatus: 'active' as const, isVerified: true };
    setTeachers(db.saveTeacher(updated));

    // Promote matching user to teacher role if exists
    try {
      const users = db.getUsers();
      const matched = users.find(u => (u.teacherProfileId && u.teacherProfileId === teacher.id) || u.email === teacher.email);
      if (matched) {
        const updatedUser = { ...matched, role: 'teacher' as const, teacherProfileId: teacher.id };
        db.saveUser(updatedUser);
        if (onUserApproved) onUserApproved(updatedUser);
      }
    } catch (e) { /* ignore */ }

    // Notify teacher via WhatsApp and email
    const waNumber = teacher.whatsapp || teacher.phone || '';
    const waText = `*XPM APPLICATION APPROVED*\n\nCongratulations ${teacher.name}! Your faculty application has been approved. You can now log in and manage your profile.`;
    try { if (waNumber) window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`, '_blank'); } catch (e) {}
    try { if (teacher.email) window.open(`mailto:${teacher.email}?subject=${encodeURIComponent('Your XPM application approved')}&body=${encodeURIComponent('Congratulations ' + teacher.name + '! Your application has been approved.')}`, '_blank'); } catch (e) {}

    alert(`Teacher ${teacher.name} activated.`);
  };

  const [openDocsFor, setOpenDocsFor] = useState<string | null>(null);

  const handleRejectTeacher = (teacher: Teacher) => {
    if (!confirm(`Reject application for ${teacher.name}? This will mark their registration as rejected.`)) return;
    const reason = prompt('Optional rejection reason (will be included in notification):', '') || '';
    const updated = { ...teacher, registrationStatus: 'rejected' as const, isVerified: false };
    setTeachers(db.saveTeacher(updated));
    // Notify admin via WhatsApp and email (opens new windows but won't block UI)
    const adminWhatsApp = '923009508592';
    const adminEmail = 'zubairahmadisb7p2@gmail.com';
    const waText = `*XPM TEACHER REJECTED*\n\nName: ${teacher.name}\nEmail: ${teacher.email || 'N/A'}\nSubjects: ${(teacher.subjects || []).join(', ')}\nMode: ${teacher.mode}\nReason: ${reason || 'N/A'}`;
    try { window.open(`https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(waText)}`, '_blank'); } catch (e) {}
    try { window.open(`mailto:${adminEmail}?subject=${encodeURIComponent('Teacher application rejected: ' + teacher.name)}&body=${encodeURIComponent(waText)}`, '_blank'); } catch (e) {}
    alert(`Teacher ${teacher.name} rejected.`);
  };

  const handleAddPaper = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl = uploadedFiles.qp.data || newPaper.url;
    if (!newPaper.subject || !finalUrl) return alert('Subject and Paper required');
    const paper: PastPaper = {
      id: 'pp-' + Date.now(),
      board: newPaper.board as Board,
      level: newPaper.level as Level,
      subject: newPaper.subject!,
      year: Number(newPaper.year),
      session: newPaper.session as any,
      url: finalUrl,
      msUrl: uploadedFiles.ms.data || newPaper.msUrl
    };
    setPastPapers(db.savePastPaper(paper));
    setNewPaper({ board: 'Cambridge', level: 'O Level', year: new Date().getFullYear(), session: 'Summer', subject: '', url: '', msUrl: '' });
    alert('Past paper indexed!');
  };

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.content) return alert('Title and content required');
    const blog: BlogPost = {
      id: editingBlog?.id || 'blog-' + Date.now(),
      title: newBlog.title!,
      excerpt: newBlog.excerpt || newBlog.content!.substring(0, 100) + '...',
      content: newBlog.content!,
      date: editingBlog?.date || Date.now(),
      category: newBlog.category || 'Study Guides',
      author: newBlog.author || 'XPM Academic Team'
    };
    setBlogs(db.saveBlog(blog));
    setNewBlog({ title: '', excerpt: '', content: '', category: 'Study Guides', author: 'XPM Academic Team' });
    setEditingBlog(null);
    alert(editingBlog ? 'Blog updated!' : 'Blog published!');
  };

  const handleEditBlog = (blog: BlogPost) => {
    setEditingBlog(blog);
    setNewBlog({ ...blog });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteBlog = (id: string) => {
    if (confirm('Delete this blog post?')) setBlogs(db.deleteBlog(id));
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPassError(''); setPassSuccess(false);
    if (!adminUser) return;
    if (passwords.current !== adminUser.password) return setPassError('Current password is incorrect.');
    if (passwords.new.length < 8) return setPassError('New password must be 8+ chars.');
    if (passwords.new !== passwords.confirm) return setPassError('Passwords do not match.');
    db.saveUser({ ...adminUser, password: passwords.new });
    setPassSuccess(true); setPasswords({ current: '', new: '', confirm: '' });
  };

  const formatDate = (ts?: number) => ts ? new Date(ts).toLocaleDateString() : 'N/A';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">XPM Control Panel</h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-1">Operational Hub</p>
        </div>
        <Link to="/syllabus-precision" className="px-6 py-3 bg-xpm-blue text-white font-black rounded-xl hover:bg-xpm-dark transition shadow-xl">Manage Syllabus Index</Link>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 bg-slate-100 p-1.5 rounded-2xl w-fit">
        {[
            { id: 'blogs', label: 'Blogs' },
            { id: 'materials', label: 'Material Hub' },
            { id: 'pastpapers', label: 'Past Papers' },
            { id: 'questions', label: 'Q&A' },
            { id: 'students', label: 'Students' },
            { id: 'payments', label: 'Student Fees', count: pendingPayments.length },
            { id: 'verifications', label: 'Faculty Regs', count: pendingVerifications.length },
            { id: 'teachers', label: 'Directory' },
            { id: 'settings', label: 'Settings' },
            { id: 'security', label: 'Security' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition relative ${
              activeTab === tab.id ? 'bg-white text-xpm-blue shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.label}
            {tab.count ? tab.count > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-slate-100 font-black">{tab.count}</span> : null}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden min-h-[600px]">
        
        {activeTab === 'blogs' && (
          <div className="p-10">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">
              {editingBlog ? 'Edit Academic Post' : 'Blog & Resource Creator'}
            </h3>
            <form onSubmit={handleAddBlog} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 mb-12 space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Blog Title</label>
                    <input type="text" value={newBlog.title} onChange={e => setNewBlog({...newBlog, title: e.target.value})} placeholder="e.g. 5 Tips for O Level Physics" className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold text-sm shadow-inner" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Category</label>
                    <input type="text" value={newBlog.category} onChange={e => setNewBlog({...newBlog, category: e.target.value})} placeholder="e.g. Study Guides" className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold text-sm shadow-inner" />
                  </div>
               </div>
               <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Excerpt (Search Result Hook)</label>
                  <input type="text" value={newBlog.excerpt} onChange={e => setNewBlog({...newBlog, excerpt: e.target.value})} placeholder="Short hook to grab attention" className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold text-sm shadow-inner" />
               </div>
               <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Full Content (Markdown Format)</label>
                  <textarea value={newBlog.content} onChange={e => setNewBlog({...newBlog, content: e.target.value})} placeholder="Use # for headers and - for bullets..." className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-medium h-64 resize-none shadow-inner" />
               </div>
               <div className="flex gap-4">
                  <button type="submit" className="flex-grow py-4 bg-xpm-blue text-white font-black rounded-xl hover:bg-xpm-dark transition text-xs uppercase tracking-widest shadow-xl">
                    {editingBlog ? 'Update Article' : 'Publish Article'}
                  </button>
                  {editingBlog && (
                    <button type="button" onClick={() => { setEditingBlog(null); setNewBlog({ title: '', excerpt: '', content: '', category: 'Study Guides', author: 'XPM Academic Team' }); }} className="px-8 py-4 bg-slate-200 text-slate-500 font-black rounded-xl hover:bg-slate-300 transition text-xs uppercase tracking-widest">
                      Cancel
                    </button>
                  )}
               </div>
            </form>

            <div className="space-y-4">
               <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Published Articles ({blogs.length})</h4>
               {blogs.map(blog => (
                 <div key={blog.id} className="p-6 border border-slate-100 rounded-[2rem] flex items-center justify-between bg-white group hover:shadow-lg transition">
                    <div>
                       <h4 className="font-black text-slate-900 group-hover:text-xpm-blue transition">{blog.title}</h4>
                       <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{blog.category} • {formatDate(blog.date)}</p>
                    </div>
                    <div className="flex gap-4">
                       <button onClick={() => handleEditBlog(blog)} className="text-xpm-blue font-black text-[10px] uppercase hover:underline">Edit</button>
                       <button onClick={() => handleDeleteBlog(blog.id)} className="text-red-500 font-black text-[10px] uppercase hover:underline">Delete</button>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {/* Other existing tabs remain below... */}
        {activeTab === 'materials' && (
          <div className="p-10">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Learning Material Manager</h3>
            <form onSubmit={handleMaterialSubmit} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 mb-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Resource Title</label>
                  <input type="text" value={materialForm.title} onChange={e => setMaterialForm({...materialForm, title: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Category</label>
                  <select value={materialForm.type} onChange={e => setMaterialForm({...materialForm, type: e.target.value as any})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold">
                    <option>Note</option><option>Solved Paper</option><option>Marking Scheme</option><option>Worksheet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Subject</label>
                  <select value={materialForm.subjectId} onChange={e => setMaterialForm({...materialForm, subjectId: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold">
                    <option value="">Select Subject</option>
                    {allSubjects.map(s => <option key={s.id} value={s.id}>{s.name} ({s.level})</option>)}
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full py-3 bg-xpm-blue text-white font-black rounded-xl shadow-lg uppercase text-xs">Publish Material</button>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materials.map(m => (
                <div key={m.id} className="p-6 border border-slate-100 rounded-[2rem] flex items-center justify-between bg-white group hover:shadow-lg transition">
                  <div>
                    <h4 className="font-black text-slate-900 text-sm">{m.title}</h4>
                    <p className="text-[9px] text-slate-400 font-bold uppercase">{m.type} • {allSubjects.find(s => s.id === m.subjectId)?.name || 'Unknown'}</p>
                  </div>
                  <button onClick={() => handleDeleteMaterial(m.id)} className="text-red-500 font-black text-[10px] uppercase hover:underline">Remove</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pastpapers' && (
          <div className="p-10 bg-white">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Past Paper Repository</h3>
            <form onSubmit={handleAddPaper} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 mb-12 space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div><label className="block text-[10px] font-black text-slate-400 mb-2 uppercase">Board</label><select value={newPaper.board} onChange={e => setNewPaper({...newPaper, board: e.target.value as any})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold shadow-inner"><option value="Cambridge">Cambridge</option><option value="Edexcel">Edexcel</option><option value="Federal Board">Federal Board</option></select></div>
                  <div><label className="block text-[10px] font-black text-slate-400 mb-2 uppercase">Level</label><select value={newPaper.level} onChange={e => setNewPaper({...newPaper, level: e.target.value as any})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold shadow-inner"><option value="O Level">O Level</option><option value="IGCSE">IGCSE</option><option value="AS Level">AS Level</option><option value="A2 Level">A2 Level</option></select></div>
                  <div><label className="block text-[10px] font-black text-slate-400 mb-2 uppercase">Year</label><input type="number" value={newPaper.year} onChange={e => setNewPaper({...newPaper, year: Number(e.target.value)})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold shadow-inner" /></div>
                  <div><label className="block text-[10px] font-black text-slate-400 mb-2 uppercase">Session</label><select value={newPaper.session} onChange={e => setNewPaper({...newPaper, session: e.target.value as any})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold shadow-inner"><option value="Summer">Summer</option><option value="Winter">Winter</option></select></div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div><label className="block text-[10px] font-black text-slate-400 mb-2 uppercase">Subject</label><input type="text" placeholder="Physics (9702)" value={newPaper.subject} onChange={e => setNewPaper({...newPaper, subject: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold shadow-inner" /></div>
                  <div className="md:col-span-2 flex gap-4 items-end">
                    <div className="flex-grow"><label className="block text-[10px] font-black text-slate-400 mb-2 uppercase">QP File/URL</label><input type="file" onChange={handleFileUpload('qp')} className="text-xs mb-2" /></div>
                    <div className="flex-grow"><label className="block text-[10px] font-black text-slate-400 mb-2 uppercase">MS File/URL</label><input type="file" onChange={handleFileUpload('ms')} className="text-xs mb-2" /></div>
                  </div>
               </div>
               <button type="submit" className="w-full py-4 bg-xpm-blue text-white font-black rounded-xl uppercase tracking-widest text-xs shadow-xl">Index Past Paper</button>
            </form>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="p-10">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Student Registry</h3>
            <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
              <table className="min-w-full divide-y divide-slate-100">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Name & Email</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Registration Date</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {students.map(s => (
                    <tr key={s.id} className="hover:bg-slate-50/50 transition">
                      <td className="px-8 py-5">
                        <div className="font-black text-slate-900">{s.name}</div><div className="text-xs text-slate-400 font-bold">{s.email}</div>
                      </td>
                      <td className="px-8 py-5 font-bold text-slate-600 text-sm">{s.phoneNumber || 'N/A'}</td>
                      <td className="px-8 py-5 text-xs font-bold text-slate-50">{formatDate(s.registeredAt)}</td>
                      <td className="px-8 py-5"><span className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest ${s.subscriptionStatus === 'active' ? 'bg-xpm-green text-white' : 'bg-slate-100 text-slate-400'}`}>{s.subscriptionStatus || 'none'}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="p-10">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Fee Verification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pendingPayments.map(user => (
                <div key={user.id} className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 space-y-6">
                  <div><h4 className="font-black text-slate-900 text-lg">{user.name}</h4><p className="text-xs font-bold text-slate-400 uppercase">{user.email}</p></div>
                  {user.paymentProof && (
                    <div className="space-y-4">
                      <div className="aspect-video w-full rounded-2xl overflow-hidden border-4 border-white shadow-xl"><img src={user.paymentProof.screenshot} className="w-full h-full object-cover" /></div>
                      <button onClick={() => handleApprovePayment(user)} className="w-full py-4 bg-xpm-green text-white font-black rounded-2xl shadow-lg text-xs uppercase">Approve Access</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'verifications' && (
          <div className="p-10">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Faculty Reg Queue</h3>
            <div className="space-y-8">
              {pendingVerifications.map(t => (
                <div key={t.id} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-12">
                   <div className="space-y-6">
                      <div className="flex items-center gap-4"><div className="w-16 h-16 bg-xpm-blue text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl">{t.name[0]}</div><div><h4 className="font-black text-slate-900 text-xl">{t.name}</h4><p className="text-xs text-slate-400 font-bold uppercase">{t.mode} Faculty</p></div></div>
                      <div className="flex flex-wrap gap-2">{t.subjects.map(s => <span key={s} className="px-3 py-1 bg-white border border-slate-100 text-[10px] font-black uppercase text-slate-500 rounded-lg">{s}</span>)}</div>
                      <div className="text-sm text-slate-500">Applied: {formatDate((t as any).appliedAt)}</div>
                   </div>
                   <div className="lg:col-span-2 flex flex-col gap-4 pt-6 border-t lg:border-t-0 border-slate-200">
                      <div className="flex gap-4">
                        <button onClick={() => handleApproveTeacher(t)} className="flex-[2] py-4 bg-xpm-blue text-white font-black rounded-2xl shadow-xl uppercase text-xs">Verify Faculty</button>
                        <button onClick={() => handleRejectTeacher(t)} className="flex-1 py-4 bg-white border border-red-100 text-red-500 font-black rounded-2xl uppercase text-xs">Reject</button>
                        <button onClick={() => setOpenDocsFor(openDocsFor === t.id ? null : t.id)} className="flex-1 py-4 bg-slate-100 border border-slate-200 text-slate-600 font-black rounded-2xl uppercase text-xs">{openDocsFor === t.id ? 'Hide Documents' : 'View Documents'}</button>
                      </div>
                      {openDocsFor === t.id && (
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-inner grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase mb-2">Utility Bill</div>
                            {t.utilityBill ? <img src={t.utilityBill} className="w-full h-48 object-contain rounded-lg border" /> : <div className="text-xs text-slate-400">Not provided</div>}
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase mb-2">CNIC / ID</div>
                            {t.cnic ? <img src={t.cnic} className="w-full h-48 object-contain rounded-lg border" /> : <div className="text-xs text-slate-400">Not provided</div>}
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase mb-2">Degree</div>
                            {t.degree ? <img src={t.degree} className="w-full h-48 object-contain rounded-lg border" /> : <div className="text-xs text-slate-400">Not provided</div>}
                            <div className="mt-4 text-[10px] font-black text-slate-400 uppercase mb-2">Payment Screenshot</div>
                            {t.paymentScreenshot ? <img src={t.paymentScreenshot} className="w-full h-48 object-contain rounded-lg border" /> : <div className="text-xs text-slate-400">Not provided</div>}
                            {t.transactionId && <div className="mt-2 text-xs font-bold">Txn ID: {t.transactionId}</div>}
                          </div>
                        </div>
                      )}
                   </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'teachers' && (
          <div className="p-10">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">{editingTeacher ? 'Edit Teacher' : 'Add New Teacher'}</h3>
            <form onSubmit={(e) => { e.preventDefault(); 
              if (!teacherForm.name || !teacherForm.subjects || teacherForm.subjects.length === 0) return alert('Fill required fields');
              const newTeacher: Teacher = {
                id: editingTeacher?.id || 't-' + Date.now(),
                name: teacherForm.name!,
                email: teacherForm.email || '',
                phone: teacherForm.phone || '',
                whatsapp: teacherForm.whatsapp || '',
                subjects: teacherForm.subjects as string[],
                mode: (teacherForm.mode as any) || 'Online',
                bio: teacherForm.bio || '',
                isVerified: teacherForm.isVerified ?? true,
                registrationStatus: 'active',
                attendance: [],
                activeTenures: []
              };
              setTeachers(db.saveTeacher(newTeacher));
              setTeacherForm({ name: '', phone: '', whatsapp: '', subjects: [], mode: 'Online', bio: '', isVerified: true });
              setEditingTeacher(null);
              alert(editingTeacher ? 'Teacher updated!' : 'Teacher added!');
            }} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 mb-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Teacher Name *</label>
                  <input type="text" value={teacherForm.name} onChange={e => setTeacherForm({...teacherForm, name: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold" placeholder="e.g. Sir Zubair" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">WhatsApp</label>
                  <input type="text" value={teacherForm.whatsapp} onChange={e => setTeacherForm({...teacherForm, whatsapp: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold" placeholder="923009508592" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" value={teacherForm.email} onChange={e => setTeacherForm({...teacherForm, email: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold" placeholder="teacher@example.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Phone</label>
                  <input type="text" value={teacherForm.phone} onChange={e => setTeacherForm({...teacherForm, phone: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold" placeholder="923001234567" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Subjects (comma-separated) *</label>
                <input type="text" value={typeof teacherForm.subjects === 'string' ? teacherForm.subjects : (teacherForm.subjects || []).join(', ')} onChange={e => setTeacherForm({...teacherForm, subjects: e.target.value.split(',').map(s => s.trim())})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold" placeholder="Physics, Mathematics, Chemistry" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Mode</label>
                  <select value={teacherForm.mode || 'Online'} onChange={e => setTeacherForm({...teacherForm, mode: e.target.value as any})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold">
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Verified</label>
                  <select value={teacherForm.isVerified ? 'yes' : 'no'} onChange={e => setTeacherForm({...teacherForm, isVerified: e.target.value === 'yes'})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Bio</label>
                <textarea value={teacherForm.bio} onChange={e => setTeacherForm({...teacherForm, bio: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold" placeholder="Teacher bio..." rows={3} />
              </div>
              <div className="flex gap-4">
                <button type="submit" className="flex-grow py-4 bg-xpm-blue text-white font-black rounded-xl hover:bg-xpm-dark transition text-xs uppercase tracking-widest shadow-xl">
                  {editingTeacher ? 'Update Teacher' : 'Add Teacher'}
                </button>
                {editingTeacher && (
                  <button type="button" onClick={() => { setEditingTeacher(null); setTeacherForm({ name: '', phone: '', whatsapp: '', subjects: [], mode: 'Online', bio: '', isVerified: true }); }} className="px-8 py-4 bg-slate-200 text-slate-500 font-black rounded-xl hover:bg-slate-300 transition text-xs uppercase tracking-widest">
                    Cancel
                  </button>
                )}
              </div>
            </form>

            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Teachers Directory ({teachers.length})</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teachers.map(t => (
                <div key={t.id} className="bg-white border border-slate-100 rounded-[2rem] p-6 space-y-4 group hover:shadow-lg transition">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-black text-slate-900 text-lg">{t.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.mode} • {t.isVerified ? '✓ Verified' : 'Unverified'}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest ${t.isVerified ? 'bg-xpm-green text-white' : 'bg-slate-100 text-slate-400'}`}>{t.registrationStatus}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    {t.email && <p className="text-slate-600"><span className="font-bold text-slate-400">Email:</span> {t.email}</p>}
                    {t.whatsapp && <p className="text-slate-600"><span className="font-bold text-slate-400">WhatsApp:</span> {t.whatsapp}</p>}
                    {t.phone && <p className="text-slate-600"><span className="font-bold text-slate-400">Phone:</span> {t.phone}</p>}
                    <p className="text-slate-600"><span className="font-bold text-slate-400">Subjects:</span> {t.subjects.join(', ')}</p>
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-slate-100">
                    <button onClick={() => { setEditingTeacher(t); setTeacherForm({...t, subjects: t.subjects}); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex-grow py-3 bg-xpm-blue text-white font-black rounded-xl text-xs uppercase hover:bg-xpm-dark transition">Edit</button>
                    <button onClick={() => { if (confirm(`Remove ${t.name}?`)) { setTeachers(db.deleteTeacher(t.id)); } }} className="flex-grow py-3 bg-red-50 text-red-500 font-black rounded-xl text-xs uppercase hover:bg-red-100 transition border border-red-100">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="p-12 max-w-xl mx-auto">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight text-center uppercase mb-10">Access Control</h3>
            <form onSubmit={handlePasswordChange} className="space-y-6">
              <input type="password" required value={passwords.current} onChange={e => setPasswords({...passwords, current: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-xpm-blue outline-none font-bold" placeholder="Current Password" />
              <input type="password" required value={passwords.new} onChange={e => setPasswords({...passwords, new: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-xpm-blue outline-none font-bold" placeholder="New Password" />
              <button type="submit" className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-black transition uppercase text-sm shadow-xl">Update Access Credentials</button>
            </form>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Configurations</h3>
            <form onSubmit={(e) => { e.preventDefault(); db.saveSettings(appSettings); alert('Settings Saved'); }} className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase">Subscription Fee (PKR)</label>
                <input type="number" value={appSettings.subscriptionFee} onChange={(e) => setAppSettings({...appSettings, subscriptionFee: parseInt(e.target.value)})} className="w-full px-6 py-4 bg-white rounded-2xl focus:ring-2 focus:ring-xpm-blue outline-none font-black text-lg shadow-inner" />
              </div>
              <button type="submit" className="w-full py-5 bg-xpm-blue text-white font-black rounded-2xl hover:bg-xpm-dark transition shadow-xl uppercase text-sm">Apply Changes</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
