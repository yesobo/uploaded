const gulp = require('gulp');
const inlineResources = require('./helpers/inline-resources');
const config = require('./config');

gulp.task('inline-resources', (done) => inlineResources(config.paths.temp, done));
