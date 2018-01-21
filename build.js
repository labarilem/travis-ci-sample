var path = require('path');
var cpr = require('cpr');
var fs = require('fs');

// testing env var
var testVar = process.env.TEST_VAR;
console.log('***************************************');
console.log(testVar);
console.log('***************************************');

// settings
var distDirPath = 'dist';
var toCopyInDistDir = [
  'src/main.js',
  'package.json',
  'README.md'
];

// creting dist dir if it does not exist
if (!fs.existsSync(distDirPath)) {
  fs.mkdirSync(distDirPath);
}

// copying files to the dist dir
toCopyInDistDir.forEach(fromPath => {
  var toPath = path.join(distDirPath, path.basename(fromPath));
  console.log('Copying file: \'' + fromPath + '\' to dist folder.');
  cpr(fromPath, toPath, { overwrite: true }, (err, files) => {
    if (!err) {
      console.log('Successfully copied file: \'' + fromPath + '\' to dist folder.');
    } else {
      console.log('Error copying file: \'' + fromPath + '\' to dist folder.');
    }
  });
});
