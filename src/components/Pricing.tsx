import React, { useContext } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { PopupContext } from '@/pages/Index';
import ContactPopup from '@/components/ui/ContactPopup';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: {
    estimate: string;
  };
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
  buttonText: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Basis Website',
    price: {
      estimate: '€500 - €1000',
    },
    description: 'Eén pagina ontwerp (10-20 uur)',
    features: [
      { name: 'Mobiel responsive', included: true },
      { name: 'Contactformulier', included: true },
      { name: 'Basis SEO', included: true },
      { name: 'Zonder CMS', included: true },
      { name: 'Domein (€15/jaar)', included: true },
      { name: 'Hosting (€10/maand)', included: true },
      { name: '3 maanden gratis support', included: true },
      { name: 'Drie revisies', included: true },
    ],
    buttonText: 'Start Project',
  },
  {
    name: 'Meer-Pagina Website',
    price: {
      estimate: '€750 - €1500',
    },
    description: 'Tot 5 pagina\'s (15-30 uur)',
    features: [
      { name: 'Tot 5 pagina\'s', included: true },
      { name: 'Mobiel responsive', included: true },
      { name: 'Contactformulier', included: true },
      { name: 'Uitgebreide SEO', included: true },
      { name: 'Zonder CMS', included: true },
      { name: 'Domein (€15/jaar)', included: true },
      { name: 'Hosting (€10/maand)', included: true },
      { name: '6 maanden gratis support', included: true },
      { name: 'Vijf revisies', included: true },
    ],
    highlighted: true,
    buttonText: 'Start Project',
  },
  {
    name: 'Maatwerk',
    price: {
      estimate: '€50/uur',
    },
    description: 'Aangepaste oplossingen',
    features: [
      { name: 'Aangepaste functies', included: true },
      { name: 'Webshop mogelijk', included: true },
      { name: 'Geavanceerde opties', included: true },
      { name: 'Integraties op maat', included: true },
      { name: 'Domein inbegrepen', included: true },
      { name: 'Hosting inbegrepen', included: true },
      { name: 'Levenslange support', included: true },
      { name: 'Onbeperkt revisies', included: true },
    ],
    buttonText: 'Start Project',
  },
];

const Pricing = () => {
  const { openPopup, closePopup, isOpen, selectedPlan } = useContext(PopupContext);

  const handlePlanSelect = (planName: string) => {
    openPopup(planName);
  };

  return (
    <>
      <section id="pakketten" className="py-24 relative overflow-hidden bg-background/95 dark:bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-7xl mx-auto">
            <div className="absolute top-1/4 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-70" />
            <div className="absolute top-1/3 -right-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-70" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 opacity-70" />
          </div>
        </div>

        {/* Dark overlay for more depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80 backdrop-blur-[2px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Pakketten die <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Meegroeien</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kies het ideale pakket voor uw wensen of vraag een oplossing op maat. Alle prijzen gebaseerd op €50/uur tarief.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div 
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2, ease: 'easeOut' }
                }}
                className={cn(
                  "flex flex-col h-full relative rounded-2xl transition-all duration-300",
                  plan.highlighted 
                    ? "bg-background/95 backdrop-blur-xl border-2 border-primary/50 shadow-[0_0_30px_-5px] shadow-primary/30" 
                    : "bg-background/95 backdrop-blur-xl border-2 border-border/50 shadow-[0_8px_30px_-5px] shadow-border/20 hover:shadow-border/30 hover:border-primary/30"
                )}
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/30 via-border/5 to-border/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card inner shadow for depth */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 via-transparent to-black/5" />
                
                {plan.highlighted && (
                  <>
                    <motion.div 
                      className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full shadow-lg"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="relative inline-flex">
                        <span>Meest Populair</span>
                        <span className="absolute -inset-4 rounded-full bg-primary/20 animate-ping" />
                      </span>
                    </motion.div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 via-primary/5 to-transparent opacity-60" />
                  </>
                )}
                
                <div className="p-8 flex-1 relative">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10"
                  >
                    <motion.h3 
                      className="text-2xl font-display font-semibold mb-2 text-foreground"
                      whileHover={{ x: 2 }}
                    >
                      {plan.name}
                    </motion.h3>
                    <p className="text-muted-foreground/80 mb-6">{plan.description}</p>
                    
                    <motion.div 
                      className="mb-8"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="flex items-baseline">
                        <span className="text-4xl font-display font-bold bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent">
                          {plan.price.estimate}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  <ul className="space-y-4 mb-8 relative z-10">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        whileHover={{ x: 2 }}
                      >
                        <span className="rounded-full p-1 mt-0.5 mr-3 text-primary bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                          <Check className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        </span>
                        <span className="text-muted-foreground/90 group-hover:text-foreground transition-colors duration-200">
                          {feature.name}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0 mt-auto relative z-10">
                  <motion.button
                    onClick={() => handlePlanSelect(plan.name)}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-full py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group",
                      plan.highlighted 
                        ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30" 
                        : "bg-background hover:bg-background/80 border-2 border-border/30 hover:border-primary/50 text-foreground hover:text-primary"
                    )}
                  >
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
                      {plan.buttonText}
                      <svg 
                        className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-200" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                    {plan.highlighted && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    )}
                  </motion.button>
                </div>

                {/* Enhanced corner accents */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-[1px] h-20 bg-gradient-to-b from-transparent via-primary to-transparent" />
                  <div className="absolute top-0 right-0 h-[1px] w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 w-[1px] h-20 bg-gradient-to-t from-transparent via-primary to-transparent" />
                  <div className="absolute bottom-0 left-0 h-[1px] w-20 bg-gradient-to-l from-transparent via-primary to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-muted-foreground/90 mb-4">Een oplossing op maat voor uw bedrijf?</p>
            <motion.a 
              href="#contact" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Neem contact op
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Popup Container */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <ContactPopup
              isOpen={isOpen}
              onClose={closePopup}
              selectedPlan={selectedPlan}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
