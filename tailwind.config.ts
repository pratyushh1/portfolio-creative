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
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bebas)', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#0a0a0f',
          lighter: '#121218',
          card: '#1a1a24',
        },
        accent: {
          purple: '#64748b',
          blue: '#475569',
          cyan: '#94a3b8',
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
