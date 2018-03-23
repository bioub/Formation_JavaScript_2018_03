const { expect } = require('chai');
const pileOuFace = require('../src/pile-ou-face');

describe('pileOuFace function', () => {

  let originalRandom;

  beforeEach(() => {
    originalRandom = Math.random;
  });

  afterEach(() => {
    Math.random = originalRandom;
  });

  it('should return pile', () => {
    Math.random = () => 0.75;
    expect(pileOuFace()).to.be.equals('pile');
  });

  it('should return face', () => {
    Math.random = () => 0.25;
    expect(pileOuFace()).to.be.equals('face');
  });

});