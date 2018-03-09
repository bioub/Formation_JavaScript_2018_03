const assert = require('assert');
const chalk = require('chalk');
const hello = require('../src/hello');

try {
  assert.strictEqual(hello('Romain'), 'Hello Romain !');
  console.log(chalk.green('Les tests de hello passent'));
} catch (err) {
  console.error('Les tests de hello échouent');
  console.error(err.stack);
}
