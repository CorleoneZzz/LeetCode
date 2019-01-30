/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    var n=minutesToTest/minutesToDie+1;
    return Math.ceil(Math.log(buckets)/Math.log(n));
};