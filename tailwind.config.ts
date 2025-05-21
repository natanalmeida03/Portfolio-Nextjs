import type { Config } from "tailwindcss";

const config: Config = {
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
      "yll":"#ffc900",
      "bk1": "#1d1d1d",
      "bk2": "#151515",
      "bk3": "#FAFAFA",
      "bk4": "#F5F5F5",
      "black": "#2e2e2e",
      "pk": "#454679",
      "white": "#fff",
      transparent: 'transparent',
    },
  },
  plugins: [],
};
export default config;
