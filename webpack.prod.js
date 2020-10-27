
const path = require ("path");
const common = require("./webpack.common")
const {merge} = require ("webpack-merge");
const {CleanWebpackPlugin} = require ("clean-webpack-plugin")
const MiniCssExtractPlugin = require ("mini-css-extract-plugin")

/** 
 * MERGES webpack.common.js AND webpack.dev.js 
*/

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].js", /**[name] comes from entrypoint object in webpack common */
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css"
    }), 
    new CleanWebpackPlugin() // deletes and rebuilds files in dist automatically.
  ],
  module: {
    rules: [
      {
        test: /\.scss$/, // All files that end in scss
        use: [
        MiniCssExtractPlugin.loader, //3 Extract CSS into files.
        "css-loader", //2 translates css to js
        "sass-loader" //1 translates scss to css
        ]  
      }
    ]
  }
});