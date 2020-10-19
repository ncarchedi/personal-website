module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    // defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      borderWidth: {
        6: "6px",
      },
      animation: {
        wave: "wave 2.5s infinite",
        point: "point 1.3s infinite",
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "10%": {
            transform: "rotate(14deg)",
          },
          "20%": {
            transform: "rotate(-8deg)",
          },
          "30%": {
            transform: "rotate(14deg)",
          },
          "40%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
          "60%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        point: {
          "50%": {
            "margin-left": "3rem",
          },
        },
      },
      transformOrigin: {
        "nearly-bottom-right": "70% 70%",
      },
    },
  },
  variants: {},
  plugins: [],
};
