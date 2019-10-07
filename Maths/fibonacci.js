function fibonacci(n) {
  var a = 0, b = 1, temp = 1;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
    console.log(temp);
  }
  return temp;
}

fibonacci(7);