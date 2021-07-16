module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      button: '0px 2px 2px rgba(0, 0, 0, 0.2)',
    },
    colors: {
      bluePrimary: '#0849b8',
      primaryHover: '#457de7',
      blueSecondary: '#ebf0fb',
      secondaryHover: '#dde1f0',
      tertiaryHover: '#ebf0fb',
      lightGray: '#eee',
    },
    textColor: (theme) => ({
      ...theme('colors'),
      blue: '#174593',
      disabled: '#bdbfc9',
      white: '#fff',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
