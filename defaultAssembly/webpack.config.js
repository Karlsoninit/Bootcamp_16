var HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/assets/index.html"
    })
  ]
};
