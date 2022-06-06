/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let n = nums.length;
    nums.sort((a, b) => b - a)
    for (i = 0; i < n - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2]
        }
    }
    return 0
};