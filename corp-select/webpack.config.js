const centralConfig = 
//  '@bankular/development-tools/helpers/file-loader';
  './move-to-bankular/@bankular/development-tools/webpack2-config/webpack.dev.js';

/* //OLD BANKULAR CONFIG

const fileLoader = 
  require('@bankular/development-tools/helpers/file-loader');

module.exports = require(
  fileLoader('config/webpack.dev.js', 'library'));
*/

module.exports = require(centralConfig);
