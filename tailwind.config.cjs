/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        sand6: 'var(--sand-6)',
        sand7: 'var(--sand-7)',
        sand8: 'var(--sand-8)',
        sand9: 'var(--sand-9)',
        sand10: 'var(--sand-10)',
        sand11: 'var(--sand-11)',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
