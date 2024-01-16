/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "375px",
      },
      letterSpacing: {
        "normal": "-0.01em",
        "loose": "0.1em",
        "looser": "0.15em",
      },
      lineHeight: {
        "leading-compact": "1.2",
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
        "size-10": "5.0rem",
      },
    },
  },
  plugins: [],
}

