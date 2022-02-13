/**
 * @param {number[]} nums
 https://leetcode.com/problems/contains-duplicate/
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i += 1) {
        if (map[nums[i]]) return true;
        map[nums[i]] = true;
    }
    return false;
};
