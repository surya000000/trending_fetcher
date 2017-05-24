var Path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'application.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
       test: /\.(jpe?g|png|gif|svg)$/i,
       use: "file-loader?name=/public/images/[name].[ext]"
      }
    ]
  },
  plugins: [new HtmlWebPackPlugin({ template: 'app/index.html' })]
}
