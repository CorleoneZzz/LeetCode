/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let row = board.length;
    let col = board[0].length;
    // 遍历包括自己在内的格子
    for (let i =0; i <row; ++i) {
        for (let j =0;j<col; ++j) {
            let lives = 0;
            // 边界判断
            for (let x = Math.max(0, i-1); x< Math.min(row, i+2); ++x) {
                for (let y = Math.max(0, j-1); y< Math.min(col, j+2); ++y) {
                    // 判断当前轮次的死活，和1相与
                    lives +=board[x][y] & 1;
                    // 下一轮的存活数据
                    if (lives === 3 || lives - board[i][j]=== 3) {
                        // 存到倒数第二位
                        board[i][j]|= 0b10;
                    }
                }
            }
        }
    }
    // 再次遍历一遍，把第二位的值赋给当前矩阵，更新数据
    for (let i =0; i<row; ++i) {
        for (let j =0;j<col; ++j) {
            board[i][j] >>= 1;
        }
    }
};
console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));
