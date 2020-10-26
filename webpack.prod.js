
const path = require ("path");
const common = require("./webpack.common")
const {merge} = require ("webpack-merge");
const {CleanWebpackPlugin} = require ("clean-webpack-plugin")

/** 
 * MERGES webpack.common.js AND webpack.dev.js 
*/

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin() // deletes and rebuilds files in dist automatically.
  ]
});