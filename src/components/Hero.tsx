import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <section className="section-container min-h-screen flex items-center relative">
        {/* Enhanced background effects */}
        <div className="hero-background">
          <div className="geometric-pattern" />
          <div className="hero-dots" />
          <div className="hero-lines">
            <div className="hero-line" />
            <div className="hero-line" />
            <div className="hero-line" />
          </div>
          <div className="floating-elements">
            <div className="floating-element" />
            <div className="floating-element" />
            <div className="floating-element" />
          </div>
          <div className="hero-overlay" />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sparkle-hover inline-block py-2 px-4 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium"
              >
                Dit is Salvatore
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold leading-tight text-foreground"
              >
                De Toekomst van{' '}
                <span className="text-gradient-animate">Digitaal Design</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted-foreground text-lg max-w-xl"
              >
                Revolutionaire Web Ervaringen
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="animated-button sparkle-hover inline-flex items-center px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Contact
                </a>
                <a
                  href="#projects"
                  className="animated-button sparkle-hover inline-flex items-center px-6 py-3 rounded-lg border border-border/30 hover:border-primary/40 text-foreground font-medium group backdrop-blur-sm bg-background/60"
                >
                  Bekijk Mijn Werk
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform icon-hover" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:block hidden"
            >
              <div className="hover-card sparkle-hover relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-background/60 backdrop-blur-md border border-border/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-10 flex items-center px-4 bg-background/80 backdrop-blur-sm border-b border-border/30">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="section-divider animated-border" />
    </>
  );
};

export default Hero;
