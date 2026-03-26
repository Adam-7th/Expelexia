/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './utils/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0a84ff',
          secondary: '#38bdf8',
          lightBg: '#f5f7fa',
          darkBg: '#0f172a',
        },
      },
      boxShadow: {
        card: '0 18px 45px rgba(2, 12, 27, 0.08)',
        glow: '0 18px 55px rgba(10, 132, 255, 0.28)',
        insetSoft: 'inset 0 1px 0 rgba(255,255,255,0.6)',
      },
      backgroundImage: {
        'hero-light': 'radial-gradient(circle at 20% 20%, rgba(10,132,255,.2), rgba(245,247,250,1) 55%)',
        'hero-dark': 'radial-gradient(circle at 20% 20%, rgba(10,132,255,.35), rgba(15,23,42,1) 55%)',
        'mesh-light': 'radial-gradient(circle at 12% 18%, rgba(10,132,255,.2), transparent 38%), radial-gradient(circle at 86% 12%, rgba(56,189,248,.16), transparent 38%), linear-gradient(180deg, rgba(245,247,250,1) 0%, rgba(239,244,255,1) 100%)',
        'mesh-dark': 'radial-gradient(circle at 12% 18%, rgba(10,132,255,.28), transparent 38%), radial-gradient(circle at 86% 12%, rgba(56,189,248,.2), transparent 38%), linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(2,6,23,1) 100%)',
      },
    },
  },
  plugins: [],
};
