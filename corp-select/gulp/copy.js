const gulp = require('gulp');
const copy = require('./helpers/copy');
const config = require('./config');

gulp.task('copy', () => copy(config.paths.src, config.paths.temp));
