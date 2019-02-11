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
    extensions: ['.js', '.jsx', '.less']
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

  /*
  plugins: [
    
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ManifestPlugin(),
    
    new CleanWebpackPlugin([
      'public/bundles/*.hot-update.*'
    ]),
    
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ]
  */
};
