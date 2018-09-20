const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader", // compiles Sass to CSS, using Node Sass by default
        "import-glob-loader" // Allow to import scss in glob way EG.: @import "foo/**/*";
      ]
    }],
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true,
    open: true,
    contentBase: path.join(__dirname, 'src'),
    host: '0.0.0.0',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ]
};