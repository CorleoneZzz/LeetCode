/**
 * @param {number[]} nums
 * @return {number}
 */
// 解法1
// var longestConsecutive = function(nums) {
//     let map = new Map();
//     let result = 0;
//     // 建立一个存key的hash表
//     for (let i= 0; i < nums.length; i++) {
//         map.set(nums[i]);
//     }
//     // 如果这个是左边界，那么一直++到表里没有的时候，取长度
//     for (let j= 0; j < nums.length; j++) {
//         if(!map.has(nums[j]-1)) {
//             let len = 0;
//             while(map.has(nums[j]++))
//             {
//                 len++;
//                 result = Math.max(len, result);
//             }
//         }
//     }
//     return result;
// };
// 解法2
var longestConsecutive = function(nums) {
    let map = new Map();
    let result = 0;
    // 建立一个存key的hash表
    for (let i= 0; i < nums.length; i++) {
        if(map.has(nums[i]))
            continue;
        // 判断是否有左右邻居, 没有置为0
        let leftNode = map.has(nums[i] - 1)? map.get(nums[i] - 1): 0;
        let rightNode = map.has(nums[i] + 1)? map.get(nums[i] + 1): 0;
        let res = leftNode + rightNode + 1;
        result = result > res ? result : res;
        map.set(nums[i], res);
        //更新两端节点，因为只有两端节点可能在之后的计算中用到
        map.set(nums[i] - leftNode, res);
        map.set(nums[i] + rightNode, res);
    }
    return result;
};
var h =longestConsecutive( [100, 1, 200, 4, 3, 2])
console.log(h)

