/**
 * @param {number} n
 * @return {number}
 */
// 超过时间限制的递归方法
var climbStairs = function(n) {
 if (n <= 2) {
     return n
 } else {
     return climbStairs(n-1) + climbStairs(n-2);
 }
};
