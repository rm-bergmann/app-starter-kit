const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin     = require('webpack-manifest-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const COMP_DIR  = path.resolve(__dirname, './src/components');

const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const extractLess = new ExtractTextPlugin({
  filename: 'style.css',
  disable: process.env.NODE_ENV === 'development'
});

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

let config = {
  
  entry: {
    app: [
      COMP_DIR + '/Index.jsx'
    ]
  },
  
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR + '/bundles/',
    publicPath: '/bundles/'
  },
  
  node: {
    fs: 'empty'
  },
  
  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {

    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },

      {
        test: /\.(less)$/,
        loader: ExtractTextPlugin.extract(
        ['css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => autoprefixer({
                browsers: ['last 3 versions', '> 1%']
              }),
            }
          }, 'less-loader'
        ])
      }
    ]
  },
  
  plugins: [
    
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new ManifestPlugin(),
    
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    
    new CleanWebpackPlugin([
      'public/bundles/*.hot-update.*'
    ]),
    
    extractLess
  
  ]
};

module.exports = config;