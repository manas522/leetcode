/**
 * @param {number[]} nums
 https://leetcode.com/problems/product-of-array-except-self
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [];
    let prod = 1;
    for (let i = 0; i < nums.length; i += 1) {
        result[i] = prod;
        prod *= nums[i]
    }
    prod = 1;
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        result[i] *= prod;
        prod *= nums[i];
    }
    return result;
};
