import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Linkedin, Github } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check for success parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      // Remove the success parameter from URL after 5 seconds
      setTimeout(() => {
        window.history.replaceState({}, '', window.location.pathname + window.location.hash);
        setShowSuccess(false);
      }, 5000);
    }
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Telefoon',
      value: '+31 6 48332984',
      href: 'tel:+31648332984'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'E-mail',
      value: 'info@manosalvatore.com',
      href: 'mailto:info@manosalvatore.com'
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com/its__salvatore',
      label: 'Instagram'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/manosalvatore',
      label: 'LinkedIn'
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/itssalvatore',
      label: 'GitHub'
    }
  ];

  return (
    <>
      <section 
        id="contact"
        className="relative mt-32 md:mt-40 pb-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Contact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Heb je een project in gedachten? Neem contact met mij op en laat mij jouw ideeën tot leven brengen.
            </p>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 bg-green-500/10 text-green-500 rounded-xl border border-green-500/20"
              >
                Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.
              </motion.div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="hover-card flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors p-4 rounded-lg bg-background/60 backdrop-blur-md border border-border/30"
                  >
                    <div className="text-primary">{item.icon}</div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Volg mij</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-button p-3 rounded-full bg-background/60 backdrop-blur-md border border-border/30 text-primary hover:text-white hover:bg-primary"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hover-card bg-background/60 backdrop-blur-md p-8 rounded-xl border border-border/30"
            >
              <form 
                action="https://formsubmit.co/info@manosalvatore.com" 
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_next" value="https://manosalvatore.com/#contact?success=true" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op." />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div>
                  <Input
                    name="name"
                    placeholder="Je naam"
                    required
                    className="bg-background/60 backdrop-blur-md border-border/30 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Je e-mailadres"
                    required
                    className="bg-background/60 backdrop-blur-md border-border/30 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Onderwerp"
                    required
                    className="bg-background/60 backdrop-blur-md border-border/30 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Je bericht"
                    required
                    className="bg-background/60 backdrop-blur-md border-border/30 focus:border-primary text-foreground placeholder:text-muted-foreground min-h-[150px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 inline-flex items-center">
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Verzenden...
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="section-container py-12 bg-background/80 backdrop-blur-md border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background/60 backdrop-blur-md p-6 rounded-xl border border-border/30 shadow-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">Salvatore</h3>
              <p className="text-muted-foreground">
                Modern web development voor ambitieuze projecten.
              </p>
            </div>
            <div className="bg-background/60 backdrop-blur-md p-6 rounded-xl border border-border/30 shadow-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="tel:+31648332984" className="hover:text-primary transition-colors">
                    +31 6 48332984
                  </a>
                </li>
                <li>
                  <a href="mailto:info@manosalvatore.com" className="hover:text-primary transition-colors">
                    info@manosalvatore.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-background/60 backdrop-blur-md p-6 rounded-xl border border-border/30 shadow-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">Volg mij</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-background/60 backdrop-blur-md p-6 rounded-xl border border-border/30 shadow-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">Locatie</h3>
              <p className="text-muted-foreground">
                Amsterdam, Nederland
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/30 text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              Gemaakt met <span className="heart-icon text-primary">❤</span> door Salvatore
            </p>
            <p className="mt-2">© {new Date().getFullYear()} Salvatore. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact; 