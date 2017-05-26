const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './demo/polyfills.ts',
    'vendor': './demo/vendor.ts',
    'app': './demo/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  output: {
    filename: '[id].[hash].[bundle].js'
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        exclude: 'typings/index.d.ts',
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test:  /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-html-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['to-string', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['to-string', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        exclude: /src/,
        loader: 'style-loader!css-loader'
      },
			{
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
			{
        test: /\.(woff|woff2)$/,
        loader:"url?prefix=font/&limit=5000"
      },
			{
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
			{
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },

  ts: {
    compilerOptions: {
      types: ["core-js", "node", "jasmine", "q", "selenium-webdriver"]
    }
  },

  tslint: {
    emitErrors: false,
    formatter: "stylish",
    formattersDirectory: "node_modules/tslint-stylish"
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new CopyWebpackPlugin([ { from: 'node_modules/corp-styles/dist/core.css', to: 'demo-assets/core.css' } ]),

    new HtmlWebpackPlugin({
      template: 'demo/index.html'
    })
  ]
};
