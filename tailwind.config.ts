import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // New pink/cream palette (KiaBoutique-inspired)
        pink: '#FB5FAB',
        'pink-light': '#fd8ec4',
        'pink-bg': '#F5D0D9',
        'pink-muted': '#fce4ee',
        brown: '#765D5D',
        cream: '#FAFAFA',
        'cream-dark': '#F2EAEA',
        'text-dark': '#140610',
        'text-body': '#454F5E',
        'text-muted': '#7a7a7a',
        'border-light': '#EEEEEE',
        // Keep surface alias for any remaining references
        surface: '#FAFAFA',
        'surface-dark': '#F2EAEA',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        heading: ['"Merriweather"', 'Georgia', 'serif'],
        subheading: ['"Amiri"', 'Georgia', 'serif'],
        body: ['"Open Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.4s ease-out forwards',
        'slide-left': 'slideLeft 0.4s ease-out forwards',
        shimmer: 'shimmer 2s infinite',
        'carousel-fade': 'carouselFade 0.6s ease-in-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        carouselFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(251, 95, 171, 0.08)',
        'card-hover': '0 8px 32px rgba(251, 95, 171, 0.18)',
        'pink-glow': '0 0 24px rgba(251, 95, 171, 0.25)',
        glass: '0 8px 32px rgba(20, 6, 16, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config
