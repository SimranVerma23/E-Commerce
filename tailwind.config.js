const colors = require('tailwindcss/colors')

module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage:{
        pic:"url('src/image.jpg')",
        photo:"url('src/code.jpg')"
      }
    },
    colors:{
      white:colors.white,
      blue:colors.blue,
      gray:colors.gray,
      black:colors.black,
      green:colors.green,
      orange:colors.orange,
      red:colors.red,
      primary:{
        default:'#ff5151',
        dark:'#a50404'
      },
      secondary:{
        default:'#f4f5f6'
        
      }
    
    }
    
  },
  plugins: [],
}
