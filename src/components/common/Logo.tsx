import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showSubtitle = true,
  className = '' 
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const titleSizes = {
    sm: 'text-sm font-bold',
    md: 'text-base font-bold',
    lg: 'text-xl font-extrabold',
    xl: 'text-2xl font-black'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Gem and Tech Vector Icon */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <div className="absolute inset-0 bg-emerald-500/25 blur-md rounded-lg"></div>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md z-10"
        >
          {/* Emerald Octagon Outer Facet */}
          <polygon 
            points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" 
            fill="url(#emeraldGrad)" 
            stroke="#34d399" 
            strokeWidth="2.5" 
          />
          {/* Inner Table Facet */}
          <polygon 
            points="36,26 64,26 74,36 74,64 64,74 36,74 26,64 26,36" 
            fill="#022c22" 
            stroke="#6ee7b7" 
            strokeWidth="1.8" 
          />
          {/* Radial Facet Lines */}
          <line x1="30" y1="10" x2="36" y2="26" stroke="#a7f3d0" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="70" y1="10" x2="64" y2="26" stroke="#a7f3d0" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="90" y1="30" x2="74" y2="36" stroke="#a7f3d0" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="90" y1="70" x2="74" y2="64" stroke="#a7f3d0" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="70" y1="90" x2="64" y2="74" stroke="#a7f3d0" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="30" y1="90" x2="36" y2="74" stroke="#a7f3d0" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="10" y1="70" x2="26" y2="64" stroke="#a7f3d0" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="10" y1="30" x2="26" y2="36" stroke="#a7f3d0" strokeWidth="1.5" strokeOpacity="0.8" />

          {/* Central AI / Circuit Nodes */}
          <circle cx="50" cy="50" r="5" fill="#f59e0b" stroke="#fef3c7" strokeWidth="1" />
          <line x1="50" y1="34" x2="50" y2="45" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="1,1" />
          <line x1="50" y1="55" x2="50" y2="66" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="1,1" />
          <line x1="34" y1="50" x2="45" y2="50" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="1,1" />
          <line x1="55" y1="50" x2="66" y2="50" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="1,1" />

          <defs>
            <linearGradient id="emeraldGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop offset="0.5" stopColor="#059669" />
              <stop offset="1" stopColor="#022c22" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span className={`font-emerald-heading tracking-wide ${titleSizes[size]} text-white`}>
          ESMERALDA <span className="text-emerald-400">INTELIGENTE</span>
        </span>
        <span className="text-xs font-semibold tracking-wider text-amber-400 flex items-center gap-1">
          JAIRRESTAURA
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
        </span>
        {showSubtitle && size !== 'sm' && (
          <span className="text-[10px] text-slate-400 tracking-tight hidden sm:inline-block">
            Sector Esmeraldero Colombiano • 100% Gratuita
          </span>
        )}
      </div>
    </div>
  );
};
