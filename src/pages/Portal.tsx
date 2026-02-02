import { useState } from "react";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-industrial.jpg";

const Portal = () => {
  const [username, setUsername] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search/login logic here
    console.log("Searching for:", username);
  };
  
  return (
    <Layout>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Overlay - slightly darker for portal */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(to bottom, 
              hsla(220, 20%, 6%, 0.6) 0%,
              hsla(220, 20%, 6%, 0.7) 50%,
              hsla(220, 20%, 6%, 0.85) 100%
            )` 
          }}
        />
        
        {/* Decorative squares */}
        <div className="absolute left-[15%] top-1/4 w-16 h-16 border border-white/10 rotate-45 hidden lg:block" />
        <div className="absolute right-[15%] top-1/3 w-12 h-12 border border-white/10 rotate-12 hidden lg:block" />
        <div className="absolute left-[10%] bottom-1/3 w-10 h-10 border border-white/10 -rotate-12 hidden lg:block" />
        <div className="absolute right-[20%] bottom-1/4 w-14 h-14 border border-white/10 rotate-45 hidden lg:block" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 w-full max-w-3xl animate-fade-in">
          <h1 className="portal-title mb-6">
            Secure Client Portal
          </h1>
          
          <p className="hero-subtitle mb-12">
            Search your company, select your terminal location, enter your passkey, and launch your Murban app securely.
          </p>
          
          {/* Search Form */}
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="search-input"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Portal;
