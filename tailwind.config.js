/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "trans-top-1": {
          "0%, 100%": { transform: "translateY(8px)" },
          "50%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blur: {
          "0%": { filter: "blur(0px)" },
          "100%": { filter: "blur(5px)" },
        },
      },
      animation: {
        "trans-top-1": "trans-top-1 1.5s ease-in-out infinite",
        fadeInPhoto: "fadeIn 2s",
        fadeInText: "fadeIn 3s",
        blur: "blur 1s linear forwards",
      },
    },
  },
  plugins: [],
};
