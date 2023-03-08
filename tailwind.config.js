/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './icons/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#647E71',
        secondary: '#D9D9D9',
        border: '#707070',
      },
      fontSize: {
        h1: '36px',
        h2: '32px',
        h3: '24px',
        h4: '18px',
        body1: '16px',
        body2: '14px',
        caption: '18px',
      },
      animation: {
        slidein: 'slideInFromLeft .5s ease',
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(0vw)' },
        },
      },
    },
  },
  plugins: [],
}
