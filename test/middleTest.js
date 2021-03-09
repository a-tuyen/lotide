const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle.js');

assertArraysEqual(middle([1, 2, 7, 4, 5]), [7]);//odd array
assertArraysEqual(middle([1, 2, 6, 4, 5, 6]), [6, 4]);// even array
assertArraysEqual(middle([1, 2]), []); // under 2 elements
