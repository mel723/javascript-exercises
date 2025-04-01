const reverseString = function(input) {
  const inputArray = input.split("");

  let output = ""

  for (let i = input.length - 1; i >= 0; i--) {
    output += inputArray[i];
  }

  return output;
};

// Do not edit below this line
module.exports = reverseString;
