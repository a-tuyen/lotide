const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);
assertEqual(eqArrays(['apple', 'orange', 'pear'], ['apple', 'orange', 'pear']), true);
assertEqual(eqArrays(['apple', 'orange', 'pear'], ['apple', 'orange', 'grape']), true);
assertEqual(eqArrays([], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);

