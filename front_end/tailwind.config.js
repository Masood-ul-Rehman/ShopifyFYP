/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        manrope: ['Manrope'],
      },

      colors: {
        'red': '#E5005B',
        'yellow': '#F5EE02',
        'blueish': '#6F52EC',
        'purplish': '#240D91',
      },

      screens: {
        'xsm': '400px',
        // => @media (min-width: 400px) { ... }
        'small': '520px',
        // => @media (min-width: 400px) { ... }
      },

    },
  },
  plugins: [],
}

