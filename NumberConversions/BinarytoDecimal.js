function binarytodecimal(b) { 
    return parseInt((b + '')
    .replace(/[^01]/gi, ''), 2);
}
console.log(binarytodecimal('101010'));