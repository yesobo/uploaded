const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('dist', callback => runSequence(
  ['clean:tmp', 'clean:dist', 'clean:index'],
  'copy',
  ['pug', 'sass'],
  'inline-resources',
  'tsc',
  'index',
callback));
