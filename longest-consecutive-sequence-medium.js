/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length <= 1) return nums.length;
    let length = 1;
    let max = 1;
    nums = nums.sort((a,b) => a > b ? 1: -1);
    for (let i = 0; i < nums.length - 1; i += 1) {
        if (nums[i] === nums[i + 1]) continue;
        if (nums[i] + 1 === nums[i + 1]) length++;
        else {
            length = 1
        }
        if (max < length) {
            max = length
        }
    }
    // console.log(nums, left, right);
    return max;
};
