// Returns the prime factors for the provided number.
// Prime factors are all prime numbers which multiplied form the provided value.

function findPrimeFactors(num = 0) {
  if (num === 0) return [];

  const primeFactors = [];
  let divisor = 2;

  while (num >= Math.pow(divisor, 2)) {
    if (num % divisor === 0) {
      primeFactors.push(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }

  primeFactors.push(num);

  return primeFactors;
}

console.log(findPrimeFactors(100)); // prints [2,2,5,5];
