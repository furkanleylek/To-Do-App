/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'landing': "url('/todo-bg.webp')",
      // },
      boxShadow: {
        'modal': '1px 1px 5px 1px rgba(0.1, 0.1, 0.1, 0.1)',
      },
      fontFamily: {
        mono: ['var(--font-roboto-mono)'],
      },
    },
    screens: {
      'tiny': '360px',
      'exsm': '460px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdlg': '880px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      blue: {
        '100': '#EBF8FF',
        '200': '#BEE3F8',
        '300': '#90CDF4',
        '400': '#63B3ED',
        '500': '#4299E1',
        '600': '#3182CE',
        '700': '#2B6CB0',
        '800': '#2C5282',
        '900': '#2A4365',
      },
      gray: {
        '50': '#F9FAFB',
        '100': '#F3F4F6',
        '200': '#E5E7EB',
        '300': '#D1D5DB',
        '400': '#9CA3AF',
        '500': '#6B7280',
        '600': '#4B5563',
        '700': '#374151',
        '800': '#1F2937',
        '900': '#111827',
      },
      transparent: 'transparent',
      current: 'currentColor',
      "navBlue": "#3498db",
      'white': '#ffffff',
      'grey': '#B0B4BB',
      'lightGrey': '#D8DCE3',
      'lightRed': '#FC7A7A',
      'red': '#FD2727',
      'darkRed': '#D11717',
      'green': '#04B21D',
      'black': '#111111',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'greyBlue': '#1d2b3a',
      'greyWhite': '#ffffff40',
      'greyB': '#D5D5D5',
      'main': '#F8FAFD',

      'primary': '#F8FAFD',
      'secondary': '#3498db',
      'accent': '#ffffff',
      'font': '#1d2b3a',
      'fontSecond': '#ffffff',
      'line': '#D8DCE3',
      'hover': '#ecebff',
      'important': '#F9A537',

    },
    keyframes: {
      'modal': {
        '0%': {
          transform: 'translate(0px,100%)',
          opacity: '0'
        },
        '100%': {
          transform: 'none',
          opacity: '1'
        },
      },
      'menuModal': {
        '0%': {
          margin: '0px 0px 0px -268px',
        },
        '100%': {
          margin: '0px 0px 0px 0px',
        },
      },
      'buttonLeftToRight': {
        '0%': {
          transform: ' translateX(-100%)',
        },
        '100%': {
          transform: 'translateX(0%)',
        }
      },
      'rightToOutside': {
        '0%': {
          transform: ' translateX(0%)',
        },
        '100%': {
          transform: 'translateX(200%)',
        }
      },
      'outSideToLeft': {
        '0%': {
          transform: ' translateX(200%)',
        },
        '100%': {
          transform: 'translateX(0%)',
        }
      }
      ,
      'bounce': {
        to: {
          transform: 'translateY(50px)'
        }
      },
      'spin': {
        from: {
          transform: "rotate(0deg)"
        },
        to: {
          transform: "rotate(360deg)"
        }
      }
    },
    animation: {
      'modal': 'modal both 400ms linear ',
      'menuModal': 'menuModal both 200ms linear',
      'closeModal': 'menuModal both 300ms linear',
      'buttonLeftToRight': 'buttonLeftToRight both 300ms ease-out',
      'rightToOutside': 'rightToOutside both 400ms ease-out',
      'outSideToLeft': 'outSideToLeft both 400ms ease-out',
      'bounce': 'bounce 2000ms infinite ease-in-out alternate',
      'spin': 'spin 860ms linear infinite',
    }
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
