import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '20px 20px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        blink: 'blink 2s linear infinite',
        popFadeIn: 'popFadeIn 0.6s ease-out',
        wave: 'wave 0.8s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        popFadeIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)', transformOrigin: 'bottom right' },
          '25%': { transform: 'rotate(15deg)', transformOrigin: 'bottom right' },
          '50%': { transform: 'rotate(-10deg)', transformOrigin: 'bottom right' },
          '75%': { transform: 'rotate(15deg)', transformOrigin: 'bottom right' },
          '100%': { transform: 'rotate(0deg)', transformOrigin: 'bottom right' },  
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({
      nocompatible: true
    }),
  ],
} satisfies Config;
