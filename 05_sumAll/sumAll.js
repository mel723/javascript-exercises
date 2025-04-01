const sumAll = function(num1, num2) {
  // Non-numbers
  if (isNaN(num1) || isNaN(num2)) {
    return "ERROR";
  }

  // Negative numbers
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  // Non-integer numbers
  if (
    Math.floor(num1) !== num1 ||
    Math.floor(num2) !== num2
  ) {
    return "ERROR";
  }
  
  // Variable declaration
  let start, end;
  let sum = 0;

  // Determine which number to start and end with
  if (num1 > num2) {
    start = num2;
    end = num1;
  } else {
    start = num1;
    end = num2;
  }
  
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
