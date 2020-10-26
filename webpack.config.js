const path = require ("path");


module.exports = {
  mode: "development",
  devtool: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] 
      }
    ]
  }
};



/** 
 * css-loader translates css to js
 * style-loader injects styles into DOM
 * */ 