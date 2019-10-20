/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var numberReverse = x.toString().split('').reverse().join('');
    return numberReverse == x ? true : false
}