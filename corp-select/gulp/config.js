exports.paths = {
  src: 'src',
  dist: 'dist',
  temp: '.tmp'
};

exports.typescriptConfig = {
  "declaration": true,
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true,
  "module": "commonjs",
  "moduleResolution": "node",
  "lib": ["es6", "es2015", "dom"],
  "noImplicitAny": true,
  "removeComments": false,
  "sourceMap": true,
  "suppressImplicitAnyIndexErrors": true,
  "target": "es5",
  "outDir": "lib",
  "inlineSources": true,
  "stripInternal": true,
  "typeRoots": [
      "../../node_modules/@types"
  ],
  "sortOutput": true,
  "typescript": require('typescript'),
  "noExternalResolve": false
}
