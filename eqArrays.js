const assertEqual = require('./assertEqual');


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};


assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);
assertEqual(eqArrays(['apple', 'orange', 'pear'], ['apple', 'orange', 'pear']), true);
assertEqual(eqArrays(['apple', 'orange', 'pear'], ['apple', 'orange', 'grape']), true);
assertEqual(eqArrays([], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);

module.exports = eqArrays;