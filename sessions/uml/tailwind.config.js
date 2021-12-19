module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter']
      }
    },
  },
  variants: {
    extend: {
      "backgroundColor": ["active"],
      "blur": ["hover", 'group-hover']
    },
  },
  plugins: [],
}
