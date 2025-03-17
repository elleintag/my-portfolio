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
        blue: {
          light: '#E7EEFF',
          default: '#8AA8EF',
          dark: '#333894',
          text: '#3B3F7C'
        },
        yellow: {
          default: '#F8E79D',
          bg: '#FFFBEE',
          light: '#FFF8DE',
          dark: '#564731'
        },
        green: '#8FAF54'
      },
      fontFamily: {
        'dg': ['Darker Grotesque', 'sans-serif'],
        'ct': ['Crimson Text', 'serif'],
        'dm': ['DM Sans', 'sans-serif'],
        'ss': ['Source Serif']
      },
      fontWeight: {
        'lighter': '200',
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
        '60': '0.6',
       }
    },
  },
  plugins: [],
};
export default config;

