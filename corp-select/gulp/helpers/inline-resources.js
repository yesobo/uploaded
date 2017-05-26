const fs = require('fs');
const path = require('path');
const glob = require('glob');
const templateRegex = /templateUrl:\s*'([^']+?(\.html|pug))'/g;
const stylesRegex = /styleUrls:\s*(\[[\s\S]*?\])/gm;

module.exports = function (sourceDir, done) {
  let pattern = path.join(sourceDir, '**/*.component.ts');
  glob(pattern, (err, files) => {
    files.forEach(file => {
      let component = fs.readFileSync(file, 'utf-8');
      let templateUrl = component.match(templateRegex);
      let stylesUrl = component.match(stylesRegex);

      if (templateUrl) {
        let templateFileRegex = /\'(.*?)\'/;
        let templateFile = templateFileRegex.exec(templateUrl)[1];
        let templatePath = path.resolve(path.resolve(path.dirname(file), templateFile.replace(path.extname(templateFile), '.html')));
        let inlineTemplate = fs.readFileSync(templatePath, 'utf-8');

        component = component.replace(templateRegex, 'template: `' + inlineTemplate + '`');
      }

      if (stylesUrl) {
        let styleFileRegex = /\[(.*?)\]/;
        let arrayStyles = styleFileRegex.exec(stylesUrl)[1].replace(/([\ '])/g, '').split(',');
        let inlineStyle = "";

        arrayStyles.forEach(style => {
          let stylePath = path.resolve(path.resolve(path.dirname(file), style.replace(path.extname(style), '.css')));
          inlineStyle += fs.readFileSync(stylePath, 'utf-8').replace('\n','');
        });

        component = component.replace(stylesRegex, 'styles: [`' + inlineStyle + '`]');
      }
      fs.writeFileSync(file, component);
    });
    done();
  });
}
