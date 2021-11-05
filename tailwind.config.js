module.exports = {
  mode:'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
   
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
