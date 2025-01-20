/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
        },
        slideOut: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(100%)'
          },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px white',
          },
          '100%': {
            boxShadow: '0 0 15px white',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-out',
        slideOut: 'slideOut 0.3s ease-in',
        glow: 'glow 1s infinite alternate',
      },
      colors: {
        "primary-blue-color": "#061e5c",
        "primary-liteblue-color": "rgb(215 229 245)",
        "primary-skyblue-color": "#AED2FF",
        "primary-darkblue-color": "#066eb6",
        "primary-dark-blue": "#00a0e3",
      }
    },
  },
  plugins: [],
}