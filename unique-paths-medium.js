/**
 * @param {number} m
 https://leetcode.com/problems/unique-paths/
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(a => new Array(n).fill(-1))
    return recursion(m-1, n-1)
    function recursion(row, col) {
        if (row < 0 || row >= m || col < 0|| col >=n) {
            return 0;
        }
        if (row === 0 && col === 0) return 1;
        if (dp[row][col] !== -1) return dp[row][col];
        return dp[row][col] = recursion(row-1,col) + recursion(row,col-1)
    }
};
