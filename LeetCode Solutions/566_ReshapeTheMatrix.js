/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

var matrixReshape = function(nums, r, c) {
    let size = nums.length * nums[0].length;
    if (r*c !== size) {
        return nums;
    }

    let new_mat = new Array;
    let row = new Array;
    let count_col = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            if (count_col < c) {
                row.push(nums[i][j]);
                count_col++;
            } else {
                new_mat.push(row);
                row = [nums[i][j]]
                count_col = 1;
            }
        }
    }
    new_mat.push(row);
    return new_mat;
};