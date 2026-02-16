
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10", showText = true }) => {
  return (
    <div className={`flex items-center gap-3`}>
      <img 
        src="/xpm-logo.png" 
        alt="XPM Tutors - Expert Physics & Maths Tutors"
        className={className}
        style={{ objectFit: 'contain' }}
      />
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
