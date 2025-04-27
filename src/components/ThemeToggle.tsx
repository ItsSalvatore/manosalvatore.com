import React from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Monitor } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 p-1 rounded-full border border-border bg-background">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-colors ${
          theme === 'light'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-colors ${
          theme === 'dark'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition-colors ${
          theme === 'system'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="System theme"
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ThemeToggle; 