/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'landing-light-bg': 'url(/src/assets/images/landing/landingBackground.svg)',
        'landing-dark-bg': 'url(/src/assets/images/landing/landingBackgroundDark.svg)',
      },
      colors: {
        dark: {
          black: '#222831',
          gray: '#393E46',
          orange: '#FD7014',
          white: '#EEEEEE',
        },
        light: {
          white: '#EFF5F5',
          light: '#D6E4E5',
          teal: '#497174',
          orange: '#FD7014',
        },
      },
    },
  },
  plugins: [],
};
