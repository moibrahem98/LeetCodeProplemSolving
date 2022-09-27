/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
  const diffIndex = nums.indexOf(target - nums[i]);
    console.log(diffIndex)
  if (diffIndex >= 0 && diffIndex !== i) {
  return [ diffIndex,i];
  }
}
return []; // no solution found
};