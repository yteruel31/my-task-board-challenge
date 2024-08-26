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
      white: "#F8FAFC",
      foreground: "#040616",
      "in-progress": {
        400: "#f5d565",
        500: "#e9a23b",
      },
      completed: {
        400: "#a0ecb1",
        500: "#32d657",
      },
      wontdo: {
        400: "#f7d4d3",
        500: "#dd524c",
      },
      todo: {
        400: "#e3e8ee",
      },
      "new-task": "#f5e8d5",
      gray: {
        300: "#E3E8EF",
        400: "#97A3B6",
        500: "#6B7C93",
        600: "#4B5E75",
        700: "#344563",
        800: "#253858",
      },
      overlay: "#00000033",
      focus: "#3662E3",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
