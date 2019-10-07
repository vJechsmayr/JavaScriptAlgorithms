/* Returns x's index if x is present,  else returns -1 */
// Requirement : Array needs to be sorted
function fibonaccianSearch(arr, x, n)
{
    /* Initialising fibonacci numbers */
    var fbM2 = 0;   // (m-2)'th Fibonacci number
    var fbM1 = 1;   // (m-1)'th Fibonacci number
    var fbM = fbM2 + fbM1;  // m'th Fibonacci
    // Marks the eliminated range from front
    var offset = -1;
    /* fbM will store the smallest Fibonacci
       number greater than or equal to n */
    while (fbM < n)
    {
	fbM2 = fbM1;
	fbM1 = fbM;
	fbM  = fbM2 + fbM1;
    }
    /* while there are elements to be inspected. Note that
       we compare arr[fbM2] with x. When fbM becomes 1,
       fbMm2 becomes 0 */
    while (fbM > 1)
    {
	// Check if fbMm2 is a valid location
	var i = min(offset+fbM2, n-1);

	/* If x is greater than the value at index fbMm2,
	   cut the subarray array from offset to i */
	if (arr[i] < x)
	{
	    fbM  = fbM1;
	    fbM1 = fbM2;
	    fbM2 = fbM - fbM1;
	    offset = i;
	}

	/* If x is greater than the value at index fbMm2,
	   cut the subarray after i+1  */
	else if (arr[i] > x)
	{
	    fbM  = fbM2;
	    fbM1 = fbM1 - fbM2;
	    fbM2 = fbM - fbM1;
	}

	/* element found. return index */
	else return i;
    }

    /* comparing the last element with x */
    if(fbM1 && arr[offset+1]==x)
	return offset+1;

    /*element not found. return -1 */
    return -1;    
}

function min(number1, number2) {
    if (number1 > number2) {
        return number2;
    }
    else if(number1 < number2){
        return number1;
    }
    else{
        return number1;
    }
    
}

console.log(fibonaccianSearch([10,20,30,40], 30, 4));