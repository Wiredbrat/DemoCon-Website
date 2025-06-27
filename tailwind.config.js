// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust according to your file structure
  ],
  theme: {
    extend: {
      keyframes: {
        reveal: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        }
      },
      animation: {
        reveal: "reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards",
        slide: "slide 1s ease-in-out 1.6s forwards"
      },
      fontFamily:{
        openSans: ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
};
