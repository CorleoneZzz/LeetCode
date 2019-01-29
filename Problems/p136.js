/**
 * @param {number[]} nums
 * @return {number}
 */
//零和任何数异或都等于任何数, 一个数异或两次就等于0, 又本题中除一个之外每个元素都出现两次 所以用循环异或所有数就等于 只出现一次的那个数 .
var singleNumber = function(nums) {
    let res=0;
    for(let i=0;i<nums.length;i++)
    {
       res^=nums[i];
    }
    return res;
};
var nums=[4,1,2,1,2];
console.log(singleNumber(nums));