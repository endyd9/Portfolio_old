/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        intro: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        cursor: {
          from: {
            "border-right": "3px solid white",
          },
          to: {
            "border-right": "none",
            "margin-right": "6px",
          },
        },
        up: {
          "0%": {
            opacity: 0,
            transform: "translateY(50%)",
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        intro: "intro 2.5s",
        cursor: "cursor 1s steps(2) infinite",
        up: "up 1.2s",
      },
    },
  },
  plugins: [],
};
