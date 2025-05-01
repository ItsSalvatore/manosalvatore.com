import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Rocket } from 'lucide-react';

const experienceData = [
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    number: "3+",
    label: "Jaar Ervaring",
    description: "In webontwikkeling"
  },
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    number: "10+",
    label: "Projecten",
    description: "Opgeleverd"
  },
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    number: "6+",
    label: "Klanten",
    description: "Wereldwijd"
  }
];

const Experience = () => {
  return (
    <>
      <section className="section-container relative py-12">
        {/* Background variation 1 */}
        <div className="section-background-1">
          <div className="section-pattern-1" />
          <div className="section-floaters-1">
            <div className="floating-element" />
            <div className="floating-element" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient-animate mb-4">Ervaring</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hoogwaardige weboplossingen met moderne technologieën
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="hover-card sparkle-hover bg-background/60 backdrop-blur-md p-8 rounded-xl border border-border/30 text-center group"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-xl backdrop-blur-sm mb-6 group-hover:bg-primary/20 transition-colors">
                  <div className="icon-hover">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-2 text-gradient-animate">{item.number}</h3>
                <p className="text-lg font-semibold text-foreground mb-2">{item.label}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider animated-border" />
    </>
  );
};

export default Experience; 