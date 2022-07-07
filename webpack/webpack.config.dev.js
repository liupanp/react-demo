const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
});

module.exports = {
  mode: 'development',                              
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {                                         
    path: path.resolve(__dirname, '../build'),      
    filename: 'js/[name].[hash].bundle.js',         
  },
  devServer: {
    port: 3000,

  },
  module: {
    rules: [              
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },

  plugins: [
    htmlWebpackPlugin,
  ],

  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
  },
};