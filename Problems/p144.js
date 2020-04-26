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
// 前序遍历 preOrder(r)
// print r
// preOrder(r->left)
// preOrder(r->right)
var preorderTraversal = function(root) {
    const result = [];
    function pushRoot(node) {
        if(node !== null) {
            result.push(node.val);
            if (node.left !== null) {
                pushRoot(node.left);
            }
            if (node.right !== null) {
                pushRoot(node.right);
            }
        }
    }
    pushRoot(root);
    return result;
};
