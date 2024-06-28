/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        '0-30': '0 0 30%'
      },
      keyframes: {
        'chart-box': {
          '0%': {
            width: '0',
            opacity: '0'
          },
          '100%': {
            width: '100%',
            opacity: '1'
          }
        },
        fadeIn: {
          '0%': { height: '0', opacity: '0' },
          '100%': { height: '100%', opacity: '1' }
        }
      },
      animation: {
        'chart-box': 'chart-box 1s ease-out',
        'fade-in': 'fadeIn 1s ease-in-out'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false
  }
}

