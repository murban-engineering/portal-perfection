import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import BrandWordmark from "@/components/BrandWordmark";
const heroImage = "/aerial-view-gas-oil-refinery-oil-industry.jpg";

const Index = () => {
  return (
    <Layout>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(to bottom, 
              hsla(220, 20%, 6%, 0.4) 0%,
              hsla(220, 20%, 6%, 0.5) 50%,
              hsla(220, 20%, 6%, 0.7) 100%
            )` 
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="hero-title mb-8">
            <BrandWordmark
              className="items-center"
              murbanClassName="text-5xl md:text-7xl lg:text-8xl tracking-[0.06em]"
              engineeringClassName="mt-3 inline-block whitespace-nowrap rounded-full bg-white/95 px-5 py-2 pl-[calc(1.25rem+0.45em)] text-lg tracking-[0.45em] shadow-[0_10px_30px_rgba(0,0,0,0.2)] md:px-8 md:py-2.5 md:pl-[calc(2rem+0.45em)] md:text-2xl lg:text-3xl"
            />
          </h1>
          
          <p className="hero-subtitle mb-16">
            Industrial Engineering Solutions & Client Resources Portal
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <Link to="/portal" className="cta-button group">
              <span className="cta-icon group-hover:bg-accent transition-colors">
                <ChevronRight className="w-5 h-5" />
              </span>
              <span>Portal</span>
            </Link>
            
            <a 
              href="https://murban-eng.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button group"
            >
              <span className="cta-icon group-hover:bg-accent transition-colors">
                <ChevronRight className="w-5 h-5" />
              </span>
              <span className="sm:hidden">Website</span>
              <span className="hidden sm:inline">Official Website</span>
            </a>
          </div>
        </div>
        
        {/* Animated particles/dust effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `fade-in ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
