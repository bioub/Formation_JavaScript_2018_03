const { expect } = require('chai');
const { mock } = require('sinon');
const getRandomArbitrary = require('../../src/exercices/03-getRandomArbitrary');

describe('getRandomArbitrary function', () => {

  let mathMock;

  beforeEach(() => {
    mathMock = mock(Math);
  });

  afterEach(() => {
    mathMock.restore();
  });

  it('should return correct value', () => {
    mathMock.expects('random').twice().returns(0.75);
    expect(getRandomArbitrary(0, 100)).to.be.equals(75);
    expect(getRandomArbitrary(10, 20)).to.be.equals(17.5);
    mathMock.verify();
  });

});