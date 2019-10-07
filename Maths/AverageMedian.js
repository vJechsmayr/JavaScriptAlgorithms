const AverageMedian = function(arr1, arr2) {
    
    const CalculateMedian = arr => (
        arr.length % 2 === 0 
            ? (arr[arr.length/2 - 1] + arr[arr.length/2])/2 
            :  arr[(arr.length + 1)/2 - 1]
    );

    if(arr1.length === 0) {        
        return CalculateMedian(arr2);
    }  
    if(arr2.length === 0) {
        return CalculateMedian(arr1);
    }
    
    let mergedArray = [];
    let mergedArrayLength = arr1.length + arr2.length;

    let medianLimit = mergedArrayLength % 2 === 0 ? (mergedArrayLength/2 + 1) : (mergedArrayLength + 1)/2;
    let n1Count = 0, n2Count = 0;
    
    while(mergedArray.length < medianLimit) {
        
        if(n1Count >= arr1.length) {
            mergedArray.push(arr2[n2Count]);
            n2Count++;
            continue;
        }
        
        if(n2Count >= arr2.length) {
            mergedArray.push(arr1[n1Count]);
            n1Count++;
            continue;
        }
        
        if(arr1[n1Count] <= arr2[n2Count]) {            
            mergedArray.push(arr1[n1Count]);
            n1Count++;            
        } else {            
            mergedArray.push(arr2[n2Count]);
            n2Count++;
        }
    }

    if(mergedArrayLength % 2 === 0) {
        return (mergedArray[medianLimit-1] + mergedArray[medianLimit-2])/2;
    } else {
        return mergedArray[medianLimit-1];
    }
};