//@ts-check
/**
 *@author  Damola Adekoya
 * @param {Array} arr
 */

const mergeSort = arr => {
  if (arr.length <= 1) return arr; //determine the end condition for recursive loop
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));
  return merge(left, right);
};

/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 */

const merge = (arr1, arr2) => {
  let result = []; //hold the new merge array
  let i = 0;
  let j = 0; //keep track of the current position in the loop
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push[arr2[j]];
      j++;
    }
  }

  // Push the leftover Array Element if arr1 and arr2 length not equal
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};
