/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    if (n === 0) {
        return [""];
    }
    let result = [];
    for (let i = 0; i < n; ++i) {
        let lefts = generateParenthesis(i);
        let rights = generateParenthesis(n - i - 1);

        for (let l = 0; l < lefts.length; ++l) {
            for (let r = 0; r < rights.length; ++r) {
                result.push("(" + lefts[l] + ")" + rights[r]);
            }
        }
    }
    return result;
};

console.log(generateParenthesis(3));