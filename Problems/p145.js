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
// 后序遍历 postOrder(r)
// postOrder(r->left)
// postOrder(r->right)
// print r
var postorderTraversal = function(root) {
    const result = [];
    function pushRoot(node) {
        if (node !== null) {
            if (node.left !== null) {
                pushRoot(node.left);
            }
            if (node.right !== null) {
                pushRoot(node.right);
            }
            result.push(node.val);
        }
    }
    pushRoot(root);
    return result;
};
