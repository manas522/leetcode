/**
https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = new Array(n+1).fill(-1);
    const tt = recursion(n);
    return tt;
    function recursion(st) {
        if (st === 0) return 1;
        if (st < 0) return 0;
        if (dp[st] !== -1) return dp[st];
        let count = 0;
        count = recursion(st - 1) + recursion(st - 2);
        dp[st] = count;
        return count;
    }
};
