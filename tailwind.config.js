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
        "blue_text": "#86b6feb0",
        "green_text": "#44AC99",
        "red_text": "#d07d77",
        "purple_text": "#c296fd",
        "word_section": "#434b59",
        "purple_word_section": "#66428e74",
        "purple_section": "#381f5274",
        "back_button": "#5cafad58",
        "accordition_color": "#ffdfb6",
      },
    },
  },
  plugins: [],
}

