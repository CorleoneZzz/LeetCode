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

// 上面写法俩数组，不太优雅，双指针法
// i指针一直往前走，index指针只有不等0的时候，交换之后，才往前走
var moveZeroes = function(nums) {
    let index = 0; // index 始终记录下一个非0元素要放的位置
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            // nums[i] = 0; 如果不加这个判断，将导致例如[1]这种情况输出[0]
            if (index !== i) {
                nums[i] = 0;
            }
            index++; // 记录完了要后移一位
        }
    }
};
