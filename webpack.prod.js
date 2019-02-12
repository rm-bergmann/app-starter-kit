const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InlineEnvironmentVariablesPlugin = require('inline-environment-variables-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');

const config = merge(common, {
  devtool: 'source-map',
  mode: 'production',

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'bundle',
          test: /\.(less|css)$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: './public/index-build.html',
    }),
    
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),

    new UglifyJSPlugin({
      sourceMap: true
    }),
    
    new OptimizeCss({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
      canPrint: true,
    }),
    
    new CleanWebpackPlugin('./build'),

    new InlineEnvironmentVariablesPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    
    /*
    new ManifestPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    */   
  ],

  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () =>
                autoprefixer({
                  browsers: ['last 3 versions', '> 1%'],
                }),
            },
          },
          'less-loader',
        ],
      },
    ],
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: BUILD_DIR,
    publicPath: '/',
  },
});

module.exports = config;