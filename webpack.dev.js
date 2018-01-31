const webpack = require('webpack');
const merge   = require('webpack-merge');
const common  = require('./webpack.common.js');
const path    = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');

const historyApiFallback = require('connect-history-api-fallback');

const BrowserSync = require('browser-sync-webpack-plugin');
const hostname = 'localhost';

let config = merge(common, {
  
  devtool: 'inline-source-map',
  
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
  
  plugins: [
    
    new BrowserSync (
      {
        host: hostname,
        port: 3000,
        open: false,
        reload: false,
        proxy: 'http://localhost:8080/',
        files: [
          '*.css'
        ],
        plugins: [
          {
            module: 'bs-html-injector',
            options: {
              files: [
                './public/*.html',
                './public/bundles/*.css'
              ]
            }
          }
        ]
      }
    ),
    
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;