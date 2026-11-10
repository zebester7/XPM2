import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

interface Student { id: string; name: string; email: string; phone: string; created_at: string }
interface DemoRequest {
  id: string; name: string; phone: string; subjects: string; level: string; board: string;
  preferred_tutors: string; message: string; status: 'new' | 'contacted'; created_at: string;
}
interface Teacher { id: string; name: string; email: string; whatsapp: string; subjects: string[]; bio: string; mode: string; created_at: string }

type Tab = 'students' | 'demos' | 'teachers';

class ApiError extends Error {
  constructor(public status: number, message: string) { super(message); }
}

async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`/api/${path}`, {
    credentials: 'same-origin',
    ...init,
    headers: { ...(init.body ? { 'Content-Type': 'application/json' } : {}), ...init.headers },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError(res.status, data.error || `Request failed (${res.status})`);
  return data as T;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

const waLink = (phone: string) => `https://wa.me/${phone.replace(/\D/g, '')}`;

const LoginForm: React.FC<{ onSignedIn: () => void }> = ({ onSignedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      await api('admin/login', { method: 'POST', body: JSON.stringify({ email, password }) });
      setPassword('');
      onSignedIn();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign in failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <form onSubmit={submit} className="w-full max-w-sm bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-5">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Admin sign in</h1>
          <p className="text-sm text-slate-500 mt-1">XPM Tutors control panel</p>
        </div>
        <label className="block">
          <span className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Email</span>
          <input type="email" required autoComplete="username" value={email} onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-xpm-blue outline-none font-medium" />
        </label>
        <label className="block">
          <span className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Password</span>
          <input type="password" required autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-xpm-blue outline-none font-medium" />
        </label>
        {error && <p role="alert" className="text-sm font-bold text-red-600">{error}</p>}
        <button type="submit" disabled={busy}
          className="w-full py-3 bg-xpm-blue text-white font-black rounded-xl hover:bg-xpm-dark transition disabled:opacity-60">
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
};

const EmptyRow: React.FC<{ cols: number; children: React.ReactNode }> = ({ cols, children }) => (
  <tr><td colSpan={cols} className="px-4 py-10 text-center text-slate-400 font-medium">{children}</td></tr>
);

const th = 'px-4 py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap';
const td = 'px-4 py-3 align-top text-sm text-slate-700';

const AddTeacherForm: React.FC<{ onAdded: (t: Teacher) => void }> = ({ onAdded }) => {
  const empty = { name: '', whatsapp: '', subjects: '', email: '', bio: '', mode: 'Online' };
  const [form, setForm] = useState(empty);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const { teacher } = await api<{ teacher: Teacher }>('admin/teachers', {
        method: 'POST',
        body: JSON.stringify({ ...form, subjects: form.subjects.split(',').map(s => s.trim()).filter(Boolean) }),
      });
      onAdded(teacher);
      setForm(empty);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not add teacher');
    } finally {
      setBusy(false);
    }
  };

  const input = 'w-full px-3 py-2.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-xpm-blue outline-none text-sm font-medium';
  return (
    <form onSubmit={submit} className="bg-white p-6 rounded-2xl border border-slate-100 mb-6">
      <h2 className="text-lg font-black text-slate-900 mb-4">Add a teacher</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="block"><span className="block text-xs font-bold text-slate-500 mb-1">Name *</span>
          <input required value={form.name} onChange={set('name')} className={input} /></label>
        <label className="block"><span className="block text-xs font-bold text-slate-500 mb-1">WhatsApp number *</span>
          <input required value={form.whatsapp} onChange={set('whatsapp')} placeholder="923001234567" className={input} /></label>
        <label className="block"><span className="block text-xs font-bold text-slate-500 mb-1">Subjects * (comma separated)</span>
          <input required value={form.subjects} onChange={set('subjects')} placeholder="Physics, Mathematics" className={input} /></label>
        <label className="block"><span className="block text-xs font-bold text-slate-500 mb-1">Email</span>
          <input type="email" value={form.email} onChange={set('email')} className={input} /></label>
        <label className="block"><span className="block text-xs font-bold text-slate-500 mb-1">Teaching mode</span>
          <select value={form.mode} onChange={set('mode')} className={input}>
            <option>Online</option><option>Physical</option><option>Both</option>
          </select></label>
        <label className="block md:col-span-3"><span className="block text-xs font-bold text-slate-500 mb-1">Short bio (shown on the website)</span>
          <textarea rows={2} value={form.bio} onChange={set('bio')} className={`${input} resize-none`} /></label>
      </div>
      {error && <p role="alert" className="text-sm font-bold text-red-600 mt-3">{error}</p>}
      <button type="submit" disabled={busy} className="mt-4 px-6 py-2.5 bg-xpm-green text-white font-black rounded-xl hover:bg-green-600 transition disabled:opacity-60">
        {busy ? 'Adding…' : 'Add teacher'}
      </button>
    </form>
  );
};

