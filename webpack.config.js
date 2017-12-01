const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'ticket-algorithm.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MinifyPlugin()
  ]
};