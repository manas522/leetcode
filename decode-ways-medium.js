/**
https://leetcode.com/problems/decode-ways/
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let code = s.split("");
    let result = 0;
    let dp = new Array(code.length).fill(-1);
    code = code.map(a => +a);
    recursion(0)
    // console.log(dp[0]);
    return dp[0];
    function recursion(index) {
        if (index === code.length) {
            result++;
            return 1;
        }
        if (index >= code.length) return 0;
        if (dp[index] !== -1) return dp[index]
        let count = 0;
        if (code[index] !== 0) {
            count += recursion(index + 1)
            if (index + 1 < code.length) {
                const val = 10 * code[index] +  code[index+1];
                if (val <= 26) count += recursion(index + 2);
            }
        }
        return dp[index] = count;
        
    }
};
