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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};


const without = function(sourceArr, removeItemsArr) {
  let goodArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] !== removeItemsArr[i])
      goodArr.push(sourceArr[i]);
  }
  return goodArr;
};
  

const source = [1, 2, 3];
assertArraysEqual(without(source, [1]), source);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2", "3"]);

