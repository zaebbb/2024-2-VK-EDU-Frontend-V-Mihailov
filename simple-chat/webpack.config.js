'use strict';

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
  context: SRC_PATH,
  entry: {
    index: './index.js',
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        include: SRC_PATH,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            },
          },
        ],
      },
      {
        test: /shadow\.css$/,
        include: SRC_PATH,
        use: [
          {
            loader: 'css-loader'
          },
        ],
      },
      {
        test: /\.css$/,
        include: SRC_PATH,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        include: SRC_PATH,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
        },
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'style.css',
    }),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    new HTMLWebpackPlugin({
      filename: 'chat.html',
      template: './chat.html',
    }),
  ]
};
