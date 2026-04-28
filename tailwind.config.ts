import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core UI
        primary: '#000000',
        secondary: '#717171',
        border: '#F0F0F0',

        // Backgrounds
        background: '#FFFCF9',
        muted: '#FAF7F3',

        // Accents
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
