/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // app 폴더 내의 모든 파일을 대상으로 Tailwind 적용
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4F46E5',
        'primary-dark': '#4338CA',
        'secondary': '#8B5CF6',
        'secondary-dark': '#7C3AED',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

