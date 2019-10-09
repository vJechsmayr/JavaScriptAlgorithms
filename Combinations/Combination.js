/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combine = function(n, k) {
    var numbers = [];
    for (n=1; n <= 4; n++){
        for (j=n+1 ; j <=4; j++){
         let num = [];
            num.push(n);
            num.push(j);
            numbers.push(num_2);
        }
    }
    return numbers;
};

console.log(combine(4, 2));