import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "default": "#334155", // slate-700
        "emphasis": "#14428B", // shirt color
        "accent": "rgba(219, 39, 119, .3)" // rose-500
      },
      fontFamily: {
        'title': ['TitleFont', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
