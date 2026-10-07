import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07100d",
        porcelain: "#f7f8f4",
        moss: "#a8c7a1",
        copper: "#d89b6d",
        marine: "#78a6b8",
        ruby: "#9b1c0e",
        oxblood: "#250509",
        cream: "#f4e1c7",
        paper: "#fbf3e8",
        blush: "#fbefe1",
        cocoa: "#422020",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Avenir Next",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
        display: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
        handwriting: ["var(--font-handwriting)", "cursive"],
      },
      boxShadow: {
        glow: "0 20px 70px rgba(93, 10, 20, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;