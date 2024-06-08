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
        "default": "#64748b",
        "emphasis": "#14428B",
      },
      fontFamily: {
        'title': ['TitleFont', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
