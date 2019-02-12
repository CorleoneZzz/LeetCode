/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var n=Math.floor(Math.log(x)/Math.log(10))+1;
    for (let i=0;i<n;i++)
    {
        x=x%10
    }

};
reverse(1232222)