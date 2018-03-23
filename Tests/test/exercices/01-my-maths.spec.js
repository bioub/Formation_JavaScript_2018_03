const { expect } = require('chai');
const myMaths = require('../../src/exercices/01-my-maths');

describe('myMaths object', () => {

  describe('sum function', () => {

    it('should add 2 numbers', () => {
      expect(myMaths.sum(1, 2)).to.equals(3);
    });

    it('should convert and add 2 strings', () => {
      expect(myMaths.sum('1', '2')).to.equals(3);
    });

  });

});