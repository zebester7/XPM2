import React, { useState, useEffect } from 'react';

interface SectionLink {
  id: string;
  label: string;
  icon: string;
}

const HealingMindSidebar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  const sections: SectionLink[] = [
    { id: 'top', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'topics', label: 'Topics', icon: '📚' },
    { id: 'framework', label: 'Framework', icon: '🌿' },
    { id: 'services', label: 'Services', icon: '💼' },
    { id: 'faq', label: 'FAQ', icon: '❓' },
    { id: 'contact', label: 'Connect', icon: '✉️' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let current = 'top';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('data-section') || 'top';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Color palette
  const colors = {
    deepEmerald: '#0F5C4D',
    navy: '#12324A',
    warmIvory: '#F8F5EE',
    softGold: '#C7A96B',
    charcoal: '#1F2933'
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed right-6 top-24 z-40 rounded-full p-4 shadow-lg transition-all duration-300 md:hidden text-white"
        style={{ backgroundColor: colors.deepEmerald }}
        aria-label="Toggle navigation"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Sidebar - Desktop (Fixed) */}
      <div 
        className="hidden md:flex fixed right-0 top-24 h-[calc(100vh-96px)] w-20 flex-col items-center py-8 space-y-8 shadow-2xl z-30 border-l-4"
        style={{ 
          background: `linear-gradient(180deg, ${colors.deepEmerald} 0%, ${colors.navy} 100%)`,
          borderColor: colors.softGold
        }}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            title={section.label}
            className="relative group w-16 h-16 flex items-center justify-center rounded-lg transition-all duration-300"
            style={{
              backgroundColor: activeSection === section.id ? colors.softGold : 'transparent',
              color: activeSection === section.id ? colors.navy : colors.warmIvory
            }}
          >
            <span className="text-2xl">{section.icon}</span>
            {/* Tooltip */}
            <div 
              className="absolute right-20 px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: colors.navy, color: colors.warmIvory }}
            >
              {section.label}
            </div>
          </button>
        ))}
      </div>

      {/* Sidebar - Mobile (Overlay) */}
      {isVisible && (
        <div 
          className="fixed inset-0 z-30 md:hidden"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setIsVisible(false)}
        >
          <div 
            className="w-64 h-full shadow-2xl p-6 space-y-4"
            style={{ background: `linear-gradient(180deg, ${colors.deepEmerald} 0%, ${colors.navy} 100%)` }}
          >
            <h3 className="font-black text-lg mb-6" style={{ color: colors.softGold }}>Navigation</h3>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setIsVisible(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-bold"
                style={{
                  backgroundColor: activeSection === section.id ? colors.softGold : 'transparent',
                  color: activeSection === section.id ? colors.navy : colors.warmIvory
                }}
              >
                <span className="text-2xl">{section.icon}</span>
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HealingMindSidebar;
