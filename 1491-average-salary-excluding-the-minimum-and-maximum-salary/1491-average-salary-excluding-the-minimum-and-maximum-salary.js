/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {

//     let sorted = salary.sort((a, b) => a - b)
//     let maxSal = sorted.pop()
//     let minSal = sorted.shift()

//     var sum = 0;
//     sorted.forEach((num) => { sum += num });

//     let average = sum / sorted.length;

//     return average    
    
    
    
    let array = salary.sort((a,b) => a - b)
let result = array.slice(1,salary.length-1); 
return result.reduce((firstVal,secondVal) => firstVal+secondVal) / result.length; 
    

};