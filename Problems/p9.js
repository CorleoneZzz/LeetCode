var isPalindrome = function(x) {
    // 特殊情况：
    // 当 x < 0 时，x 不是回文数，因为有负号。
    // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
    // 则其第一位数字也应该是 0
    // 只有 0 满足这一属性
    if(x<0||(x%10===0&&x!==0))
    {
        return false
    }
    let reverNum=0;
        while (reverNum<x)
        {
            reverNum=reverNum*10+x%10;
            x=Math.floor(x/10);
        }
        return x===reverNum||x === Math.floor(reverNum/10)
};
isPalindrome( 123421);