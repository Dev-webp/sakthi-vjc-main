import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': '#006eb9',
        saffron: '#FF7722',
      },
      
      screens: {
        tablet: '800px',
      },
      animation: {
        "wobble-rotate-zoom": "wobble 4s ease-in-out infinite, rotateZoom 6s linear infinite, swing 5s ease-in-out infinite",
        "move-right": "moveRight 20s linear infinite",  // Add move-right animation
        "move-left": "moveLeft 20s linear infinite",   // Add move-left animation
        slide: "slide 60s linear infinite", // Adjusted timing for smoother transition
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }, // Adjusted to loop properly
        },
        wobble: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-10px) rotate(-3deg)" },
          "50%": { transform: "translateX(10px) rotate(3deg)" },
          "75%": { transform: "translateX(-5px) rotate(-1.5deg)" },
        },
        rotateZoom: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.1)" },
        },
        swing: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        moveLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
    
  },
  plugins: [],
} satisfies Config;
