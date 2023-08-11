const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("node:path");

const rulesForJS = {
  test: /\.js$/i,
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-env"],
  },
};

const rulesForCss = {
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
};

const rules = [rulesForJS, rulesForCss];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";
  return {
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: isProduction ? "[name].[contenthash].js" : "app.js",
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
};
