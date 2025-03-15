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
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '84': '21rem',
        '90': '22.5rem',
        '96': '24rem',
        '108': '27rem',
        '114': '28.5rem',
        '120': '30rem',
        '144': '36rem',
        '156': '39rem',
        '158': '40rem',
        '160': '42rem',
        '164': '44rem',
        '168': '48rem',
        '174': '50rem',
        '176': '56rem',
        '180': '66rem'
       },
       scale: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '43': '0.43',
        '45': '0.45',
        '120': '1.2',
        '150': '1.5',
        '175': '1.75',
        '200': '2'
       }
    },
  },
  plugins: [],
};
export default config;

