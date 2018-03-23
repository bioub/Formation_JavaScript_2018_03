const { expect } = require('chai');
const { mock, spy } = require('sinon');
const fs = require('fs-extra');
const createDist = require('../../src/exercices/04-createDist');

describe('createDist function', () => {

  let fsMock;
  let consoleMock;

  beforeEach(() => {
    fsMock = mock(fs);
    consoleMock = mock(console);
  });

  afterEach(() => {
    fsMock.restore();
    consoleMock.restore();
  });

  it('should call functions', async () => {
    // TODO creuser
    fsMock.expects('remove').once().withArgs('dist');
    fsMock.expects('mkdir').once().withArgs('dist');
    consoleMock.expects('log').once().withArgs('dist created');

    await createDist('dist');

    fsMock.verify();
    consoleMock.verify();
  });

});