import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5A3C7', // Pastel Pink
          light: '#FFC1E0',
          dark: '#E88BB5',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          light: '#F9FAFB',
          dark: '#F3F4F6',
        },
        accent: {
          DEFAULT: '#B5E7D3', // Pastel Mint
          light: '#D4F4E7',
          dark: '#9DDCC1',
        },
        mint: {
          DEFAULT: '#B5E7D3',
          light: '#D4F4E7',
          dark: '#9DDCC1',
        },
        pink: {
          DEFAULT: '#F5A3C7',
          light: '#FFC1E0',
          dark: '#E88BB5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
