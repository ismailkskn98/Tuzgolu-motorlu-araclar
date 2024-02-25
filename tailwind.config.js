/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'landing-light-bg': 'url(/src/assets/images/landing/landingBackground.svg)',
        'landing-dark-bg': 'url(/src/assets/images/landing/landingBackgroundDark.svg)',
        'contact-bg': 'url(/src/assets/images/contact/contact.svg)',
      },
      colors: {
        dark: {
          black: '#1b1e25',
          // gray: '#393E46',
          gray: '#222831',
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
