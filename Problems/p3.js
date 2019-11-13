/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    if (len < 2) {
        return len;
    }
    let start = 0;
    let ans = 0;
    for (let i = 1; i < len; i++) {
        let item = s[i];
        let index = s.lastIndexOf(item, i - 1);
        if (index > -1) {
            ans = Math.max(ans, i - start);
            start = Math.max(start, index + 1);
        }
    }
    ans = Math.max(ans, len - start);
    console.log(ans);
    return ans;
};
lengthOfLongestSubstring('abcabcbb');
