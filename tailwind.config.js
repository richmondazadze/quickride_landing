/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Core System Colors */
        background: 'var(--color-background)', // deep-black
        foreground: 'var(--color-foreground)', // white
        border: 'var(--color-border)', // white-10
        input: 'var(--color-input)', // elevated-surface
        ring: 'var(--color-ring)', // electric-green
        
        /* Card & Surface Colors */
        card: {
          DEFAULT: 'var(--color-card)', // elevated-surface
          foreground: 'var(--color-card-foreground)' // white
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // elevated-surface
          foreground: 'var(--color-popover-foreground)' // white
        },
        
        /* Muted Colors */
        muted: {
          DEFAULT: 'var(--color-muted)', // muted-surface
          foreground: 'var(--color-muted-foreground)' // light-gray
        },
        
        /* Primary Colors */
        primary: {
          DEFAULT: 'var(--color-primary)', // electric-green
          foreground: 'var(--color-primary-foreground)' // deep-black
        },
        
        /* Secondary Colors */
        secondary: {
          DEFAULT: 'var(--color-secondary)', // lime-accent
          foreground: 'var(--color-secondary-foreground)' // deep-black
        },
        
        /* Accent Colors */
        accent: {
          DEFAULT: 'var(--color-accent)', // teal-bridge
          foreground: 'var(--color-accent-foreground)' // deep-black
        },
        
        /* State Colors */
        success: {
          DEFAULT: 'var(--color-success)', // success-green
          foreground: 'var(--color-success-foreground)' // deep-black
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-warning
          foreground: 'var(--color-warning-foreground)' // deep-black
        },
        error: {
          DEFAULT: 'var(--color-error)', // vibrant-red
          foreground: 'var(--color-error-foreground)' // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // vibrant-red
          foreground: 'var(--color-destructive-foreground)' // white
        }
      },
      fontFamily: {
        'heading': ['Orbitron', 'sans-serif'], // futuristic-geometric
        'body': ['Inter', 'sans-serif'], // contemporary-humanist
        'caption': ['JetBrains Mono', 'monospace'], // technical-monospace
        'data': ['Rajdhani', 'sans-serif'] // condensed-futuristic
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'black': '900'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 255, 127, 0.2)', // electric-green-20
        'glow': '0 0 20px rgba(0, 255, 127, 0.3)', // electric-green-30
        'glow-lg': '0 0 30px rgba(0, 255, 127, 0.4)', // electric-green-40
        'glow-secondary': '0 0 15px rgba(50, 205, 50, 0.2)', // lime-accent-20
        'glow-accent': '0 0 10px rgba(0, 212, 170, 0.2)', // teal-bridge-20
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)', // deep-black-30
        'glass-lg': '0 16px 64px rgba(0, 0, 0, 0.4)' // deep-black-40
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px'
      },
      animation: {
        'magnetic': 'magnetic 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-down': 'slide-down 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
      },
      keyframes: {
        'magnetic': {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '100%': { transform: 'translate3d(var(--x, 0), var(--y, 0), 0) scale(1.02)' }
        },
        'glow-pulse': {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 127, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 255, 127, 0.6)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ],
}