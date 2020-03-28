/**
 * @param {number} N
 * @return {number}
 */
// 高阶函数
// var fib = function(N) {
//     function f(N) {
//         if (N < 2) {return N};
//         let result = f(N - 1) + f(N - 2);
//         return result;
//     }
//     return f(N)
// };
var fib = function(N) {
    if (N < 2) {return N};
    let result = fib(N - 1) + fib(N - 2);
    return result;
};
