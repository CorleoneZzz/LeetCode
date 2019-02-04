/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//     for (let i = 0; i < nums.length; i++) {
//        if (nums[i]===val)
//        {
//            nums.splice(i,1);
//            i--;
//        }
//     }
//     return nums
// };
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let start=0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!==val)
        {
            nums[start++]=nums[i];
        }
    }
    return start;
};
console.log(removeElement([3, 2, 2, 3], 2))