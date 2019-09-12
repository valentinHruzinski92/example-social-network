'use strict';
const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

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
  watch: true,
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
      enforce: 'pre',
      test: /\.ts$/,
      loader: 'tslint-loader',
      exclude: /(node_modules)/,
      options: {
        configFile: './tslint.json'
      }
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
    }),
    new CopyWebpackPlugin([{
      from: resolve('assets/images'), // should be changed in future
      to: resolve('dist/assets/images'),
      toType: 'dir'
    }])
  ],
  resolve: {
    extensions: ['.js', '.ts']
  },
}
