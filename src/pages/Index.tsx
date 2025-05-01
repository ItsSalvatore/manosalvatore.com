import React, { useEffect, useState, createContext } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';
import ProjectCarousel from '@/components/ProjectCarousel';
import Pricing from '@/components/Pricing';

export const PopupContext = createContext<{
  openPopup: (plan: string) => void;
  closePopup: () => void;
  isOpen: boolean;
  selectedPlan: string;
}>({
  openPopup: () => {},
  closePopup: () => {},
  isOpen: false,
  selectedPlan: '',
});

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    // Update page title
    document.title = 'Mano Salvatore - Modern Web Development Amsterdam';
  }, []);

  const openPopup = (plan: string) => {
    setSelectedPlan(plan);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <PopupContext.Provider value={{ openPopup, closePopup, isOpen: isPopupOpen, selectedPlan }}>
      <div className="min-h-screen bg-background/80 backdrop-blur-sm text-foreground overflow-hidden">
        <CustomCursor />
        <Navbar />
        <Hero />
        <ProjectCarousel />
        <Experience />
        <Projects />
        <Pricing />
        <Contact />
      </div>
    </PopupContext.Provider>
  );
};

export default Index;
