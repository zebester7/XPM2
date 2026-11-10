/**
 * Public API calls used by the site (the admin dashboard has its own client).
 * Records are sent with `keepalive` so they still arrive when the page navigates
 * away straight after, e.g. when opening WhatsApp.
 */

export interface PublicTeacher {
  id: string;
  name: string;
  whatsapp: string;
  subjects: string[];
  bio: string;
  mode: 'Online' | 'Physical' | 'Both';
}

async function post(path: string, body: unknown): Promise<void> {
  const res = await fetch(`/api/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    keepalive: true,
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Request failed (${res.status})`);
  }
}

export const recordStudent = (student: { name: string; email: string; phone: string }) => post('students', student);

export const recordDemoRequest = (demo: {
  name: string;
  phone: string;
  subjects: string[];
  level: string;
  board: string;
  preferredTutors: string;
  message: string;
}) => post('demo-requests', demo);

export async function fetchTeachers(): Promise<PublicTeacher[]> {
  const res = await fetch('/api/teachers');
  if (!res.ok) throw new Error(`Could not load teachers (${res.status})`);
  return (await res.json()).teachers;
}
