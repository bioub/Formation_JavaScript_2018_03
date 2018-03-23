const { expect } = require('chai');
const { mock } = require('sinon');
const pileOuFace = require('../src/pile-ou-face');

describe('pileOuFace function', () => {

  let mathMock;

  beforeEach(() => {
    mathMock = mock(Math);
  });

  afterEach(() => {
    mathMock.restore();
  });

  it('should return pile', () => {
    mathMock.expects('random').once().returns(0.75);
    expect(pileOuFace()).to.be.equals('pile');
    mathMock.verify();
  });

  it('should return face', () => {
    mathMock.expects('random').once().returns(0.25);
    expect(pileOuFace()).to.be.equals('face');
  });

});