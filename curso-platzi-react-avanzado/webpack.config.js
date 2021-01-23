const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //el output de la compilacion va a estar
  output: {
    filename: "app.bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, //tiene que utilizar para todos los .js
        exclude: /node_modules/, //excluimos los archivos de node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
