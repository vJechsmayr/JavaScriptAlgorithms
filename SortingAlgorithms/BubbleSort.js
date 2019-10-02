//Language: Javascript
//Author: Tran Lan Anh
//Github: https://github.com/Lanhbao

function bubleSort(arr){
    for(let i = arr.length-1; i > 0; i--){
      for(let j = 0; j < i; j++){
        if(arr[j] >= arr[j+1]){
          let temp = arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;
        }
      }
    }
    return arr;
  }
  //test
  var arr = [5,2,3,9,0];
  bubleSort(arr);
  
  
  