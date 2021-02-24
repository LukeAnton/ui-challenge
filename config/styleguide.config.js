const { version } = require("../package.json");
require: [
  path.join(__dirname, "css/fontawesome.css"),
  path.join(__dirname, "css/roboto.css"),
],
  (module.exports = {
    title: "Card",
    version,
    ignore: ["**/src/components/Card/**/s.style.jsx"],
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
  });
