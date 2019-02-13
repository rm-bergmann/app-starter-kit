const webpack = require('webpack');
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

module.exports = {

  entry: {
    bundle: ['babel-polyfill', './src/index'],
  },

  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR + '/bundles/',
    publicPath: '/bundles/'
  },

  node: {
    fs: 'empty'
  },

  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', 'json', '.less'],
    alias: {
      less: path.join(__dirname, 'src', 'less'),
      components: path.join(__dirname, 'src', 'components'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          }
        ],
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules\/.*\.(?!css|less)/,
          chunks: 'initial',
          name: 'vendor',
        },
      },
    },
  },
};
