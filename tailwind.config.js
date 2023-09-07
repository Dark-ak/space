/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      barlow: ['Barlow Condensed', 'sans-serif'],
      bellefair: ['Bellefair', 'serif']
    },
    colors: {
      blue: "#0B0D17",
      light: "#D0D6F9",
      white: "#FFFFFF",
      glass: "rgba(255, 255, 255, .0)",
      gray: "#383B4B"
    },
    backgroundImage: {
      home_pc: "url(/assets/home/background-home-desktop.jpg)",
      home_tab: "url(/assets/home/background-home-tablet.jpg)",
      home_phone: "url(/assets/home/background-home-mobile.jpg)",
      dest_phone: "url(/assets/destination/background-destination-mobile.jpg)",
      dest_tab: "url(/assets/destination/background-destination-tablet.jpg)",
      dest_pc: "url(/assets/destination/background-destination-desktop.jpg)",
      crew_phone: "url(/assets/crew/background-crew-mobile.jpg)",
      crew_tab:"url(/assets/crew/background-crew-tablet.jpg)",
      tech_phone: "url(/assets/technology/background-technology-mobile.jpg)",
      tech_tablet: "url(/assets/technology/background-technology-tablet.jpg)"
    },
  },
  plugins: [],

}

