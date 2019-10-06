function bubbleSort(temp_arr){
    let arr = [...temp_arr];

    //traverse through all the elements
    for(let i=0; i<arr.length; i++){

        for(let j=0; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                
                //swap if element found is greater
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }

    return arr;
}

//testing
let values = [5,6,3,34];

console.log(bubbleSort(values));