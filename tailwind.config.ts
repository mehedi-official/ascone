import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      'primary': '#1C3F3A',
      'secondary': '#0A0C29',
      'white': 'rgb(255, 255, 255)',
      'black': 'rgb(0, 0, 0)',
      'neutral': {
        'yellow': '#EBE9DA',
        'sky': '#E0E9E9'
      },
      'gray': {
        '500': '#576177',
        '400': '#797F8F'
      }
    },
    extend: {}
  },

  plugins: []
} satisfies Config;
