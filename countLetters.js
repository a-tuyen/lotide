const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} === ${expected}`);
  }
};


const countLetters = function(string) {
  let finalCount = {};
  for (let letter of string) {
    if (letter === " ") { continue; }
    if (finalCount[letter]) {
      finalCount[letter] += 1;
    } else {
      finalCount[letter] = 1;
    }
  }
  return finalCount;
};

const result1 = countLetters("Happy Day");
console.log(result1);

assertEqual(result1["H"], 1);
assertEqual(result1["a"], 2);
assertEqual(result1["p"], 2);
assertEqual(result1["y"], 2);
assertEqual(result1["D"], 1);
