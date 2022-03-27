module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IRANSansWebFaNum", "Arial", "sans-serif"],
        Roboto: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          " BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      backgroundImage: {
        heroBox: "url('/images/heroBox.jpg')",
      },
    },
  },
  plugins: [],
};
