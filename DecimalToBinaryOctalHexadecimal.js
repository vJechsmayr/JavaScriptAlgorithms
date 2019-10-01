function baseConverter(n, b){
 var stack = new Stack();
 var rem, convertedString = '', digits = '0123456789ABCDEF';  
   
 while (n > 0){
  rem = Math.floor(n % b);
  stack.push(rem);
  n = Math.floor(n / b);
 }

 while (!stack.isEmpty()){
   convertedString += digits[stack.pop()];
 }

 return convertedString;
}

console.log(baseConverter(1021313, 2));
console.log(baseConverter(1021313, 8));
console.log(baseConverter(1021313, 16));