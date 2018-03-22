const fs = require('fs'); // commonjs module dynamique et sync
const files = fs.readdirSync(__dirname);

files
  .filter((testFile) => testFile.endsWith('.test.js'))
  .forEach((testFile) => {
    require(`./${testFile}`);
  });
