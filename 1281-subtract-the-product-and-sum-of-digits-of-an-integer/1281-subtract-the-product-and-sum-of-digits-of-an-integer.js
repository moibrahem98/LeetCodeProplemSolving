/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
//     let sum = 0
//     let product = 1
    
//     for(let char of String(n)){
//         let digit = Number(char)
//         sum += digit
//         product *= digit
//     }
//     return product - sum 
    
    
    
    const sumAndProduct = Array.from(String(n), Number)
                .reduce((acc, curr) => {
                    acc[0] += curr;
                    acc[1] *= curr;
                    return acc;
                }, [0, 1]);
    
    return sumAndProduct[1] - sumAndProduct[0];
};