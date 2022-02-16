/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = {};
    let result = {}
    for (let i = 0; i < nums.length; i += 1) {
        map[nums[i]] = true;  
    }
    let max = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (map[nums[i]] !== undefined) {
            const val = dfs(nums[i]);
            result[nums[i]]  = val;
            // console.log(val);
            max = Math.max(val, max);
        }
    }
    return max;
    function dfs(num){
        if (result[num] !== undefined) return result[num];
       
        if (map[num] !== undefined) {
             map[num] = undefined;
            return result[num] =  1 + dfs(num+1);
        }
        return 0;
    }
};
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
