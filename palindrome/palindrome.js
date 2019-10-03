function isPalindrome(number) {
  if (!Number.isInteger(number)) return false;
  const str = number.toString();
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  );
}

module.exports = isPalindrome;
