const { expect, use } = require('chai');
const { spy } = require('sinon');
const sinonChai = require('sinon-chai');

const map = require('../../src/exercices/02-map');

use(sinonChai);

describe('map function', () => {

  it('should transform some value', () => {
    expect(map(2, (val) => val * 2)).to.equals(4);
    expect(map('Romain', (val) => val.toUpperCase())).to.equals('ROMAIN');
  });

  it('should call callback with proper value', () => {
    const cb = spy();

    map('Romain', cb);

    expect(cb).to.have.been.calledOnce;
    expect(cb).to.have.been.calledWith('Romain');
  });

});