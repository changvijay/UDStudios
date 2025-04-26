// tailwind.config.js
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // this is your custom “display” font for big headings
        display: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
