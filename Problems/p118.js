/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let nums=[];
    for (let i=0;i<numRows;i++)
    {
        //double array
        nums[i]=[];
        for (let j=0;j<=i;j++)
        {
           if(j===0||j===i)
           {
               nums[i][j]=1;
           }
           else
           {
               nums[i][j]= nums[i-1][j-1]+nums[i-1][j];
           }
        }
    }
    return nums ;
};
console.log(generate(5));