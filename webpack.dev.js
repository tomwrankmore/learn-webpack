
const path = require ("path");
const common = require("./webpack.common")
const {merge} = require ("webpack-merge");


/** Set module.exports to be a function call of merge where we pass common in. This will merge what we have in webpack.common.js with whatever is in the passed object.
 * MERGES webpack.common.js AND webpack.dev.js
 * 
*/

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // All files that end in scss
        use: [
        "style-loader", //3 inject styles into DOM
        "css-loader", //2 translates css to js
        "sass-loader" //1 translates scss to css
        ]  
      }
    ]
  }
});