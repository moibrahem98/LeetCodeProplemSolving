/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if(high % 2=== 0 && low %2 ===0){
        return (high - low) /2 
    }
    
      if (low % 2 == 1 && high % 2 == 1) {
        return (high - low) / 2 + 1;
    }
    else {
        return (high - low + 1) / 2;
    }
};