/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const clean = s.replace(/[\s()]/g, '')
    const integers = clean.match(/\d+/g);
    const operators = clean.match(/\D/g);

    return integers.reduce((total, x, i) => +total + (( operators[i-1] === '-' ? -1 : 1 ) * x ) );
};
