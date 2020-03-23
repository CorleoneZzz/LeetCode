/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let n = s.length;
    let l = p.length;
    let vp = new Array(128).fill(0);
    let vs = new Array(128).fill(0);
    let ans = [];
    for (let c of p) {
        vp[c.charCodeAt()]++;
    }
    for (let i = 0; i < n; i++) {
        // if () {
        //
        // }
    }
    return ans;
};
var h =findAnagrams("cbaebabacd","abc")
console.log(h);
