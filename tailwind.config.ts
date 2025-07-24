import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      current: 'currentColor',
      "yll":"#3F3F46",
      "bk1": "#1d1d1d",
      "bk2": "#151515",
      "bk3": "#FAFAFA",
      "bk4": "#F5F5F5",
      "black": "#52525b",
      "pk": "#27272A",
      "y": "#ffc900",
      "white": "#fff",
      transparent: 'transparent',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
