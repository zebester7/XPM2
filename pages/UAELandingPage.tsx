import React from 'react';
import { Link } from 'react-router-dom';
import { generateRegionalServiceSchema } from '../internationalSEOHelper';
import JsonLd from '../components/JsonLd.tsx';
import RegionalFaq from '../components/RegionalFaq.tsx';
import DemoBookingForm from '../components/DemoBookingForm.tsx';
import ExamBoards, { ExamBoard } from '../components/ExamBoards.tsx';
import { blogPosts } from '../blogData';

const UAE_ARTICLES = blogPosts.filter(post => post.region === 'ae').slice(0, 3);
const UAE_BOARDS: ExamBoard[] = [
  { name: 'Cambridge International', quals: 'IGCSE · AS & A Level', codes: ['IGCSE Maths 0580', 'Additional Maths 0606', 'IGCSE Physics 0625', 'IGCSE Chemistry 0620', 'IGCSE Biology 0610', 'A Level Maths 9709', 'A Level Physics 9702', 'A Level Chemistry 9701', 'A Level Biology 9700'] },
  { name: 'Pearson Edexcel International', quals: 'International GCSE · International A Level', codes: ['Maths A 4MA1', 'Physics 4PH1', 'Chemistry 4CH1', 'Biology 4BI1', 'IAL Maths, Physics & Chemistry'] },
  { name: 'AQA & OCR (UK GCSE / A Level)', quals: 'GCSE · AS & A Level', codes: ['AQA GCSE Maths 8300', 'AQA A Level Maths 7357', 'OCR GCSE Maths J560', 'OCR A Level Maths A H240'] },
  { name: 'International Baccalaureate (IB)', quals: 'MYP · Diploma Programme (SL & HL)', codes: ['Maths: Analysis & Approaches', 'Maths: Applications & Interpretation', 'Physics', 'Chemistry', 'Biology', 'Economics'] },
  { name: 'American Curriculum', quals: 'High school · AP · SAT', codes: ['AP Calculus AB', 'AP Calculus BC', 'AP Physics 1', 'AP Physics C', 'AP Chemistry', 'Digital SAT'] },
  { name: 'CBSE', quals: 'Class 9 – 12', note: 'Indian curriculum Maths, Physics, Chemistry and Biology for CBSE schools in Dubai, Sharjah and Abu Dhabi, including Class 10 and Class 12 board exam preparation.' },
  { name: 'CISCE (ICSE & ISC)', quals: 'ICSE Class 10 · ISC Class 12', note: 'Maths and science tutoring for ICSE and ISC students, with board exam practice.' },
];

const WHATSAPP_LINK = `https://wa.me/923009508592?text=${encodeURIComponent("Hi XPM Tutors! I'm in the UAE and would like to know more about online tutoring.")}`;

