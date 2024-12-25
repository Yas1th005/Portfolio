const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./public/index.html",],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'border': 'border 4s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        border: {
          to: { '--border-angle': '360deg' },
        },
      },
      fontFamily: {
        glyphic: ["'Faculty Glyphic'", "serif"],
        fredoka: ["'Fredoka'", "sans-serif"],
        greatVibes: ["'Great Vibes'", "cursive"],
        sourGummy: ["'Sour Gummy'", "sans-serif"],
        dancing: ["'Dancing Script'", "cursive"],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        gold: "#FFD700",
        silver: "#C0C0C0",
        primary: '#00C4FF', // Bright Cyan
        secondary: '#FFD700', // Gold
        accent: '#FF007F', // Vibrant Pink
        darkBg: '#121212', // Dark Background
        cardBg: '#1E1E1E', // Card Background
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
}


function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}



