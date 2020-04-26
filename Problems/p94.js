/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    function pushRoot(node) {
       if (node !== null) {
            if (node.left !== null) {
                pushRoot(node.left);
            }
            result.push(node.val);
            if (node.right !== null) {
               pushRoot(node.right);
            }
       }
    }
    pushRoot(root);
    return result;
};
