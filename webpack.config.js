/*
* @Author: 67564
* @Date:   2019-03-21 15:30:28
* @Last Modified by:   67564
* @Last Modified time: 2019-03-21 16:11:10
*/
var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: [
    './index.js'
  ],

  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }]
  }
}
