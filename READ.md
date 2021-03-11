# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @atuyen/lotide`

**Require it:**

`const _ = require('@atuyen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * `assertArraysEqual(array1, array2)`: compares two if two arrays are equal and returns a pass or fail.
  * `assertEqual(actual, expected)`: compares if two arguements are equal and returns a pass or fail.
  * `assertObjectsEqual(object1, object2)`: compares if two objects are equal and returns a pass or fail.
  * `countLetters(string)`: Counts how many times each letter appears in a string.
  * `countOnly(allItems, itemsToCount)`: Takes in a list of items and returns counts for selected items.
  * `eqArrays(array1, array2)`: Compares two arrays for a perfect match and returns true or false.
  * `eqObjects(object1, object2)`: Compares two objects to determine if their elements match and returns true or false.
  * `findKey(object, callback)`: Scans through an object and returns the first key for which the callback returns true.
  * `findKeyByValue(object, value)`: Finds the key of an object based on it's value.
  * `head(array)`: Grabs the first element of an array.
  * `letterPositions(sentence)`: Returns all the indices of where a character is found in a sentence.
  * `map(array, callback)`: Iterates through an array and performs an action based on the callback.
  * `middle(array)`: Grabs the middle element of an array.
  * `tail(array)`: Returns a new array with all original elements except for the first element.
  * `takeUntil(array, callback)`: Pushes elements into a new array until the callback function returns true.
  * `without(sourceArray, removeItemsArray)`: Removes selected values from an array.