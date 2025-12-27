/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background)/ <alpha-value>)",
        foreground: "rgb(var(--foreground)/ <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card)/<alpha-value>)",
          foreground: "rgb(va(--card-foreground)/<alpha-value>)"
        },
        border: "rgb(var(--border)/<alpha-value>)"
      }
    }
  },
  plugins: []
};
