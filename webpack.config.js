import Path from 'path';
import HtmlWebPackPlugin  from 'html-webpack-plugin';

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'application.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, user: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [new HtmlWebPackPlugin({ template: 'app/index.html' })]
}
