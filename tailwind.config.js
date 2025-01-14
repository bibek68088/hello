/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
        heartbeat: 'heartbeat 1s ease-in-out infinite',
        fadeOut: 'fadeOut 3s forwards',
        slideDown: 'slideDown 1s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'float-away': 'float-away 2s forwards',
        sparkle: 'sparkle 2s ease-in-out infinite',
        slideIn: 'slideIn 0.5s ease-out',
        'bounce-slow': 'bounce-slow 2s infinite',
      },
    },
  },
  safelist: [
    'from-pink-50',
    'to-pink-100',
    'text-pink-600',
    'text-pink-700',
    'from-purple-50',
    'to-purple-100',
    'text-purple-600',
    'text-purple-700',
    'from-blue-50',
    'to-blue-100',
    'text-blue-600',
    'text-blue-700',
  ],
  plugins: [],
};