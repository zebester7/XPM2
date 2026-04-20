import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SchemaMarkup from '../components/SchemaMarkup.tsx';

// Premium color palette matching Aql & Imaan design
const colors = {
  darkNavy: '#0f1f2e',
  navy: '#1a2d4a',
  lightNavy: '#2d4563',
  gold: '#d4af37',
  lightGold: '#e6c757',
  ivory: '#f5f3ef',
  charcoal: '#2a2a2a',
  white: '#ffffff'
};

const MishalRazzaqPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -8, transition: { duration: 0.3 } }
  };

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

  // Featured content items
  const featuredContent = [
    {
      title: "Life is a Test",
      subtitle: "The Deeper Meaning",
      icon: "🌅"
    },
    {
      title: "How Habits Are Formed",
      subtitle: "Neuroscience & Islam",
      icon: "🧠"
    },
    {
      title: "Understanding Emotions",
      subtitle: "Through Deen",
      icon: "💝"
    }
  ];

  // What Makes Different Section
  const differentiators = [
    {
      icon: "🕌",
      title: "Islam & Science Combined",
      description: "We bridge traditional Islamic knowledge with modern neuroscience"
    },
    {
      icon: "💡",
      title: "Practical Insights",
      description: "Actionable frameworks for real-world emotional challenges"
    },
    {
      icon: "📚",
      title: "In-Depth Analysis",
      description: "Scholarly yet accessible exploration of complex topics"
    },
    {
      icon: "🎯",
      title: "Structured Learning",
      description: "Clear pathways for understanding and personal development"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen"
      style={{ backgroundColor: colors.ivory }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <SchemaMarkup 
        pageTitle="The Healing Mind: Islam, Philosophy & Neuroscience"
        pageDescription="Discover how Islam addresses depression, anxiety, and emotional pain through neuroscience-informed teaching by Prof. Mishal Razzaq."
        canonical="https://xpmtutors.com/mishal-razzaq"
      />

      {/* Hero Section - Redesigned Premium Style */}
      <motion.section 
        className="relative py-24 md:py-40 text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.navy} 50%, ${colors.lightNavy} 100%)` }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: colors.gold }}></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6 border border-white/20 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: colors.gold }}>Scholarly Islamic Wellness</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight">
              Where Faith
              <br />
              <span style={{ color: colors.gold }}>Meets Intellect</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl opacity-90">
              Understanding life through Islam, Psychology and Science.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="#topics"
              className="inline-block px-8 py-4 font-bold rounded-lg transition shadow-2xl hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: colors.gold, color: colors.darkNavy }}
            >
              Explore Articles
            </a>
            <a 
              href="#contact"
              className="inline-block px-8 py-4 font-bold rounded-lg transition border-2 hover:bg-white/10"
              style={{ borderColor: colors.gold, color: colors.white }}
            >
              Start Learning
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Who Is Behind This Section */}
      <motion.section 
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.white }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Profile Image Area */}
            <motion.div
              className="flex justify-center md:justify-start"
              variants={itemVariants}
            >
              <div 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-2xl flex items-center justify-center text-6xl border-4"
                style={{ backgroundColor: colors.navy, borderColor: colors.gold, fontSize: '60px' }}
              >
                👩‍🏫
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div className="md:col-span-2" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: colors.darkNavy }}>
                Who Is Behind This?
              </h2>
              <p className="text-lg mb-4 leading-relaxed italic" style={{ color: colors.charcoal }}>
                I am a Geophysics researcher and educator with passion with ba connected for connecting Islam islam mderscience and psychology.
              </p>
              
              {/* Credentials */}
              <div className="space-y-3 mt-8">
                <div className="flex items-center gap-3">
                  <span style={{ color: colors.gold }}>✓</span>
                  <span style={{ color: colors.charcoal }} className="font-bold">Islamic Knowledge & Teaching</span>
                </div>
                <div className="flex items-center gap-3">
                  <span style={{ color: colors.gold }}>✓</span>
                  <span style={{ color: colors.charcoal }} className="font-bold">Neuroscience & Mind Studies</span>
                </div>
                <div className="flex items-center gap-3">
                  <span style={{ color: colors.gold }}>✓</span>
                  <span style={{ color: colors.charcoal }} className="font-bold">Critical Thinker & Speaker</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Explore Our Core Topics */}
      <motion.section 
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.darkNavy }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: colors.gold }}>
              Explore Our Core Topics
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Quran & Tadabbur", subtitle: "Reflecting on Quran Divine Guidance", icon: "📖", color: colors.navy },
              { title: "Psychology", subtitle: "Understanding Human Behavior", icon: "🧠", color: colors.lightNavy },
              { title: "Neuroscience", subtitle: "The Brain & Habit Formation", icon: "🔬", color: colors.navy },
              { title: "Science & Reality", subtitle: "Logic & The Universe", icon: "🌌", color: colors.lightNavy }
            ].map((topic, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
                style={{ backgroundColor: topic.color }}
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="text-5xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.gold }}>{topic.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.white }}>
                  {topic.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Start Here - Featured Content */}
      <motion.section 
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.ivory }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: colors.darkNavy }}>
              Start Here
            </h2>
            <p className="text-lg" style={{ color: colors.charcoal }}>Featured Lessons & Articles</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
                variants={cardVariants}
                whileHover="hover"
              >
                <div 
                  className="h-48 flex items-center justify-center text-6xl relative overflow-hidden"
                  style={{ backgroundColor: colors.navy }}
                >
                  <div className="absolute inset-0 group-hover:scale-110 transition duration-500">{item.icon}</div>
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-xl font-black mb-2" style={{ color: colors.darkNavy }}>
                    {item.title}
                  </h3>
                  <p style={{ color: colors.gold }} className="font-bold text-sm">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* What Makes This Different */}
      <motion.section 
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.darkNavy }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: colors.white }}>
              What Makes This Different?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {differentiators.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex gap-6"
                variants={itemVariants}
              >
                <div className="text-5xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.gold }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: colors.white }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
            variants={itemVariants}
          >
            <a 
              href="#topics"
              className="inline-block px-8 py-4 font-bold rounded-lg transition shadow-xl hover:scale-105"
              style={{ backgroundColor: colors.gold, color: colors.darkNavy }}
            >
              Explore Articles
            </a>
            <a 
              href="#contact"
              className="inline-block px-8 py-4 font-bold rounded-lg transition border-2"
              style={{ borderColor: colors.gold, color: colors.gold }}
            >
              Join Courses
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.ivory }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-black mb-4 text-center"
            style={{ color: colors.darkNavy }}
            variants={itemVariants}
          >
            Questions & Answers
          </motion.h2>
          <motion.p 
            className="text-lg text-center mb-16"
            style={{ color: colors.charcoal }}
            variants={itemVariants}
          >
            Understanding Islam and Mental Wellness
          </motion.p>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="border-2 rounded-xl overflow-hidden bg-white"
                style={{ borderColor: colors.gold }}
                variants={itemVariants}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between font-bold transition hover:bg-opacity-80"
                  style={{ backgroundColor: colors.ivory, color: colors.darkNavy }}
                >
                  <span className="text-left">{item.question}</span>
                  <motion.span 
                    className="text-2xl"
                    style={{ color: colors.gold }}
                    animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: expandedFaq === idx ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 border-t-2" style={{ borderColor: colors.gold, color: colors.charcoal }}>
                    <p className="leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.lightNavy }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3 
            className="text-4xl md:text-5xl font-black mb-4 text-center"
            style={{ color: colors.gold }}
            variants={itemVariants}
          >
            What Students & Colleagues Say
          </motion.h3>
          <motion.p 
            className="text-lg text-center mb-16"
            style={{ color: colors.white }}
            variants={itemVariants}
          >
            Real perspectives from those who've engaged with Prof. Mishal's teaching
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Fatima Ahmed",
                role: "Graduate Student, Islamic Studies",
                review: "Prof. Mishal's approach to Islamic psychology has been transformative. She bridges the gap between traditional Islamic knowledge and modern neuroscience.",
                rating: 5
              },
              {
                name: "Hassan Khan",
                role: "University Chaplain",
                review: "I've invited Prof. Mishal to speak multiple times. Her ability to address mental health through an Islamic lens is remarkable. Students leave feeling heard and empowered.",
                rating: 5
              },
              {
                name: "Dr. Sarah Williams",
                role: "Clinical Psychologist",
                review: "As a non-Muslim therapist, I appreciated Prof. Mishal's scholarship on how Islamic practices support mental health. Highly recommended for interfaith dialogue.",
                rating: 5
              },
              {
                name: "Amira Hassan",
                role: "High School Teacher",
                review: "I brought Prof. Mishal for a workshop on faith and resilience. The response was overwhelming. Her workshop equipped students with Islamic wisdom and practical tools.",
                rating: 5
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-xl shadow-lg bg-white"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-black" style={{ color: colors.darkNavy }}>
                      {item.name}
                    </h4>
                    <p className="text-sm font-bold" style={{ color: colors.gold }}>
                      {item.role}
                    </p>
                  </div>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p style={{ color: colors.charcoal }} className="leading-relaxed italic">
                  "{item.review}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section 
        className="py-20 md:py-28 text-white px-4 sm:px-6 lg:px-8"
        style={{ background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.navy} 100%)` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-black mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Engage?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Whether you're seeking to learn, attend a workshop, explore mentoring, or collaborate—we welcome genuine seekers of all backgrounds.
          </motion.p>

          <motion.div 
            className="p-10 rounded-2xl border-2 mb-8 inline-block"
            style={{ backgroundColor: `rgba(212, 175, 55, 0.1)`, borderColor: colors.gold }}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg font-bold mb-3" style={{ color: colors.gold }}>
              Connect via Email
            </p>
            <a 
              href="mailto:mishalrazaq665@gmail.com"
              className="text-3xl md:text-4xl font-black hover:opacity-80 transition"
              style={{ color: colors.gold }}
            >
              mishalrazaq665@gmail.com
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Spacer */}
      <div className="h-20 md:h-0"></div>
    </motion.div>
  );
};

export default MishalRazzaqPage;
