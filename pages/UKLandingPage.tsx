import React from 'react';
import { Link } from 'react-router-dom';
import { generateRegionalServiceSchema } from '../internationalSEOHelper';
import JsonLd from '../components/JsonLd.tsx';
import RegionalFaq from '../components/RegionalFaq.tsx';
import DemoBookingForm from '../components/DemoBookingForm.tsx';
import ExamBoards, { ExamBoard } from '../components/ExamBoards.tsx';
import { blogPosts } from '../blogData';

const UK_ARTICLES = blogPosts.filter(post => post.region === 'uk').slice(0, 3);
export const UK_BOARDS: ExamBoard[] = [
  { name: 'AQA', quals: 'GCSE · AS & A Level', codes: ['GCSE Maths 8300', 'Combined Science Trilogy 8464', 'GCSE Physics 8463', 'GCSE Chemistry 8462', 'GCSE Biology 8461', 'A Level Maths 7357', 'A Level Physics 7408', 'A Level Chemistry 7405', 'A Level Biology 7402'] },
  { name: 'Pearson Edexcel', quals: 'GCSE · AS & A Level', codes: ['GCSE Maths 1MA1', 'A Level Maths 9MA0', 'A Level Further Maths 9FM0', 'A Level Economics A 9EC0'] },
  { name: 'OCR', quals: 'GCSE · AS & A Level', codes: ['GCSE Maths J560', 'GCSE Computer Science J277', 'A Level Maths A H240', 'Physics A H556', 'Chemistry A H432', 'Biology A H420', 'Computer Science H446'] },
  { name: 'WJEC / Eduqas', quals: 'GCSE · AS & A Level', note: 'WJEC specifications for students in Wales and Eduqas specifications for schools in England.' },
  { name: 'CCEA', quals: 'GCSE · AS & A Level', note: 'Northern Ireland GCSE and A Level specifications, including Maths, Further Maths and the sciences.' },
  { name: 'SQA', quals: 'National 5 · Higher · Advanced Higher', note: 'Scottish qualifications in Maths, Physics, Chemistry, Biology and more.' },
  { name: 'Cambridge International', quals: 'IGCSE · AS & A Level', codes: ['IGCSE Maths 0580', 'Additional Maths 0606', 'IGCSE Physics 0625', 'IGCSE Chemistry 0620', 'IGCSE Biology 0610', 'A Level Maths 9709', 'Further Maths 9231', 'A Level Physics 9702'] },
  { name: 'Pearson Edexcel International', quals: 'International GCSE · International A Level', codes: ['Maths A 4MA1', 'Physics 4PH1', 'Chemistry 4CH1', 'Biology 4BI1', 'IAL Maths, Physics & Chemistry'] },
];

const WHATSAPP_LINK = `https://wa.me/923009508592?text=${encodeURIComponent("Hi XPM Tutors! I'm in the UK and would like to know more about online GCSE / A Level tutoring.")}`;

