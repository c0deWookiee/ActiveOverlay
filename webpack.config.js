const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "client"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js[x]?/,
        exclude: /(node_modules|dep)/,
        options: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  node: {
    fs: "empty"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};