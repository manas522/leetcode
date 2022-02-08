/**
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// Best Solution
// Lowest Common Ancestor must sit between p and q
// p < Lowest Common Ancestor < q
var lowestCommonAncestor = (root, p, q) => {
  // Lowest Common Ancestor bigger than both p and q so we move left
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // Lowest Common Ancestor small than both p and q so we move right
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};
var lowestCommonAncestor = function(root, p, q) {
    // let node = null;
    return recursion(root);
    function recursion(node) {
        if (node === null) return false;
        let found = false;
        if (node === p || node === q) found = true;
        const left = recursion(node.left);
        const right = recursion(node.right);
        if (found && (left || right)) return node;
        if (left && right) {
            return node;
        }
        return found || left || right;
    }
};
