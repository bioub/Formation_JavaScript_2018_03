const assert = require('assert');
const myMaths = require('../src/my-maths');

try {
  assert.strictEqual(myMaths.sum(1, 2), 3);
  assert.strictEqual(myMaths.sum('1', '2'), 3);
  console.log('Les tests de my-maths passent');
}
catch (err) {
  console.error('Les tests de my-maths échouent');
  console.error(err.stack);
}
