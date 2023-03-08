/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts(x)}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },

      colors: {
        gray: {
          200: "#ecf1f8",
          800: "#333",
        },

        theme: {
          500: "#7159c1",
        },
      },
    },
  },
  plugins: [],
};
