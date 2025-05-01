import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  category: 'Business Websites' | 'Web Applications (Apps)';
}

const projects: Project[] = [
  {
    title: 'SV SIT',
    description: 'WordPress platform voor de studievereniging van Informatica & Technische Informatica met geïntegreerde evenementenkalender en ledenadministratie.',
    link: 'https://svsit.nl',
    category: 'Business Websites'
  },
  {
    title: 'SV Fermi',
    description: 'WordPress website voor de studievereniging van Technische Natuurkunde, voorzien van 3D-geïntegreerde elementen en evenementenbeheer.',
    link: 'https://svfermi.nl',
    category: 'Business Websites'
  },
  {
    title: 'Scout Platform',
    description: 'Modern talent matching platform gebouwd met Next.js en React, gericht op het verbinden van talent met de juiste kansen.',
    link: 'https://scout-git-main-itssalvatores-projects.vercel.app',
    category: 'Web Applications (Apps)'
  },
  {
    title: 'Scout Web App',
    description: 'Geavanceerde web applicatie in ontwikkeling met uitgebreide matching functionaliteit en real-time updates.',
    link: '#',
    category: 'Web Applications (Apps)'
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;

    if (!card || !glow) return;

    const updateGlowPosition = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.transform = `translate(${x}px, ${y}px)`;
    };

    card.addEventListener('mousemove', updateGlowPosition);
    card.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
    });
    card.addEventListener('mouseenter', () => {
      glow.style.opacity = '1';
    });

    return () => {
      card.removeEventListener('mousemove', updateGlowPosition);
      card.removeEventListener('mouseleave', () => {});
      card.removeEventListener('mouseenter', () => {});
    };
  }, []);

  return (
    <motion.a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="hover-card group block p-6 bg-background/60 backdrop-blur-md rounded-xl border border-border/30 relative"
    >
      <div ref={glowRef} className="cursor-glow" />
      <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h4>
      <p className="text-muted-foreground mb-4">
        {project.description}
      </p>
      <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
        <span className="mr-2">Bekijk Project</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.a>
  );
};

const Projects = () => {
  return (
    <>
      <section id="projects" className="section-container relative py-12">
        {/* Background variation 2 */}
        <div className="section-background-2">
          <div className="section-pattern-2" />
          <div className="section-floaters-2">
            <div className="floating-element" />
            <div className="floating-element" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient-animate mb-4">Opleveringen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ontdek onze meest recente projecten en zie hoe wij innovatieve oplossingen ontwikkelen voor verschillende doelgroepen.
            </p>
          </motion.div>

          <div className="space-y-20">
            {(['Business Websites', 'Web Applications (Apps)'] as const).map((category, categoryIndex) => (
              <div key={category}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="category-header text-2xl font-bold text-foreground mb-8"
                >
                  {category}
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects
                    .filter((project) => project.category === category)
                    .map((project, index) => (
                      <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
                {categoryIndex === 0 && (
                  <div className="category-divider" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider animated-border" />
    </>
  );
};

export default Projects; 