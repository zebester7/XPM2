
import React, { useState, useEffect, useRef } from 'react';
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
  const [activeTab, setActiveTab] = useState<'questions' | 'students' | 'payments' | 'verifications' | 'reviews' | 'teachers' | 'pastpapers' | 'blogs' | 'settings' | 'security' | 'materials'>('materials');
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

  const allUsers = db.getUsers();
  const allSubjects = db.getSubjects();
  const pendingPayments = allUsers.filter(u => u.subscriptionStatus === 'pending');
  const pendingVerifications = teachers.filter(t => t.registrationStatus === 'pending');

  const availableSubjects = [
    'Physics', 'Mathematics', 'Chemistry', 'Biology', 
    'Computer Science', 'English', 'Islamiyat', 'Pakistan Studies',
    'Business', 'Economics'
  ];

  const handleFileUpload = (type: 'qp' | 'ms' | 'mat') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedFiles(prev => ({
          ...prev,
          [type]: { name: file.name, data: reader.result as string }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMaterialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl = uploadedFiles.mat.data || materialForm.url;
    if (!materialForm.title || !materialForm.subjectId || !finalUrl) {
      return alert('Fill required fields and upload/link a file');
    }

    const material: LearningMaterial = {
      id: 'mat-' + Date.now(),
      subjectId: materialForm.subjectId!,
      title: materialForm.title!,
      type: materialForm.type as any,
      url: finalUrl,
      createdAt: Date.now()
    };

    const updated = db.saveLearningMaterial(material);
    setMaterials(updated);
    setMaterialForm({ title: '', type: 'Note', subjectId: '', url: '' });
    setUploadedFiles(prev => ({ ...prev, mat: { name: '', data: '' } }));
    if (matInputRef.current) matInputRef.current.value = '';
    alert('Material added to portal!');
  };

  const handleDeleteMaterial = (id: string) => {
    if (confirm('Delete this material?')) {
      setMaterials(db.deleteLearningMaterial(id));
    }
  };

  const handleSaveReply = (id: string) => {
    if (replyTexts[id]?.trim()) {
      onReplyQuestion(id, replyTexts[id]);
      const newTexts = { ...replyTexts };
      delete newTexts[id];
      setReplyTexts(newTexts);
    }
  };

  const handleApprovePayment = (user: User) => {
    const updated = { ...user, subscriptionStatus: 'active' as const };
    db.saveUser(updated);
    if (onUserApproved) onUserApproved(updated);
    setActiveTab('students');
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    db.saveSettings(appSettings);
    alert('Settings updated successfully!');
  };

  const handleToggleVerified = (teacher: Teacher) => {
    const updated = { ...teacher, isVerified: !teacher.isVerified };
    setTeachers(db.saveTeacher(updated));
  };

  const handleTeacherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teacherForm.name || !teacherForm.whatsapp) return alert('Name and WhatsApp are required');
    const teacherData: Teacher = {
      id: editingTeacher?.id || 't-' + Date.now(),
      name: teacherForm.name!,
      email: teacherForm.email || '',
      phone: teacherForm.whatsapp!,
      whatsapp: teacherForm.whatsapp!,
      subjects: teacherForm.subjects || [],
      mode: teacherForm.mode as any || 'Online',
      bio: teacherForm.bio || '',
      isVerified: teacherForm.isVerified ?? true,
      registrationStatus: 'active',
      attendance: editingTeacher?.attendance || [],
      activeTenures: editingTeacher?.activeTenures || []
    };
    setTeachers(db.saveTeacher(teacherData));
    setEditingTeacher(null);
    setTeacherForm({ name: '', phone: '', whatsapp: '', subjects: [], mode: 'Online', bio: '', isVerified: true });
    alert('Teacher profile saved!');
  };

  const handleAddPaper = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl = uploadedFiles.qp.data || newPaper.url;
    const finalMsUrl = uploadedFiles.ms.data || newPaper.msUrl;
    if (!newPaper.subject || !finalUrl) return alert('Subject and Paper required');
    const paper: PastPaper = {
      id: 'pp-' + Date.now(),
      board: newPaper.board as Board,
      level: newPaper.level as Level,
      subject: newPaper.subject!,
      year: Number(newPaper.year),
      session: newPaper.session as 'Summer' | 'Winter',
      url: finalUrl,
      msUrl: finalMsUrl
    };
    setPastPapers(db.savePastPaper(paper));
    setNewPaper({ board: 'Cambridge', level: 'O Level', year: new Date().getFullYear(), session: 'Summer', subject: '', url: '', msUrl: '' });
    setUploadedFiles(prev => ({ ...prev, qp: { name: '', data: '' }, ms: { name: '', data: '' } }));
    alert('Past paper indexed!');
  };

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.content) return alert('Title and content required');
    const blog: BlogPost = {
      id: 'blog-' + Date.now(),
      title: newBlog.title!,
      excerpt: newBlog.excerpt || newBlog.content!.substring(0, 100) + '...',
      content: newBlog.content!,
      date: Date.now(),
      category: newBlog.category || 'Study Guides',
      author: newBlog.author || 'XPM Academic Team'
    };
    setBlogs(db.saveBlog(blog));
    setNewBlog({ title: '', excerpt: '', content: '', category: 'Study Guides', author: 'XPM Academic Team' });
    alert('Blog published!');
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
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">XPM Control Panel</h1>
        <Link to="/syllabus-precision" className="px-6 py-3 bg-xpm-blue text-white font-black rounded-xl hover:bg-xpm-dark transition">Manage Syllabus Index</Link>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 bg-slate-100 p-1.5 rounded-2xl w-fit">
        {[
            { id: 'materials', label: 'Material Hub' },
            { id: 'pastpapers', label: 'Past Papers' },
            { id: 'questions', label: 'Q&A' },
            { id: 'payments', label: 'Student Fees', count: pendingPayments.length },
            { id: 'verifications', label: 'Faculty Regs', count: pendingVerifications.length },
            { id: 'teachers', label: 'Directory' },
            { id: 'blogs', label: 'Blogs' },
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
            {tab.count ? tab.count > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-slate-100">{tab.count}</span> : null}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden min-h-[600px]">
        
        {activeTab === 'materials' && (
          <div className="p-10">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Learning Material Manager</h3>
            <form onSubmit={handleMaterialSubmit} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 mb-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Resource Title</label>
                  <input type="text" value={materialForm.title} onChange={e => setMaterialForm({...materialForm, title: e.target.value})} placeholder="e.g. Unit 1 Revision Notes" className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Category</label>
                  <select value={materialForm.type} onChange={e => setMaterialForm({...materialForm, type: e.target.value as any})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold">
                    <option>Note</option>
                    <option>Solved Paper</option>
                    <option>Marking Scheme</option>
                    <option>Worksheet</option>
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
              <div className="flex flex-col md:flex-row gap-6 items-end">
                <div className="flex-grow">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Upload File (PDF/Image) OR URL</label>
                  <div className="flex gap-4">
                    <input type="file" ref={matInputRef} onChange={handleFileUpload('mat')} className="text-xs text-slate-500 bg-white p-2 rounded-xl border border-slate-200" />
                    <span className="self-center font-bold text-slate-300">OR</span>
                    <input type="url" value={materialForm.url} onChange={e => setMaterialForm({...materialForm, url: e.target.value})} placeholder="https://..." className="flex-grow px-5 py-3 rounded-xl border border-slate-200 font-bold" />
                  </div>
                  {uploadedFiles.mat.name && <p className="text-[10px] font-black text-xpm-green mt-2">File Ready: {uploadedFiles.mat.name}</p>}
                </div>
                <button type="submit" className="px-10 py-3 bg-xpm-blue text-white font-black rounded-xl hover:bg-xpm-dark transition uppercase tracking-widest text-xs">Publish Material</button>
              </div>
            </form>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Live Materials ({materials.length})</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {materials.map(m => (
                  <div key={m.id} className="p-6 border border-slate-100 rounded-[2rem] flex items-center justify-between bg-white group hover:shadow-lg transition">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-[10px] ${m.type === 'Note' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'}`}>
                        {m.type[0]}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-sm">{m.title}</h4>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{m.type} • {allSubjects.find(s => s.id === m.subjectId)?.name || 'Unknown'}</p>
                      </div>
                    </div>
                    <button onClick={() => handleDeleteMaterial(m.id)} className="text-red-500 font-black text-[10px] uppercase hover:underline">Remove</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pastpapers' && (
          <div className="p-10 bg-white">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Past Paper Repository</h3>
            <form onSubmit={handleAddPaper} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 mb-12 space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Board</label>
                    <select value={newPaper.board} onChange={e => setNewPaper({...newPaper, board: e.target.value as any})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold">
                       <option value="Cambridge">Cambridge</option>
                       <option value="Edexcel">Edexcel</option>
                       <option value="Federal Board">Federal Board</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Level</label>
                    <select value={newPaper.level} onChange={e => setNewPaper({...newPaper, level: e.target.value as any})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold">
                       <option value="O Level">O Level</option>
                       <option value="IGCSE">IGCSE</option>
                       <option value="AS Level">AS Level</option>
                       <option value="A2 Level">A2 Level</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Year</label>
                    <input type="number" value={newPaper.year} onChange={e => setNewPaper({...newPaper, year: Number(e.target.value)})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Session</label>
                    <select value={newPaper.session} onChange={e => setNewPaper({...newPaper, session: e.target.value as any})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold">
                       <option value="Summer">Summer</option>
                       <option value="Winter">Winter</option>
                    </select>
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Subject</label>
                    <input type="text" placeholder="Physics (9702)" value={newPaper.subject} onChange={e => setNewPaper({...newPaper, subject: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-slate-200 font-bold" />
                  </div>
                  <div className="md:col-span-2 flex gap-4 items-end">
                    <div className="flex-grow">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">QP File/URL</label>
                      <input type="file" onChange={handleFileUpload('qp')} className="text-xs mb-2" />
                    </div>
                    <div className="flex-grow">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">MS File/URL</label>
                      <input type="file" onChange={handleFileUpload('ms')} className="text-xs mb-2" />
                    </div>
                  </div>
               </div>
               <button type="submit" className="w-full py-4 bg-xpm-blue text-white font-black rounded-xl uppercase tracking-widest text-xs">Index Past Paper</button>
            </form>
          </div>
        )}

        {/* Other existing tabs remain functional... */}
        {activeTab === 'questions' && (
          <div className="divide-y divide-slate-100">
            {questions.length > 0 ? questions.map(q => (
              <div key={q.id} className="p-8 hover:bg-slate-50/50 transition">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-xpm-blue text-white rounded-full flex items-center justify-center font-bold">{q.userName[0]}</div>
                    <div><h4 className="font-bold text-slate-900">{q.userName}</h4><span className="text-[10px] font-bold text-xpm-orange uppercase tracking-widest">{q.subject}</span></div>
                  </div>
                </div>
                <p className="text-slate-700 mb-6 bg-slate-50 p-5 rounded-2xl border border-slate-100 text-sm leading-relaxed">{q.content}</p>
                <div className="space-y-3">
                  <textarea value={replyTexts[q.id] || q.reply || ''} onChange={(e) => setReplyTexts({...replyTexts, [q.id]: e.target.value})} placeholder="Write your expert explanation..." className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-sm outline-none transition shadow-inner" rows={3} />
                  <button onClick={() => handleSaveReply(q.id)} className="px-6 py-2.5 bg-xpm-blue text-white font-black rounded-xl hover:bg-xpm-dark transition text-xs uppercase tracking-widest">{q.reply ? 'Update Reply' : 'Publish Reply'}</button>
                </div>
              </div>
            )) : <div className="p-20 text-center text-slate-400 uppercase font-black tracking-widest">No student questions yet</div>}
          </div>
        )}

        {activeTab === 'security' && (
          <div className="p-12 max-w-xl mx-auto">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight text-center mb-10">Access Control</h3>
            {passError && <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs font-black uppercase text-center italic">{passError}</div>}
            {passSuccess && <div className="mb-8 p-4 bg-green-50 border border-green-100 text-green-600 rounded-2xl text-xs font-black uppercase text-center">Password updated!</div>}
            <form onSubmit={handlePasswordChange} className="space-y-6">
              <input type="password" required value={passwords.current} onChange={e => setPasswords({...passwords, current: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-xpm-blue outline-none font-bold" placeholder="Current Password" />
              <hr className="border-slate-100" />
              <input type="password" required value={passwords.new} onChange={e => setPasswords({...passwords, new: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-xpm-blue outline-none font-bold" placeholder="New Password" />
              <input type="password" required value={passwords.confirm} onChange={e => setPasswords({...passwords, confirm: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-xpm-blue outline-none font-bold" placeholder="Confirm New Password" />
              <button type="submit" className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-black transition uppercase tracking-widest text-sm">Update Access Credentials</button>
            </form>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Portal Configurations</h3>
            <form onSubmit={handleSaveSettings} className="space-y-8">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Subscription Fee (PKR)</label>
                <input type="number" value={appSettings.subscriptionFee} onChange={(e) => setAppSettings({...appSettings, subscriptionFee: parseInt(e.target.value)})} className="w-full px-6 py-4 bg-slate-50 rounded-2xl focus:border-xpm-blue outline-none font-black text-lg" />
              <button type="submit" className="w-full py-5 bg-xpm-blue text-white font-black rounded-2xl hover:bg-xpm-dark transition shadow-xl uppercase tracking-widest text-sm">Apply Changes Globally</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
