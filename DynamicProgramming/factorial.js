function factorial(num = 0) {
  if (num < 0)
    throw new Error(
      "Factorials can only be calculated for non-negative numbers."
    );
  if (num === 0 || num === 1) return 1;

  let value = 1;

  for (let i = 0, j = num; i < j; i++) {
    value *= i + 1;
  }
  return value;
}

console.log(factorial(3)); // 3! = 1*2*3 = 6
