/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const opener = ['[', '(', '{'];
    const closerPair = {
        ']': '[',
        ')': '(',
        '}': '{'
    }

    const stack = []
    let isValid = true;
    for ( const char of s ) {
        if ( opener.includes( char ) ) {
            stack.push( char );
        } else if ( closerPair[char] === stack[stack.length - 1] ) {
            stack.pop();
        } else {
            isValid = false;
        }
    }

    return stack.length === 0 && isValid;
};
