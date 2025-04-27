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
    <section className="py-20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Ervaring</h2>
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
              className="bg-background/60 backdrop-blur-md p-8 rounded-xl shadow-lg border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-xl text-center group"
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-xl backdrop-blur-sm mb-6 group-hover:bg-primary/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-2">{item.number}</h3>
              <p className="text-lg font-semibold text-foreground mb-2">{item.label}</p>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 