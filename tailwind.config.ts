import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '240px', 
      'sm': '666',
      'md': '999',
      'lg': '1233',
      'xl': '1666',  
      
      
    },
  
    
    extend: {

        backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

        fontFamily:{
          headerTitel: ["Pixelify Sans","cursive"],
          buttonFont: ["Josefin Sans", "sans-serif"]


      }
    },
  },
  plugins: [],
}
export default config
