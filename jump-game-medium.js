/**
https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const dp = new Array(nums.length).fill(-1);
     return jump(0);
    function jump(jj) {
        if (jj === nums.length - 1) return 1;
        if (jj >= nums.length) return 0;
        if (dp[jj] !== -1) return dp[jj];
        for (let i = 1; i <= nums[jj]; i += 1) {
            if (jump(jj + i)) return dp[jj] = 1;
        }
        return dp[jj] = 0;
    }
};
