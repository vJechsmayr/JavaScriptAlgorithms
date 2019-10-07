//Language: Javascript
//Author: Uddesh Jain
//Github: https://github.com/UddeshJain
function naiveSearch(longStr, shortStr) {
    let counter = 0
    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (shortStr[j] !== longStr[i + j]) break
            if (j === shortStr.length - 1) counter = counter + 1
        }
    }
    return counter
}
console.log(naiveSearch("how are you", "are"))