import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        navy: {
          DEFAULT: '#1A202C',
        },
        slate: {
          DEFAULT: '#4A5568',
        },
        teal: {
          DEFAULT: '#319795',
        },
        light: {
          DEFAULT: '#EDF2F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'title': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        'subtitle': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        'content': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}
export default config 