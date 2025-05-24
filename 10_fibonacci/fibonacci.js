const fibonacci = function(input) {
  const num = typeof input === "number" 
    ? input 
    : Number(input);

  if (num < 0) {
    return "OOPS";
  }

  if (num === 0) {
    return 0;
  }

  let arr = [1, 1];

  while (arr.length < num) {
    arr.push(arr.slice(-1)[0] + arr.slice(-2)[0]);
  }

  return arr.slice(-1)[0];
};

// Do not edit below this line
module.exports = fibonacci;
