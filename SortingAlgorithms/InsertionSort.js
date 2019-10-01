function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let e = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > e; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = e;
  }
  return arr;
};

console.log(insertionSort([4,2,3,1,5]);