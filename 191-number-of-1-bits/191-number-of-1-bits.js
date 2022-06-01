/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split('').reduce((sum, i) => i === '1' ? sum+1 : sum, 0)
};