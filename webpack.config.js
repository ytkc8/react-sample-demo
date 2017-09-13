require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
      'babel-polyfill',
      './src/js/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ],
    module: {
        loaders: [
          {
            test: /\.(css|scss)$/,
            loader: 'style!css!sass'
          },
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: "babel-loader"
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
          }
        ]
    }
};
