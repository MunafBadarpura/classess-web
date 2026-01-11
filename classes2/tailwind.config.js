/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Fredoka", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#4F46E5",
          purple: "#9333EA",
          light: "#F5F3FF",
          accent: "#F472B6",
        },
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        blob: "blob 7s infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
      },
      animationDelay: {
        "2000": "2s",
      },
    },
  },
  plugins: [],
};