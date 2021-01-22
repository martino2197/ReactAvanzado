const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //el output de la compilacion va a estar
  output: {
    filename: "app.bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
