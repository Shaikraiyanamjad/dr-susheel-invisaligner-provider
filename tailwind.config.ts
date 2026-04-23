import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}", // add this
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "scroll-track": "var(--scroll-track)",
        "scroll-thumb": "var(--scroll-thumb)",
        "process-bg": "var(--process-bg)",
        "muted-text": "var(--muted-text)",
        "card-border": "var(--card-border)",
        "soft-bg": "var(--soft-bg)",
        accent: "var(--accent)",
        "highlight-bg": "var(--highlight-bg)",
        "green-bg": "var(--green-bg)",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        dmsans: ["var(--font-dmsans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;