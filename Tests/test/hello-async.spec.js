const { expect, use } = require('chai');
const { spy } = require('sinon');
const sinonChai = require("sinon-chai");
use(sinonChai);
const hello = require('../src/hello-async');

describe('hello function with async callback', () => {
  it('should call callback with Hello Romain !', (done) => {

    hello('Romain', (result) => {
      expect(result).to.be.eq('Hello Romain !');
      done();
    });

  });
});