const UAELandingPage: React.FC = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <JsonLd data={generateRegionalServiceSchema('en-ae')} />
      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50/50 rounded-full mb-6 border border-emerald-200">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">🇦🇪 UAE Specialist</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 lg:mb-8 leading-none">
                Online <span className="text-emerald-600">GCSE, IGCSE & IB</span> Tutors in Dubai & the UAE
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                One-to-one online tutoring for British, IB, American and Indian curriculum schools in Dubai, Abu Dhabi, Sharjah and across the UAE: Cambridge and Edexcel IGCSE, GCSE, A Level, IB, AP, CBSE and ICSE, scheduled around UAE school hours.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-0">
                <a 
                  href="#book-demo" 
                  className="px-8 py-4 lg:py-5 bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition transform hover:-translate-y-1 text-center text-lg"
                >
                  Book a Free Trial
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 lg:py-5 bg-white text-emerald-600 border-2 border-emerald-600 font-black rounded-2xl hover:bg-emerald-50 transition text-center shadow-sm text-lg"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl space-y-8">
              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="text-4xl font-black text-emerald-600 mb-2">2,800+</div>
                <p className="text-slate-600 font-medium">UAE Students Tutored</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="text-4xl font-black text-emerald-600 mb-2">94%</div>
                <p className="text-slate-600 font-medium">Grade Improvement Rate</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="text-4xl font-black text-emerald-600 mb-2">4.9/5</div>
                <p className="text-slate-600 font-medium">Student Satisfaction Rating</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="text-4xl font-black text-emerald-600 mb-2">15+</div>
                <p className="text-slate-600 font-medium">Years of Gulf Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExamBoards
        heading="Every Board Taught in UAE Schools"
        intro="Whichever curriculum your school follows, your tutor works from your exact syllabus, past papers and mark schemes."
        boards={UAE_BOARDS}
        accent={{ border: 'border-emerald-100 hover:border-emerald-400 transition', badge: 'bg-emerald-50 text-emerald-700' }}
      />

      {/* Curriculum Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-center">
            All International Curricula Covered
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Online tutoring for the British, IB, Cambridge, Indian and American curricula taught in UAE schools
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['GCSE (British Curriculum)', 'IGCSE', 'IB MYP & Diploma Programme', 'Cambridge O & A Levels', 'Edexcel International A Level', 'CBSE', 'ICSE & ISC', 'American Curriculum & AP'].map((curriculum) => (
              <div key={curriculum} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border-l-4 border-emerald-600">
                <h3 className="text-xl font-black text-slate-900 mb-2">{curriculum}</h3>
                <p className="text-slate-600 text-sm">Online one-to-one tutoring for {curriculum} students in the UAE</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            Why UAE Students & Expats Choose XPM
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Gulf Experience', desc: '15+ years serving expatriate and local communities in UAE' },
              { title: 'Cultural Understanding', desc: 'Culturally sensitive tutoring respecting local values' },
              { title: 'UAE Timezone Friendly', desc: 'Convenient scheduling aligned with UAE school hours' },
              { title: 'Multi-Currency Support', desc: 'Flexible pricing in AED, USD, GBP, and other currencies' },
              { title: 'International Quality', desc: 'Tutors trained in international standards and practices' },
              { title: 'Home & Online Sessions', desc: 'Flexible delivery options for busy families' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 border border-slate-200 rounded-2xl hover:border-emerald-400 hover:bg-emerald-50/30 transition">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-emerald-600">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects by Level */}
      <section className="py-16 lg:py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            Expert Subject Coverage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { level: 'Sciences', subjects: ['Physics', 'Chemistry', 'Biology', 'Science'] },
              { level: 'Mathematics', subjects: ['Maths', 'Additional Maths', 'Further Maths', 'Statistics', 'AP & University Calculus'] },
              { level: 'Humanities', subjects: ['English', 'History', 'Geography', 'Economics'] }
            ].map((category, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-black text-emerald-600 mb-6">{category.level}</h3>
                <ul className="space-y-3">
                  {category.subjects.map((subject, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                      <span className="text-slate-700 font-medium">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemoBookingForm
        program="Online tutoring (UAE)"
        board="UAE"
        heading="Book a Free Trial Session"
        phonePlaceholder="+971 50 123 4567"
        level={{ label: 'Curriculum', options: ['IGCSE', 'GCSE', 'A Level / IAL', 'IB MYP', 'IB Diploma', 'American / AP', 'CBSE', 'ICSE / ISC', 'University', 'Other'], defaultValue: 'IGCSE' }}
        detail={{ label: 'Year / Grade', options: ['Year 9 / Grade 8', 'Year 10 / Grade 9', 'Year 11 / Grade 10', 'Year 12 / Grade 11', 'Year 13 / Grade 12', 'Other'], defaultValue: 'Year 10 / Grade 9' }}
        extra={{ label: 'Exam board', options: ['Cambridge International', 'Pearson Edexcel', 'AQA', 'OCR', 'IB', 'College Board (AP)', 'CBSE', 'CISCE', 'Not sure'], defaultValue: 'Cambridge International' }}
        askSubject
        theme={{
          section: 'bg-gradient-to-br from-emerald-600 to-emerald-800',
          focus: 'focus:border-emerald-500',
          button: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        }}
      />

      <RegionalFaq region="ae" />

      {/* Blog Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            Latest UAE IB & IGCSE Tips
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Read expert articles on IB strategies, IGCSE guides, and exam preparation tips for Dubai students
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {UAE_ARTICLES.map(post => (
              <li key={post.id}>
                <Link to={`/blog/${post.slug}`} className="block h-full p-6 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition">
                  <span className="block font-black text-slate-900">{post.title.split('|')[0].trim()}</span>
                  <span className="block text-sm text-slate-600 mt-2 line-clamp-3">{post.excerpt}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-center text-slate-600 mb-8">
            At university in the UAE or abroad? See our <Link to="/online-calculus-tutors" className="text-emerald-700 font-bold hover:underline">online calculus tutors for engineering students</Link>.
          </p>
          <div className="text-center">
            <Link 
              to="/ae/blog"
              className="inline-block px-8 py-4 bg-green-600 text-white font-black rounded-2xl hover:bg-green-700 transition shadow-lg"
            >
              Read All UAE Blog Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">Ready to Excel in Your Exams?</h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Book your free trial session today and experience the XPM Tutors difference.
          </p>
          <a 
            href="#book-demo"
            className="inline-block px-10 py-4 bg-white text-emerald-600 font-black rounded-2xl hover:bg-emerald-50 transition shadow-2xl"
          >
            Book Free Trial Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default UAELandingPage;
