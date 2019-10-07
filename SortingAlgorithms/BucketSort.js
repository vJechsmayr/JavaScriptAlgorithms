//Language: Javascript
//Author: Maria Luize
//Github: https://github.com/MariaLuize

function insertSort(arr) {
    const len = arr.length;
    
    for(let i = 1; i < len; i++) {
      let temp = arr[i];
      for(let j = i - 1; j >= 0 && arr[j] > temp; j--) {
        arr[j+1] = arr[j];
      }
      arr[j+1] = temp;
    }
    
    return arr;
  }
  
  // Bucket sort itself
  function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
      return arr;
    }
  
    var i,
        minValue    = arr[0],
        maxValue    = arr[0],
        bucketSize  = bucketSize || 5;
    
    // Setting min and max values
    arr.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })
  
    // Initializing buckets
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let allBuckets = new Array(bucketCount);
    
    for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
    }
    
    // Pushing values
    arr.forEach((currentVal) => {
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });
  
    // Sorting buckets
    arr.length = 0;
    
    allBuckets.forEach((bucket) => {
        insertionSort(bucket);
        bucket.forEach((element) =>{
            arr.push(element)
        });
    });
  
    return arr;
  }