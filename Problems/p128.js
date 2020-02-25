/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = new Map();
    let result = 0;
    // 建立一个存key的hash表
    for (let i= 0; i < nums.length; i++) {
        map.set(nums[i]);
    }
    // 如果这个是左边界，那么一直++到表里没有的时候，取长度
    for (let j= 0; j < nums.length; j++) {
        if(!map.has(nums[j]-1)) {
            let len = 0;
            while(map.has(nums[j]++))
            {
                len++;
                result = Math.max(len, result);
            }
        }
    }
    return result;
};
// var h =longestConsecutive( [100, 1, 200, 4, 3, 2])
// console.log(h)
