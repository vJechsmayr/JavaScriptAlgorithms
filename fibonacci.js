function fibonacci(num){
  var a = 1, b = 0, temp;
  var out = '';

  while (num > 0){
      temp = a;
      a = a + b;
      b = temp;
      out += ' ' + b
      num--;
  }

  return out
}

//tests
console.log(fibonacci(10))
console.log(fibonacci(16))