const AdminDashboard: React.FC = () => {
  const [session, setSession] = useState<'checking' | 'out' | 'in'>('checking');
  const [adminEmail, setAdminEmail] = useState('');
  const [tab, setTab] = useState<Tab>('demos');
  const [students, setStudents] = useState<Student[]>([]);
  const [demos, setDemos] = useState<DemoRequest[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleError = useCallback((err: unknown) => {
    if (err instanceof ApiError && err.status === 401) setSession('out');
    else setError(err instanceof Error ? err.message : 'Something went wrong');
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [s, d, t] = await Promise.all([
        api<{ students: Student[] }>('admin/students'),
        api<{ demoRequests: DemoRequest[] }>('admin/demo-requests'),
        api<{ teachers: Teacher[] }>('admin/teachers'),
      ]);
      setStudents(s.students);
      setDemos(d.demoRequests);
      setTeachers(t.teachers);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  const checkSession = useCallback(async () => {
    try {
      const s = await api<{ signedIn: boolean; email?: string }>('admin/session');
      setAdminEmail(s.email || '');
      setSession(s.signedIn ? 'in' : 'out');
    } catch (err) {
      setSession('out');
      setError(err instanceof Error ? err.message : 'Could not reach the server');
    }
  }, []);

  useEffect(() => { checkSession(); }, [checkSession]);
  useEffect(() => { if (session === 'in') load(); }, [session, load]);

  const signOut = async () => {
    await api('admin/logout', { method: 'POST' }).catch(() => {});
    setSession('out');
    setStudents([]); setDemos([]); setTeachers([]);
  };

  const toggleContacted = async (demo: DemoRequest) => {
    const status = demo.status === 'new' ? 'contacted' : 'new';
    try {
      await api(`admin/demo-requests/${demo.id}`, { method: 'PATCH', body: JSON.stringify({ status }) });
      setDemos(ds => ds.map(d => (d.id === demo.id ? { ...d, status } : d)));
    } catch (err) { handleError(err); }
  };

  const removeTeacher = async (teacher: Teacher) => {
    if (!window.confirm(`Remove ${teacher.name}? They will disappear from the website immediately.`)) return;
    try {
      await api(`admin/teachers/${teacher.id}`, { method: 'DELETE' });
      setTeachers(ts => ts.filter(t => t.id !== teacher.id));
    } catch (err) { handleError(err); }
  };

  const q = search.trim().toLowerCase();
  const matches = (...fields: string[]) => !q || fields.some(f => f.toLowerCase().includes(q));
  const shownStudents = useMemo(() => students.filter(s => matches(s.name, s.email, s.phone)), [students, q]);
  const shownDemos = useMemo(() => demos.filter(d => matches(d.name, d.phone, d.subjects, d.level, d.message)), [demos, q]);
  const shownTeachers = useMemo(() => teachers.filter(t => matches(t.name, t.whatsapp, t.subjects.join(' '))), [teachers, q]);
  const newDemos = demos.filter(d => d.status === 'new').length;

  if (session === 'checking') {
    return <div className="min-h-[70vh] flex items-center justify-center text-slate-400 font-bold">Checking session…</div>;
  }
  if (session === 'out') {
    return (
      <>
        {error && <p role="alert" className="max-w-sm mx-auto mt-8 text-sm font-bold text-red-600 text-center">{error}</p>}
        <LoginForm onSignedIn={() => { setError(''); checkSession(); }} />
      </>
    );
  }

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: 'demos', label: 'Demo requests', count: demos.length },
    { id: 'students', label: 'Students', count: students.length },
    { id: 'teachers', label: 'Teachers', count: teachers.length },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Admin dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">
              Signed in as {adminEmail}{newDemos > 0 && <> · <span className="font-bold text-xpm-orange">{newDemos} new demo request{newDemos > 1 ? 's' : ''}</span></>}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/admin/content" className="text-sm font-bold text-slate-500 hover:text-xpm-blue">Content tools</Link>
            <button onClick={load} disabled={loading} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-100 disabled:opacity-60">
              {loading ? 'Refreshing…' : 'Refresh'}
            </button>
            <button onClick={signOut} className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-700">Sign out</button>
          </div>
        </div>

        {error && <p role="alert" className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl text-sm font-bold">{error}</p>}

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div role="tablist" className="flex gap-2">
            {tabs.map(t => (
              <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}
                className={`px-4 py-2 rounded-xl text-sm font-black transition ${tab === t.id ? 'bg-xpm-blue text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}>
                {t.label} <span className={tab === t.id ? 'text-white/70' : 'text-slate-400'}>({t.count})</span>
              </button>
            ))}
          </div>
          <input type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…" aria-label="Search"
            className="w-full sm:w-64 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-xpm-blue" />
        </div>

        {tab === 'teachers' && <AddTeacherForm onAdded={t => setTeachers(ts => [t, ...ts])} />}

        <div className="bg-white rounded-2xl border border-slate-100 overflow-x-auto">
          {tab === 'students' && (
            <table className="w-full">
              <thead className="bg-slate-50"><tr><th className={th}>Name</th><th className={th}>Email</th><th className={th}>Phone</th><th className={th}>Registered</th></tr></thead>
              <tbody className="divide-y divide-slate-100">
                {shownStudents.length === 0 && <EmptyRow cols={4}>{students.length ? 'No matches.' : 'No students have registered yet.'}</EmptyRow>}
                {shownStudents.map(s => (
                  <tr key={s.id}>
                    <td className={`${td} font-bold text-slate-900`}>{s.name}</td>
                    <td className={td}><a href={`mailto:${s.email}`} className="text-xpm-blue hover:underline">{s.email}</a></td>
                    <td className={td}><a href={waLink(s.phone)} target="_blank" rel="noopener noreferrer" className="text-xpm-blue hover:underline">{s.phone}</a></td>
                    <td className={`${td} whitespace-nowrap text-slate-500`}>{formatDate(s.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {tab === 'demos' && (
            <table className="w-full">
              <thead className="bg-slate-50"><tr><th className={th}>Student</th><th className={th}>Wants</th><th className={th}>Message</th><th className={th}>Received</th><th className={th}>Status</th></tr></thead>
              <tbody className="divide-y divide-slate-100">
                {shownDemos.length === 0 && <EmptyRow cols={5}>{demos.length ? 'No matches.' : 'No demo requests yet.'}</EmptyRow>}
                {shownDemos.map(d => (
                  <tr key={d.id} className={d.status === 'new' ? 'bg-orange-50/40' : ''}>
                    <td className={td}>
                      <div className="font-bold text-slate-900">{d.name}</div>
                      <a href={waLink(d.phone)} target="_blank" rel="noopener noreferrer" className="text-xpm-blue hover:underline">{d.phone}</a>
                    </td>
                    <td className={td}>
                      <div>{d.subjects || '—'}</div>
                      <div className="text-xs text-slate-500">{[d.level, d.board].filter(Boolean).join(' · ')}</div>
                      {d.preferred_tutors && <div className="text-xs text-slate-500">Tutor: {d.preferred_tutors}</div>}
                    </td>
                    <td className={`${td} max-w-xs whitespace-pre-line`}>{d.message || '—'}</td>
                    <td className={`${td} whitespace-nowrap text-slate-500`}>{formatDate(d.created_at)}</td>
                    <td className={td}>
                      <button onClick={() => toggleContacted(d)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-black whitespace-nowrap ${d.status === 'new' ? 'bg-xpm-orange text-white hover:bg-orange-600' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                        {d.status === 'new' ? 'Mark contacted' : 'Contacted ✓'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {tab === 'teachers' && (
            <table className="w-full">
              <thead className="bg-slate-50"><tr><th className={th}>Name</th><th className={th}>Subjects</th><th className={th}>Contact</th><th className={th}>Mode</th><th className={th}></th></tr></thead>
              <tbody className="divide-y divide-slate-100">
                {shownTeachers.length === 0 && <EmptyRow cols={5}>{teachers.length ? 'No matches.' : 'No teachers yet. Add one above.'}</EmptyRow>}
                {shownTeachers.map(t => (
                  <tr key={t.id}>
                    <td className={td}>
                      <div className="font-bold text-slate-900">{t.name}</div>
                      {t.bio && <div className="text-xs text-slate-500 max-w-xs">{t.bio}</div>}
                    </td>
                    <td className={td}>{t.subjects.join(', ')}</td>
                    <td className={td}>
                      <a href={waLink(t.whatsapp)} target="_blank" rel="noopener noreferrer" className="block text-xpm-blue hover:underline">{t.whatsapp}</a>
                      {t.email && <a href={`mailto:${t.email}`} className="block text-xs text-slate-500 hover:underline">{t.email}</a>}
                    </td>
                    <td className={td}>{t.mode}</td>
                    <td className={`${td} text-right`}>
                      <button onClick={() => removeTeacher(t)} className="px-3 py-1.5 rounded-lg text-xs font-black text-red-600 bg-red-50 hover:bg-red-100">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
