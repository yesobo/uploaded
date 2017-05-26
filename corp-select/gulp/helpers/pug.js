const gulp = require('gulp');
const pug = require('gulp-pug');

module.exports = function (sourceDir, destDir) {
  return gulp.src(`${sourceDir}/**/*.pug`)
    .pipe(pug())
    .pipe(gulp.dest(destDir));
}
