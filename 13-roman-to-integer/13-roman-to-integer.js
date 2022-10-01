var romanToInt = function(s) {
    
    //Declare all combinations
    const romans = {
      combo: {IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900},
      triple: {III: 3, XXX: 30, CCC: 300, MMM: 3000},
      double: {II: 2, XX: 20, CC: 200, MM: 2000},
      single: {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000},
    }
    
    let result = 0;
    
    //Go through every combination, first combo and last single
    for (const type in romans) {
      //Go through every key
      for (const key in romans[type]) {
        //Check if the key is included in the string
        if (s.includes(key)) {
          //Add the value to the total sum
          result += romans[type][key];
          //Remove the key from the string so it isn't summed again
          s = s.replace(key, '');
        }
      }
    }
    
    return result;
    
};