import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#0E1B6B',
        primary2: "#4763E4",
        Secondary1 : '#F6F6F6',
        Secondary2 : '#FFFFFF',
        Secondary3 : '#797979',
      }

    },
  },
  plugins: [],
};
export default config;
