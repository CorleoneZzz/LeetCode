/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var perimeter=0;
    // var row=grid.length;
    // var column=grid[0].length;
    for (let i=0;i<grid.length;i++)
    {
        for (let j=0;j<grid[i].length;j++)
        {
           if (grid[i][j]===1)
           {
               perimeter+=4;
               if(i>0&&grid[i-1][j]===1)
               {
                   perimeter-=1;
               }
               if(j>0&&grid[i][j-1]===1)
               {
                   perimeter-=1;
               }
               if(j<grid[i].length-1&&grid[i][j+1]===1)
               {
                   perimeter-=1;
               }
               if(i<grid.length-1&&grid[i+1][j]===1)
               {
                   perimeter-=1;
               }
           }
        }
    }
    console.log(perimeter);
    return perimeter
};
islandPerimeter(
    [[0,1,0,0],
        [1,1,1,0],
        [0,1,0,0],
        [1,1,0,0]]
);