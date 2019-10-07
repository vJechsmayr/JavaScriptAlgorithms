let binarySearch = function (arr, x, start, end) { 
	
	// Base Condtion 
	if (start > end) return false; 

	// Find the middle index 
	let mid=Math.floor((start + end)/2); 

	// Compare mid with given key x 
	if (arr[mid]===x) return true; 
		
	// If element at mid is greater than x, 
	// search in the left half of mid 
	if(arr[mid] > x) 
		return recursiveFunction(arr, x, start, mid-1); 
	else

		// If element at mid is smaller than x, 
		// search in the right half of mid 
		return recursiveFunction(arr, x, mid+1, end); 
} 		 
