/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-blue-1": "hsl(217, 28%, 15%)",
      "dark-blue-2": "hsl(218, 28%, 13%)",
      "dark-blue-3": "hsl(216, 53%, 9%)",
      "dark-blue-4": "hsl(219, 30%, 18%)",
      "accent-cyan": "hsl(176, 68%, 64%)",
      "accent-blue": "hsl(198, 60%, 50%)",
      "light-red-error": "hsl(0, 100%, 63%)",
      "neutral-white": "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
