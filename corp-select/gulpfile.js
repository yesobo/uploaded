const gulp = require('gulp');
const loader = require('@bankular/development-tools/helpers/file-loader');
const bankularTask = require(loader('./gulp/bankularTaskRegistry.js'));

gulp.registry(bankularTask);
