module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xl: { max: '1100px' },
      lg: { max: '992px' },
      md: { max: '767.98px' },
      sm: { max: '576px' },
      xs: { max: '359.98px' },
    },
    container: {
      center: true,
      padding: '15px',
    },
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        gray: '#848FAC',
        dark: '#0E1734',
        accent: '#007bff',
      },
    },
  },
  plugins: [],
};
