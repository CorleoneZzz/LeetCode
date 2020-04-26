/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const result = [];
    function pushRoot(node) {
        if (node !== null) {
            for (let i=0; i < node.children.length; i++) {
                if (node.children[i] !== null) {
                    pushRoot(node.children[i]);
                }
            }
            result.push(node.val);
        }
    }
    pushRoot(root);
    return result;
};
