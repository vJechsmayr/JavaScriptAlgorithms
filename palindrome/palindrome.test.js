const isPalindrome = require("./palindrome").isPalindrome;

describe("isPalindrome()", () => {
	it("should return true for single number", () => {
		expect(isPalindrome(1)).toBeTruthy();
	});
	
	it("should return true for valid number \"121\"", () => {
		expect(isPalindrome(121)).toBeTruthy();
	});
	
	it("should return true for same number 111", () => {
		expect(isPalindrome(111)).toBeTruthy();
	});
	it("should return false for invalid number", () => {
		expect(isPalindrome(123)).toBeFalsy();
	});
	
	it("should return true for long value", () => {
		expect(isPalindrome(123321123321)).toBeTruthy();
	});
});