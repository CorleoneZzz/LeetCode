/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let index;
    let result = Array.from({
        length: nums1.length
    }, x => -1);
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                for (let k = 0; k < nums2.length - j - 1; k++) {
                    if (nums2[j + k + 1] > nums1[i]) {
                        index = nums2[j + k + 1];
                        result[i]=index;
                        break;
                    }
                }
            }
        }
    }
    return result
};
var nums1 = [2,4];
var nums2 = [1,2,3,4];
console.log(nextGreaterElement(nums1, nums2))