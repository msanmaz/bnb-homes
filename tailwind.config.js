/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        "width": "width",
        "spacing": 'margin, padding',
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        "xsmall": "512px",
        "small": "1024px",
        "medium": "1280px",
        "large": "1440px",
        "xlarge": "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
      },
      backgroundImage: theme => ({
        'hero-bg': "url('/herobg.png')",
        'hero-istanbul':"url('/istanbulbg.jpg')",
        'hero-bodrum':"url('/bodrumbg.png')",
        'hero-stuttgart':"url('/stuttgartbg.jpg')",
      }),
      
    },
  },
  daisyui:{
    themes: [true,
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "base-100": "#F0F0F0",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "base-100": "#161616",
          "base-content": "#f5f5f5",
        },
      },
    ],
  },
  plugins: [require("daisyui"),
  plugin(function ({ addUtilities }) {
    addUtilities({
      '.bg-overlay': {
        'background': 'linear-gradient(var(--overlay-angle, 0deg), var(--overlay-colors)), var(--overlay-image)',
        'background-position': 'center',
        'background-size': 'cover',
      },
    });
  }),
],
}