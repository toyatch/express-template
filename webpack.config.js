const path = require("path")

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: /node_modules/,
        loader: "swc-loader",
      },
    ],
  },
  resolve: {
      extensions: [".ts", ".js"],
  },
}
