import React, { useState } from 'react';
import { recordDemoRequest } from '../apiClient.ts';

const WHATSAPP_NUMBER = '923009508592';

export interface BookingSelect {
  label: string;
  options: string[];
  defaultValue: string;
}

export interface BookingTheme {
  /** Section background, e.g. 'bg-gradient-to-br from-indigo-600 to-indigo-800' */
  section: string;
  /** Input focus border, e.g. 'focus:border-indigo-500' */
  focus: string;
  /** Submit and fallback button colours */
  button: string;
}

interface DemoBookingFormProps {
  /** Saved as the demo request's subject and shown in the WhatsApp message */
  program: string;
  board: string;
  heading: string;
  phonePlaceholder: string;
  /** Saved as the request's level, e.g. grade or year group */
  level: BookingSelect;
  /** Extra choice saved into the request message, e.g. time zone or curriculum */
  detail: BookingSelect;
  /** Optional third choice saved into the request message, e.g. exam board */
  extra?: BookingSelect;
  /** Show an optional free-text "subject(s)" field */
  askSubject?: boolean;
  /** Label and placeholder for the free-text field (defaults: "Subject(s)", "e.g. Maths, Physics") */
  subjectLabel?: string;
  subjectPlaceholder?: string;
  /** What is being booked, e.g. 'free trial' or 'free demo class' */
  offer?: string;
  /** Submit button label */
  cta?: string;
  theme: BookingTheme;
}

/**
 * Free trial booking form. Each booking goes two ways: WhatsApp opens with the details
 * pre-filled (to the academy's number) and the request is saved to the admin dashboard.
 * If the save fails, the WhatsApp message still carries the booking, so no lead is lost.
 */
const DemoBookingForm: React.FC<DemoBookingFormProps> = ({
  program, board, heading, phonePlaceholder, level, detail, extra, askSubject,
  subjectLabel = 'Subject(s)', subjectPlaceholder = 'e.g. Maths, Physics',
  offer = 'free trial', cta = 'Book My Free Trial on WhatsApp', theme,
}) => {
  const [form, setForm] = useState({ name: '', phone: '', level: level.defaultValue, detail: detail.defaultValue, extra: extra?.defaultValue ?? '', subject: '' });
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const lines = [
    `Hi XPM Tutors! I'd like to book a ${offer} for: ${program}.`,
    '',
    `Name: ${form.name}`,
    `WhatsApp: ${form.phone}`,
    `${level.label}: ${form.level}`,
    `${detail.label}: ${form.detail}`,
    ...(extra ? [`${extra.label}: ${form.extra}`] : []),
    ...(form.subject.trim() ? [`${subjectLabel}: ${form.subject.trim()}`] : []),
  ];
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opened synchronously inside the submit event; browsers block pop-ups opened after an await
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    recordDemoRequest({
      name: form.name,
      phone: form.phone,
      subjects: [program, ...(form.subject.trim() ? [form.subject.trim()] : [])],
      level: form.level,
      board,
      preferredTutors: '',
      message: [`${detail.label}: ${form.detail}`, ...(extra ? [`${extra.label}: ${form.extra}`] : [])].join('\n'),
    }).catch(err => console.error('Could not record demo request:', err));
    setSent(true);
  };

  const input = `w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-200 ${theme.focus} outline-none font-medium text-slate-900`;

  return (
    <section id="book-demo" className={`py-16 lg:py-24 scroll-mt-20 ${theme.section}`}>
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
          {sent ? (
            <div className="text-center" role="status">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">You're booked in!</h2>
              <p className="mt-3 text-slate-600">
                WhatsApp has opened with your booking details. Press <strong>Send</strong> there and we'll reply to confirm
                a time for your {offer}.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                className={`mt-6 inline-block px-6 py-3 font-black rounded-xl transition ${theme.button}`}>
                WhatsApp didn't open? Tap here
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{heading}</h2>
                <p className="mt-2 text-slate-600">Takes 30 seconds. We confirm your slot on WhatsApp.</p>
                <p className="mt-1 text-xs text-slate-400">Free. No payment details needed.</p>
              </div>
              <label className="block">
                <span className="block text-sm font-bold text-slate-700 mb-1.5">Student or parent name</span>
                <input required autoComplete="name" value={form.name} onChange={set('name')} className={input} />
              </label>
              <label className="block">
                <span className="block text-sm font-bold text-slate-700 mb-1.5">WhatsApp number (with country code)</span>
                <input required type="tel" autoComplete="tel" placeholder={phonePlaceholder} value={form.phone} onChange={set('phone')} className={input} />
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm font-bold text-slate-700 mb-1.5">{level.label}</span>
                  <select value={form.level} onChange={set('level')} className={input}>
                    {level.options.map(o => <option key={o}>{o}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="block text-sm font-bold text-slate-700 mb-1.5">{detail.label}</span>
                  <select value={form.detail} onChange={set('detail')} className={input}>
                    {detail.options.map(o => <option key={o}>{o}</option>)}
                  </select>
                </label>
              </div>
              {extra && (
                <label className="block">
                  <span className="block text-sm font-bold text-slate-700 mb-1.5">{extra.label}</span>
                  <select value={form.extra} onChange={set('extra')} className={input}>
                    {extra.options.map(o => <option key={o}>{o}</option>)}
                  </select>
                </label>
              )}
              {askSubject && (
                <label className="block">
                  <span className="block text-sm font-bold text-slate-700 mb-1.5">{subjectLabel} <span className="font-medium text-slate-400">(optional)</span></span>
                  <input value={form.subject} onChange={set('subject')} placeholder={subjectPlaceholder} className={input} />
                </label>
              )}
              <button type="submit" className={`w-full py-4 font-black text-lg rounded-2xl transition ${theme.button}`}>
                {cta}
              </button>
              <p className="text-center text-xs text-slate-500">Opens WhatsApp with your details filled in. Just press Send.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoBookingForm;
