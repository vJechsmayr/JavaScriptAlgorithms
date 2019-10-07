/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    var maxlength = Math.max(a.length, b.length);
    a = a.padStart(maxlength, '0');
    b = b.padStart(maxlength, '0');
    
    var n = a.length
    var res = "";
    var sum = 0;
    var carry = 0;
    for (var i = n-1; i >= 0; i--) {
        var aBit = Number(a[i]);
        var bBit = Number(b[i]);
        var sum = aBit ^ bBit ^ carry;
        carry = (aBit & bBit) ^ (carry & (a[i] ^ b[i]));
        res += sum.toString();
    }
    if (carry == 1)
        res += '1';
    return res.split("").reverse("").join("");
};
