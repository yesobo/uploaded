const gulp = require('gulp');
const del = require('./helpers/del');

gulp.task('clean:tmp', (done) => del('.tmp', done));
gulp.task('clean:dist', (done) => del('dist', done));
gulp.task('clean:index', (done) => del(['index.js', 'index.d.ts'], done));
