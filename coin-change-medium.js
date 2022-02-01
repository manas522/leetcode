/**
 * https://leetcode.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount).fill(0);
    const res = recursion(amount,0);
    return res === Infinity ? -1: res;
    // console.log(dp);
    function recursion(sum, count) {
      // if the count of coin already calculated for summ the return
        if (dp[sum]) return dp[sum];
      // if the sum is less than zero means the count of coins is of no use and total exceeed sum
        if (sum < 0) return Infinity;
      // if the sum is equall than zero meas the count of coins is valid and can connsidered to check the minimum coin valuation.
        if (sum === 0) return 0;
        let min = Infinity
        for (let i = 0; i < coins.length; i += 1) {
            // find count for sum-coins[i] sum.
            min = Math.min(min, 1 + recursion(sum-coins[i], count));
        }
        dp[sum] = min;
        return min;
    }
};
