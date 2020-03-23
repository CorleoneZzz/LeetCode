/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let current = m + n - 1;
    while (current >= 0) {
        if (n === 0) return;
        // 取大的填充 nums1的末尾
        // 然后更新 m 或者 n
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[current--] = nums1[--m];
        } else {
            nums1[current--] = nums2[--n];
        }
    }
};
