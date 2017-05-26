const glob = require('glob');
const fs = require('fs');

module.exports = function (distDir, done) {
  require('reflect-metadata');

  glob(`${distDir}/**/*.{js,d.ts}`, (err, files) => {
    const jsFiles = files.filter(file => file.endsWith('.js'));
    const dtsFiles = files.filter(file => file.endsWith('.d.ts'));

    const jsFilesExports = jsFiles.map(file => {
      const objFile = require(`../../${file}`);
      return Object.keys(objFile).map(prop => `exports.${prop} = require('./${file}').${prop};`)
    }).reduce((arr, item) => arr = arr.concat(item), []);

    const dtsFilesExports = dtsFiles
      .map(file => `export * from './${file.replace('.d.ts', '')}';`);

    fs.writeFileSync('index.js', jsFilesExports.join('\n'));
    fs.writeFileSync('index.d.ts', dtsFilesExports.join('\n'));

    done();
  });
}
