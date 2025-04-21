import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Instagram, Linkedin, Github } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Naam is verplicht'),
  email: z.string().email('Voer een geldig e-mailadres in'),
  message: z.string().min(10, 'Bericht moet minimaal 10 karakters bevatten'),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

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
        className="py-24 relative noise-filter"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Contact</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Heb je een project in gedachten? Neem contact met mij op en laat mij jouw ideeën tot leven brengen.
            </p>
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
                    className="flex items-center space-x-4 text-gray-400 hover:text-primary transition-colors p-4 rounded-lg bg-space-dark/50 border border-primary/10 hover:border-primary/30"
                  >
                    <div className="text-primary">{item.icon}</div>
                    <div>
                      <p className="font-medium text-white">{item.label}</p>
                      <p>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Volg mij</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-space-dark/50 border border-primary/10 hover:border-primary/30 text-primary hover:text-white hover:bg-primary transition-colors"
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
            >
              <form 
                action="https://formsubmit.co/info@manosalvatore.com" 
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_next" value="https://manosalvatore.com/#contact" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op." />

                <div>
                  <Input
                    name="name"
                    placeholder="Je naam"
                    required
                    className="bg-space-dark/50 border-primary/20 focus:border-primary text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Je e-mailadres"
                    required
                    className="bg-space-dark/50 border-primary/20 focus:border-primary text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Onderwerp"
                    required
                    className="bg-space-dark/50 border-primary/20 focus:border-primary text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Je bericht"
                    required
                    className="bg-space-dark/50 border-primary/20 focus:border-primary text-white placeholder:text-gray-500 min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  Verstuur Bericht
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-space-dark border-t border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Salvatore</h3>
              <p className="text-gray-400">
                Modern web development voor ambitieuze projecten.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="tel:+31648332984" className="hover:text-primary">
                    +31 6 48332984
                  </a>
                </li>
                <li>
                  <a href="mailto:info@manosalvatore.com" className="hover:text-primary">
                    info@manosalvatore.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Volg mij</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Locatie</h3>
              <p className="text-gray-400">
                Amsterdam, Nederland
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary/10 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Salvatore. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact; 