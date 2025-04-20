import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <li className="relative group">
      <a 
        href={href} 
        className="px-6 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
      >
        {children}
        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-electric-purple group-hover:w-[calc(100%-48px)] -translate-x-1/2 transition-all duration-300" />
      </a>
    </li>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 10;
      setScrolled(scrollY > scrollThreshold);
      
      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 glass-panel' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/cf2b9c3d-bcfe-433f-938a-2de8f5fac56a.png" 
              alt="Salvatore Logo" 
              className="h-8 md:h-10"
            />
          </a>

          <div 
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-electric-red to-neon-pink" 
            style={{ width: `${scrollProgress * 100}%` }} 
          />

          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#portfolio">Portfolio</NavLink>
              <NavLink href="#diensten">Diensten</NavLink>
              <NavLink href="#pakketten">Pakketten</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </ul>
          </nav>

          <div className="hidden md:block">
            <button className="px-8 py-2 rounded-full bg-electric-red text-white font-medium hover:bg-electric-crimson transition-colors duration-300 shadow-lg shadow-electric-red/20">
              Start Project
            </button>
          </div>

          <button 
            className="md:hidden text-white p-2" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className={`
        md:hidden fixed inset-0 bg-space-dark/95 backdrop-blur-md z-50 transition-all duration-500 
        ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
      `}>
        <div className="container mx-auto px-4 py-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <a href="/" className="text-xl font-display font-semibold text-gradient">
              Neon<span className="font-light">Echo</span>
            </a>
            <button 
              className="text-white p-2" 
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-6 py-8">
              {['Home', 'Portfolio', 'Diensten', 'Pakketten', 'Contact'].map((item, i) => (
                <li key={item} style={{ animationDelay: `${i * 0.1}s` }} className="animate-text-reveal">
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-3xl font-display text-white/90 hover:text-gradient transition-all duration-300 flex items-center space-x-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="w-8 h-[1px] bg-electric-purple/50"></span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pb-8">
            <button className="w-full py-3 rounded-full bg-electric-red text-white font-medium hover:bg-electric-crimson transition-colors duration-300 shadow-lg shadow-electric-red/20">
              Start Project
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
