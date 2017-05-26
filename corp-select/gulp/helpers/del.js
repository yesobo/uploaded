const del = require('del');

module.exports = function (pattern, callback) {
 del(pattern).then(() => callback());
}
