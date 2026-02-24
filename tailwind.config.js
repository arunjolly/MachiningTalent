/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          950: '#0d1117',
          900: '#111826',
          800: '#1b2637'
        },
        spark: {
          500: '#f97316',
          600: '#ea580c'
        },
        cyan: {
          500: '#06b6d4',
          600: '#0891b2'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(6,182,212,0.18)',
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 20% 20%, rgba(6,182,212,0.18), transparent 35%), radial-gradient(circle at 80% 0%, rgba(249,115,22,0.2), transparent 30%), linear-gradient(145deg, #0d1117 0%, #111826 40%, #1b2637 100%)"
      }
    },
  },
  plugins: [],
};
