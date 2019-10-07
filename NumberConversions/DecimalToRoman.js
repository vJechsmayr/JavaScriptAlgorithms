const KEYS = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"];

const IntegerToToman = num => {
  if (isNaN(num)) return `value "${num}" is not a number`;
  if(!Number.isInteger(num)) return `value "${num}" is not an integer`;
  const digits = String(+num).split("")
  let roman = "";

  for(let i = 2; i >= 0; i--) roman = (KEYS[+digits.pop() + (i * 10)] || "") + roman;

  return Array(+digits.join("") + 1).join("M") + roman;
}
