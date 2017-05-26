const gulp = require('gulp');

module.exports = function (sourceDir, destDir) {
  return gulp
    .src(`${sourceDir}/**/*`)
    .pipe(gulp.dest(destDir));
};
