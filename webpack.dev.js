
const path = require ("path");
const common = require("./webpack.common")
const {merge} = require ("webpack-merge");


/** Set module.exports to be a function call of merge where we pass common in. This will merge what we have in webpack.common.js with whatever is in the passed object.*/

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
});