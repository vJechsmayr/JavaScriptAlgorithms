function RomanToDecimal(str) {
  var result = 0;
  // the result is now a number, not a string
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
    while (str.indexOf(roman[i]) === 0){
      result += decimal[i];
      str = str.replace(roman[i],'');
    }
  }
return result;
  return
}
