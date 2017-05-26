var webpackRxjsExternals = require('webpack-rxjs-externals');
var webpackAngularExternals = require('webpack-angular-externals');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

var glob = require("glob");

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

const myAppSrc = 'src';
const myAppSrcAbs = helpers.root(myAppSrc);

const entryFile = glob.sync(`./${myAppSrc}/*.module.ts`);

const outputFile = entryFile.toString().split('/').slice(-1)[0].replace('.ts', '.js');

module.exports = webpackMerge(commonConfig, {

  devtool: 'source-map',

  entry: entryFile,

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: outputFile,
    library: 'myLibraryName',
    libraryTarget: 'commonjs2' 
  },

  externals: [
    webpackAngularExternals(),
    webpackRxjsExternals()
  ],

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })
  ]
});
