
import React, { useState, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { User, Teacher } from '../types';
import { db } from '../db';
import Logo from '../components/Logo';

interface TeacherRegistrationPageProps {
  user: User;
  onUpdateUser: (user: User) => void;
}

const TeacherRegistrationPage: React.FC<TeacherRegistrationPageProps> = ({ user, onUpdateUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bio: '',
    mode: 'Online' as 'Online' | 'Physical' | 'Both',
    promoCode: '',
    subjects: [] as string[],
    transactionId: ''
  });

  const [docs, setDocs] = useState({
    utilityBill: '',
    cnic: '',
    degree: '',
    paymentScreenshot: ''
  });

  const [promoApplied, setPromoApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const availableSubjects = [
    'Physics', 'Mathematics', 'Chemistry', 'Biology', 
    'Computer Science', 'English', 'Islamiyat', 'Pakistan Studies',
    'Business', 'Economics'
  ];

  if (user.teacherProfileId) {
    const existingTeacher = db.getTeachers().find(t => t.id === user.teacherProfileId);
    if (existingTeacher?.registrationStatus === 'active') {
      return <Navigate to="/dashboard" />;
    }
  }

  const handleFileUpload = (type: keyof typeof docs) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDocs(prev => ({ ...prev, [type]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSubject = (sub: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(sub) 
        ? prev.subjects.filter(s => s !== sub) 
        : [...prev.subjects, sub]
    }));
  };

  const handleApplyPromo = () => {
    if (formData.promoCode.toUpperCase() === 'XPMYES') {
      setPromoApplied(true);
    } else {
      alert('Invalid Promo Code');
    }
  };

  const handleProceedToStep3 = () => {
    if (!docs.utilityBill || !docs.cnic || !docs.degree) {
      alert('Please upload all three required documents (Bill, CNIC, and Degree) to proceed.');
      return;
    }
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.subjects.length === 0) return alert('Please select at least one subject');
    if (!docs.utilityBill || !docs.cnic || !docs.degree) return alert('Please upload all required identity documents');
    
    // Payment check only if promo not applied and mode is Online/Both
    if (!promoApplied && (formData.mode === 'Online' || formData.mode === 'Both')) {
        if (!docs.paymentScreenshot || !formData.transactionId) {
            return alert('Please upload payment screenshot and transaction ID');
        }
    }

    setIsSubmitting(true);
    
    const newTeacherId = `teacher-${Date.now()}`;
    const newTeacher: any = {
      id: newTeacherId,
      name: user.name,
      email: user.email,
      phone: user.phoneNumber || '',
      subjects: formData.subjects,
      bio: formData.bio,
      whatsapp: user.phoneNumber || '',
      utilityBill: docs.utilityBill,
      cnic: docs.cnic,
      degree: docs.degree,
      paymentScreenshot: docs.paymentScreenshot,
      transactionId: formData.transactionId,
      mode: formData.mode,
      isVerified: false,
      registrationStatus: 'pending',
      attendance: [],
      activeTenures: [],
      registrationType: promoApplied ? 'Promo (Free)' : 'Paid',
      appliedAt: Date.now()
    };

    const updatedUser: User = {
      ...user,
      role: 'teacher',
      teacherProfileId: newTeacherId
    };

    // Prepare WhatsApp Notification
    const adminWhatsApp = "923009508592"; // Your notification number
    const waText = `*XPM NEW TEACHER ALERT* 🎓\n\n*Name:* ${user.name}\n*Email:* ${user.email}\n*Subjects:* ${formData.subjects.join(', ')}\n*Mode:* ${formData.mode}\n*Reg Type:* ${promoApplied ? 'FREE (Promo)' : 'PAID'}\n*Trx ID:* ${formData.transactionId || 'N/A'}\n\nPlease review documents in Admin Panel.`;

    (async () => {
      try {
        db.saveTeacher(newTeacher);
        if (onUpdateUser) onUpdateUser(updatedUser);
        // Inform the applicant their application is submitted
        alert('Your application has been submitted. You will soon be notified about acceptance. In case of rejection, your amount will be refunded.');
        // Try to open WhatsApp notification to admin but don't let it block the flow
        try { window.open(`https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(waText)}`, '_blank'); } catch (e) {}
        navigate('/dashboard');
      } catch (err) {
        console.error('Teacher registration error:', err);
        alert('There was an error processing your application. Please try again or contact support.');
      } finally {
        setIsSubmitting(false);
      }
    })();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
           <Logo className="h-16 w-16 mx-auto mb-6" showText={false} />
           <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Faculty Registration Portal</h1>
           <p className="text-slate-500 font-medium">Join our network of elite O & A Level educators.</p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="p-10 lg:p-16">
            <div className="flex justify-center mb-12">
               <div className="flex items-center gap-4">
                  {[1, 2, 3].map(s => (
                    <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition ${step >= s ? 'bg-xpm-blue text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>
                      {s}
                    </div>
                  ))}
               </div>
            </div>

            {step === 1 && (
              <div className="space-y-8 animate-fade-in-up">
                <h3 className="text-2xl font-black text-slate-900">1. Specialization Details</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Teaching Mode</label>
                    <div className="grid grid-cols-3 gap-4">
                      {['Online', 'Physical', 'Both'].map(m => (
                        <button 
                          key={m} 
                          onClick={() => setFormData({...formData, mode: m as any})}
                          className={`py-3 rounded-2xl font-black text-sm border-2 transition ${formData.mode === m ? 'bg-xpm-blue border-xpm-blue text-white shadow-lg' : 'bg-slate-50 border-transparent text-slate-400 hover:border-slate-200'}`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Target Subjects</label>
                    <div className="flex flex-wrap gap-2">
                      {availableSubjects.map(sub => (
                        <button
                          key={sub}
                          onClick={() => toggleSubject(sub)}
                          className={`px-4 py-2 rounded-xl text-xs font-black border-2 transition ${formData.subjects.includes(sub) ? 'bg-xpm-green border-xpm-green text-white' : 'bg-slate-50 border-transparent text-slate-500 hover:border-slate-100'}`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Experience Statement</label>
                    <textarea 
                      value={formData.bio}
                      onChange={e => setFormData({...formData, bio: e.target.value})}
                      placeholder="Outline your academic background and teaching philosophy..."
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-xpm-blue focus:bg-white outline-none font-medium transition shadow-inner h-32 resize-none"
                    ></textarea>
                  </div>
                </div>
                <button onClick={() => setStep(2)} className="w-full py-5 bg-xpm-blue text-white font-black rounded-2xl hover:bg-xpm-dark transition shadow-xl uppercase tracking-widest text-sm">Continue to Documents</button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-black text-slate-900">2. Verification Documents</h3>
                  <span className="text-[10px] font-black text-xpm-blue uppercase tracking-widest">Confidential Data</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { label: 'Electricity/Gas Bill', key: 'utilityBill' as const },
                    { label: 'CNIC / Identity', key: 'cnic' as const },
                    { label: 'Highest Degree', key: 'degree' as const }
                  ].map(doc => (
                    <div key={doc.key} className="space-y-4 text-center">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">{doc.label}</label>
                      <div className={`aspect-square rounded-[2.5rem] border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition relative overflow-hidden ${docs[doc.key] ? 'border-xpm-green bg-xpm-green/5' : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-xpm-blue'}`}>
                        <input type="file" onChange={handleFileUpload(doc.key)} className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                        {docs[doc.key] ? (
                          <div className="absolute inset-0 p-4">
                             <div className="w-full h-full bg-slate-200 rounded-2xl overflow-hidden shadow-inner border border-white">
                                <img src={docs[doc.key]} className="w-full h-full object-cover" alt="Doc preview" />
                             </div>
                             <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition">
                                <span className="text-white text-[10px] font-black uppercase tracking-widest">Change File</span>
                             </div>
                          </div>
                        ) : (
                          <>
                            <svg className="w-10 h-10 text-slate-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Image</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="flex-1 py-5 bg-slate-100 text-slate-400 font-black rounded-2xl hover:bg-slate-200 transition uppercase tracking-widest text-sm">Back</button>
                  <button 
                    onClick={handleProceedToStep3} 
                    className={`flex-[2] py-5 font-black rounded-2xl transition shadow-xl uppercase tracking-widest text-sm ${(!docs.utilityBill || !docs.cnic || !docs.degree) ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-xpm-blue text-white hover:bg-xpm-dark'}`}
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-fade-in-up">
                <h3 className="text-2xl font-black text-slate-900">3. Finalize Registration</h3>
                
                <div className="space-y-8">
                  {/* Promo code hidden per admin request */}

                  {/* Payment Section - Only if not promo */}
                  {!promoApplied && (formData.mode === 'Online' || formData.mode === 'Both') && (
                    <div className="space-y-6">
                      <div className="p-8 bg-xpm-blue/5 rounded-[2.5rem] border border-xpm-blue/10">
                         <div className="flex justify-between items-center mb-8 border-b border-xpm-blue/10 pb-4">
                            <span className="text-sm font-black text-slate-900 uppercase tracking-widest">Portal Maintenance Fee</span>
                            <span className="text-2xl font-black text-xpm-blue">PKR 3,000</span>
                         </div>
                         
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                               <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Easypaisa Recipient</div>
                               <div className="p-4 bg-white rounded-2xl border border-slate-100">
                                  <div className="text-xs font-bold text-slate-400">Account Number</div>
                                  <div className="text-lg font-black text-xpm-blue">03365036866</div>
                                  <div className="text-[10px] font-black text-slate-900 uppercase mt-1">Zubair Ahmad</div>
                               </div>
                            </div>
                            
                            <div className="space-y-4">
                               <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Upload Screenshot</div>
                               <div 
                                onClick={() => document.getElementById('payment-upload')?.click()}
                                className={`h-full min-h-[120px] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition ${docs.paymentScreenshot ? 'bg-xpm-green/5 border-xpm-green' : 'bg-white border-slate-200 hover:border-xpm-blue'}`}
                               >
                                  <input type="file" id="payment-upload" hidden onChange={handleFileUpload('paymentScreenshot')} accept="image/*" />
                                  {docs.paymentScreenshot ? (
                                    <span className="text-[10px] font-black text-xpm-green uppercase">Screenshot Attached ✓</span>
                                  ) : (
                                    <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>
                                  )}
                               </div>
                            </div>
                         </div>

                         <div className="mt-8">
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Easypaisa Transaction ID</label>
                            <input 
                              type="text" 
                              placeholder="e.g. 21004567890" 
                              value={formData.transactionId}
                              onChange={e => setFormData({...formData, transactionId: e.target.value})}
                              className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:border-xpm-blue outline-none font-bold text-sm shadow-inner"
                            />
                         </div>
                      </div>
                    </div>
                  )}

                  {formData.mode === 'Physical' && (
                    <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 flex items-center gap-6">
                       <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">!</div>
                       <p className="text-sm font-medium text-amber-700">Physical-only registration is currently free. Your profile will be listed in the directory after document verification.</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-6">
                  <button onClick={() => setStep(2)} className="flex-1 py-5 bg-slate-100 text-slate-400 font-black rounded-2xl hover:bg-slate-200 transition uppercase tracking-widest text-sm">Back</button>
                  <button 
                    onClick={handleSubmit} 
                    disabled={isSubmitting} 
                    className="flex-[2] py-5 bg-xpm-green text-white font-black rounded-2xl hover:bg-green-600 transition shadow-xl uppercase tracking-widest text-sm disabled:opacity-50"
                  >
                    {isSubmitting ? 'Processing Application...' : 'Complete Registration'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherRegistrationPage;
