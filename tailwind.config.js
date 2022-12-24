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
        mobile: '390px',
        tablet: '834px',
        desktop: '1500px',
      },
      colors: {
        goodGreen: '#1EA896',
        white: '#FFFFFF',
        gray: '#4C5454',
      },
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
  plugins: [],
};
