
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className.split(' ').filter(c => !c.includes('h-') && !c.includes('w-')).join(' ')}`}>
      <svg 
        viewBox="0 0 500 500" 
        className={`${className.split(' ').find(c => c.includes('h-'))} ${className.split(' ').find(c => c.includes('w-'))}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Ring */}
        <circle cx="250" cy="250" r="240" fill="#004d99" />
        <circle cx="250" cy="250" r="210" fill="white" />
        
        {/* Split Background */}
        <path d="M250 40C134 40 40 134 40 250s94 210 210 210V40z" fill="#f37021" />
        <path d="M250 40c116 0 210 94 210 210s-94 210-210 210V40z" fill="#8dc63f" />

        {/* DNA Helix (Simplified) */}
        <path d="M250 40c20 50-20 100 0 150s20 100 0 150-20 100 0 120" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.6"/>
        <path d="M250 40c-20 50 20 100 0 150s-20 100 0 150 20 100 0 120" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.6"/>

        {/* Icons */}
        {/* Lightning */}
        <path d="M190 120l-20 60h30l-20 60 40-70h-30l20-50z" fill="white" />
        {/* Gear */}
        <path d="M180 340a30 30 0 100 60 30 30 0 000-60zm0 15a15 15 0 110 30 15 15 0 010-30z" fill="white" />
        {/* Math Tools */}
        <path d="M310 120l15 80h-30z" fill="white" />
        <path d="M290 350a40 40 0 0180 0h-80z" fill="white" />

        {/* Central XPM Plate */}
        <rect x="120" y="210" width="260" height="80" rx="20" fill="white" stroke="#004d99" strokeWidth="4" />
        <text 
          x="250" y="270" 
          textAnchor="middle" 
          className="font-black" 
          style={{ fontSize: '64px', fill: '#004d99', letterSpacing: '-2px' }}
        >
          XPM
        </text>

        {/* Arched Text (Simulated with simple placement for compatibility) */}
        <text x="250" y="32" textAnchor="middle" fill="white" style={{ fontSize: '24px', fontWeight: 'bold' }}>Xpert Physics & Maths Tutors</text>
        <text x="250" y="485" textAnchor="middle" fill="white" style={{ fontSize: '22px', fontWeight: 'bold' }}>EST. 2024</text>
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-tighter text-white">XPM <span className="text-xpm-green">TUTORS</span></span>
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/50">Excellence in Science</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
