let ternarySearch = (arr, start, end, key) => {

    if (start >= end) {
        return -1;
    }

    let midFirst = start + Math.floor((end - start) / 3);
    let midSecond = midFirst + Math.floor((end - start) / 3);

    if (arr[midFirst] === key) {
        return midFirst;
    }
    if (arr[midSecond] === key) {
        return midSecond;
    }

    if (key < arr[midFirst]) {
        return ternarySearch(arr, start, midFirst - 1, key);
    }

    if (key > arr[midSecond]) {
        return ternarySearch(arr, midFirst + 1, end, key);
    }

    else {
        return ternarySearch(arr, midFirst + 1, midSecond - 1, key);
    }
};

const arr = [1,6,9,17,21,69,85,100];
console.log(ternarySearch(arr, 0, arr.length, 1));
