
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { generateFAQSchema } from '../seoHelper.ts';
import JsonLd from '../components/JsonLd.tsx';
import { canonicalUrl } from '../seoRoutes.ts';

interface ExamLandingPageProps {
  exam: string;
}

const ExamLandingPage: React.FC<ExamLandingPageProps> = ({ exam }) => {
  const contentMap: Record<string, any> = {
    'O Level': {
      title: 'Online O Level Tutors | Expert O Level Tutoring | XPM Tutors',
      description: 'Find the best online O Level tutors for Cambridge & Edexcel. Expert tutors for Physics, Maths, Chemistry & all subjects. Book a free trial session today!',
      keywords: 'O Level tutors, online O Level tutors, O Level Physics tutor, O Level Maths tutor, O Level Chemistry tutor, Cambridge O Level, Edexcel O Level, O Level tuition',
      longText: 'Mastering the O Level curriculum requires a deep understanding of conceptual logic. Our expert O Level tutors specialize in Physics (5054), Mathematics Syllabus D (4024), Chemistry (5070), Biology (5090), Computer Science (2210), Engineering (6037), Economics (2281), and English literature. We provide daily topical past paper practice, personalized study plans, and specialized revision sessions to ensure you achieve A* grades.',
      subjects: [
        { name: 'Physics', code: '5054', desc: 'Forces, motion, energy, waves, and modern physics' },
        { name: 'Mathematics', code: '4024', desc: 'Algebra, geometry, calculus, and statistics' },
        { name: 'Chemistry', code: '5070', desc: 'Atomic structure, bonding, reactions, and organic chemistry' },
        { name: 'Biology', code: '5090', desc: 'Cells, genetics, ecology, and human physiology' },
        { name: 'Computer Science', code: '2210', desc: 'Programming, algorithms, and data structures' },
        { name: 'Engineering', code: '6037', desc: 'Mechanics, design, and thermodynamics' },
        { name: 'Economics', code: '2281', desc: 'Microeconomics, macroeconomics, and economic systems' },
        { name: 'English Language', code: '1123', desc: 'Reading, writing, and comprehension skills' }
      ],
      faqs: [
        { question: 'What are the benefits of hiring an O Level tutor online?', answer: 'Online O Level tutoring provides personalized attention, flexible scheduling, 1-on-1 doubt clearance, past paper practice, and the convenience of learning from home. Our tutors achieve 95%+ A* pass rates.' },
        { question: 'How much does O Level tutoring cost?', answer: 'Our O Level tutoring starts from affordable rates with flexible packages. We offer trial sessions so you can experience our teaching quality before committing.' },
        { question: 'Can online O Level tutors help with exam preparation?', answer: 'Yes! Our O Level tutors specialize in exam preparation with intensive topical revision, timed practice tests, exam technique training, and strategy sessions.' },
        { question: 'Which subjects can O Level tutors teach?', answer: 'We offer tutoring for all O Level subjects including Mathematics, Physics, Chemistry, Biology, Computer Science, Engineering, Economics, English Language, History, and Geography.' },
        { question: 'How do I find the best O Level tutor for my needs?', answer: 'Browse our teacher directory, check tutor qualifications, read student reviews, and book a free trial session to find the perfect match for your learning style.' }
      ],
      serviceArea: ['Pakistan', 'United Kingdom', 'UAE', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Canada', 'Australia', 'Malaysia', 'Singapore']
    },
    'A Level': {
      title: 'A Level Online Tutors | Expert A Level Tutoring | XPM Tutors',
      description: 'Expert online A Level tutors for Science, Maths & Humanities. Achieve A* grades and secure university admission. Book a free trial session now!',
      keywords: 'A Level tutors, online A Level tutors, A Level Physics tutor, A Level Maths tutor, A Level Chemistry, A Level Biology, A Level preparation, Cambridge A Level',
      longText: 'A Level Physics, Mathematics, and Chemistry are crucial for university admission to top programs. XPM Tutors breaks down complex topics like Quantum Physics, Advanced Integration, Organic Chemistry, and Genetics into manageable segments. Our expert mentors are top A* achievers who have successfully navigated Cambridge and Edexcel boards.',
      subjects: [
        { name: 'Physics', code: '9702', desc: 'Mechanics, thermodynamics, waves, optics, atoms, and nuclear physics' },
        { name: 'Mathematics', code: '9709', desc: 'Pure mathematics, mechanics, and statistics' },
        { name: 'Chemistry', code: '9701', desc: 'Physical chemistry, organic chemistry, and inorganic chemistry' },
        { name: 'Biology', code: '9700', desc: 'Cell biology, genetics, ecology, and physiology' },
        { name: 'Further Mathematics', code: '9231', desc: 'Complex analysis, differential equations, and advanced mechanics' },
        { name: 'Computer Science', code: '9618', desc: 'Data structures, algorithms, networking, and databases' },
        { name: 'Economics', code: '9708', desc: 'Microeconomics, macroeconomics, and international trade' },
        { name: 'English Literature', code: '9695', desc: 'Poetry, drama, prose analysis, and literary criticism' }
      ],
      faqs: [
        { question: 'What makes a good A Level tutor?', answer: 'Good A Level tutors combine deep subject knowledge with strong teaching skills. They provide personalized attention, exam technique training, and help students achieve A* grades for university admission.' },
        { question: 'How can A Level tutors help with university entrance?', answer: 'Our A Level tutors focus on achieving A* grades in subjects like Physics, Chemistry, Mathematics, and Biology, which are crucial for competitive university programs in Medicine, Engineering, and Natural Sciences.' },
        { question: 'Can A Level tutors help with university applications?', answer: 'Yes! Our tutors help with personal statements, interview preparation, and subject-specific guidance to strengthen your university application to top institutions like Cambridge and Oxford.' },
        { question: 'How long does A Level tutoring typically take?', answer: 'A Level typically spans 2 years. We recommend starting tutoring in Year 12 for better preparation. Some students start in Year 13 for intensive final revision.' }
      ],
      serviceArea: ['Pakistan', 'United Kingdom', 'UAE', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Canada', 'Australia', 'Malaysia', 'Singapore', 'Hong Kong', 'Kenya']
    },
    'SAT': {
      title: 'Digital SAT Online Prep | SAT Tutors | XPM Tutors',
      description: 'One-to-one online Digital SAT tutoring for Math and Reading & Writing, with timed practice built around the adaptive two-module format.',
      keywords: 'SAT tutors, Online SAT tutor, SAT Math prep, SAT English, Digital SAT, College Board preparation',
      longText: 'The Digital SAT is adaptive: each section is split into two modules, and how you perform in the first module decides whether the second is harder or easier. That changes how you should prepare. Our SAT tutors build accuracy on the first module of each section, train pacing for the 32-minute Reading and Writing modules and 35-minute Math modules, and work through the question types where you lose the most points. Sessions are one-to-one and online, so the plan is built around your diagnostic results and your test date.',
      subjects: [
        { name: 'Reading and Writing', desc: '54 questions over two 32-minute modules: comprehension, vocabulary in context, grammar and the expression of ideas' },
        { name: 'Math', desc: '44 questions over two 35-minute modules: algebra, advanced math, problem solving and data analysis, geometry and trigonometry' },
        { name: 'Timed Practice', desc: 'Full-length practice under real timing, including the 10-minute break between sections' },
        { name: 'Score Review', desc: 'Section-by-section review of practice results so each session targets your weakest question types' }
      ],
      faqs: [
        { question: 'What is the Digital SAT?', answer: 'The Digital SAT is the College Board\'s computer-based SAT. It has two sections, Reading and Writing and Math, taking 2 hours 14 minutes of testing time in total with a 10-minute break between sections.' },
        { question: 'How is the Digital SAT adaptive?', answer: 'Each section has two modules of equal length. The first module has a mix of easy, medium and hard questions, and your performance on it determines whether the second module is more or less difficult.' },
        { question: 'How is the Digital SAT scored?', answer: 'The total score ranges from 400 to 1600. Reading and Writing and Math are each scored from 200 to 800.' },
        { question: 'Can I take SAT tutoring online from Pakistan or the UAE?', answer: 'Yes. All XPM SAT sessions are online and one-to-one, scheduled in your time zone. You can book a free trial session first.' }
      ],
      serviceArea: ['United States', 'Pakistan', 'UAE', 'Canada']
    },
    'IGCSE': {
      title: 'Online IGCSE Tutors | Maths, Physics, Chemistry | XPM Tutors',
      description: 'One-to-one online IGCSE tutoring for Maths, the sciences, Computer Science, Economics and English, with past paper practice and exam technique.',
      keywords: 'IGCSE tutors, online IGCSE tutor, IGCSE Maths tutor, IGCSE Physics tutor, IGCSE Chemistry tutor, Cambridge IGCSE',
      longText: 'IGCSE students are marked as much on exam technique as on knowledge: knowing what a command word asks for, showing method in multi-step calculations and writing structured answers in the sciences. Our IGCSE tutors teach the syllabus topic by topic, then move to topical past paper questions and full timed papers as the exam approaches. Lessons are one-to-one and online, so each student gets a plan built around their own weak topics, whether they sit the Core or Extended papers.',
      subjects: [
        { name: 'Mathematics', desc: 'Number, algebra, geometry, trigonometry, statistics and probability, for Core and Extended papers' },
        { name: 'Additional Mathematics', desc: 'Functions, calculus, trigonometry and series for students taking Maths beyond the standard syllabus' },
        { name: 'Physics', desc: 'Motion and forces, thermal physics, waves, electricity and magnetism, nuclear and space physics' },
        { name: 'Chemistry', desc: 'Atomic structure, bonding, stoichiometry, reactions, the periodic table and organic chemistry' },
        { name: 'Biology', desc: 'Cells, biological molecules, human and plant physiology, inheritance and ecology' },
        { name: 'Computer Science', desc: 'Data representation, hardware, networks, algorithms and programming' },
        { name: 'Economics and Business', desc: 'Markets, government and the economy, business activity, marketing and finance' },
        { name: 'English', desc: 'Reading, directed and composition writing for First and Second Language papers' }
      ],
      faqs: [
        { question: 'Is IGCSE the same as O Level?', answer: 'Both are Cambridge International qualifications taken at the same stage, around age 16. Cambridge IGCSE is offered worldwide, while Cambridge O Level is offered in a smaller number of countries, including Pakistan. Our tutors teach both.' },
        { question: 'Do you tutor both Core and Extended IGCSE papers?', answer: 'Yes. We teach whichever tier you are entered for, and help you decide between Core and Extended if your school has not yet entered you.' },
        { question: 'How do IGCSE lessons work?', answer: 'Lessons are one-to-one and online. Your tutor teaches each topic, sets topical past paper questions, and moves to full timed papers before the exam.' },
        { question: 'Can I book a trial lesson?', answer: 'Yes. You can book a free trial session with an IGCSE tutor before committing to regular lessons.' }
      ],
      serviceArea: ['Pakistan', 'United Kingdom', 'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Malaysia', 'Singapore']
    },
    'NET Entry Test': {
      title: 'NUST NET Entry Test Preparation Online | XPM Tutors',
      description: 'One-to-one online preparation for the NUST NET entry test: Mathematics, Physics, Chemistry and English, with timed MCQ practice and mock tests.',
      keywords: 'NUST NET preparation, NET entry test tutor, NUST entry test online preparation, NET Mathematics, NET Physics',
      longText: 'NET is NUST\'s entry test for undergraduate admission, and it rewards speed as well as knowledge: you have to answer multiple-choice questions accurately under time pressure. Our tutors revise the FSc and A Level concepts NET draws on, then shift to timed MCQ practice and full mock tests so you build the pace you need on test day. Sessions are one-to-one and online, so the plan is built around your target programme and the subjects where you are losing the most marks.',
      subjects: [
        { name: 'Mathematics', desc: 'Algebra, functions, trigonometry, calculus, vectors and coordinate geometry, practised as timed MCQs' },
        { name: 'Physics', desc: 'Mechanics, waves, electricity, magnetism and modern physics concepts at FSc and A Level depth' },
        { name: 'Chemistry', desc: 'Physical, inorganic and organic chemistry, focusing on the concepts most often tested in MCQ form' },
        { name: 'English', desc: 'Vocabulary, grammar and reading comprehension practice' },
        { name: 'Mock Tests', desc: 'Full-length timed mocks with a review of every mistake after each attempt' }
      ],
      faqs: [
        { question: 'What is NET?', answer: 'NET is the entry test that NUST (National University of Sciences and Technology) uses for undergraduate admission. The subjects tested depend on the programme you apply for.' },
        { question: 'Which subjects do you prepare students for?', answer: 'We prepare students in Mathematics, Physics, Chemistry and English, with timed MCQ practice and full mock tests. Always check the current test pattern for your programme on the official NUST admissions website.' },
        { question: 'Can A Level students prepare for NET with you?', answer: 'Yes. Our tutors teach both FSc and A Level students and map NET topics onto the syllabus you have studied.' },
        { question: 'Can I book a trial session?', answer: 'Yes. You can book a free trial session before committing to a full preparation plan.' }
      ],
      serviceArea: ['Pakistan', 'UAE', 'Saudi Arabia', 'Qatar', 'United Kingdom']
    },
    'PMA Long Course': {
      title: 'PMA Long Course Test Preparation Online | XPM Tutors',
      description: 'One-to-one online preparation for the PMA Long Course written test: English, Mathematics, general knowledge and reasoning practice with mock tests.',
      keywords: 'PMA long course preparation, PMA initial test preparation, PMA written test tutor, Pak Army test preparation online',
      longText: 'Getting into the PMA Long Course starts with passing the written test, and many capable candidates lose marks simply because they have not practised under exam conditions. Our tutors strengthen the academic basics, English, Mathematics and general knowledge, and build speed on verbal and non-verbal reasoning questions through regular timed practice. Sessions are one-to-one and online, so preparation fits around your studies or work.',
      subjects: [
        { name: 'English', desc: 'Grammar, vocabulary, sentence correction and comprehension' },
        { name: 'Mathematics', desc: 'Arithmetic, algebra and basic geometry practised for speed and accuracy' },
        { name: 'General Knowledge', desc: 'Pakistan studies, current affairs and Islamic studies revision' },
        { name: 'Reasoning Practice', desc: 'Verbal and non-verbal reasoning questions under timed conditions' },
        { name: 'Mock Tests', desc: 'Timed practice papers with a review of every mistake' }
      ],
      faqs: [
        { question: 'What does PMA test preparation cover?', answer: 'We prepare candidates for the written test with English, Mathematics, general knowledge and timed verbal and non-verbal reasoning practice, followed by full mock tests.' },
        { question: 'Where can I check PMA eligibility and dates?', answer: 'Eligibility rules, age limits and registration dates are published by the Pakistan Army on its official recruitment website, joinpakarmy.gov.pk. Always confirm the current requirements there before registering.' },
        { question: 'Are sessions online?', answer: 'Yes. All sessions are one-to-one and online, scheduled around your studies or work.' },
        { question: 'Can I book a trial session?', answer: 'Yes. You can book a free trial session before committing to a full preparation plan.' }
      ],
      serviceArea: ['Pakistan']
    }
  };

  const data = contentMap[exam] || {
    title: `${exam} Online Preparation`,
    description: `Expert coaching and resources for ${exam} aspirants globally.`,
    keywords: [`${exam} Tutor`, `Online ${exam} Coaching`],
    longText: `Prepare for ${exam} with the best minds in the industry. Our platform offers structured syllabi, expert doubt clearance, and 24/7 WhatsApp support.`,
    faqs: []
  };

  const { pathname } = useLocation();
  const pageSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `${exam} Tutors | XPM Tutors`,
      "description": data.description,
      "url": canonicalUrl(pathname),
      "image": "https://www.xpmtutors.com/xpm-logo.svg",
      "priceRange": "$$",
      "areaServed": data.serviceArea || ["Pakistan", "United Kingdom", "UAE"],
      "serviceType": `${exam} Tutoring`,
      "availableLanguage": ["en", "ur"],
      "sameAs": [
        "https://facebook.com/xpmtutors",
        "https://instagram.com/xpmtutors",
        "https://twitter.com/xpmtutors"
      ]
    };

  return (
    <div className="bg-white min-h-screen">
      <JsonLd data={pageSchema} />
      {(data.faqs || []).length > 0 && <JsonLd data={generateFAQSchema((data.faqs || []))} />}
      
      <section className="bg-xpm-blue py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter uppercase">{data.title.split('|')[0].trim()}</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium">{data.description}</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/hire-teacher" className="inline-block px-8 py-4 bg-xpm-orange text-white font-black rounded-lg hover:bg-orange-600 transition uppercase tracking-widest text-sm">
              Book Free Trial
            </Link>
            <Link to="/teacher-directory" className="inline-block px-8 py-4 bg-white/20 text-white font-black rounded-lg hover:bg-white/30 transition uppercase tracking-widest text-sm border border-white/30">
              Browse Tutors
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Why Choose Our {exam} Tutors?</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              {data.longText}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h4 className="font-black text-slate-900">Expert Qualifications</h4>
                  <p className="text-sm text-slate-600">University-qualified tutors with years of experience</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-black text-slate-900">Proven Track Record</h4>
                  <p className="text-sm text-slate-600">95%+ A* pass rate in {exam} exams</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <h4 className="font-black text-slate-900">Flexible Scheduling</h4>
                  <p className="text-sm text-slate-600">Book sessions that fit your schedule</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {data.subjects && data.subjects.length > 0 && data.subjects.map((subject, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-xpm-blue/50 transition">
                <h4 className="text-lg font-black text-xpm-blue mb-2 uppercase">{subject.name}</h4>
                {subject.code && <p className="text-sm text-xpm-green font-bold mb-3">Code: {subject.code}</p>}
                <p className="text-slate-600 text-sm leading-relaxed">{subject.desc}</p>
              </div>
            ))}
            {(!data.subjects || data.subjects.length === 0) && (
              <>
                <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                  <h4 className="text-lg font-black text-xpm-blue mb-2">Physics</h4>
                  <p className="text-slate-600 text-sm">Expert coaching in physics concepts</p>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                  <h4 className="text-lg font-black text-xpm-blue mb-2">Mathematics</h4>
                  <p className="text-slate-600 text-sm">Advanced problem-solving techniques</p>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                  <h4 className="text-lg font-black text-xpm-blue mb-2">Chemistry</h4>
                  <p className="text-slate-600 text-sm">Comprehensive chemistry guidance</p>
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
             <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <h3 className="text-xl font-black mb-4 uppercase">Key Services</h3>
                <ul className="space-y-3">
                   {['1-on-1 Live Sessions', 'Past Paper Practice', 'Recorded Lessons', '24/7 WhatsApp Support'].map(s => (
                     <li key={s} className="flex items-center gap-2 text-slate-600 font-bold">
                        <span className="text-xpm-orange">✦</span> {s}
                     </li>
                   ))}
                </ul>
             </div>
          </div>

          {/* Service Area */}
          {data.serviceArea && (
            <div className="bg-xpm-blue/5 p-8 rounded-2xl border border-xpm-blue/10 mb-12">
              <h3 className="text-xl font-black mb-4 text-slate-900 uppercase">Available in These Regions</h3>
              <div className="flex flex-wrap gap-3">
                {data.serviceArea.map(location => (
                  <span key={location} className="px-4 py-2 bg-xpm-blue text-white rounded-lg text-sm font-bold">
                    {location}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {data.faqs && data.faqs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {data.faqs.map((faq, idx) => (
                  <details key={idx} className="group border border-slate-200 rounded-xl overflow-hidden transition hover:border-xpm-blue/30">
                    <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-black text-slate-900 bg-slate-50 hover:bg-slate-100 transition">
                      {faq.question}
                      <span className="transform group-open:rotate-180 transition">▼</span>
                    </summary>
                    <div className="px-6 py-4 text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
            <Link to="/hire-teacher" className="inline-block px-12 py-5 bg-xpm-orange text-white font-black rounded-2xl shadow-xl hover:bg-orange-600 transition uppercase tracking-widest text-sm">
               Hire a Specialist for {exam}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Geo-Specific Targeting Footer */}
      <section className="bg-slate-900 py-12 text-white/40 text-[10px] font-black uppercase tracking-[0.3em] text-center">
        <div className="max-w-7xl mx-auto px-4">
          Online {exam} Tutors in United Kingdom • Online {exam} Tutors in UAE • Online {exam} Tutors in Pakistan • Online {exam} Tutors in Saudi Arabia
        </div>
      </section>
    </div>
  );
};

export default ExamLandingPage;
