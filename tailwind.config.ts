import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        primary: "#FF131D",
        white: "#FFFFFF",
        black: "#000000",
        sectionBg: "rgba(246, 246, 246, 0.8)",
      },
    },
  },
  plugins: [],
} satisfies Config;
