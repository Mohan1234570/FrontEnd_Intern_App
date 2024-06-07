
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    //"./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        spin: 'spin 3s linear infinite',
        bounce: 'bounce 2s infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        pulse: 'pulse 2s infinite',
        zoomIn: 'zoomIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
