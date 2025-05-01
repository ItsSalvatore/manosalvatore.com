import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

const ContactPopup = ({ isOpen, onClose, selectedPlan }: ContactPopupProps) => {
  // Prevent clicks inside the popup from closing it
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="absolute inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-[12px]"
          />

          {/* Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg relative z-[101] mx-4"
            onClick={handleContentClick}
          >
            {/* Card with glass effect */}
            <div className="relative bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50" />
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
              
              {/* Close button with enhanced animation */}
              <motion.button
                onClick={onClose}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/50 border border-border/50 text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </motion.button>

              <div className="p-8 relative z-[1]">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-2xl font-display font-semibold mb-2">
                    Start je project
                  </h3>
                  <div className="flex items-center space-x-2 mb-6">
                    <span className="text-muted-foreground">Gekozen pakket:</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                      {selectedPlan}
                    </span>
                  </div>
                </motion.div>

                <form 
                  action="https://formsubmit.co/info@manosalvatore.com" 
                  method="POST"
                  className="space-y-4"
                >
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_next" value="https://manosalvatore.com/#pakketten" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_autoresponse" value="Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op." />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="package" value={selectedPlan} />

                  <div>
                    <Input
                      name="name"
                      placeholder="Je naam"
                      required
                      className="w-full px-4 py-2 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Je e-mailadres"
                      required
                      className="w-full px-4 py-2 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Vertel me over je project..."
                      required
                      className="w-full px-4 py-2 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none min-h-[120px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 relative overflow-hidden group"
                  >
                    <span className="relative z-10 inline-flex items-center">
                      Verstuur Bericht
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
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </button>
                </form>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup; 