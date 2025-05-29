module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F4",
        secondary: "#1A202C",
        accent: "#60A5FA",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
