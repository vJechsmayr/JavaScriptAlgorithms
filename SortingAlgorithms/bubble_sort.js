function bubble_sort(arr){
    var i, j, change, temp;
    var len = arr.length;
    
    for (i=0; i < len-1; i++){
        change = 0;
        for (j=0; j < len-1-i; j++){
            if (arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                change++;
            }
        }
        
        if(change == 0){
            break;
        }
    }

    return arr;
}

console.log(bubble_sort([3, 0, 2, 5, -1, 4, 1]));