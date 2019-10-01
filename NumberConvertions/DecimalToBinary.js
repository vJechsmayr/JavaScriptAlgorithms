function decimalToBinary(number decimal){
	return (decimal >>> 0).toString(2);	
}

console.log(decimalToBinary(17));