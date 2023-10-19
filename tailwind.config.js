/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        twist: {
          from: {
            transform: "rotate(90deg)",
            opacity: "0.5",
          },
          "25%": {
            transform: "scale(.75)",
          },
          "50%": { opacity: "0.9" },
          to: {
            transform: "rotate(0deg)",
            transform: "scale(1)",
            opacity: "1",
          },
        },
        baloon: {
          from: {
            transform: "scale(.65)",
            opacity: "0.5",
          },
          "50%": {
            opacity: "1",
          },
          to: {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        twist: "twist 0.9s forwards",
        baloon: "baloon 1s ease-in-out",
      },
    },
  },
  plugins: [],
};

module.exports = config;
