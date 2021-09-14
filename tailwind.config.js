module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",

  theme: {
    extend: {
      colors: {
        yellow: {
          300: "#FCC825",
        },
        gray: {
          100: "#7D93B3",
          200: "#336B69",
          300: "#E5F0FF",
          400: "#7D93B2",
          500: "#4D6280",
          600: "#6B6B6B",
        },
        green: {
          700: "#336B69",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
