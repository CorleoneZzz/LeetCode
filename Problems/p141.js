/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 龟兔赛跑法，快的走俩，慢的走一，碰撞说明有环
var hasCycle = function(head) {
    if(!head || !head.next) {
        return false
    }
    let fast = head.next.next, slow = head;
    while(fast !== slow) {
        if(!fast || !fast.next) return false;
        fast = fast.next.next;
        slow = slow.next
    }
    return true
};
