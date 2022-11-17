/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      screens: {
        xl: '1170px',
      },
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        inter: ['Inter'],
      },
      colors: {
        blue: '#217BF4',
        gray: '#656464',
        navy: '#0a093d',
      },
      spacing: {
        4.5: '18px',
        16.5: '66px',
        30: '30px',
        270: '270px',
        340: '340px',
        450: '450px',
      },
      borderRadius: {
        14: '14px',
      },
      dropShadow: {
        '3xl': '0 0 25px rgba(33, 123, 244, 0.2)',
      },
    },
  },
  plugins: [],
};
