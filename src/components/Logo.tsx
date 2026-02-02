const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10">
        {/* M icon with red and blue */}
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path 
            d="M8 32V12L20 24L32 12V32" 
            stroke="url(#logo-gradient)" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          <defs>
            <linearGradient id="logo-gradient" x1="8" y1="12" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(4, 80%, 50%)" />
              <stop offset="0.5" stopColor="hsl(4, 80%, 50%)" />
              <stop offset="0.5" stopColor="hsl(210, 80%, 55%)" />
              <stop offset="1" stopColor="hsl(210, 80%, 55%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="text-xl font-semibold text-white tracking-wide">Murban Engineering</span>
    </div>
  );
};

export default Logo;
