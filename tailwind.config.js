/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-bg.png')",
        "hero-about": "url('/img/hero-about.png')",
        "hero-service": "url('/img/hero-services.jpg')",
      },
    },
  },
  plugins: [],
};
