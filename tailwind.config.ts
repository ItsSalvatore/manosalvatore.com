import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#d22128',
          hover: '#b01b21',
        },
        'space-dark': '#0a0a0a',
        'neon-blue': '#d22128',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        space: {
          dark: '#0A0E17',
          blue: '#1E293B',
        },
        electric: {
          red: '#ea384c',
          crimson: '#dc2626',
          purple: '#8B5CF6'  // Adding the missing electric-purple color
        },
        neon: {
          pink: '#ff6b6b',
          rose: '#ff4d6d'
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 15px 5px rgba(139, 92, 246, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 25px 10px rgba(139, 92, 246, 0.5)'
          }
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-500px 0'
          },
          '100%': {
            backgroundPosition: '500px 0'
          }
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: 0.8
          }
        },
        'gradient-x': {
          '0%, 100%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          }
        },
        'text-reveal': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'text-reveal': 'text-reveal 0.8s ease forwards'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif']
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'mesh-gradient': 'radial-gradient(at 100% 0%, rgb(124, 58, 237) 0, transparent 50%), radial-gradient(at 0% 100%, rgb(6, 182, 212) 0, transparent 50%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
