const removeFromArray = function(inputArray, ...args) {
  return inputArray.filter((input) => {
    let keep = true;

    for (const argument of args) {
      if (input === argument) {
        keep = false;
        break;
      }
    }

    return keep;
  });
};

// Do not edit below this line
module.exports = removeFromArray;
