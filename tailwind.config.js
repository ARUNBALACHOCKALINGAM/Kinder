module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        purple: "#5A287D",
        sec: "#A58CC3",
        acc: "#E4E3E3",
        whitesmoke: "#fef3c7",
        black: "rgb(0, 0, 0)",
        gray: "#e4e2e7",
        lav: "#e4e2e7",
        yellow: "#F1CD83",
        green:"#008000"
      },
      margin: {
        "96px": "96px",
      },
    },
    fontFamily: {
      mono: ["Poppins"],
    },
    screens: {
      mobile: "300px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },

  plugins: [],
};
