type ThemeToggleProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-full border border-white/70 bg-white/70 px-3 py-2 text-sm font-medium shadow-insetSoft transition hover:bg-brand-primary/10 dark:border-slate-700/80 dark:bg-slate-900/70 dark:hover:bg-brand-primary/20"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
    </button>
  );
}
