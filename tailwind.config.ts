import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['"Aref Ruqaa Ink"', "serif"],
      },
      colors: {
        primary: "#00534D",
        secondary: "#FFFFFF",
        gold: "#D4AF37",
      },
    },
  },
  plugins: [],
};

export default config;
