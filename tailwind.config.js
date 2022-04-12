const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mustard': '#ECE942',
        'myred': '#ff0000'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))'
      },
      fontFamily: {
        "slabby": ["Alfa Slab One", ...defaultTheme.fontFamily.sans],
        "funky": ["Shrikhand", ...defaultTheme.fontFamily.sans],
        "monoton": ["Monoton", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
