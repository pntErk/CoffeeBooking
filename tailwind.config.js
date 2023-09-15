/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        coffee: "#c8aea0",
      },
      fontFamily: {
        custom: ['ButterChicken', 'sans'], // 'CustomFont' is the name you defined in @font-face
      },
  
    },
  },
  // ...
};
