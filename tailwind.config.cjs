/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
             colors: {
              "atasp-light-green": "#18CF00",
              "atasp-mid-green": "#34C200",
              "atasp-dark-green" : "#11aa11",
              "atasp-mid-red" : "#F02C07",
              "atasp-maroon" : "#B40805",
      },
          backgroundImage : {
              'bannerImage' : "url('/images/street1.png')",
              'infraBannerImage' : "url('/images/kwareBg1.jpg')",
              'firstBgImageInfra' : "url('/images/BgSocialInfraMid.jpg')",
              'topBannerOutreach' : "url('/images/topBannerOutreach.jpg')"
      },
      keyframes: {
        textSlide : {
          '0%' : {transform: 'translateX(-30%)', display: 'none', opacity: 0, filter: 'blur(3px)'},
          '100%' : {transform: 'translateX(0)', display: 'block', opacity: 1, filter: 'blur(0)'}
        }
      },
      animation: {
        textSlide : 'textSlide 1.5s ease-in-out'
      }
    },
  },
  plugins: [
        require('tailwind-scrollbar-hide')
  ],
}
