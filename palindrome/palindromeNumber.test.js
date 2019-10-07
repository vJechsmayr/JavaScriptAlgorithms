const isNumberPalindrome = require('./palindromeNumber');

describe('isNumberPalindrome()', () => {
  it('should return true for single number', () => {
    expect(isNumberPalindrome(1)).toBeTruthy();
  })

  it('should return true for valid number "121"', () => {
    expect(isNumberPalindrome(121)).toBeTruthy();
  })

  it('should return true for same number 111', () => {
    expect(isNumberPalindrome(111)).toBeTruthy();
  })
  it('should return false for invalid number', () => {
    expect(isNumberPalindrome(123)).toBeFalsy();
  })

  it('should return true for long value', () => {
    expect(isNumberPalindrome(123321123321)).toBeTruthy();
  })
})