function HexadecimalToDecimal(n) {
	if (typeof n === "number") {
		return n;
	} else {
		return parseInt(n, 16);
	}
}