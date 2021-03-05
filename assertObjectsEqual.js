
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

const eqObjects = function(object1, object2) {
  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object2);
  if (keysObject1.length !== keysObject2.length) {
    return false;
  }
  for (const key of keysObject1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (! eqArrays(object1[key], object2[key])) {
        return false;
      } 
    } else {
      if (object1[key] !== object2[key]) {
      return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
  console.log(`✅ Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertObjectsEqual(eqObjects(cd, dc), true); // => true
assertObjectsEqual(eqObjects(cd, cd2), false); // => false




// console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
// console.log(`❌ Assertion Failed: ${actual} === ${expected}`);