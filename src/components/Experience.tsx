import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section 
      id="experience"
      className="py-20 bg-gradient-to-b from-space-dark to-[#0a192f]"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-neon-blue mb-4">Ervaring</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Met jarenlange ervaring in webontwikkeling leveren wij hoogwaardige oplossingen die perfect aansluiten bij uw zakelijke doelstellingen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-space-dark/50 p-8 rounded-lg backdrop-blur-sm border border-neon-blue/20 hover:border-neon-blue/40 transition-all"
          >
            <h3 className="text-5xl font-bold text-neon-blue mb-2">3+</h3>
            <p className="text-gray-400">Jaren Ervaring</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-space-dark/50 p-8 rounded-lg backdrop-blur-sm border border-neon-blue/20 hover:border-neon-blue/40 transition-all"
          >
            <h3 className="text-5xl font-bold text-neon-blue mb-2">10+</h3>
            <p className="text-gray-400">Voltooide Projecten</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 