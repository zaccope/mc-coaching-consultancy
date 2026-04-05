import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1E52',
          light: '#152A6E',
          mid: '#122460',
          dark: '#0C1844',
          card: '#142668',
        },
        accent: {
          DEFAULT: '#00D4FF',
          light: '#55E2FF',
          dark: '#00A8D4',
          glow: 'rgba(0, 212, 255, 0.25)',
          'glow-strong': 'rgba(0, 212, 255, 0.4)',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(30px, -20px)' },
          '66%': { transform: 'translate(-20px, 15px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-25px, 20px)' },
          '50%': { transform: 'translate(15px, -30px)' },
          '75%': { transform: 'translate(-10px, -10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float-slow 25s ease-in-out infinite',
        'float-slower': 'float-slower 35s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
