/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
                  
          "primary": "#f9e270",
                  
          "secondary": "#20cc98",
                  
          "accent": "#215487",
                  
          "neutral": "#272640",
                  
          "base-100": "#313944",
                  
          "info": "#85C9D6",
                  
          "success": "#6CE4DA",
                  
          "warning": "#ECA832",
                  
          "error": "#DF3445",
        },
      },
    ],
  },
  
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

