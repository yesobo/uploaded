const gulp = require('gulp');
const sass = require('gulp-sass');

module.exports = function (sourceDir, destDir) {
  return gulp.src(`${sourceDir}/**/*.scss`)
    .pipe(sass({
        outputStyle: "compressed"
    }).on('error', sass.logError))
    .pipe(gulp.dest(destDir));
}
