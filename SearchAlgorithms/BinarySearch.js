//Language: Javascript
//Author: Tran Lan Anh
//Github: https://github.com/Lanhbaobao

var binarySearch = function(array, value) {
    var guess,
        min = 0,
        max = array.length - 1;	

    while(min <= max){
        guess = Math.floor((min + max) /2);
	if(array[guess] === value)
	    return guess;
	else if(array[guess] < value)
	    min = guess + 1;
	else
	    max = guess - 1;	
     }
	
     return -1;
}

var arr = [2,6,4,1,7,9];

binarySearch(arr, 4);