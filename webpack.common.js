var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require ("path");
module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      /** main.jss includes a hash in the filename which changes every compilation */
    template: "./src/template.html" 
  })],
  module: {
    rules: [
      {
        test: /\.scss$/, // All files that end in scss
        use: [
        "style-loader", //3 inject styles into DOM
        "css-loader", //2 translates css to js
        "sass-loader" //1 translates scss to css
        ]  
      },
      {
        /** Test is for html at the end of filename */
        test: /\.html$/,
        use: [
          "html-loader"
          /** any image SRC encountered are required into main js */
        ]
      },
      {
        /** Test is for html at the end of filename */
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name:"[name].[hash].[ext]", //telling webpack to make a copy of any image encountered and name it, whatever the file name is . extension.
            outputPath: "images"
          }
        }
      }
    ]
  }
};