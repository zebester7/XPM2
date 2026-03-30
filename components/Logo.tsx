
import React, { useState } from 'react';
import { useSettings } from '../SettingsContext';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10", showText = true }) => {
  const { settings } = useSettings();
  const [logoError, setLogoError] = useState(false);
  
  // Try multiple logo sources in order
  const logoUrls = [
    settings.logoUrl || '/xpm-logo.png',
    '/xpm-logo.svg',
    '/favicon-32x32.png'
  ];

  return (
    <div className={`flex items-center gap-3`}>
      {!logoError ? (
        <img 
          src={logoUrls[0]}
          alt="XPM Tutors - Expert Physics & Maths Tutors"
          className={className}
          style={{ objectFit: 'contain' }}
          loading="eager"
          onError={() => setLogoError(true)}
        />
      ) : (
        // Fallback: Text-based logo
        <div className={`${className} bg-xpm-blue rounded-lg flex items-center justify-center text-white font-black text-sm`}>
          XPM
        </div>
      )}
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
