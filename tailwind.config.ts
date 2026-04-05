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
          DEFAULT: '#0E1A48',
          light: '#132461',
          mid: '#0F2058',
          dark: '#0B1538',
          card: '#112058',
        },
        accent: {
          DEFAULT: '#00C8F0',
          light: '#4DD8F5',
          dark: '#00A0C8',
          glow: 'rgba(0, 200, 240, 0.25)',
          'glow-strong': 'rgba(0, 200, 240, 0.4)',
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
