const loader = require('@bankular/development-tools/helpers/file-loader');

exports.config = require(loader('config/protractor.conf.js')).config;
