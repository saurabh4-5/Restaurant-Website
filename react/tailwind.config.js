/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        dark: "#181818",
      },
      fontFamily: {
        elegant: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};
