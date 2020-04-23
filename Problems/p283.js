//如果题目没有要求 modify in-place 的话，我们可以先遍历一遍将包含 0 的和不包含 0 的存到两个数组， 然后拼接两个数组即可。 但是题目要求 modify in-place， 也就是不需要借助额外的存储空间，刚才的方法 空间复杂度是 O(n).
// 那么如果 modify in-place 呢？ 空间复杂度降低为 1。
// 我们可以借助一个游标记录位置，然后遍历一次，将非 0 的原地修改，最后补 0 即可。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num !== 0) {
            nums[index++] = num;
        }
    }

    for(let i = index; i < nums.length; i++) {
        nums[index++] = 0;
    }
};
