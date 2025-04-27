import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
  tech: string[];
}

const projects = [
  {
    title: 'Scout',
    image: '/images/Scout.png',
    description: 'Modern talent matching platform gebouwd met de nieuwste web technologieën voor optimale gebruikerservaring en prestaties.',
    link: 'https://scout-git-main-itssalvatores-projects.vercel.app',
    tech: ['Next.js', 'React', 'Shadcn/UI', 'Tailwind CSS']
  },
  {
    title: 'SV SIT',
    image: '/images/SIT.png',
    description: 'Een moderne WordPress website voor de studievereniging met geïntegreerde evenementenkalender, ledenadministratie en dynamische content management.',
    link: 'https://svsit.nl',
    tech: ['WordPress', 'Elementor Pro', 'Event Calendar', 'Custom PHP']
  },
  {
    title: 'SV Fermi',
    image: '/images/Fermi.png',
    description: 'WordPress platform met 3D-geïntegreerde elementen, evenementenbeheer en een uniek ontwerp voor de studievereniging van Technische Natuurkunde.',
    link: 'https://svfermi.nl',
    tech: ['WordPress', 'Elementor Pro', '3D Integration', 'Custom PHP']
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      zIndex: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      zIndex: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  const nextSlide = () => paginate(1);
  const prevSlide = () => paginate(-1);

  return (
    <section className="py-20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Projecten
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bekijk mijn portfolio van projecten en ontdek hoe ik innovatieve oplossingen ontwikkel.
          </p>
        </motion.div>

        <div className="relative h-[600px] md:h-[500px] mb-8">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full absolute inset-0"
            >
              <div className="grid md:grid-cols-2 gap-8 h-full">
                {/* Image Section */}
                <div className="relative h-[250px] md:h-full flex items-center">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/30 bg-background/60 backdrop-blur-sm">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.img
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-contain p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative px-4 md:px-8 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {projects[currentIndex].title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {projects[currentIndex].description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {projects[currentIndex].tech.map((tech) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Visit Button */}
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      href={projects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                      Bezoek Project
                      <ExternalLink size={16} />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-background/60 backdrop-blur-sm border border-border/30 text-foreground hover:bg-background/80 transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-background/60 backdrop-blur-sm border border-border/30 text-foreground hover:bg-background/80 transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel; 