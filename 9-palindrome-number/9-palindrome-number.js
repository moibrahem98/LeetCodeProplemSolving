/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
      let newX = Number(String(x).split('').reverse().join(''));
  return x === newX
};