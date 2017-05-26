const gulp = require('gulp');
const config = require('./config');
const index = require('./helpers/index');

gulp.task('index', (callback) => index(config.paths.dist, callback));
