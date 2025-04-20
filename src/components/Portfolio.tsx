
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Neon Finance Dashboard",
    description: "Modern analytics platform with real-time data visualization",
    image: "https://placehold.co/600x400/0A0E17/FFFFFF?text=Finance+Dashboard",
    category: "Web App",
    technologies: ["React", "Three.js", "TailwindCSS"],
    link: "#"
  },
  {
    id: 2,
    title: "Echo Social Platform",
    description: "Next-gen social media with immersive user experiences",
    image: "https://placehold.co/600x400/0A0E17/FFFFFF?text=Social+Platform",
    category: "Platform",
    technologies: ["React", "Node.js", "GraphQL"],
    link: "#"
  },
  {
    id: 3,
    title: "Quantum E-commerce",
    description: "Revolutionary shopping experience with 3D product previews",
    image: "https://placehold.co/600x400/0A0E17/FFFFFF?text=E-commerce",
    category: "E-commerce",
    technologies: ["React", "Three.js", "Stripe"],
    link: "#"
  },
  {
    id: 4,
    title: "Wave Music App",
    description: "Immersive audio platform with visual sound experiences",
    image: "https://placehold.co/600x400/0A0E17/FFFFFF?text=Music+App",
    category: "Mobile App",
    technologies: ["React Native", "WebGL", "Spotify API"],
    link: "#"
  },
  {
    id: 5,
    title: "Pulse Health Tracker",
    description: "Holistic health monitoring with AI insights",
    image: "https://placehold.co/600x400/0A0E17/FFFFFF?text=Health+Tracker",
    category: "Mobile App",
    technologies: ["React Native", "TensorFlow", "Firebase"],
    link: "#"
  }
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Determine which card is most centered and set it as active
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = containerWidth / 3; // Approximate card width
      
      const newActiveIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(Math.min(Math.max(newActiveIndex, 0), projects.length - 1));
      
      // Smooth scroll to the centered card
      carouselRef.current.scrollTo({
        left: newActiveIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const navigateToProject = (index: number) => {
    setActiveIndex(index);
    
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const cardWidth = containerWidth / 3;
      
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 relative noise-filter overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Explore our latest projects showcasing the cutting-edge web experiences we create
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={carouselRef}
            className={cn(
              "flex gap-8 overflow-x-auto scrollbar-hide py-8 transition-transform duration-300 cursor-grab",
              isDragging && "cursor-grabbing"
            )}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "flex-shrink-0 w-full md:w-1/2 lg:w-1/3 transition-all duration-500 perspective-[1000px]",
                  activeIndex === index ? "scale-100 opacity-100" : "scale-90 opacity-70"
                )}
                style={{
                  transform: activeIndex === index 
                    ? `rotateY(0deg) scale(1)` 
                    : `rotateY(${index < activeIndex ? -15 : 15}deg) scale(0.9)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="glass-panel rounded-2xl overflow-hidden bg-space-blue/30 h-full flex flex-col transform transition-transform duration-300 hover:translate-y-[-8px]">
                  <div className="relative h-48 lg:h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-space-dark to-transparent h-1/3"></div>
                    <div className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                    <p className="text-white/60 mb-4 flex-1">{project.description}</p>
                    
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-electric-purple/20 text-electric-purple"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.link}
                      className="text-electric-purple hover:text-neon-cyan transition-colors duration-300 flex items-center text-sm font-medium"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "bg-electric-purple scale-125"
                    : "bg-white/20 hover:bg-white/40"
                )}
                onClick={() => navigateToProject(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
