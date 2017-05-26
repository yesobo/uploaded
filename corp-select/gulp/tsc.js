const gulp = require('gulp');
const config = require('./config');
const tsc = require('./helpers/tsc');

const sourceDirs = [
  `${config.paths.temp}/**/*.ts`,
  `!${config.paths.temp}/**/*.{spec,e2e}.ts`
];

gulp.task('tsc', () => tsc(sourceDirs, config.paths.dist, config.typescriptConfig));
