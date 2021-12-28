const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.indigo,
        success: colors.emerald,
        neutral: colors.warmGray,
        warning: colors.yellow,
        danger: colors.red
      }
    },
  },
  plugins: [],
}
