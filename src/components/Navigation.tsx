import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import Logo from "./Logo";

const Navigation = () => {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const [gliderStyle, setGliderStyle] = useState<React.CSSProperties>({});
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portal", label: "Portal" },
    { path: "/contact", label: "Contact Us" },
  ];
  
  const activeIndex = navItems.findIndex(item => item.path === location.pathname);

  useEffect(() => {
    if (navRef.current && activeIndex >= 0) {
      const buttons = navRef.current.querySelectorAll<HTMLAnchorElement>('.glass-nav-item');
      const activeBtn = buttons[activeIndex];
      if (activeBtn) {
        setGliderStyle({
          width: activeBtn.offsetWidth,
          transform: `translateX(${activeBtn.offsetLeft - (navRef.current.querySelector('.glass-nav-inner') as HTMLElement)?.offsetLeft || 0}px)`,
        });
      }
    }
  }, [activeIndex]);

  // Recalculate on resize
  useEffect(() => {
    const handleResize = () => {
      if (navRef.current && activeIndex >= 0) {
        const inner = navRef.current.querySelector('.glass-nav-inner') as HTMLElement;
        const buttons = navRef.current.querySelectorAll<HTMLAnchorElement>('.glass-nav-item');
        const activeBtn = buttons[activeIndex];
        if (activeBtn && inner) {
          setGliderStyle({
            width: activeBtn.offsetWidth,
            transform: `translateX(${activeBtn.offsetLeft - inner.offsetLeft}px)`,
          });
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-0 md:px-6 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 px-3 md:px-0 py-2 md:py-0 bg-slate-700/25 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0">
        <Link to="/" className="flex items-center gap-2 md:gap-3 min-w-0">
          <Logo />
          <span className="text-white text-[15px] md:text-xl font-semibold md:font-bold tracking-wide leading-tight">
            Murban
            <br className="md:hidden" />
            Engineering
          </span>
        </Link>
        
        <div ref={navRef}>
          <nav className="glass-nav-inner relative flex items-center gap-0 rounded-2xl px-1 py-1 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(12px)',
              boxShadow: 'inset 1px 1px 4px rgba(255, 255, 255, 0.2), inset -1px -1px 6px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`glass-nav-item relative z-[2] px-4 md:px-7 py-2.5 rounded-2xl text-sm font-semibold tracking-wide text-center transition-colors duration-300 whitespace-nowrap ${
                  location.pathname === item.path ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.path === "/contact" ? (
                  <>
                    <span className="md:hidden leading-none text-center text-xs">
                      Contact<br />Us
                    </span>
                    <span className="hidden md:inline">{item.label}</span>
                  </>
                ) : (
                  item.label
                )}
              </Link>
            ))}
            {/* Glider */}
            <div
              className="absolute top-1 bottom-1 rounded-2xl z-[1] transition-all duration-500"
              style={{
                ...gliderStyle,
                background: 'linear-gradient(135deg, rgba(140,140,140,0.35), rgba(200,200,200,0.55))',
                boxShadow: '0 0 18px rgba(180,180,180,0.4), 0 0 10px rgba(220,220,220,0.3) inset',
                transitionTimingFunction: 'cubic-bezier(0.37, 1.95, 0.66, 0.56)',
              }}
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
