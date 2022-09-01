/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.tsx",],
  theme: {
    extend: {
      colors: {
        primary: "#92E3A9",
        'primary-darker': "#6EAB7F"
      },
    },
  },
  plugins: [],
}
