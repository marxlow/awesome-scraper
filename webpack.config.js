const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /(\.js)$/,
      exclude: /(node_modules|dist)/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },
  node: {
    fs: "empty",
    net: "empty"
  },
  mode: 'production',
  stats: {
    colors: true
  },
  devtool: 'source-map'
};