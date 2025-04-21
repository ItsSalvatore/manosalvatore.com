import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';
import ProjectCarousel from '@/components/ProjectCarousel';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Salvatore - Modern Web Development';
  }, []);

  return (
    <div className="min-h-screen bg-space-dark text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <ProjectCarousel />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
