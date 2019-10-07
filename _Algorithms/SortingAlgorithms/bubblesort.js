function bubblesort(arr){
    const length=arr.length;
    for(let i=0;i<length;i++){
        for(let j=i;j<length;j++){
            if(arr[i]>arr[j]){
                //swap elements in ith and jth index
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr
}
