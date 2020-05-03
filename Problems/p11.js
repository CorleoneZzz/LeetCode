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
