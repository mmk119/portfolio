import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { ThemeMode, ThemeContextValue } from '../types';

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_STORAGE_KEY = 'portfolio-theme';

/**
 * Maps each theme to CSS custom properties applied via data-theme attribute.
 * Tailwind reads these through the theme config, and raw CSS vars
 * cover edge cases like canvas tool filters.
 */
const themeVariables: Record<ThemeMode, Record<string, string>> = {
  light: {
    '--color-bg': '#fafbff',
    '--color-surface': '#ffffff',
    '--color-surface2': '#f1f4f9',
    '--color-border': '#e2e7f0',
    '--color-accent': '#6c3ce0',
    '--color-blue': '#2563eb',
    '--color-green': '#059669',
    '--color-muted': '#5b6478',
    '--color-text': '#1a202c',
  },
  cyberpunk: {
    '--color-bg': '#0d0221',
    '--color-surface': '#1a0533',
    '--color-surface2': '#2b0a4a',
    '--color-border': '#ff00ff33',
    '--color-accent': '#f5e642',
    '--color-blue': '#ff00ff',
    '--color-green': '#00ffaa',
    '--color-muted': '#b4a0c8',
    '--color-text': '#ffffff',
  },
  nord: {
    '--color-bg': '#2e3440',
    '--color-surface': '#3b4252',
    '--color-surface2': '#434c5e',
    '--color-border': '#4c566a',
    '--color-accent': '#88c0d0',
    '--color-blue': '#81a1c1',
    '--color-green': '#a3be8c',
    '--color-muted': '#d8dee9',
    '--color-text': '#eceff4',
  },
  matrix: {
    '--color-bg': '#000000',
    '--color-surface': '#0a0a0a',
    '--color-surface2': '#111111',
    '--color-border': '#003300',
    '--color-accent': '#00ff00',
    '--color-blue': '#00cc00',
    '--color-green': '#00ff00',
    '--color-muted': '#008800',
    '--color-text': '#00ff00',
  },
  accessible: {
    '--color-bg': '#ffffff',
    '--color-surface': '#f5f5f5',
    '--color-surface2': '#eeeeee',
    '--color-border': '#333333',
    '--color-accent': '#0000cc',
    '--color-blue': '#0000cc',
    '--color-green': '#006600',
    '--color-muted': '#444444',
    '--color-text': '#000000',
  },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return (stored as ThemeMode) || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    const vars = themeVariables[theme];
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
