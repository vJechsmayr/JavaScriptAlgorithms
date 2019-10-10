function isSquareFree(num = 0) {
  for (let i = 2; i < Math.round(Math.sqrt(num) + 1); i++) {
    if (num % Math.pow(i, 2) === 0) return false;
  }
  return true;
}

const squareFrees = [1, 3, 5, 6, 13, 15, 17, 19, 21, 22, 26, 29, 34, 35, 38];
const notSquareFrees = [4, 8, 9, 12, 16, 18, 20, 24, 25, 27, 28, 32, 36, 40];

squareFrees.forEach(s => console.log(_isSquareFree(s)));
notSquareFrees.forEach(n => console.log(_isSquareFree(n)));
