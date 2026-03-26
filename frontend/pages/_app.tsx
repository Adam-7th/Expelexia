import '../styles/globals.css';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import type { ComponentType } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const PageComponent = Component as ComponentType<any>;

  useEffect(() => {
    const savedTheme = localStorage.getItem('expelexia-theme');
    const initial: 'light' | 'dark' = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('expelexia-theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  return (
    <div className="relative flex min-h-screen flex-col text-gray-900 transition-colors duration-500 dark:text-gray-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh-light dark:bg-mesh-dark" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-brand-primary/10 to-transparent dark:from-brand-primary/20" />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <PageComponent {...pageProps} theme={theme} />
      </main>
      <Footer />
    </div>
  );
}
