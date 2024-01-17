// eslint-disable-next-line
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [
    plugin(function () {}, {
      theme: {
        extend: {
          screens: {
            xs: "375px"
          },
          letterSpacing: {
            normal: "-0.01em",
            loose: "0.1em",
            looser: "0.15em"
          },
          lineHeight: {
            "leading-compact": "1.2"
          },
          fontSize: {
            "size-1": "1.3rem",
            "size-2": "1.4rem",
            "size-3": "1.6rem",
            "size-4": "1.9rem",
            "size-5": "2.0rem",
            "size-6": "2.2rem",
            "size-7": "2.4rem",
            "size-8": "2.8rem",
            "size-9": "3.6rem",
            "size-10": "5.0rem"
          },
          colors: {
            "true-white": "#ffffff",
            "true-black": "#000000",
            "cool-neutral": "#f9f9f9",
            "warn-neutral": "f2f0eb",
            ceramic: "#edebe9",
            "starbucks-green": "#006241",
            "accent-green": "#00754A",
            "light-green": "#d4e9e2",
            "house-green": "#1E3932",
            "rewards-gold": "#cba258",
            "light-gold": "#dfc49d",
            "lightest-gold": "#faf6ee",
            "error-red": "#d62b1f",
            "warn-yellow": "#fbbc05",
            "black-text": "rgba(0, 0, 0, .87)",
            "soft-black-text": "rgba(0, 0, 0, .58)",
            "white-text": "rgba(255, 255, 255, 1)",
            "soft-white-text": "rgba(255, 255, 255, .70)",
          }
        }
      }
    })
  ]
};
