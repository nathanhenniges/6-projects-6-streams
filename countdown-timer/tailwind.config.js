/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    // compatible with @nuxtjs/color-mode
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        primary: {
          50: '#f2fbfe',
          100: '#e6f7fd',
          200: '#bfeafb',
          300: '#99def8',
          400: '#4dc5f2',
          500: '#00aced',
          600: '#009bd5',
          700: '#0081b2',
          800: '#00678e',
          900: '#005474',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'responsive', 'disabled'],
    backgroundImage: ['responsive'],
    gradientColorStops: ['responsive'],
    borderColor: ['hover', 'responsive'],
    textColor: ['hover', 'responsive', 'disabled'],
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.tnum-feature-setting': {
          'font-feature-settings': '"tnum"',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],

  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
