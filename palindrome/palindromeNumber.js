var isNumberPalindrome = function(x) {
  return parseInt(Array.from(String(x)).reverse().join(''), 10) - x === 0;
};

module.exports = isNumberPalindrome;
