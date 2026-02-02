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
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        
        <nav className="nav-pill">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${
                isActive(item.path) ? "nav-item-active" : "nav-item-inactive"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
