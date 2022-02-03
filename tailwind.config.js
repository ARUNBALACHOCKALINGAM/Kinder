module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'purple': '#5A287D'
      },
      margin: {
        '96px': '96px',
      }
    },
    fontFamily: {
      'mono': ['Poppins'],
    },
    screens: {
      'mobile':'300px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },

  plugins: [],
}
