/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef7f1",
          100: "#d6eadc",
          200: "#afd6bd",
          300: "#7fbe98",
          400: "#4e9f6c",
          500: "#2f8550",
          600: "#206b3f",
          700: "#195534",
          800: "#133f28",
          900: "#0d291a",
          950: "#08190f"
        },
        gold: {
          100: "#fff5d6",
          200: "#fbe6a1",
          300: "#efca69",
          400: "#ddb042",
          500: "#c89427",
          600: "#a5751e",
          700: "#7e5818"
        }
      },
      boxShadow: {
        glow: "0 20px 60px rgba(13, 41, 26, 0.22)"
      },
      backgroundImage: {
        circuit:
          "radial-gradient(circle at top left, rgba(239, 202, 105, 0.24), transparent 34%), radial-gradient(circle at bottom right, rgba(127, 190, 152, 0.2), transparent 30%)"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"]
      },
      maxWidth: {
        content: "1200px"
      }
    }
  },
  plugins: []
};
