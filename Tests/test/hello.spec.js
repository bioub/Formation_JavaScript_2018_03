const { assert, expect, should } = require('chai');
should();
const hello = require('../src/hello');

describe('hello function', () => {
  it('should return Hello Romain !', () => {
    // Style assert (TDD)
    assert.strictEqual(hello('Romain'), 'Hello Romain !');

    // Style expect (BDD)
    expect(hello('Romain')).to.equals('Hello Romain !');

    // Style should (BDD)
    hello('Romain').should.be.equal('Hello Romain !');
  });
});