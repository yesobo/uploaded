const gulp = require('gulp');
const pug = require('./helpers/pug');
const config = require('./config');

gulp.task('pug', () => pug(config.paths.temp, config.paths.temp));
