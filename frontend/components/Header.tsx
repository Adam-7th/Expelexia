import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/upload', label: 'Upload' },
  { href: '/analysis', label: 'Analysis' },
  { href: '/reports', label: 'Reports' },
  { href: '/about', label: 'About' },
];

type HeaderProps = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/65 shadow-card backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/65">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-brand-primary/10 px-2 py-1 text-xl shadow-insetSoft dark:bg-brand-primary/20">🧪</span>
          <Link href="/" className="text-sm font-semibold tracking-[0.12em] text-brand-primary">
            Expelexia Lab
          </Link>
        </div>

        <nav className="hidden items-center gap-2 rounded-2xl border border-white/60 bg-white/65 p-1.5 shadow-insetSoft dark:border-slate-700/60 dark:bg-slate-900/70 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-xl px-3 py-1.5 text-sm text-gray-700 transition hover:bg-brand-primary/10 hover:text-brand-primary dark:text-gray-200 dark:hover:bg-brand-primary/20">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/65 transition hover:bg-brand-primary/10 dark:border-slate-700/60 dark:bg-slate-900/70 dark:hover:bg-brand-primary/20 md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-gray-700 transition-transform duration-300 dark:bg-gray-200 ${
                  mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-5 rounded bg-gray-700 transition-transform duration-300 dark:bg-gray-200 ${
                  mobileMenuOpen ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="mx-auto w-full max-w-7xl px-4 pb-3 sm:px-6 md:hidden">
          <div className="rounded-2xl border border-white/60 bg-white/80 p-2 shadow-insetSoft backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-900/80">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-sm text-gray-700 transition hover:bg-brand-primary/10 hover:text-brand-primary dark:text-gray-200 dark:hover:bg-brand-primary/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
