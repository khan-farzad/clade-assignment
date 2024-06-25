import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#E7E7E7",
        "secondary": "#DC4A2D",
        "other": "#B0B0B0",
        "this-brown": "#4F4F4F",
        "tertiary": "#3D3D3D",
        "alt": "#6E6D6D",
        "this-gray": "#888888",
        "this-white": "#D1D1D1",
        "background": "#FCFCFC",
      },
    },
  },
  plugins: [],
};
export default config;
