'use strict';
const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.ts'
  ],
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },

  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    }, {
      test: /\.css$/,
      use: ['css-loader', 'vue-style-loader',]
    }, {
      test: /\.less$/,
      loader: ['vue-style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.js$/,
      use: 'babel-loader'
    }, {
      test: /\.ts$/,
      exclude: /node_modules|vue\/src/,
      loader: "ts-loader",
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    }, {
      test: /\.html$/,
      loader: 'vue-template-loader',
      // Мы не хотим передавать файл `src/index.html` этому загрузчику.
      exclude: /index.html/,
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
