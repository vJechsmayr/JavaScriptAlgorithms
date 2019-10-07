function isPalindromeRecursive(chars, s, e) {
  if (s === e) {
    return true;
  }
  
  if (chars[s] !== chars[e]) {
    return false;
  }

  if (s < e + 1) {
    return isPalindromeRecursive(chars, s + 1, e - 1)
  }

  return true;
}

function isPalindrome(s) {
  // convert the input to string
  const chars = String(s);
  const len = chars.length
  if (len <= 1) {
    return true
  }
  return isPalindromeRecursive(chars, 0, len - 1);
}

module.exports = isPalindrome;
