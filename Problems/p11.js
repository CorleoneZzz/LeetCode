/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const currentArea = Math.abs(j - i) * Math.min(height[i], height[j]);
            if (currentArea > max) {
                max = currentArea;
            }
        }
    }
    return max;
};
// 比如我们计算n面积的时候，假如左侧的线段高度比右侧的高度低，那么我们通过左移右指针来将长度缩短为n-1的做法是没有意义的
// 因为新的形成的面积变成了(n-1) * heightOfLeft 这个面积一定比刚才的长度为n的面积nn * heightOfLeft 小
// 也就是说最大面积一定是当前的面积或者通过移动短的线段得到
// 双指针优化时间复杂度
var maxArea = function(height) {
    if (!height || height.length <= 1) {return 0}
    let leftPos = 0;
    let  rightPos = height.length - 1;
    let max = 0;
    while (leftPos < rightPos) {
        const currentArea = Math.abs(rightPos - leftPos) * Math.min(height[leftPos], height[rightPos]);
        if (currentArea > max) {
            max = currentArea;
        }
        if (height[leftPos] < height[rightPos]) {
            leftPos++;
        } else {
            rightPos--;
        }
    }
    return max;
};
