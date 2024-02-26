/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    borderRadius: {
      "casual-round": "26% 74% 70% 30% / 53% 37% 63% 47% ",
    },
    fontFamily: {
      gilroyBold: ["GilroyBold", "sans-serif"],
      gilroyLight: ["GilroyLight", "sans-serif"],
      seaweed: ["Seaweed Script", "cursive"],
    },
    extend: {
      animation: {
        spotlight: "spotlight 1.5s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
};
