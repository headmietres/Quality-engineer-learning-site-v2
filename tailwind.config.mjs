/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3a5c',
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b3c9db',
          300: '#8dafc7',
          400: '#6695b0',
          500: '#4a7a9e',
          600: '#1a3a5c',
          700: '#142e4a',
          800: '#0e2238',
          900: '#081625',
        },
        accent: {
          DEFAULT: '#e67e22',
          50: '#fef5ed',
          100: '#fde3ce',
          200: '#fbc79d',
          300: '#f9ab6c',
          400: '#f68f3b',
          500: '#e67e22',
          600: '#c96a1c',
          700: '#a55516',
          800: '#814010',
          900: '#5c2c0b',
        },
        background: '#f4f6f9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        article: '800px',
      },
      lineHeight: {
        article: '1.8',
      },
    },
  },
  plugins: [],
};
