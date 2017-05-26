var path = require('path');

// This module is located in node_modules/@bankular/development-tools/webpack2-config/
var _root = path.resolve(__dirname, '../../../..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

exports.root = root;
