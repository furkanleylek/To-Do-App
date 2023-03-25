/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'modal': '1px 1px 5px 1px rgba(0.1, 0.2, 0.3, 0.3)',
      }
    },
    colors: {
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
      'primary': '#9CA7BC',
      'secondry': '#01010D',
      'tertiary': '#4B4B61',
      'important': '#E1860D',
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

    },
    animation: {
      'modal': 'modal both 400ms linear ',
      'menuModal': 'menuModal both 200ms linear',
      'closeModal': 'menuModal both 300ms linear',
      'buttonLeftToRight': 'buttonLeftToRight both 300ms ease-out',
      'rightToOutside': 'rightToOutside both 400ms ease-out',
      'outSideToLeft': 'outSideToLeft both 400ms ease-out'
    }
  },
  plugins: [
    require("tailwindcss-animation-delay"),

  ],
}
