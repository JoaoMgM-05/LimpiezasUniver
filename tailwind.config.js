// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Lato", "sans-serif"]
      },
      colors: {
        // ... (tus colores brand-* existentes) ...
        'brand-light': '#FFFBDF',
        'brand-dark': '#30382F',
        'brand-mint': '#D1F2EB',
        'brand-emerald': '#50C878',
        'brand-forest': '#086E4F',
        'brand-deep-forest': '#013220',
        'brand-ivory': '#FFFFF0',
        'brand-beige': '#F7E7CE',
        'brand-sand': '#C2B280',
        'brand-brown': '#5D4037'
      },
      // --- Añade estas secciones ---
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotateX(0) rotateY(0)' },
          '25%': { transform: 'translateY(-15px) rotateX(4deg) rotateY(4deg)' }, // Reducido un poco el movimiento
          '75%': { transform: 'translateY(15px) rotateX(-4deg) rotateY(-4deg)' }, // Reducido un poco el movimiento
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite', // Nombre, duración, timing, repetición
      }
      // --- Fin de las secciones añadidas ---
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
