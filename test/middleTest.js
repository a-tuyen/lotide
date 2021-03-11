const assert = require('chai').assert;
const middle = require('../middle.js');


describe('#middle', () => {
  it('returns [7] for middle([1, 2, 7, 4, 5]', () => {
    assert.deepEqual((middle([1, 2, 7, 4, 5])), [7]);
  });
  it('returns [6, 4] for middle([1, 2, 6, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 6, 4, 5, 6]), [6, 4]);
  });

  it('returns [] for (middle([1, 2])', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

});