
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Portfolio from '@/components/Portfolio';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = 'NeonEcho - Ultra Modern Web Experiences';
  }, []);

  return (
    <div className="min-h-screen bg-space-dark text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Portfolio />
      <Pricing />
    </div>
  );
};

export default Index;
