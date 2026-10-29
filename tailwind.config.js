/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#858900',
        muted: '#a8b5a0',
      },
      fontFamily: {
        rufina: ['Rufina', 'serif'],
      },
    },
  },
  plugins: [],
}
