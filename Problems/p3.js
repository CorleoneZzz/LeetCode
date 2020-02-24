/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let len = s.length;
//     if (len < 2) {
//         return len;
//     }
//     // 双指针移动
//     let start = 0;
//     let point = 0;
//     for (let i = 1; i < len; i++) {
//         let item = s[i];
//         let index = s.lastIndexOf(item, i - 1);
//         if (index > -1) {
//             point = Math.max(point, i - start);
//             start = Math.max(start, index + 1);
//         }
//     }
//     console.log(Math.max(point, len - start));
//     return Math.max(point, len - start);
// };
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    if (len < 2) {
        return len;
    }
    // 双指针移动
    let start = 0;
    let point = 0;
    let winStr = [];
    let winLen = 0;
    let maxLen = 0;
    for (let i = 0; i < len; i++) {
        if (winStr.indexOf(s[i]) === -1) {
           winStr.push(s[i]);
           point++;
           winLen++;
        } else {
            console.log(winStr);
            maxLen = winLen;
            let index = i - start;
            console.log(index);
        }
    }
    return;
};
lengthOfLongestSubstring('abcabcbb');
