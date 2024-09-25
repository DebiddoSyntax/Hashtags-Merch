/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        // josefin: ["Josefin", "Sans"],
        inria: ["Inria Sans", "Sans"],
        irish: ["Irish Grover"],
        rowdies: ["Rowdies", "sans-serif"]
      }
    },
  },
  plugins: [],
}

