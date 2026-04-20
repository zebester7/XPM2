import React, { useState } from 'react';
import SchemaMarkup from '../components/SchemaMarkup.tsx';

const MishalRazzaqPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is the relationship between Islam and mental health?",
      answer: "Islam is not a clinical psychology system, but it's a comprehensive worldview and lifestyle that addresses the human condition—including suffering, resilience, meaning, and wellbeing. Through spiritual practice (prayer, remembrance, reflection), meaning and purpose, community, ethical framework, hope, and practical tools like tawakkul (trust) and sabr (patience), Islam supports mental and emotional health. It complements—not replaces—professional mental health care."
    },
    {
      question: "Can Islam help with anxiety and depression?",
      answer: "Yes. For anxiety: tawakkul (trust in Allah) interrupts the worry loop, dhikr (remembrance) calms the nervous system, and prayer activates your body's natural calming response. For depression: understanding your purpose, knowing you're not alone, the possibility of renewal through taubah, and Islamic hope grounded in theology all combat depression. Professional help is crucial for clinical conditions—Islam works alongside professional care."
    },
    {
      question: "What does Islamic philosophy say about emotional suffering?",
      answer: "Islamic philosophy frames difficulty as a test and refiner of character. It teaches that suffering is part of being human, serves a purpose (building strength and compassion), accompanies Allah's mercy, can deepen relationship with Allah, and is temporary—not meaningless or abandoned."
    },
    {
      question: "How can faith and neuroscience be discussed together?",
      answer: "They complement each other. Science describes mechanisms (how prayer affects the brain), while faith addresses meaning (why should I pray?). Modern neuroscience validates Islamic practices: prayer reduces anxiety, dhikr is meditation, community increases health, gratitude improves mood. They answer different questions, not contradictory ones."
    },
    {
      question: "Is this a replacement for therapy or psychiatric medication?",
      answer: "No. Islamic practice complements professional care; it doesn't replace it. For clinical depression, anxiety disorders, trauma, or suicidality, professional help is essential. The integration model works best: medication (neuroscience), therapy (coping and thinking), Islamic practice (meaning and community) together."
    },
    {
      question: "Who can benefit from this teaching?",
      answer: "Muslims benefit from deepening their tradition; non-Muslims benefit from learning universal wisdom about suffering, resilience, and meaning. This teaching serves students, parents, professionals, researchers, and anyone seeking to understand faith and mental health."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Schema Markup */}
      <SchemaMarkup 
        pageTitle="Prof. Mishal Razzaq | Islam & Mental Wellness Education"
        pageDescription="Discover how Islam addresses depression, anxiety, and emotional pain through neuroscience-informed teaching by Prof. Mishal Razzaq."
        canonical="https://xpmtutors.com/mishal-razzaq"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-xpm-blue via-blue-600 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <p className="text-sm font-bold uppercase tracking-widest text-xpm-green">Islamic Psychology & Mental Wellness</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Where Faith Meets Science
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Understanding the Mind, Healing Emotional Pain, Finding Purpose
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-10">
              Integrating neuroscience, Islamic philosophy, and psychology to help you navigate depression, anxiety, trauma, and spiritual emptiness with wisdom, compassion, and clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#about"
                className="px-8 py-4 bg-xpm-orange text-white font-bold rounded-lg hover:bg-orange-600 transition shadow-lg"
              >
                Explore Islamic Psychology
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 bg-white/10 border-2 border-white text-white font-bold rounded-lg hover:bg-white/20 transition"
              >
                Connect with Prof. Mishal Razzaq
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Prof. Section */}
      <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-xpm-blue mb-6">
                About Prof. Mishal Razzaq
              </h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Prof. Mishal Razzaq is a specialized educator and thoughtful guide in the intersection of Islamic psychology, philosophy, and neuroscience-informed mental wellness.
              </p>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                With a deep commitment to bridging faith and reason, Prof. Mishal Razzaq brings together rigorous intellectual inquiry, compassionate human understanding, and scholarly engagement with Islamic teachings to address the emotional, psychological, and spiritual struggles that affect people globally.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Her work focuses on education rather than clinical treatment—helping students, seekers, parents, researchers, and people of faith understand how Islamic teachings illuminate the human experience of suffering, resilience, meaning, and healing.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-xpm-blue mb-6">Teaching Focus Areas</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-xpm-green font-bold text-xl">✓</span>
                  <span className="text-slate-700"><strong>Islamic Psychology:</strong> Faith and emotional wellbeing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xpm-green font-bold text-xl">✓</span>
                  <span className="text-slate-700"><strong>Neuroscience of Faith:</strong> How prayer and practice affect the brain</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xpm-green font-bold text-xl">✓</span>
                  <span className="text-slate-700"><strong>Islamic Philosophy:</strong> Purpose, meaning, and existence</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xpm-green font-bold text-xl">✓</span>
                  <span className="text-slate-700"><strong>Faith-Based Healing:</strong> Trauma recovery and resilience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Topics */}
      <section className="py-16 md:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-xpm-blue mb-12 text-center">
            Understanding the Mind, Heart, and Spirit
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Neuroscience & Mind",
                description: "How your brain works, stress responses, and the science behind Islamic practices like prayer and dhikr",
                icon: "🧠"
              },
              {
                title: "Depression & Hope",
                description: "Understanding depression through both neuroscience and faith, with practical tools for healing",
                icon: "🌟"
              },
              {
                title: "Anxiety & Trust",
                description: "How tawakkul (trust) and Islamic practices interrupt anxiety cycles and restore peace",
                icon: "🤝"
              },
              {
                title: "Trauma & Healing",
                description: "Faith-based approaches to healing from trauma through forgiveness, renewal, and community",
                icon: "💚"
              },
              {
                title: "Purpose & Meaning",
                description: "Finding identity and direction through Islamic philosophy and values",
                icon: "🎯"
              },
              {
                title: "Community & Belonging",
                description: "How Islamic community structure combats loneliness and supports wellbeing",
                icon: "👥"
              }
            ].map((topic, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border border-slate-200">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-xpm-blue mb-3">{topic.title}</h3>
                <p className="text-slate-700">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Islam Helps */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-xpm-blue mb-12 text-center">
            The Islamic Framework for Mental Wellbeing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Tawakkul",
                subtitle: "Trust & Release",
                description: "Place your trust in Allah after doing your best. This interrupts anxiety loops and restores peace."
              },
              {
                name: "Sabr",
                subtitle: "Patient Perseverance",
                description: "Active perseverance through difficulty with faith that 'with hardship comes ease.'"
              },
              {
                name: "Salah",
                subtitle: "Prayer as Foundation",
                description: "Five daily practices that regulate the nervous system and create spiritual connection."
              },
              {
                name: "Dhikr",
                subtitle: "Sacred Remembrance",
                description: "Repetitive, meaningful phrases that interrupt rumination and calm the mind."
              },
              {
                name: "Dua",
                subtitle: "Supplication",
                description: "Direct conversation with Allah about your pain, hopes, and struggles."
              },
              {
                name: "Taubah",
                subtitle: "Repentance & Renewal",
                description: "The Islamic path to release guilt, start fresh, and repair your relationship with Allah."
              },
              {
                name: "Shukr",
                subtitle: "Gratitude",
                description: "Recognizing and appreciating blessings—neurologically and spiritually powerful."
              },
              {
                name: "Community",
                subtitle: "Brotherhood & Sisterhood",
                description: "Being part of a global family that cares for each other's wellbeing."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-xl border-l-4 border-xpm-blue">
                <h3 className="text-2xl font-black text-xpm-blue mb-2">{item.name}</h3>
                <p className="text-sm font-bold text-xpm-green mb-3 uppercase tracking-widest">{item.subtitle}</p>
                <p className="text-slate-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-xpm-blue mb-12 text-center">
            Services & Offerings
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <h3 className="text-2xl font-bold text-xpm-blue mb-4">Educational Lectures & Seminars</h3>
              <p className="text-slate-700 mb-4">In-depth presentations on Islamic psychology topics, customized to your audience, ranging from 1-hour introductions to multi-day seminars. Available in-person or virtual.</p>
              <p className="text-sm font-bold text-xpm-green">Ideal for: Universities, conferences, communities, corporate wellness programs</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <h3 className="text-2xl font-bold text-xpm-blue mb-4">Workshops & Facilitated Sessions</h3>
              <p className="text-slate-700 mb-4">Interactive workshops combining teaching, practice, and dialogue. Topics like "Pausing the Panic," "Finding Your Purpose," "Faith and Resilience."</p>
              <p className="text-sm font-bold text-xpm-green">Ideal for: Student groups, professional development, community organizations</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <h3 className="text-2xl font-bold text-xpm-blue mb-4">Mentoring & Guidance Sessions</h3>
              <p className="text-slate-700 mb-4">One-on-one or small-group mentoring for faith-based guidance on emotional and mental wellbeing. Complements professional therapy.</p>
              <p className="text-sm font-bold text-xpm-green">Ideal for: Students, young professionals, parents, individuals on healing journeys</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <h3 className="text-2xl font-bold text-xpm-blue mb-4">Speaking & Collaboration</h3>
              <p className="text-slate-700 mb-4">Speaking engagements at conferences, institutional events, interfaith dialogues, and collaborations with media, publishing, and education platforms.</p>
              <p className="text-sm font-bold text-xpm-green">Ideal for: Academic conferences, mental health events, media partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-xpm-blue mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden hover:border-xpm-blue transition">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 bg-slate-50 hover:bg-slate-100 transition flex items-center justify-between font-bold text-xpm-blue"
                >
                  <span className="text-left">{item.question}</span>
                  <span className="text-2xl">{expandedFaq === idx ? '−' : '+'}</span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-white border-t border-slate-200">
                    <p className="text-slate-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-xpm-blue to-blue-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Connect?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're seeking to learn, attend a workshop, connect for collaboration, or explore mentoring—Prof. Mishal Razzaq welcomes genuine seekers.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 mb-8">
            <p className="text-lg font-bold mb-2">Get in Touch</p>
            <a 
              href="mailto:mishalrazaq665@gmail.com"
              className="text-2xl font-black text-xpm-green hover:text-green-300 transition"
            >
              mishalrazaq665@gmail.com
            </a>
          </div>
          <p className="text-blue-200">
            Include details about your interest: lectures, workshops, mentoring, collaboration, speaking engagements, or any unique needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MishalRazzaqPage;
