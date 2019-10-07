//Language: Javascript
//Author: Viktoria Jechsmayr
//Github: https://github.com/vjechsmayr

// this swaps two items
function swap(arr, left, right){
  let temp   = arr[left];
  arr[left]  = items[right];
  arr[right] = temp;
}

// function to do partition added 
function partition(arr, left, right) {
  // get the pivot
  let pivot = arr[Math.floor((right + left) / 2)],
  // pointer to the left  
      i = left,
    // pointer to the right                              
      j = right;
  while (i <= j) {
      while (arr[j] > pivot) {
        j--;
      }
      while (arr[i] < pivot) {
          i++;
      }
      if (i <= j) {
        // swap the 2 elements to get them in order
          swap(arr, i, j);
          i++;
          j--;
      }
  }
  return i;
}

function quickSort(arr, left, right){
   let len = arr.length,
   pivot,
   partitionIndex;

  if(left < right){
    pivot          = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}