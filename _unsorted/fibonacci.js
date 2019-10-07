// for n number of fibonacci numbers
const fibonacci = function (n) {
	if (n == 1) return [1];
	else if (n == 2 ) return [1, 1];
	
	let fib = [1, 1];
	for (i=2;i<n;i++) {
		let temp_num = fib[fib.length - 1] + fib[fib.length -2];
		fib.push(temp_num);
	}

	return fib;
}

