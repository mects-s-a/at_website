/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        display: ['var(--font-display)']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))', '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))', '4': 'hsl(var(--chart-4))', '5': 'hsl(var(--chart-5))'
        },
        // AT Brand tokens
        'at-deep':   'var(--at-deep)',
        'at-mid':    'var(--at-mid)',
        'at-light':  'var(--at-light)',
        'at-pale':   'var(--at-pale)',
        'at-teal':   'var(--at-teal)',
        'at-teal-light': 'var(--at-teal-light)',
        'at-teal-pale':  'var(--at-teal-pale)',
        'at-gold':   'var(--at-gold)',
        'at-gold-pale':  'var(--at-gold-pale)',
        'at-cream':  'var(--at-cream)',
        'at-smoke':  'var(--at-smoke)',
        'at-ink':    'var(--at-ink)',
        'at-muted':  'var(--at-muted)',
        'at-border': 'var(--at-border)',
      },
      boxShadow: {
        'at-sm': 'var(--shadow-sm)',
        'at-md': 'var(--shadow-md)',
        'at-lg': 'var(--shadow-lg)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}