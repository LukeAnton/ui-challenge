const { version } = require("../package.json");
module.exports = {
  title: "Card",
  version,
  ignore: ["**/src/components/Card/Card.js"],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
};
