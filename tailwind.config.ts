import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0F",
          soft: "#131319",
          border: "#22222C",
        },
        accent: {
          DEFAULT: "#2DD4BF",
          dim: "#0F766E",
          bright: "#5EEAD4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-cta": "pulse-cta 2.2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-cta": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.55)" },
          "50%": { boxShadow: "0 0 0 12px rgba(37,211,102,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
