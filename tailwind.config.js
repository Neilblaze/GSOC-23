module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        "minus-1": "-1",
      },
      filter: {
        "grayscale-80": "grayscale(80%)",
      },
      boxShadow: {
        blue: "0 4px 14px 0 rgba(19, 51, 81, 0.39)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-filters")],
};
