const fs = require('fs');

const testFiles = fs.readdirSync(__dirname);

testFiles
  .filter(testFile => testFile.endsWith('.test.js'))
  .forEach(testFile => require(`./${testFile}`));
