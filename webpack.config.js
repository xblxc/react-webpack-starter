var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/App.js'
  ],
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [
            "es2015",
            "react"
          ]
        },
        include: __dirname + '/app'
      },
    ]
  },
};
