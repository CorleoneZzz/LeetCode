/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let rows = [];
    for (let i = 0; i <=rowIndex; i++) {
        rows[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                rows[i][j] = 1;
            } else {
                rows[i][j] = rows[i - 1][j - 1] + rows[i - 1][j];
            }
        }
    }
    return rows[rowIndex]
};
console.log(getRow(3));
