import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          pink: '#E8A5D0',
          purple: '#B89FD9',
          yellow: '#FDE8C3',
        },
      },
    },
  },
  plugins: [],
};

export default config;
