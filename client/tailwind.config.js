/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-krylon)']
      },
      colors: {
        'darkGreen': '#001C20',
        'darkBlue': '#A1E1FA',
        'lightBlue': '#DBEDF3',
    },
    fontSize: {
      'xxl': '2rem',
      'xxxl': '3.5rem',
      'xxxxl': '4.5rem',
    }
  },
  plugins: [],
}
}
