const fs = require('fs-extra');
const { resolve } = require('path');

const configGlobal = fs.readJSONSync(resolve(__dirname, 'config.json'));
let configLocal;
try {
  configLocal = fs.readJSONSync(resolve(__dirname, 'config.local.json'));
}
catch (err) {
  configLocal = {};
}

// seulement le 1er niveau de config
module.exports = Object.assign({}, configGlobal, configLocal);