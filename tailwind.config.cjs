const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...fontFamily.sans],
        averta: ["AvertaStd", ...fontFamily.sans],
        Poppins: ["Poppins", ...fontFamily.sans],
        Roboto: ["Roboto", ...fontFamily.sans],
        Lato: ["Lato", ...fontFamily.sans],
        OpenSans: ["Open Sans", ...fontFamily.sans],
        Montserrat: ["Montserrat", ...fontFamily.sans],
        Nunito: ["Nunito", ...fontFamily.sans],
        Raleway: ["Raleway", ...fontFamily.sans],
        Ubuntu: ["Ubuntu", ...fontFamily.sans],
        Merriweather: ["Merriweather", ...fontFamily.serif],
        Playfair: ["Playfair Display", ...fontFamily.serif],
        Lora: ["Lora", ...fontFamily.serif],
        RobotoSlab: ["Roboto Slab", ...fontFamily.serif],
      },
      colors: {
        primary: {
          50: "rgb(var(--tw-color-primary-50) / <alpha-value>)",
          //* Background
          100: "rgb(var(--tw-color-primary-100) / <alpha-value>)",
          200: "rgb(var(--tw-color-primary-200) / <alpha-value>)",
          //* Complement
          300: "rgb(var(--tw-color-primary-300) / <alpha-value>)",
          400: "rgb(var(--tw-color-primary-400) / <alpha-value>)",
          //* Default
          500: "rgb(var(--tw-color-primary-500) / <alpha-value>)",
          //* Hovered
          600: "rgb(var(--tw-color-primary-600) / <alpha-value>)",
          //* Active
          700: "rgb(var(--tw-color-primary-700) / <alpha-value>)",
          800: "rgb(var(--tw-color-primary-800) / <alpha-value>)",
          900: "rgb(var(--tw-color-primary-900) / <alpha-value>)",
        },
        secondary: {
          50: "#EFF9F8",
          //* Background
          100: "#E8F4F3",
          200: "#E0F3F1",
          //* Complement
          300: "#D0EDEB",
          400: "#A2DBD7",
          //* Default
          500: "#40A69F",
          //* Hovered
          600: "#3B9993",
          //* Active
          700: "#2F7A75",
          800: "#235C58",
          900: "#173D3A",
        },
        typo: {
          DEFAULT: "#1F1F1F",
          secondary: "#707070",
          tertiary: "#999CA0",
          icons: "#999CA0",
          divider: "#EBEBEB",
          outline: "#D9D9D9",
        },
        dark: "#222222",
        light: "#F5F5F5",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
            filter:
              "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
            filter: "none",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-700px 0",
          },
          "100%": {
            backgroundPosition: "700px 0",
          },
        },
        swoosh_from_top: {
          "0%": {
            transform: "translate(0,-100px)",
          },
          "100%": {
            transform: "translate(0,0)",
          },
        },
        swoosh_from_bottom: {
          "0%": {
            transform: "translate(0,100px)",
          },
          "100%": {
            transform: "translate(0,0)",
          },
        },
      },
      animation: {
        typing: "typing 3s steps(40) infinite alternate, blink .10s infinite",
        flicker: "flicker 3s linear infinite",
        shimmer: "shimmer 1.3s linear infinite",
        swoosh_from_top: "swoosh_from_top .5s",
        swoosh_from_bottom: "swoosh_from_bottom .5s",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
  ],
};
