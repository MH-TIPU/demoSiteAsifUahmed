/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D4242',
          light: '#8D6262',
          dark: '#4D2222',
        },
        secondary: {
          DEFAULT: '#F0E6DD',
          dark: '#D0C6BD',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
