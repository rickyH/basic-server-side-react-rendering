const path = require('path');

const config = {
  entry: ['babel-polyfill', './ui-server/renderers/dom.js'],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'ui-server/public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js|.jsx?$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
};

module.exports = config;
