/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A0DAD',
        secondary: '#9B30FF',
        accent: '#D8BFD8'
      }
    }
  },
  plugins: []
}