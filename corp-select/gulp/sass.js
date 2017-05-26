const gulp = require('gulp');
const sass = require('./helpers/sass');
const config = require('./config');

gulp.task('sass', () => sass(config.paths.temp, config.paths.temp));
