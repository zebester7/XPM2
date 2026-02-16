import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updatePageMeta } from '../seoHelper.ts';
import Breadcrumb from '../components/Breadcrumb.tsx';

const ALevelIslamabadPage: React.FC = () => {
  const seoMetadata = {
    title: 'A Level Tutors in Islamabad | Expert Online Tutoring | XPM Tutors',
    description: 'Find top-rated A Level tutors in Islamabad. Expert tutoring for Cambridge A Levels. Physics, Mathematics, Chemistry, and all subjects. Free trial session available!',
    keywords: 'A Level tutors Islamabad, A Level tuition Islamabad, Physics tutor Islamabad, Maths tutor Islamabad, Chemistry tutor Islamabad, Cambridge A Level Islamabad, university entrance prep',
    canonical: 'https://www.xpmtutors.com/a-level-tutors-islamabad'
  };

  const content = {
    subjects: [
      { name: 'Physics', code: '9702', description: 'Mechanics, thermodynamics, waves, optics, atoms, and nuclear physics' },
      { name: 'Mathematics', code: '9709', description: 'Pure mathematics, mechanics, and statistics for top university entrance' },
      { name: 'Chemistry', code: '9701', description: 'Physical, organic, and inorganic chemistry with problem-solving' },
      { name: 'Biology', code: '9700', description: 'Cell biology, genetics, ecology, and human physiology' },
      { name: 'Computer Science', code: '9618', description: 'Programming, algorithms, databases, and networking' },
      { name: 'Further Mathematics', code: '9231', description: 'Advanced algebra, calculus, differential equations, and mechanics' }
    ],
    benefits: [
      'Expert tutors in Islamabad with strong university admission records',
      'Personalized coaching for Cambridge and Edexcel A Levels',
      'Guidance for top university entrance (medical, engineering, law)',
      'A* achievers helping you reach your academic goals',
      'UCAS personal statement and interview preparation',
      'Mock exams and timed practice under exam conditions',
      'Free trial session to assess your learning needs'
    ],
    faqs: [
      {
        question: 'Are your A Level tutors available in Islamabad?',
        answer: 'Yes! Our expert A Level tutors are based in Islamabad and offer online sessions. Many are university graduates with strong A* grades and university admission experience.'
      },
      {
        question: 'How do A Level tutors help with university admission?',
        answer: 'Our tutors focus on achieving A* grades, provide UCAS guidance, help with personal statements, conduct interview practice, and guide you through the entire university application process.'
      },
      {
        question: 'What is the cost of A Level tutoring in Islamabad?',
        answer: 'Our A Level tutoring starts from competitive rates with flexible packages. Book a free trial to discuss your specific needs and get a customized quote.'
      },
      {
        question: 'Can tutors help with specific A Level subjects?',
        answer: 'Absolutely! We provide expert tutoring for Physics, Mathematics, Chemistry, Biology, Computer Science, Economics, English Literature, and other A Level subjects.'
      },
      {
        question: 'How long does A Level preparation typically take?',
        answer: 'A Levels span 2 years. We recommend starting tutoring from Year 12 for comprehensive preparation, though Year 13 intensive revision is also available.'
      }
    ]
  };

  useEffect(() => {
    updatePageMeta({
      title: seoMetadata.title,
      description: seoMetadata.description,
      keywords: seoMetadata.keywords,
      canonical: seoMetadata.canonical,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "A Level Tutors in Islamabad | XPM Tutors",
        "description": seoMetadata.description,
        "url": "https://www.xpmtutors.com/a-level-tutors-islamabad",
        "image": "https://www.xpmtutors.com/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Islamabad",
          "addressRegion": "Islamabad",
          "addressCountry": "PK"
        },
        "areaServed": {
          "@type": "City",
          "name": "Islamabad, Pakistan",
          "sameAs": "https://en.wikipedia.org/wiki/Islamabad"
        },
        "serviceType": "A Level Tutoring",
        "priceRange": "$$",
        "availableLanguage": ["en", "ur"],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "availableLanguage": ["en", "ur"]
        },
        "sameAs": [
          "https://facebook.com/xpmtutors",
          "https://instagram.com/xpmtutors"
        ]
      }
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-xpm-blue to-blue-700 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter uppercase">
            A Level Tutors in Islamabad
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-medium mb-8">
            Expert online A Level tutoring in Islamabad. Top tutors helping students achieve A* grades and secure admission to prestigious universities worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/hire-teacher"
              className="inline-block px-8 py-4 bg-xpm-orange text-white font-black rounded-lg hover:bg-orange-600 transition uppercase tracking-widest text-sm"
            >
              Book Free Trial
            </Link>
            <Link
              to="/teacher-directory"
              className="inline-block px-8 py-4 bg-white/20 text-white font-black rounded-lg hover:bg-white/30 transition uppercase tracking-widest text-sm border border-white/30"
            >
              Browse Tutors
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter text-center">
            Why Choose Our Islamabad-Based A Level Tutors?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'University-Track Record',
                desc: 'Tutors with proven success in getting students into top universities'
              },
              {
                icon: '⭐',
                title: 'A* Achievers',
                desc: 'Expert tutors who themselves achieved A* grades in A Levels'
              },
              {
                icon: '📚',
                title: 'Comprehensive Coaching',
                desc: 'Beyond academics - UCAS application and interview preparation'
              },
              {
                icon: '💻',
                title: 'Online Flexibility',
                desc: 'Study from home with sessions tailored to your schedule'
              },
              {
                icon: '🔬',
                title: 'All Subjects Covered',
                desc: 'Expert tutors for Physics, Maths, Chemistry, Biology, and more'
              },
              {
                icon: '🆘',
                title: '24/7 Support',
                desc: 'WhatsApp support for quick doubt clearance and guidance'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-black mb-3 uppercase">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter text-center">
            A Level Subjects We Teach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.subjects.map((subject, idx) => (
              <div key={idx} className="p-8 border border-slate-200 rounded-2xl hover:border-xpm-blue/50 transition">
                <h3 className="text-2xl font-black text-xpm-blue mb-2 uppercase">{subject.name}</h3>
                <p className="text-sm text-xpm-green font-bold mb-3">Code: {subject.code}</p>
                <p className="text-slate-600 leading-relaxed">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter text-center">
            What You Get With Our A Level Tutoring
          </h2>
          <div className="space-y-4">
            {content.benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start p-6 bg-white rounded-xl border border-slate-200">
                <span className="text-2xl text-xpm-green font-black min-w-fit">✓</span>
                <p className="text-slate-700 font-medium leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-xl overflow-hidden transition hover:border-xpm-blue/30"
              >
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-xpm-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">
            Ready to Ace Your A Levels?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of Islamabad students who have improved their grades and secured university admission with our expert tutoring. Book your free trial session today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/hire-teacher"
              className="inline-block px-10 py-5 bg-xpm-orange text-white font-black rounded-lg hover:bg-orange-600 transition uppercase tracking-widest text-sm shadow-xl"
            >
              Book Free Trial Now
            </Link>
            <Link
              to="/"
              className="inline-block px-10 py-5 bg-white/20 text-white font-black rounded-lg hover:bg-white/30 transition uppercase tracking-widest text-sm border border-white/30"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Geo Footer */}
      <section className="bg-slate-900 py-12 text-white/40 text-[10px] font-black uppercase tracking-[0.3em] text-center">
        <div className="max-w-7xl mx-auto px-4">
          A Level Tutors in Islamabad • A Level Tutors in Pakistan • Online A Level Tutoring • University Entrance Preparation
        </div>
      </section>
    </div>
  );
};

export default ALevelIslamabadPage;
