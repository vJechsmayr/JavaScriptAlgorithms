/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * 
 * In MATLAB, there is a very useful function called 'reshape', 
 * which can reshape a matrix into a new one with different size 
 * but keep its original data.
 *
 * You're given a matrix represented by a two-dimensional array, and 
 * two positive integers r and c representing the row number and column 
 * number of the wanted reshaped matrix, respectively.
 *
 * The reshaped matrix need to be filled with all the elements of the 
 * original matrix in the same row-traversing order as they were.
 *
 * If the 'reshape' operation with given parameters is possible and legal, 
 * output the new reshaped matrix; Otherwise, output the original matrix.
 */

var matrixReshape = function(nums, r, c) {
    let size = nums.length * nums[0].length;

    if (r * c !== size) {
        return nums;
    }

    let new_mat = new Array;
    let tmp_row = new Array;
    let count_col = 0;

    for (let row of nums) {
        for (let num of row) {
            if (count_col < c) {
                tmp_row.push(num);
                count_col++;
            } else {
                new_mat.push(tmp_row);
                tmp_row = [num]
                count_col = 1;
            }
        }
    }

    new_mat.push(tmp_row);
    return new_mat;
};