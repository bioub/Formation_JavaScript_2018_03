const { expect, use } = require('chai');
const { spy } = require('sinon');
const sinonChai = require("sinon-chai");
use(sinonChai);
const hello = require('../src/hello-callback');

describe('hello function with callback', () => {
  it('should call callback with Hello Romain !', () => {
    const cb = spy();

    hello('Romain', cb);

    expect(cb).to.have.been.calledOnce;
    expect(cb).to.have.been.calledWith('Hello Romain !');
  });
});