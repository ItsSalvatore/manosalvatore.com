import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
  buttonText: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Basic Package',
    price: {
      monthly: 499,
      yearly: 399,
    },
    description: 'Essential web development package for small projects',
    features: [
      { name: 'Single Page Website', included: true },
      { name: 'Responsive Design', included: true },
      { name: 'Basic SEO Setup', included: true },
      { name: 'Contact Form', included: true },
      { name: '3D Elements', included: false },
      { name: 'Custom Animations', included: false },
    ],
    buttonText: 'Choose Package',
  },
  {
    name: 'Premium Package',
    price: {
      monthly: 999,
      yearly: 799,
    },
    description: 'Advanced package with custom features and animations',
    features: [
      { name: 'Multi-page Website', included: true },
      { name: 'Advanced Responsive Design', included: true },
      { name: 'Complete SEO Setup', included: true },
      { name: 'Contact Form & Chat', included: true },
      { name: '3D Elements', included: true },
      { name: 'Custom Animations', included: true },
    ],
    highlighted: true,
    buttonText: 'Select Package',
  },
  {
    name: 'Enterprise Package',
    price: {
      monthly: 1999,
      yearly: 1599,
    },
    description: 'Full-scale web solutions for large organizations',
    features: [
      { name: 'Custom Web Application', included: true },
      { name: 'Advanced Interactions', included: true },
      { name: 'Full SEO & Analytics', included: true },
      { name: 'Integration Services', included: true },
      { name: 'Custom 3D Elements', included: true },
      { name: 'Premium Support', included: true },
    ],
    buttonText: 'Contact Us',
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-24 bg-space-dark relative noise-filter">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Pricing Plans</span> for Everyone
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Simple, transparent pricing with no hidden fees.
            Save up to 20% with yearly billing.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-10 inline-flex items-center p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <button
              onClick={() => setBilling('monthly')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                billing === 'monthly' 
                  ? "bg-electric-red text-white shadow-lg shadow-electric-red/20" 
                  : "text-white/70 hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 relative",
                billing === 'yearly' 
                  ? "bg-electric-red text-white shadow-lg shadow-electric-red/20" 
                  : "text-white/70 hover:text-white"
              )}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-neon-cyan text-space-dark text-xs px-2 py-0.5 rounded-full animate-pulse-slow">
                -20%
              </span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={cn(
                "relative rounded-2xl transition-all duration-500 group",
                plan.highlighted 
                  ? "glass-panel border-electric-red/30" 
                  : "bg-white/5 border border-white/10"
              )}
            >
              {/* Floating elements for highlighted plan */}
              {plan.highlighted && (
                <>
                  <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-electric-red animate-float" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute -bottom-3 -right-3 w-4 h-4 rounded-full bg-neon-cyan animate-float" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute top-1/4 -right-2 w-3 h-3 rounded-full bg-neon-teal animate-float" style={{ animationDelay: '0.4s' }}></div>
                </>
              )}
              
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-electric-red text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-2">{plan.name}</h3>
                <p className="text-white/60 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl md:text-5xl font-display font-bold">
                      ${billing === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-white/60 ml-2 mb-1">/month</span>
                  </div>
                  {billing === 'yearly' && (
                    <p className="text-sm text-neon-cyan mt-2">
                      Billed annually (${plan.price.yearly * 12}/year)
                    </p>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start"
                    >
                      <span className={cn(
                        "rounded-full p-0.5 mt-0.5 mr-3",
                        feature.included 
                          ? "bg-electric-red text-white" 
                          : "bg-white/10 text-white/40"
                      )}>
                        <Check className="w-4 h-4" />
                      </span>
                      <span className={feature.included ? "text-white/80" : "text-white/40"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={cn(
                    "w-full py-3 rounded-xl font-medium transition-all duration-300",
                    plan.highlighted 
                      ? "bg-electric-red text-white shadow-lg shadow-electric-red/20 hover:bg-electric-violet" 
                      : "bg-white/10 text-white hover:bg-white/20"
                  )}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/60 mb-4">Need a custom plan for your enterprise?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-electric-red hover:text-neon-cyan transition-colors duration-300"
          >
            Contact our sales team
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-electric-red/10 rounded-full filter blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-neon-cyan/10 rounded-full filter blur-[100px] -z-10"></div>
    </section>
  );
};

export default Pricing;
