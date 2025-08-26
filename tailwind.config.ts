import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#2C2D33",
        card: "#21222D",
        muted: "#87888C",
        accent: "#00E0A4",
        'accent-2': "#A9DFD8",
        'accent-3': "#FEB95A",
        'accent-4': "#F2C8ED",
        'accent-5': "#20AEF3",
        'accent-6': "#171821"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.25)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
};

export default config;
