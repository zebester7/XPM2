import React, { useState } from 'react';
import SchemaMarkup from '../components/SchemaMarkup.tsx';
import HealingMindSidebar from '../components/HealingMindSidebar.tsx';

// Custom Tailwind color configuration would include:
// emerald-900: #0F5C4D (Deep Emerald)
// navy-900: #12324A (Navy)
// ivory-50: #F8F5EE (Warm Ivory)
// gold-400: #C7A96B (Soft Gold)
// charcoal-800: #1F2933 (Charcoal)

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
    <div className="min-h-screen" style={{ backgroundColor: '#F8F5EE' }}>
      {/* Include Scrolling Sidebar */}
      <HealingMindSidebar />
      
      {/* Schema Markup */}
      <SchemaMarkup 
        pageTitle="The Healing Mind: Islam, Philosophy & Neuroscience"
        pageDescription="Discover how Islam addresses depression, anxiety, and emotional pain through neuroscience-informed teaching by Prof. Mishal Razzaq."
        canonical="https://xpmtutors.com/mishal-razzaq"
      />

      {/* Hero Section */}
      <section data-section="top" className="py-20 md:py-32 md:mr-20 text-white" style={{ background: 'linear-gradient(135deg, #0F5C4D 0%, #0A4A3E 50%, #12324A 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-2 rounded-full mb-6 border-2" style={{ borderColor: '#C7A96B', backgroundColor: 'rgba(199, 169, 107, 0.1)' }}>
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: '#C7A96B' }}>Scholarly Islamic Wellness</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              The Healing Mind
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#C7A96B' }}>Islam, Philosophy & Neuroscience</p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl leading-relaxed opacity-90">
              Where ancient wisdom meets modern science to address depression, anxiety, trauma, and existential emptiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#topics"
                className="inline-block px-8 py-4 font-bold rounded-lg hover:opacity-90 transition shadow-xl text-navy-900"
                style={{ backgroundColor: '#C7A96B' }}
              >
                Explore the Framework
              </a>
              <a 
                href="#contact"
                className="inline-block px-8 py-4 font-bold rounded-lg hover:opacity-90 transition border-2"
                style={{ borderColor: '#C7A96B', color: '#F8F5EE', backgroundColor: 'rgba(15, 92, 77, 0.5)' }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Prof. Section */}
      <section data-section="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 md:mr-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#12324A' }}>
                About Prof. Mishal Razzaq
              </h2>
              <p className="text-lg mb-4 leading-relaxed" style={{ color: '#1F2933' }}>
                Prof. Mishal Razzaq is a specialized educator and thoughtful guide in the intersection of Islamic psychology, philosophy, and neuroscience-informed mental wellness.
              </p>
              <p className="text-lg mb-4 leading-relaxed" style={{ color: '#1F2933' }}>
                With a deep commitment to bridging faith and reason, she brings together rigorous intellectual inquiry, compassionate human understanding, and scholarly engagement with Islamic teachings to address the emotional, psychological, and spiritual struggles that affect people globally.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#1F2933' }}>
                Her work focuses on education rather than clinical treatment—helping students, seekers, parents, researchers, and people of faith understand how Islamic teachings illuminate suffering, resilience, meaning, and healing.
              </p>
            </div>
            <div className="p-10 rounded-2xl shadow-xl border-2" style={{ backgroundColor: 'rgba(15, 92, 77, 0.08)', borderColor: '#0F5C4D' }}>
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#0F5C4D' }}>Core Expertise</h3>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <span className="text-2xl font-bold" style={{ color: '#0F5C4D' }}>✦</span>
                  <span style={{ color: '#1F2933' }}><strong>Islamic Psychology:</strong> Faith and emotional wellbeing integration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl font-bold" style={{ color: '#0F5C4D' }}>✦</span>
                  <span style={{ color: '#1F2933' }}><strong>Neuroscience of Faith:</strong> Brain science validating spiritual practice</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl font-bold" style={{ color: '#0F5C4D' }}>✦</span>
                  <span style={{ color: '#1F2933' }}><strong>Islamic Philosophy:</strong> Purpose, meaning, consciousness</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl font-bold" style={{ color: '#0F5C4D' }}>✦</span>
                  <span style={{ color: '#1F2933' }}><strong>Faith-Based Healing:</strong> Trauma recovery and resilience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Topics */}
      <section data-section="topics" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 md:mr-20" style={{ backgroundColor: 'rgba(248, 245, 238, 0.7)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center" style={{ color: '#12324A' }}>
            Understanding the Mind
          </h2>
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto" style={{ color: '#1F2933' }}>Heart, and Spirit: A Scholarly Exploration</p>
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
              <div key={idx} className="p-8 rounded-xl shadow-md hover:shadow-lg transition border-2 bg-white hover:border-" style={{ borderColor: '#0F5C4D' }}>
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0F5C4D' }}>{topic.title}</h3>
                <p style={{ color: '#1F2933' }}>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Islam Helps */}
      <section data-section="framework" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 md:mr-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center" style={{ color: '#12324A' }}>
            The Islamic Framework
          </h2>
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto" style={{ color: '#1F2933' }}>for Mental and Emotional Wellbeing</p>
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
              <div key={idx} className="p-8 rounded-xl shadow-md hover:shadow-lg transition border-l-4 bg-white" style={{ borderColor: '#C7A96B', backgroundColor: 'rgba(15, 92, 77, 0.04)' }}>
                <h3 className="text-2xl font-black mb-2" style={{ color: '#0F5C4D' }}>{item.name}</h3>
                <p className="text-sm font-bold mb-3 uppercase tracking-widest" style={{ color: '#C7A96B' }}>{item.subtitle}</p>
                <p style={{ color: '#1F2933' }} className="leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section data-section="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 md:mr-20" style={{ backgroundColor: 'rgba(248, 245, 238, 0.7)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center" style={{ color: '#12324A' }}>
            Services & Engagement
          </h2>
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto" style={{ color: '#1F2933' }}>How to Connect and Learn</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl shadow-md border-2 hover:border-" style={{ borderColor: '#0F5C4D' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F5C4D' }}>Educational Lectures & Seminars</h3>
              <p className="mb-4" style={{ color: '#1F2933' }}>In-depth presentations on Islamic psychology topics, customized to your audience, ranging from 1-hour introductions to multi-day seminars. Available in-person or virtual.</p>
              <p className="text-sm font-bold" style={{ color: '#C7A96B' }}>For: Universities, conferences, communities, corporate wellness</p>
            </div>
            <div className="p-8 rounded-xl shadow-md border-2 hover:border-" style={{ borderColor: '#0F5C4D' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F5C4D' }}>Workshops & Facilitated Sessions</h3>
              <p className="mb-4" style={{ color: '#1F2933' }}>Interactive workshops combining teaching, practice, and dialogue. Topics like "Pausing the Panic," "Finding Your Purpose," "Faith and Resilience."</p>
              <p className="text-sm font-bold" style={{ color: '#C7A96B' }}>For: Student groups, professional development, communities</p>
            </div>
            <div className="p-8 rounded-xl shadow-md border-2 hover:border-" style={{ borderColor: '#0F5C4D' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F5C4D' }}>Mentoring & Guidance</h3>
              <p className="mb-4" style={{ color: '#1F2933' }}>One-on-one or small-group mentoring for faith-based guidance on emotional and mental wellbeing. Complements professional therapy.</p>
              <p className="text-sm font-bold" style={{ color: '#C7A96B' }}>For: Students, professionals, parents, healing journeys</p>
            </div>
            <div className="p-8 rounded-xl shadow-md border-2 hover:border-" style={{ borderColor: '#0F5C4D' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F5C4D' }}>Speaking & Collaboration</h3>
              <p className="mb-4" style={{ color: '#1F2933' }}>Speaking engagements at conferences, institutional events, interfaith dialogues, and collaborations with media and education platforms.</p>
              <p className="text-sm font-bold" style={{ color: '#C7A96B' }}>For: Academic conferences, media, publishing partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-section="faq" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 md:mr-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center" style={{ color: '#12324A' }}>
            Questions & Answers
          </h2>
          <p className="text-lg text-center mb-16" style={{ color: '#1F2933' }}>Understanding Islam and Mental Wellness</p>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border-2 rounded-xl overflow-hidden bg-white" style={{ borderColor: '#0F5C4D' }}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between font-bold transition"
                  style={{ backgroundColor: 'rgba(248, 245, 238, 0.8)', color: '#0F5C4D' }}
                >
                  <span className="text-left">{item.question}</span>
                  <span className="text-2xl" style={{ color: '#C7A96B' }}>{expandedFaq === idx ? '−' : '+'}</span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 border-t-2" style={{ borderColor: '#0F5C4D', color: '#1F2933' }}>
                    <p className="leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(248, 245, 238, 0.7)' }}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black mb-4 text-center" style={{ color: '#12324A' }}>
            What Students & Colleagues Say
          </h3>
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto" style={{ color: '#1F2933' }}>Real perspectives from those who've engaged with Prof. Mishal's teaching</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Fatima Ahmed",
                role: "Graduate Student, Islamic Studies",
                review: "Prof. Mishal's approach to Islamic psychology has been transformative. She bridges the gap between traditional Islamic knowledge and modern neuroscience in a way that feels both authentic and scientifically grounded. Her lectures on tawakkul and anxiety were eye-opening.",
                rating: 5
              },
              {
                name: "Hassan Khan",
                role: "University Chaplain",
                review: "I've invited Prof. Mishal to speak to our student community multiple times. Her ability to address mental health through an Islamic lens, without minimizing clinical concerns, is remarkable. Students leave feeling heard and empowered.",
                rating: 5
              },
              {
                name: "Dr. Sarah Williams",
                role: "Clinical Psychologist",
                review: "As a non-Muslim therapist, I appreciated Prof. Mishal's scholarship on how Islamic practices support mental health. Her framework helps me better understand and respect my Muslim clients' spiritual resources. Highly recommended for interfaith dialogue.",
                rating: 5
              },
              {
                name: "Amira Hassan",
                role: "High School Teacher",
                review: "I brought Prof. Mishal to lead a workshop for our Muslim students on faith and resilience. The response was overwhelming—students felt seen and understood. Her workshop equipped them with both Islamic wisdom and practical mental health tools.",
                rating: 5
              },
              {
                name: "Muhammad Ali",
                role: "Community Mental Health Advocate",
                review: "Prof. Mishal's perspective on healing through community and spiritual connection addresses a critical gap in our mental health conversations. Her work gives permission and language for integrating faith with healing.",
                rating: 5
              },
              {
                name: "Dr. Zainab Mustafa",
                role: "Islamic Scholar & Researcher",
                review: "A rare voice—scholarly, compassionate, and deeply grounded in Islamic tradition while remaining open to modern science. Prof. Mishal's work will influence how we teach Islamic psychology for years to come.",
                rating: 5
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl shadow-md bg-white border-l-4" style={{ borderColor: '#0F5C4D' }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-black" style={{ color: '#12324A' }}>{item.name}</h4>
                    <p className="text-sm font-bold" style={{ color: '#C7A96B' }}>{item.role}</p>
                  </div>
                  <div className="flex text-yellow-500">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p style={{ color: '#1F2933' }} className="leading-relaxed italic">"{item.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-section="contact" className="py-20 md:py-28 text-white px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #0F5C4D 0%, #0A4A3E 50%, #12324A 100%)' }}>
        <div className="max-w-4xl mx-auto text-center md:mr-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Engage?</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're seeking to learn, attend a workshop, explore mentoring, or collaborate—we welcome genuine seekers of all backgrounds.
          </p>
          <div className="p-10 rounded-2xl border-2 mb-8" style={{ backgroundColor: 'rgba(199, 169, 107, 0.1)', borderColor: '#C7A96B' }}>
            <p className="text-lg font-bold mb-3" style={{ color: '#C7A96B' }}>Connect via Email</p>
            <a 
              href="mailto:mishalrazaq665@gmail.com"
              className="text-3xl md:text-4xl font-black hover:opacity-90 transition"
              style={{ color: '#C7A96B' }}
            >
              mishalrazaq665@gmail.com
            </a>
          </div>
          <p className="opacity-80">
            Please include: your interest (lectures, workshops, mentoring, collaboration, speaking), your context, and any specific needs.
          </p>
        </div>
      </section>

      {/* Footer Spacer for Mobile */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
};

export default MishalRazzaqPage;
