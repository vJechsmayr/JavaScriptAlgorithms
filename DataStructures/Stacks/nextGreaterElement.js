function nextGreaterElement(arr) {
    stack = [];
    res = Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        curr = arr[i];
        while (stack.length && curr > arr[stack[stack.length - 1]]) {
            res[stack.pop()] = curr;
        }
        stack.push(i);
    }

    while (stack.length) {
        res[stack.pop()] = -1;
    }

    return res;
}

console.debug(nextGreaterElement([13, 7, 6, 12])); // [-1, 12, 12, -1]
console.debug(nextGreaterElement([])); // []
console.debug(nextGreaterElement([2, 3, 999])); // [3, 999, -1]
console.debug(nextGreaterElement([5, 4, 3, 2, 1])); // [-1, -1, -1, -1, -1]
console.debug(nextGreaterElement([1, 2, 3, 4, 5])); // [2, 3, 4, 5, -1]
