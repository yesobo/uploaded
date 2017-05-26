var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

//const myAppAppFolder = myAppSrc + '/app';
const centralConfigRoot =
  //  './node_modules/@bankular/development-tools/webpack2-config';
  './move-to-bankular/@bankular/development-tools/webpack2-config';
const centralConfigRootAbs =
  //helpers.root('node_modules', '@bankular', 'development-tools', 'webpack2-config');
  helpers.root('move-to-bankular', '@bankular', 'development-tools', 'webpack2-config');

const myAppSrc = 'demo';
const componentSrc = 'src';
const myAppSrcAbs = helpers.root(myAppSrc);
const myAppAppFolderAbs = myAppSrcAbs + '/app';
const componentSrcAbs = helpers.root(componentSrc);

// used
const tsConfigFile = process.env.ENV==='production'?'tsconfig.prod.json':'tsconfig.dev.json';
const tsConfigPath = centralConfigRootAbs + '/' + tsConfigFile;
const sourcePathsArray = process.env.ENV==='production'?[ myAppAppFolderAbs, componentSrcAbs ]:[componentSrcAbs];

module.exports = {

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { /* Loader options go here */ }
      },
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: tsConfigPath }
          } , 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      { // component scoped css
        test: /\.css$/,
        include: sourcePathsArray,
        loader: 'raw-loader'
      },
      { // component scoped scss
        test: /\.scss$/,
        include: sourcePathsArray,
        loaders: ['raw-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      process.cwd(), // location of your src
      {} // a map of your routes
    ),
  ]
};

