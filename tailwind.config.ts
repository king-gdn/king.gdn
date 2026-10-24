import daisyui from 'daisyui';
import typography from '@tailwindcss/typography'

export const themes = [
  {
    light: {
      'primary': '#3479b1',
      'secondary': '#bc506c',
      'accent': '#2e3343',
      'neutral': '#2e3343',
      'base-100': '#f5f7f4',
      'info': '#acd9ec',
      'success': '#176341',
      'warning': '#f7c76e',
      'error': '#e85463',
    },
  },
  {
    dark: {
      'primary': '#3479b1',
      'secondary': '#bc506c',
      'accent': '#f5f7f4',
      'neutral': '#f5f7f4',
      'base-100': '#1c1f29',
      'info': '#acd9ec',
      'success': '#176341',
      'warning': '#f7c76e',
      'error': '#e85463',
    },
  },
  {
    black: {
      'primary': '#3479b1',
      'secondary': '#bc506c',
      'accent': '#f5f7f4',
      'neutral': '#f5f7ee',
      'base-100': '#000000',
      'info': '#acd9ec',
      'success': '#176341',
      'warning': '#f7c76e',
      'error': '#e85463',
    },
  },
]

module.exports = {
  content: ['./content/**/*.md'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'a': {
              // 'color': 'hsl(var(--p))',
              'text-decoration': 'underline',
              'text-underline-offset': '6px',
              // 'text-decoration-color': 'hsl(var(--s))',
              'text-decoration-color': themes[0].light?.secondary,
            },
            '.prose h1, .prose h2 a, .prose h3 a, .prose h4 a, .prose h5 a, .prose h6 a': {
              'text-decoration': 'none',
              // 'color': 'hsl(var(--s))',
            },
          }
        }
      }
    },
  },
  plugins: [daisyui, typography],
  daisyui: {
    logs: false,
    themes
  }
}

