const assert = require('assert');
const hello = require('../src/hello');

try {
  assert.strictEqual(hello('Romain'), 'Hello Romain !');
  console.log('Les tests de hello passent');
}
catch (err) {
  console.error('Les tests dehello échouent');
  console.error(err.stack);
}
