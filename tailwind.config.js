/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.{ts,tsx}', './pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        xpm: {
          blue: '#004d99',
          orange: '#f37021',
          green: '#8dc63f',
          dark: '#003366'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Inter Fallback', 'sans-serif'],
      },
      animation: {
        'shine': 'shine 3s infinite',
        'pulse-soft': 'pulse-soft 2s infinite',
        'page-fade': 'page-fade 0.3s ease-out forwards',
      },
      keyframes: {
        shine: {
          '0%': { left: '-100%' },
          '20%': { left: '100%' },
          '100%': { left: '100%' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        'page-fade': {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
};
