/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: "#0085FF",
        hover: "#3944BC",
        bg:"#BE123C"
      },
    },
  },

  plugins: [],
});
