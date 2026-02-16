import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updatePageMeta } from '../seoHelper.ts';
import Breadcrumb from '../components/Breadcrumb.tsx';

const OLevelIslamabadPage: React.FC = () => {
  const seoMetadata = {
    title: 'O Level Tutors in Islamabad | Expert Online Tutoring | XPM Tutors',
    description: 'Find top-rated O Level tutors in Islamabad. Expert tutoring for Cambridge & Edexcel O Levels. Physics, Maths, Chemistry, and all subjects. Free trial session available!',
    keywords: 'O Level tutors Islamabad, O Level tuition Islamabad, Physics tutor Islamabad, Maths tutor Islamabad, Chemistry tutor Islamabad, Cambridge O Level Islamabad',
    canonical: 'https://www.xpmtutors.com/o-level-tutors-islamabad'
  };

  const content = {
    subjects: [
      { name: 'Mathematics', code: '4024', description: 'Syllabus D with focus on algebra, geometry, and calculus' },
      { name: 'Physics', code: '5054', description: 'Cambridge O Level Physics with practical experiments' },
      { name: 'Chemistry', code: '5070', description: 'Comprehensive chemistry concepts and reactions' },
      { name: 'Biology', code: '5090', description: 'Cell biology, genetics, and ecosystems' },
      { name: 'English Language', code: '1123', description: 'Writing and comprehension skills' },
      { name: 'Computer Science', code: '2210', description: 'Programming and computational thinking' }
    ],
    benefits: [
      'Expert tutors in Islamabad with years of teaching experience',
      'Flexible online sessions for busy students',
      'Personalized study plans tailored to your needs',
      '95%+ A* pass rate for our students',
      'Access to comprehensive past papers and resources',
      '24/7 WhatsApp support for doubt clearance',
      'Trial session completely free'
    ],
    faqs: [
      {
        question: 'Are your O Level tutors available in Islamabad?',
        answer: 'Yes! Our expert O Level tutors are based in Islamabad and available for online sessions. Many are from top Islamabad schools and universities. We also have tutors worldwide for Pakistani students.'
      },
      {
        question: 'What is the fee for O Level tutoring in Islamabad?',
        answer: 'Our fees are affordable and competitive. We offer flexible packages starting from reasonable rates with discounts for bulk sessions. Book a free trial first to see if the tutor is the right fit.'
      },
      {
        question: 'Do O Level tutors in Islamabad provide exam coaching?',
        answer: 'Absolutely! Our Islamabad-based tutors specialize in intensive exam preparation with timed practice tests, revision strategies, and exam technique training.'
      },
      {
        question: 'How do I find an O Level tutor in Islamabad?',
        answer: 'Visit our teacher directory, filter for Islamabad tutors, check their qualifications and student reviews, and book a free trial session to find the perfect match.'
      },
      {
        question: 'Can tutors help with specific O Level boards?',
        answer: 'Yes! Our tutors are experienced with Cambridge (CIE), Edexcel (Pearson), and other board specifications. They provide board-specific coaching.'
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
        "name": "O Level Tutors in Islamabad | XPM Tutors",
        "description": seoMetadata.description,
        "url": "https://www.xpmtutors.com/o-level-tutors-islamabad",
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
        "serviceType": "O Level Tutoring",
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
            O Level Tutors in Islamabad
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-medium mb-8">
            Expert online tutoring for Cambridge & Edexcel O Levels. Top tutors in Islamabad helping students achieve A* grades in Physics, Maths, Chemistry, and more.
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
            Why Choose Our Islamabad-Based O Level Tutors?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Expert Tutors',
                desc: 'Qualified tutors from top Islamabad institutions with proven track record'
              },
              {
                icon: '📊',
                title: '95%+ A* Rate',
                desc: 'Our students consistently achieve top grades in O Level exams'
              },
              {
                icon: '⏱️',
                title: 'Flexible Hours',
                desc: 'Schedule sessions that work with your timing in Islamabad'
              },
              {
                icon: '💻',
                title: 'Online Learning',
                desc: 'Study from home with access to quality tutory resources'
              },
              {
                icon: '📚',
                title: 'Past Papers',
                desc: 'Comprehensive past paper collection with solutions'
              },
              {
                icon: '🆘',
                title: '24/7 Support',
                desc: 'WhatsApp support for quick doubt clearance anytime'
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
            O Level Subjects We Teach
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
            What You Get With Our O Level Tutoring
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
            Ready to Ace Your O Levels?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of students in Islamabad who have improved their grades with expert tutoring. Book your free trial session today!
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
          O Level Tutors in Islamabad • O Level Tutors in Pakistan • Online O Level Tutoring • Expert Exam Preparation
        </div>
      </section>
    </div>
  );
};

export default OLevelIslamabadPage;
