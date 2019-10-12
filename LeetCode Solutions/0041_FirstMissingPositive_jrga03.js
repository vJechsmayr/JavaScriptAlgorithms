/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    return nums.reduce((fmp, num) => ((num > 0 && num <= fmp) ? (num + 1) : fmp), 1);
};
