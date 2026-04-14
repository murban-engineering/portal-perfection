import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portal", label: "Portal" },
    { path: "/contact", label: "Contact Us" },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
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
        
        <nav className="nav-pill max-w-[245px] md:max-w-none w-full md:w-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${
                isActive(item.path) ? "nav-item-active" : "nav-item-inactive"
              }`}
            >
              {item.path === "/contact" ? (
                <>
                  <span className="md:hidden leading-none text-center">
                    Contact
                    <br />
                    Us
                  </span>
                  <span className="hidden md:inline">{item.label}</span>
                </>
              ) : (
                item.label
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
