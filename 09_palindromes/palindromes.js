const palindromes = function (sentence) {
  const letters = sentence
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  return letters.split("").reverse().join("") === letters;
};

// Do not edit below this line
module.exports = palindromes;
