var Path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var WebPack = require('webpack');
var config = {
  entry: './app/index.js',
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'application.js',
    publicPath: '/public/'
  },
  devServer: {
    historyApiFallback: true
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
if(process.env.NODE_ENV == 'production'){
  config.plugins.push(new WebPack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new WebPack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;
