/**
 * @param {number[][]} points
 * @return {number}
 */
var seqencing = function (x,y) {
    return x[1] - y[1];
}
var findMinArrowShots = function(points) {
    if (points.length === 0) {
        return 0;
    }
    points.sort (seqencing);
    let arrow = 1;
    let firstEnd = points[0][1];
    for (let i =0; i< points.length; i++) {
        if (points[i][0] > firstEnd) {
            firstEnd = points[i][1];
            arrow++;
        }
    }
    return arrow;
};
