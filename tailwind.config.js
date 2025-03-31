import forms from '@tailwindcss/forms';
import svgToTinyDataUri from 'mini-svg-data-uri';
import defaultTheme from 'tailwindcss/defaultTheme';

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.tsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
    },
  },

  plugins: [
    forms,
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-pattern': (value) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg"><defs><pattern id="a" width="72" height="43.875" patternTransform="rotate(135)scale(4)" patternUnits="userSpaceOnUse"><rect width="100%" height="100%" fill="${value}"/><path fill="none" stroke="#f8fafc" stroke-width="1.5" d="m14.296 7.185 7.236 7.234L36.002-.048l14.47 14.47 7.236-7.233L36-14.518Zm-7.275 7.251 7.258 7.26 7.259-7.26-7.258-7.259zm-28.798 14.76 7.237 7.237L-.023 21.916 14.452 36.39l7.26-7.258L0 7.42Zm50.746 7.193-7.258-7.258-7.26 7.258 7.26 7.26zm57.568.046 7.24-7.238L72 7.42 50.282 29.137l7.259 7.259L72.02 21.918Zm-28.993-.042-7.26-7.258-7.258 7.258 7.26 7.26zm.233 14.742L36 29.358 14.223 51.135l7.258 7.258L36 43.875l14.518 14.517ZM50.453 14.45l7.259 7.26 7.258-7.26-7.258-7.257z"/></pattern></defs><rect width="800%" height="800%" fill="url(#a)" transform="translate(0 -123)"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      );
    },
  ],
};
