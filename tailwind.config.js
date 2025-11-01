/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          DEFAULT: '#C97A3E',
          600: '#A0551F'
        },
        card: 'rgba(255,255,255,0.9)'
      },
      fontFamily: {
        sans: ['IRANSansX', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial']
      },
      boxShadow: {
        'coffee-glow': '0 10px 30px rgba(201,122,62,0.16)'
      }
    }
  },
  plugins: []
}
