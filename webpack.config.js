/**
 *  In this webpack config, the goal is to:
 *  1. Watch JS & JSX Files, auto reload on save
 *  2. Use Browsersync to develop on multiple devices & browsers
 *  3. Watch LESS files and let Browsersync use HTML Injection to
 *     automatically update HTML & CSS Changes without reloading the page 
 *  
 *  ** Current problem:
 *  ** Allthough HTML injection is working in browsersync webpack still reloads the page.
 *  ** Todo: Exclude '.css' from webpack watch
 *
 *  4. Transform ES6 to ES2015 with Babel
 *  5. Use uglify JS to minify JS & CSS files
 *  6. Work on serverside : target : node
 *
 *  ** Current problem:
 *  ** When using app.js file as entry to work on server side node_modules must not be included so they are left out
 *  ** This causes an error in compiled JS file require is not defined.
 *  ** https://github.com/liady/webpack-node-externals/issues/17
 *
 *  * Potential Solution: Split into 2 webpack config files, 1 for client and 1 for server
 *
 *  I've included (but commented out) EJS builder which will compile ejs templates into html
 *  This is useful for client side ejs
 *
 */


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

// Replace the IP address with localhost if you use localhost
// Or add your IP Address if you use a Virtual Machine
// const hostname = 'localhost';
const hostname = '127.0.0.1';

// const ejsBuilder  = require('ejs-webpack-builder');

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

*/

var options = {
  files: ['./src/views/index.ejs'],
  target: {
    name: 'index.html',
    dir: 'public'
  }
};


const config = {
  // entry: path.resolve(__dirname, 'app.js'),     // For Server Side
  entry: COMP_DIR + '/Index.jsx',   // For Client Side
  // target: 'node',
  // externals: fs.readdirSync(path.resolve(__dirname, 'node_modules'))
  // .concat(
  //  [
  //   'react-dom/server', 'react/addons',
  //  ]
  // )
  // .reduce(function (ext, mod) {
  //  ext[mod] = 'commonjs ' + mod;
  //  return ext;
  // }, {}),

  // node: {
  //  __filename: true,
  //  __dirname: true
  // },

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
    // libraryTarget: 'commonjs2'
  },
    
 devtool: 'source-map',
  
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ],

    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader'
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
        host: hostname,
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
    // new webpack.NoEmitOnErrorsPlugin(),
    
    extractLess,
    
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
    })
    */
    
    // new ejsBuilder(options)
  ]
};

module.exports = config;