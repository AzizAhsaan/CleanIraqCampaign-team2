/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize:{
        '2xs': '.650rem',
      },
        colors:{
        primary:"#3FACE3",
        secondary:'#69B184',
        nutral:"#F3F7F5",
        light:'#FFFDFA',
        gray1:'#333333',
        gray2:'#4B4B4B',
        gray3:'#A49F9F',
        gray4:'#C3BFBF',
      },
      fontFamily: {
        'ibm-plex-sans-arabic': ['IBM Plex Sans Arabic', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        "2sm":"320px"
      },
    },
  },
  plugins: [],
}
