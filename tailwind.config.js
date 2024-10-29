/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "very-dark-grey": "#18171F",
      "dark-grey": "#24232C",
      grey: "#817D92",
      "almost-white": "#E6E5EA",
      "neon-green": "#A4FFAF",
      yellow: "#F8CD65",
      orange: "#FB7C58",
      red: "#F64A4A",
      current: "currentColor",
      transparent: "transparent",
    },

    fontSize: {
      headingL: "32px",
      headingM: "24px",
      body: "18px",
    },

    lineHeight: {
      headingL: "43px",
      headingM: "31px",
      body: "23px",
    },

    extend: {
      textColor: {
        DEFAULT: "#817D92",
      },
    },
  },
  plugins: [],
};
