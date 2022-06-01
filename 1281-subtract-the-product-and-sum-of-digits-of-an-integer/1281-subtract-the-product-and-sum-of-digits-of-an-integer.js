/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0
    let product = 1
    
    for(let char of String(n)){
        let digit = Number(char)
        sum += digit
        product *= digit
    }
    return product - sum 
};