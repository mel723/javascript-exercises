const repeatString = function(input, numOfTimes) {
  if (numOfTimes < 0) {
    return "ERROR";
  }

  let output = "";

  for (let i = 0; i < numOfTimes; i++) {
    output += input;
  }

  return output;
};

// Do not edit below this line
module.exports = repeatString;
