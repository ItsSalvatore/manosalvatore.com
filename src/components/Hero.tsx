import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-space-dark">
      <div className="container mx-auto px-4 py-20">
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
              className="inline-block py-2 px-4 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              Dit is Salvatore
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              De Toekomst van{' '}
              <span className="text-primary">Digitaal Design</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-lg max-w-xl"
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
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
              >
                Contact
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-primary/20 hover:border-primary/40 text-white font-medium group"
              >
                Bekijk Mijn Werk
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:block hidden"
          >
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-space-dark border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-10 flex items-center px-4 bg-space-dark/90 border-b border-primary/20">
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
  );
};

export default Hero;
