/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/lib/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        melaza: {
          indigo: "#370066",
          purple: "#4c1d95",
          poppy: "#E8AA13",
          rose: "#DB6773",
          twilight: "#F8F3FB",
        },
      },
      boxShadow: {
        glow: "0 24px 80px rgba(55, 0, 102, 0.14)",
      },
    },
  },
  plugins: [],
};
