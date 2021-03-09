const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); //false
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual(['apple', 'orange', 'pear'], ['apple', 'orange', 'pear']); //true
assertArraysEqual(['apple', 'orange', 'pear'], ['apple', 'orange', 'grape']); //false
assertArraysEqual([], [1, 2, 3]); // false
assertArraysEqual([], []); // true