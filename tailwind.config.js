module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      Italiano:['Italianno'],
      DM:[ 'DM Sans', 'sans-serif']
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}