/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "title_color": '#ffffff',
        "section_blue": ''
      }
    },
  },
  plugins: [],
}

