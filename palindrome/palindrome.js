exports.isPalindrome = function isPalindrome(n) {
	return n.toString() === n.toString().split("").reverse().join("");
};