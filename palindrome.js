/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    var n = x.length;
    for (var i = 0; i < n/2; i++) {
        if (x[i] !== x[n-i-1])
            return false;
    }
    return true;
};