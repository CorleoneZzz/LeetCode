/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     var valueStack=[];
//     if(s.length===0)
//     {
//         return true;
//     }
//     if(s.length%2!==0)
//     {
//         return false;
//     }
//     for (let i=0;i<s.length;i++)
//     {
//         if(s[i]==="("||s[i]==="{"||s[i]==="[")
//         {
//             valueStack.push(s[i]);
//             console.log(s[i]+"进栈，栈为"+valueStack);
//         }
//         if((s[i]===")"&&valueStack[valueStack.length-1]==="(")||(s[i]==="}"&&valueStack[valueStack.length-1]==="{")||(s[i]==="]"&&valueStack[valueStack.length-1]==="["))
//        {
//            valueStack.pop();
//            console.log("出栈，栈为"+valueStack)
//        }
//     }
//     return valueStack.length===0;
// };
var isValid = function(s) {
    const stack = [];
    const mapper = {
        '{': "}",
        "[": "]",
        "(": ")"
    };
    for (let i in s) {
        const v = s[i];
        if (['(', '{', '['].indexOf(v) > -1) {
            stack.push(v);
        } else {
            const peak = stack.pop();
            if (v !== mapper[peak]) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};
console.log(isValid("{[]}"));
