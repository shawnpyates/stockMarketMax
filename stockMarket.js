// Values to evaluate
var thisWeeksValues = [45, 24, 35, 31, 40, 38];
var lastWeeksValues = [90, 83, 79, 64, 55, 51, 47];
var twoWeeksAgoValues = [41, 45, 79, 74, 77, 59, 63];
var threeWeeksAgoValues = [101, 93, 95, 99, 105, 103, 203];


// Strategy 1: Brute Force



function maxProfit1(values) {
  // if no profit exists, return -1
  var mostProfit = -1;
  // for each value in the array, evaluate it against...
  // only values that occur after it in the array
  for (var i = 0; i < values.length; i++) {
    for (var j = i + 1; j < values.length; j++) {
      // if the latter value is higher, that indicates profit
      if (values[j] > values[i]) {
        // profit is the difference between the two values
        var someProfit = values[j] - values[i];
        // if this profit is higher than the highest profit...
        // found so far, store this profit as the new highest profit
        if (someProfit > mostProfit) {
          mostProfit = someProfit;
        }
      }
    }
  }
  return mostProfit;
}

console.log(maxProfit1(thisWeeksValues));
console.log(maxProfit1(lastWeeksValues));
console.log(maxProfit1(twoWeeksAgoValues));
console.log(maxProfit1(threeWeeksAgoValues));



// Strategy 2: Elegant Solution


function maxProfit2(values) {
  // if length of the array is one or zero, return -1
  if (values.length <= 1) {
    return -1;
  }
  // divide the array into two roughly equal halves
  var leftHalf = values.slice(0, Math.ceil(values.length / 2));
  var rightHalf = values.slice(Math.ceil(values.length / 2));
  // for each half, run this same function for it
  // we will continue to get halves of halves until...
  // they are broken into arrays of one
  var leftBest = maxProfit2(leftHalf);
  var rightBest = maxProfit2(rightHalf);
  // find the minimum value of the left array
  // and find the maximum value of the right array
  var leftHalfMin = getMinOfArray(leftHalf);
  var rightHalfMax = getMaxOfArray(rightHalf);
  // find the difference between the max of the right array
  // and the min of the left array
  var betweenBest = rightHalfMax - leftHalfMin;
  // when we are looking for the max profit in array, there are 3 possibilities:
  // (1) max profit occurs between values in the left half
  // (2) max profit occurs between values in the right half
  // (3) max profit occurs between the max value on the right half and min value on the left half
  // this function will recursively evaluate "halves within halves"...
  // in the array until we get final values for leftBest, rightBest, and betweenBest
  // as a final step, we evaluate which one is the highest
  return Math.max(leftBest, rightBest, betweenBest);
}

function getMinOfArray(array) {
  return Math.min.apply(null, array);
}

function getMaxOfArray(array) {
  return Math.max.apply(null, array);
}

console.log(maxProfit2(thisWeeksValues));
console.log(maxProfit2(lastWeeksValues));
console.log(maxProfit2(twoWeeksAgoValues));
console.log(maxProfit2(threeWeeksAgoValues));











