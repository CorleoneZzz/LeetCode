/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力法，复杂度O(N^2)
var twoSum = function(nums, target) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = 1; j < len; j++) {
            if (nums[i] + nums[j] === target && i!==j) {
                return [i,j];
            }
        }
    }
};

// Map法
// 我们可以利用两层 for 循环来遍历每个元素，并查找满足条件的目标元素。不过这样时间复杂度为 O(N^2)，空间复杂度为 O(1)，时间复杂度较高，我们要想办法进行优化。
// 我们可以增加一个 Map 记录已经遍历过的数字及其对应的索引值。这样当遍历一个新数字的时候去 Map 里查询，target 与该数的差值是否已经在前面的数字中出现过。
// 如果出现过，那么已经得出答案，就不必再往下执行了。
var twoSum = function(nums, target) {
    const len = nums.length;
    const map = new Map();
    for (let i = 0; i < len; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
    }
    map.set(nums[i], i);
};
