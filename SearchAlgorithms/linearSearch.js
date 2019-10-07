function linearSearch(arr, target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target)
        {
            return "found at " + String(i) + " position";
        }
    }
    return "not found";
}