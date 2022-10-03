module.exports = {
  content: ['./src/**/*.html'],
  class: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': 'Baumans, cursive',
      'serif': 'Quicksand, sans-serif',
      'century': 'Century Gothic'
    },
    extend: {
      backgroundImage: theme => ({
        'ariztia-log': "url(/img/ariztialog-bg.jpeg)",
        'ariztia-welcome': "url(/img/welcome-section.jpg)",
      }),
      colors: {
        'ariztia-red': '#FF0000',
        'ariztia-red-dark': '#DC0B03',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
