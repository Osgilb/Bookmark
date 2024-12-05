/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './html/*.html',
        './js/*.js'
    ],
  theme: {
    extend: {
          maxWidth: {
            '8xl': '1450px'
          },
          height: {
              300: '300px',
              400: '400px',
              500: '500px',
              700: '700px'
          },
          colors: {
            gray: '#EEECEF'
        }
    },
  },
  plugins: [],
}
