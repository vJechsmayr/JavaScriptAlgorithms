//Language: Javascript
//Author: Uddesh Jain
//Github: https://github.com/UddeshJain
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        if (lowest != i) {
            let temp = arr[lowest]
            arr[lowest] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

console.log(selectionSort([64, 34, 8, 33, 1345, 76, 112, 30, 45]));