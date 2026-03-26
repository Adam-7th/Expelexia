import { motion } from 'framer-motion';

const nodes = [
  { id: 'n1', x: '14%', y: '24%', size: 14, delay: 0 },
  { id: 'n2', x: '28%', y: '56%', size: 12, delay: 0.2 },
  { id: 'n3', x: '44%', y: '18%', size: 16, delay: 0.35 },
  { id: 'n4', x: '57%', y: '62%', size: 14, delay: 0.5 },
  { id: 'n5', x: '72%', y: '30%', size: 15, delay: 0.7 },
  { id: 'n6', x: '84%', y: '54%', size: 13, delay: 0.9 },
];

export default function HeroScene() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-glow backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/65">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/15" />
      <div className="relative z-10 h-full overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-sky-100/60 via-cyan-100/40 to-blue-100/60 dark:border-slate-700/70 dark:from-slate-900/70 dark:via-slate-800/60 dark:to-slate-900/70">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-primary/40"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/50"
        />

        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary shadow-[0_0_24px_rgba(14,165,233,0.7)]"
        />

        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute rounded-full bg-cyan-400/80"
            style={{ left: node.x, top: node.y, width: node.size, height: node.size }}
            animate={{ y: [0, -8, 0], opacity: [0.55, 1, 0.55], scale: [1, 1.12, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: node.delay }}
          />
        ))}

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="14" y1="24" x2="50" y2="50" stroke="rgba(56,189,248,0.45)" strokeWidth="0.45" />
          <line x1="28" y1="56" x2="50" y2="50" stroke="rgba(56,189,248,0.45)" strokeWidth="0.45" />
          <line x1="44" y1="18" x2="50" y2="50" stroke="rgba(56,189,248,0.45)" strokeWidth="0.45" />
          <line x1="57" y1="62" x2="50" y2="50" stroke="rgba(56,189,248,0.45)" strokeWidth="0.45" />
          <line x1="72" y1="30" x2="50" y2="50" stroke="rgba(56,189,248,0.45)" strokeWidth="0.45" />
          <line x1="84" y1="54" x2="50" y2="50" stroke="rgba(56,189,248,0.45)" strokeWidth="0.45" />
        </svg>

        <div className="absolute bottom-4 left-1/2 w-[92%] -translate-x-1/2 rounded-lg bg-white/75 px-3 py-2 text-center text-xs font-medium text-slate-700 backdrop-blur-sm dark:bg-slate-900/70 dark:text-slate-200">
          Website workflow preview: upload lab data, run AI analysis, and generate professional reports in one dashboard.
        </div>
      </div>
    </div>
  );
}
