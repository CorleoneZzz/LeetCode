/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let valueStack = [];
    let recordStack = Array.from({
        length: T.length
    }, x => 0);
    for (let i = 0; i < T.length; i++) {
        while (valueStack.length > 0 && T[i] > valueStack[valueStack.length - 1].val) {
            let j = valueStack[valueStack.length - 1].index;
            valueStack.pop();
            recordStack[j] = i - j;
        }
        valueStack.push(
            {
                val: T[i],
                index: i
            }
        );
    }
    return recordStack;
};

var temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));