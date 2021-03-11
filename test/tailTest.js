const assert = require('chai').assert;
const tail = require('../tail.js');

const result = tail(["Hello", "Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];

const numbers = [1, 2, 3, 4,];
const results3 = tail(numbers);

describe("#tail", () => {

  it('returns "2" for array length of ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual((result).length, 2);
  });
  it('returns "Lighthouse" for the value of 1st array index', ()=> {
    assert.strictEqual(result[0], 'Lighthouse');
  });
  it('returns "Labs" for the value of 2nd array index', ()=> {
    assert.strictEqual(result[1], 'Labs');
  });
  it("returns '3' for as the original array length", () => {
    assert.strictEqual(words.length, 3);
  });
  it('returns [2, 3, 4,] for results3', () => {
    assert.deepEqual(results3, [2, 3, 4,]);
  });


});

