const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("node:path");

const rulesForJS = {
  test: /\.js$/i,
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-env"],
  },
};

const rules = [rulesForJS];

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.js",
    clean: true,
  },
  module: {
    rules,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    open: true,
    port: 3000,
  },
};
