/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scale: {
        102: '1.02',
      },
      blur: {
        xs: '1px',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(125px, 1fr));',
        'auto-fit-350': 'repeat(auto-fit, minmax(350px, 1fr));',
      },
      maxWidth: {
        'project-card': '500px',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%' : {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        }
        },
      },
      animation: {
        'bounce-slow': 'bounce 1.5s infinite',
      },
    },
  },
  plugins: [],
}
