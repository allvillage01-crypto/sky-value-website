import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B2852",
        accent: "#26A6CD",
        background: "#F5F8FB",
        ink: "#19283C",
        muted: "#65768A",
      },
      fontFamily: {
        jp: ["var(--font-noto-sans-jp)", "sans-serif"],
        en: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
