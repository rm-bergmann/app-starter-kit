const webpack = require('webpack');
const path    = require('path');
// const fs      = require('fs');

const BUILD_DIR = path.resolve(__dirname, 'public');
const COMP_DIR  = path.resolve(__dirname, './src/components');

const BrowserSync       = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
  filename: 'style.css',
  disable: process.env.NODE_ENV === 'development'
});

// const ejsBuilder  = require('ejs-webpack-builder');

const babelLoaderOptions = {
  presets: [
    ['es2015', { loose: true, modules: false }],
    'react'
  ]
};
/*
let nodeModules = {};

fs.readdirSync('node_modules')
.filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
  nodeModules[mod] = 'commonjs' + mod;
});

new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development')
  }
});

var options = {
  files: ['./views/index.ejs']
};
*/

const config = {
  // entry: './app.js',
  entry: COMP_DIR + '/Index.jsx',
  // target: 'node',

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
   // libraryTarget: 'commonjs2'
  },
    
 // devtool: 'source-map',
  
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],

    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: babelLoaderOptions
          }
        ]
      },
      {
        test: /\.(less)$/,
        use: extractLess.extract(
          {
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              },
              {
                loader: 'less-loader'
              }
            ],
            fallback: 'style-loader'
          }
        )
      }
    ]
  },
  
  /*
  externals: {
    nodeModules,
  },
  */

  plugins: [
    new BrowserSync (
      {
        host: '127.0.0.1',
        port: 3000,
        open: false,
        // reload: false,
        server: {
          baseDir: [BUILD_DIR]
        },
        files: [
          '*.css'
        ],
        plugins: [
          {
            module: 'bs-html-injector',
            options: {
              files: ['*.html']
            }
          }
        ]
        // files: ['../views/*.ejs']
      }
    ),
    
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    
    extractLess
    
    /*
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    */
   // new ejsBuilder(options)
  ]
};

module.exports = config;