import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-aloevera)', 'system-ui', 'sans-serif'],
        display: ['var(--font-aloevera)', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#000000',
          lighter: '#0a0a0a',
          card: '#111111',
        },
        accent: {
          purple: '#ffffff',
          blue: '#ffffff',
          cyan: '#ffffff',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cinematic-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1e293b 50%, #0a0a0f 100%)',
        'glow-gradient': 'radial-gradient(circle at 50% 50%, rgba(71, 85, 105, 0.1), transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(71, 85, 105, 0.3), 0 0 60px rgba(71, 85, 105, 0.15)',
        'glow-lg': '0 0 40px rgba(71, 85, 105, 0.4), 0 0 80px rgba(71, 85, 105, 0.2)',
        'glow-blue': '0 0 30px rgba(71, 85, 105, 0.3), 0 0 60px rgba(71, 85, 105, 0.15)',
        'cinematic': '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 80px rgba(71, 85, 105, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-gentle': 'float-gentle 25s ease-in-out infinite',
        'float-gentle-reverse': 'float-gentle-reverse 30s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 15s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 10s ease infinite',
        'parallax-slow': 'parallax-slow 20s ease-in-out infinite',
        'reveal-text': 'reveal-text 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-30px) translateX(10px)' },
          '66%': { transform: 'translateY(-15px) translateX(-10px)' },
        },
        'float-gentle': {
          '0%, 100%': { 
            transform: 'translate(0px, 0px) scale(1)',
            opacity: '1',
          },
          '33%': { 
            transform: 'translate(40px, -50px) scale(1.05)',
            opacity: '0.9',
          },
          '66%': { 
            transform: 'translate(-30px, -30px) scale(0.95)',
            opacity: '0.85',
          },
        },
        'float-gentle-reverse': {
          '0%, 100%': { 
            transform: 'translate(0px, 0px) scale(1)',
            opacity: '1',
          },
          '33%': { 
            transform: 'translate(-50px, 40px) scale(0.95)',
            opacity: '0.85',
          },
          '66%': { 
            transform: 'translate(30px, 30px) scale(1.05)',
            opacity: '0.9',
          },
        },
        'pulse-slow': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': { 
            transform: 'scale(1.1)',
            opacity: '0.7',
          },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'parallax-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(50px)' },
        },
        'reveal-text': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
