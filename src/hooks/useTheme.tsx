'use client';

import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const applyTheme = (nextTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    root.classList.toggle('dark', nextTheme === 'dark');
    root.style.colorScheme = nextTheme;
    localStorage.setItem('theme', nextTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'dark';

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme = current === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme);
      return nextTheme;
    });
  };

  return { theme, toggleTheme };
}