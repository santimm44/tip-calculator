/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        //### Primary
          strongCyan: "hsl(172, 67%, 45%)",
        //### Neutral
          veryDarkCyan: "hsl(183, 100%, 15%)",
          darkGrayishCyan: "hsl(186, 14%, 43%)",
          grayishCyan: "hsl(184, 14%, 56%)",
          lightGrayishCyan: "hsl(185, 41%, 84%)",
          verylightGrayishCyan: "hsl(189, 41%, 97%)",
    }
  },
  screens:{
    'max-375': {max:'375px'},
    'max-665': {max:'665px', min:'376px'}
  }
},
plugins: [],
}