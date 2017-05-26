var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const myAppSrc = 'demo';
const myAppSrcAbs = helpers.root(myAppSrc);
const myAppAppFolderAbs = myAppSrcAbs + '/app';

module.exports = webpackMerge(commonConfig, {

  devtool: 'cheap-module-eval-source-map',

  entry: {
    'polyfills': './' + myAppSrc + '/polyfills.ts',
    'vendor': './' + myAppSrc + '/vendor.ts',
    'app': './' + myAppSrc + '/main.ts'
  },
  
  output: {
    path: helpers.root('.tmp'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [
      { // application wide styles
        test: /\.css$/,
        exclude: myAppAppFolderAbs,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap'
        })
      }
    ]
  },
  
  plugins: [
    new ExtractTextPlugin('[name].css'),

    new HtmlWebpackPlugin({
      template: myAppSrc + '/index.html'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
  ],
  
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
