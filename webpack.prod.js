const webpack = require('webpack');
const merge   = require('webpack-merge');
const common  = require('./webpack.common.js');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCss    = require('optimize-css-assets-webpack-plugin');

let config = merge(common, {
  devtool: 'source-map',
  
  plugins: [
    
    new UglifyJSPlugin({
      sourceMap: true
    }),
    
    new OptimizeCss({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions:
      {
        discardComments:
          {
            removeAll: true
          }
      },
      canPrint: true
    }),
    
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});

module.exports = config;