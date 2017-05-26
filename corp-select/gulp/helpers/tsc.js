const gulp = require('gulp');
const typescript = require('gulp-typescript');
const merge = require('merge2');
const sourcemaps = require('gulp-sourcemaps');

module.exports = function (sourceDirs, destDir, typescriptConfig) {
  let tsResult = gulp
    .src(sourceDirs)
    .pipe(sourcemaps.init())
    .pipe(typescript(typescriptConfig));

    return merge([
      tsResult.dts.pipe(gulp.dest(destDir)),
      tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(destDir))
    ]);
}
