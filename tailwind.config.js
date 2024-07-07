/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-minmax': 'repeat(auto-fill, minmax(200px, 1fr))',
        // Tambahkan nilai lainnya sesuai kebutuhan
      }
    },
  },
  plugins: [],
}

