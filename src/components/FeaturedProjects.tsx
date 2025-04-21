import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: 'SV SIT',
    description: 'Een moderne website voor de studievereniging van Informatica & Technische Informatica aan de Hogeschool Rotterdam.',
    imageUrl: '/images/SIT.png',
    link: 'https://svsit.nl',
    features: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma']
  },
  {
    title: 'SV Fermi',
    description: 'Website voor de studievereniging van Technische Natuurkunde aan de Hogeschool Rotterdam.',
    imageUrl: '/images/Fermi.png',
    link: 'https://svfermi.nl',
    features: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma']
  },
  {
    title: 'Scout',
    description: 'Een innovatief platform voor het vinden en matchen van talent.',
    imageUrl: '/images/Scout.png',
    link: 'https://scout-git-main-itssalvatores-projects.vercel.app',
    features: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js']
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured" className="py-20 bg-space-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Laatste Projecten
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ontdek mijn meest recente projecten waar ik trots op ben.
            Elk project is gebouwd met de nieuwste technologieën en best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-space-light rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-sm bg-space-dark text-primary rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Bekijk Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 