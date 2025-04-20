
import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [typingText, setTypingText] = useState('');
  const fullText = "Revolutionary Web Experiences";
  const typingSpeed = 100; // ms per character

  useEffect(() => {
    setIsVisible(true);

    // Typing effect
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypingText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const handleParallax = (e: React.MouseEvent) => {
    if (isMobile || !heroRef.current) return;
    
    const heroElement = heroRef.current;
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    const layers = heroElement.querySelectorAll('.parallax-layer');
    layers.forEach((layer, index) => {
      const htmlLayer = layer as HTMLElement;
      const depth = index + 1;
      const moveX = mouseX * depth * 20;
      const moveY = mouseY * depth * 20;
      htmlLayer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen pt-24 overflow-hidden noise-filter"
      onMouseMove={handleParallax}
    >
      <AnimatedBackground />
      
      <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between h-[80vh] min-h-[600px]">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div 
              className={`inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-sm font-medium text-neon-cyan">Introducing Neon Echo</span>
            </div>
            
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
              }`}
            >
              The Future of <span className="text-gradient">Digital Design</span>
            </h1>
            
            <p 
              className={`text-lg md:text-xl text-white/80 max-w-xl transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
              }`}
            >
              {typingText}<span className="animate-pulse">|</span>
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start transition-all duration-1000 delay-900 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
              }`}
            >
              <button className="px-8 py-3 rounded-full bg-electric-purple text-white font-medium hover:bg-electric-violet transition-colors duration-300 shadow-lg shadow-electric-purple/20 animate-pulse-slow">
                Explore Features
              </button>
              
              <button className="px-8 py-3 rounded-full bg-transparent text-white font-medium border border-white/20 hover:bg-white/5 transition-colors duration-300">
                View Showcase
              </button>
            </div>
          </div>
          
          <div 
            className={`lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-[1200ms] ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              <div className="parallax-layer absolute -top-20 -right-10 w-64 h-64 rounded-full bg-electric-purple/10 filter blur-3xl"></div>
              <div className="parallax-layer absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-neon-cyan/10 filter blur-3xl"></div>
              
              <div className="glass-panel rounded-2xl p-6 md:p-8 relative z-10 animate-float">
                <div className="absolute -top-3 -right-3 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="w-full h-48 bg-space-dark rounded-lg overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/30 to-neon-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-medium text-white/70">Interactive Preview</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-3/4 h-4 bg-white/5 rounded-full"></div>
                    <div className="w-1/2 h-4 bg-white/5 rounded-full"></div>
                    <div className="w-2/3 h-4 bg-white/5 rounded-full"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="w-32 h-8 bg-electric-purple/30 rounded-full"></div>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="parallax-layer absolute -right-6 bottom-1/2 transform translate-y-1/2">
                <div className="w-24 h-24 rounded-xl glass-panel flex items-center justify-center transform rotate-12 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-12 h-12 rounded-lg bg-electric-purple/30 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                      <path d="M2 2l7.586 7.586"></path>
                      <circle cx="11" cy="11" r="2"></circle>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="parallax-layer absolute -left-6 top-1/4">
                <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="w-10 h-10 rounded-full bg-neon-cyan/30 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="rgba(10, 14, 23, 0.5)" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
