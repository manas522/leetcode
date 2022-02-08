/**
https://leetcode.com/problems/same-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return recursion(p, q);
    function recursion(nodeA, nodeB) {
        if (nodeA !== null && nodeB !== null) {
            if (nodeA.val === nodeB.val) return recursion(nodeA.left, nodeB.left) && recursion(nodeA.right, nodeB.right);
            else return false;
        }
        return nodeA === null && nodeB === null;
    }
};
