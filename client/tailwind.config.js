/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#5B9AFF",
      surface: "#1E1E1E",
      "surface-1": "#292929",
      "surface-2": "#3D3D3D",
      "on-surface": "#FFFFFF",
      "on-surface-1": "rgba(255,255,255, 0.6)",
      "primary-variant": "#85B4FF",
      "primary-variant-darker": "#3381FF",
    },
  },
  plugins: [],
};
