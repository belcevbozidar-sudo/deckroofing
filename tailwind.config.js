/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2B2D33',
        graphite: '#4A4E57',
        amber: {
          DEFAULT: '#E8991C',
          dark: '#C47D10',
          light: '#F5AA30',
        },
        'spec-white': '#F4F3EF',
        'deep-dark': '#1E2024',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'amber-gradient': 'linear-gradient(135deg, #E8991C 0%, #C47D10 100%)',
        'charcoal-gradient': 'linear-gradient(180deg, #2B2D33 0%, #1E2024 100%)',
      },
      animation: {
        'marquee': 'marquee-scroll 30s linear infinite',
        'float': 'float-gentle 6s ease-in-out infinite',
        'rotate-badge': 'rotate-badge 20s linear infinite',
        'pulse-amber': 'pulse-amber 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'amber': '0 8px 24px rgba(232, 153, 28, 0.35)',
        'amber-lg': '0 0 40px rgba(232, 153, 28, 0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-lg': '0 16px 48px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};