/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 这个就是常规操作了，使用一个变量记录前驱 pre，一个变量记录后继 next.
// 不断更新current.next = pre 就好了
var reverseList = function(head) {
    if(!head || !head.next) {return head};
    let cur = head;
    let pre = null;
    while (cur) {
        // 用于临时存储 cur 后继节点
        const next = cur.next;
        // 反转 cur 的后继指针
        cur.next = pre;
        // 变更pre、curr
        // 待反转节点指向下一个节点
        pre = cur;
        cur = next;
    }
    // 返回新的头结点
    return pre;
};
