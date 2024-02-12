import { useEffect, useState } from 'react';

export const useThemeToggle = (defaultTheme: string) => {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') ?? defaultTheme);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const themeToggle = (): void => {
    const themeToggle: string = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', themeToggle);
    setTheme(themeToggle);
  };

  return { theme, themeToggle };
};
