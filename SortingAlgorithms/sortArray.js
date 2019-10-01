function sortArray (arr){
    arr.sort((a, b) => a- b);
    return arr;    
}

let arr = [3,1,2,4]
console.log(sortArray(arr));