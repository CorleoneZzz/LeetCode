/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 1.先通过split将字符串转换为数组
// 2.再执行sort将数组进行排序
// 3.再把数组join转换为字符串
// 4.返回2个字符串的强对比
// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('')
// };
var isAnagram = function(s, t) {
    // Hash法 复杂度O(N)
    if (s.length !== t.length ) return false;
    if (s === t) return true;
    let map = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        map[s.charCodeAt(i) - 97] ++;
        map[t.charCodeAt(i) - 97] --;
    }
    return map.every((a) => a === 0 );
};
