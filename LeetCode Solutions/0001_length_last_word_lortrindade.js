/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var separe = s.trim().split(" ");
    return lastIndex = separe[separe.length -1].length;
};