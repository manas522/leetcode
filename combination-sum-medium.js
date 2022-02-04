/**
https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let map = {};
    let result = [];
    for (let i = 0; i < candidates.length; i += 1) {
        recursion(target - candidates[i], [candidates[i]], i);
    }
    return result;
    function recursion(target, arr, index) {
        if (target < 0) return;
        if (target == 0) {
            result.push(arr);
            return;
        }
        for (let i = index; i < candidates.length; i += 1) {
            const result = recursion(target - candidates[i], [...arr, candidates[i]], i);
        }
    };
};
