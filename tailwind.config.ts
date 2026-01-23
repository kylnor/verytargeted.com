import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'stealth-carbon': '#484B50',
        'precision-teal': '#29899C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -10px)' },
          '50%': { transform: 'translate(-5px, -20px)' },
          '75%': { transform: 'translate(-10px, -10px)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(-15px, -15px)' },
          '66%': { transform: 'translate(10px, -25px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(5px, -5px)' },
          '40%': { transform: 'translate(-10px, -15px)' },
          '60%': { transform: 'translate(15px, -20px)' },
          '80%': { transform: 'translate(-5px, -10px)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'float-medium': 'float-medium 15s ease-in-out infinite',
        'float-slower': 'float-slower 25s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
