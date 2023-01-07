/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './myForm/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: { raw: '(min-height: 500px) and (min-width: 350px)' },
        tablet: { raw: '(min-height: 601px) and (min-width: 962px)' },
        desktop: { raw: '(min-height: 1000px) and (min-width: 1440px)' },
        xlDesktop: { raw: '(min-height: 1440px) and (min-width: 2560px)' },
      },
      colors: { goodGreen: '#1EA896', white: '#FFFFFF', gray: '#4C5454' },
      borderRadius: {
        custom: '12px',
      },
      fontFamily: {
        mono: ['Courier Prime', 'monospace'],
        sans: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        loading: {
          '0%': {
            width: '0',
            left: '0',
            right: 'unset',
          },
          '50%': {
            width: '100%',
          },
          '100%': {
            left: 'unset',
            right: '0',
            width: '0',
          },
        },
      },
    },
  },
};
