

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


module.exports = middle;