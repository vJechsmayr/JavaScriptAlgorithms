function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min=arr[i];
        let min_index=i;
        for(let j=i;j<arr.length;j++){
            if(arr[j]<min){
                min=arr[j];
                min_index=j;
            }
        }
        let temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