const UKLandingPage: React.FC = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <JsonLd data={generateRegionalServiceSchema('en-gb')} />
      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/50 rounded-full mb-6 border border-blue-200">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">🇬🇧 UK Specialist</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 lg:mb-8 leading-none">
                Online <span className="text-blue-600">A Level & GCSE</span> Tutors for UK Students
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                One-to-one online GCSE, IGCSE and A Level tutoring for every UK exam board: AQA, Pearson Edexcel, OCR, WJEC/Eduqas, CCEA, SQA and Cambridge. Lessons in UK time, with evening and weekend slots. Free trial session available.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-0">
                <a 
                  href="#book-demo" 
                  className="px-8 py-4 lg:py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition transform hover:-translate-y-1 text-center text-lg"
                >
                  Book a Free Trial
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 lg:py-5 bg-white text-blue-600 border-2 border-blue-600 font-black rounded-2xl hover:bg-blue-50 transition text-center shadow-sm text-lg"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-4xl font-black text-blue-600 mb-2">2,500+</div>
                <p className="text-slate-600 font-medium">UK Students Tutored</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-4xl font-black text-blue-600 mb-2">92%</div>
                <p className="text-slate-600 font-medium">Grade Improvement Rate</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-4xl font-black text-blue-600 mb-2">4.9/5</div>
                <p className="text-slate-600 font-medium">Student Satisfaction Rating</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-4xl font-black text-blue-600 mb-2">100%</div>
                <p className="text-slate-600 font-medium">University Placement Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-center">
            GCSE & A Level Subjects
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            One-to-one tutoring for GCSE, IGCSE, AS and A Level, matched to your exam board's specification
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Mathematics', 'Physics', 'Chemistry', 'English', 'Biology', 'Economics', 'Further Maths', 'Computer Science', 'Geography'].map((subject) => (
              <div key={subject} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border-l-4 border-blue-600">
                <h3 className="text-xl font-black text-slate-900 mb-2">{subject}</h3>
                <p className="text-slate-600 text-sm">Online {subject} tutoring for GCSE and A Level, on AQA, Edexcel, OCR and other boards</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExamBoards
        heading="Every UK Exam Board Covered"
        intro="Your tutor follows your exact specification and uses that board's past papers and mark schemes. We tutor all of these boards:"
        boards={UK_BOARDS}
        accent={{ border: 'border-blue-100 hover:border-blue-400 transition', badge: 'bg-blue-50 text-blue-700' }}
      />

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            Why UK Students Choose XPM Tutors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Board-Specific Teaching', desc: "Lessons follow your AQA, Edexcel, OCR, WJEC, CCEA, SQA or Cambridge specification, with that board's past papers" },
              { title: 'Proven Results', desc: 'Average grade improvement of 2-3 grades within 3 months' },
              { title: 'Flexible Scheduling', desc: 'UK timezone friendly, weekend and evening sessions available' },
              { title: 'University Admission Support', desc: 'Help with PS, interview prep, and UCAS guidance' },
              { title: 'Affordable Pricing', desc: 'Competitive rates: from £15-30/hour for group sessions' },
              { title: 'Personalized Plans', desc: 'Custom learning plans based on your exam objectives' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 border border-slate-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50/30 transition">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-blue-600">{idx + 1}</span>
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

      <DemoBookingForm
        program="Online tutoring (UK)"
        board="UK"
        heading="Book a Free Trial Session"
        phonePlaceholder="+44 7700 900123"
        level={{ label: 'Level', options: ['GCSE', 'IGCSE', 'AS Level', 'A Level', 'National 5 / Higher', 'University', 'Other'], defaultValue: 'A Level' }}
        detail={{ label: 'Year', options: ['Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13', 'Other'], defaultValue: 'Year 12' }}
        extra={{ label: 'Exam board', options: ['AQA', 'Pearson Edexcel', 'OCR', 'WJEC / Eduqas', 'CCEA', 'SQA', 'Cambridge International', 'Edexcel International', 'Not sure'], defaultValue: 'AQA' }}
        askSubject
        theme={{
          section: 'bg-gradient-to-br from-blue-600 to-blue-800',
          focus: 'focus:border-blue-500',
          button: 'bg-blue-600 hover:bg-blue-700 text-white',
        }}
      />

      <RegionalFaq region="uk" />

      {/* Blog Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 text-center">
            Latest UK Exam Tips & Resources
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Read expert articles on GCSE strategies, A Level subject guides, and exam preparation tips
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {UK_ARTICLES.map(post => (
              <li key={post.id}>
                <Link to={`/blog/${post.slug}`} className="block h-full p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition">
                  <span className="block font-black text-slate-900">{post.title.split('|')[0].trim()}</span>
                  <span className="block text-sm text-slate-600 mt-2 line-clamp-3">{post.excerpt}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-center text-slate-600 mb-8">
            At university? See our <Link to="/online-calculus-tutors" className="text-blue-600 font-bold hover:underline">online calculus tutors for engineering students</Link>.
          </p>
          <div className="text-center">
            <Link 
              to="/uk/blog"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition shadow-lg"
            >
              Read All UK Blog Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">Ready to Boost Your Grades?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your free trial session today and see the difference expert tutoring can make.
          </p>
          <a 
            href="#book-demo"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition shadow-2xl"
          >
            Book Free Trial Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default UKLandingPage;
