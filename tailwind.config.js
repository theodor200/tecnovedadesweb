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
      /*backgroundImage: {
        'background': "url('/public/img/background.svg')"
      }*/
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
