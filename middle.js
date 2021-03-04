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


const middle = function(array) {
  let middleIndex = Math.floor(array.length / 2);
  let outputArr = [];
  if (array.length <= 2) {
    return outputArr;
  } else if (array.length % 2 === 0) {
    outputArr.push(array[(middleIndex) - 1]);
    outputArr.push(array[middleIndex]);
  } else {// if (middleIndex % 2 !== 0) {
    outputArr.push(array[middleIndex]);
  }
  return outputArr;
};


console.log("Odd Array: ", middle([1, 2, 7, 4, 5]));
console.log("Even Array:",  middle([1, 2, 6, 4, 5, 6]));
console.log("Under 2 array:", middle([1, 2]));

