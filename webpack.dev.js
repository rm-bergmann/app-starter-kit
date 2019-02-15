const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const historyApiFallback = require('connect-history-api-fallback');

const hostname = 'localhost';

const config = merge(common, {
  
  devtool: 'inline-source-map',
  mode: 'development',

  output: {
    filename: '[name].js',
    path: PUBLIC_DIR,
    publicPath: '/',
  },

  devServer: {
    contentBase: PUBLIC_DIR,
    historyApiFallback: true,
    inline: true,
    hot: true,
    overlay: true,
    https: false,
    port: 3000,
  },
  
  plugins: [   
    new webpack.HotModuleReplacementPlugin(),
  ],
  
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          },
          /*
          { 
            loader: 'text-transform-loader',
            options: {
              prependText: '@import "variables.less"',
            }
          },
          */
        ],
      },
    ],
  },
});

module.exports = config;