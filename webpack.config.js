const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const StampPlugin = require("./plugins/StampPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle[hash].js",
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new StampPlugin(),
  ],
};
