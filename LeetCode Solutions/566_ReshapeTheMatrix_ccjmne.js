/**
 * Yields all elements of a matrix in a row-traversing order.
 * @param {number[][]} matrix
 * @yield {number} the next element in the matrix
 */
function* traverse(matrix) {
  for (const row of matrix) {
    for (const cell of row) {
      yield cell;
    }
  }
}

/**
 * Reshapes a matrix into a new one with different size but keep its original data.
 *
 * Takes a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
 * The reshaped matrix is filled with all the elements of the original matrix in the same row-traversing order as they were.
 *
 * If the 'reshape' operation with given parameters isn't possible and legal, outputs the original matrix.
 *
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (nums.length * nums[0].length !== r * c) {
    // Both matrices don't hold the same number of elements.
    return nums;
  }

  const traversal = traverse(nums);
  return Array.from({ length: r }, () =>
    Array.from({ length: c }, () => traversal.next().value)
  );
};
