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
        "blue_section": '#1C2430b0',
        "green_section": "#2B6E6233",
        "red_section": "#453231",
      },
    },
  },
  plugins: [],
}

