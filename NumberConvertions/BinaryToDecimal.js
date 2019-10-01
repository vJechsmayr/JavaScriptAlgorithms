// CONVERT BINARY TO DECIMAL
function binaryToDecimal(num) {
  // Convert binary number into an array
	var numArr = num.toString().split("").reverse(),
		 final = 0; // Final value placeholder
	
  // For every digit
	for(i = 0; i < numArr.length; i++) {
    // Gets the value of current digit
		var cur = parseInt(numArr[i]);
		
		// If current digit is 1
		if(cur) {
      // Add 2 to the power of the digit place to the final number
			final += Math.pow(2, i);
		}
	}
	
  // Return final decimal result
	return final;
}

console.log(binaryToDecimal(1101));

// SHORTER METHOD
// console.log(parseInt("1101", 2));
