/**
 * @param {string} s
 https://leetcode.com/problems/remove-invalid-parentheses/
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const map = {        
        "(": 1,
        ")": -1
    };
    let result = [];
    let minUpdate = Infinity;
    recursion(0, 0, 0, "");
    return result;
    function recursion(sum, update, index, str) {
        if (s.length === index) {
            if (sum === 0) {
                if (minUpdate > update) {
                    result = [str];
                    minUpdate = update;
                } else if (minUpdate === update) {
                   
                    if (result.indexOf(str) === -1) result.push(str)
                }
            }
            return update;
        }
        const newSum = sum + (map[s[index]] ?? 0);
        if (newSum >= 0) {
            recursion(newSum, update, index + 1, str+s[index]);
        }
        recursion(sum, update+1, index + 1,str);
    }
};
