/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"]
      },
      colors: {
        background: "rgb(var(--background)/ <alpha-value>)",
        foreground: "rgb(var(--foreground)/ <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card)/<alpha-value>)",
          foreground: "rgb(var(--card-foreground)/<alpha-value>)"
        },
        border: "rgb(var(--border)/<alpha-value>)",
        muted: "rgb(var(--muted)/<alpha-value>)",
        soft: "rgb(var(--soft)/<alpha-value>)",
        accent: "rgb(var(--accent)/<alpha-value>)"
      }
    }
  },
  plugins: []
};
