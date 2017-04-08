var thisWeeksValues = [45, 24, 35, 31, 40, 38, 11, 12];
var lastWeeksValues = [90, 83, 79, 64, 55, 51, 47];

// Strategy 1: Brute Force


function maxProfit1(values) {
  var mostProfit = -1;
  for (var i = 0; i < values.length; i++) {
    for (var j = i + 1; j < values.length; j++) {
      if (values[j] > values[i]) {
        var someProfit = values[j] - values[i];
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



// Strategy 2: Elegant Solution


function maxProfit2(values) {
  if (values.length <= 1) {
    return -1;
  }
  var leftHalf = values.slice(0, Math.ceil(values.length / 2));
  var rightHalf = values.slice(Math.ceil(values.length / 2));
  var leftBest = maxProfit2(leftHalf);
  var rightBest = maxProfit2(rightHalf);
  var leftHalfMin = getMinOfArray(leftHalf);
  var rightHalfMax = getMaxOfArray(rightHalf);
  var betweenBest = rightHalfMax - leftHalfMin;
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











