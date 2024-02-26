import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          Poppins: ["var(--font-Poppins)"],
          Josefin: ["var(--font-Josefin)"],
        },
        backgroundImage:{
          'gradient-radial':'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        screens:{
          "1000px": "1000px",
          "1100px": "1100px",
          "1200px": "1200px",
          "1300px": "1300px",
          "1500px": "1500px",
          "800px": "800px",
          "400px": "400px",
        }
    },
  },
  plugins: [nextui()],
} 

export default config;
