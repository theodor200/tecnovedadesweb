module.exports = {
  mode:'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'background-svg': "url('/public/img/background_index.svg')"
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
