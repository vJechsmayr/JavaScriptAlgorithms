let countingSort = (arr, min, max) => {
    const count = [];
    const sortedArr = [];

    for (let i = min; i <= max; i++) {
        count[i] = 0;
    }

    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] += 1;
    }

    for (let i = 1; i < arr.length; i++) {
        count[i] += count[i-1];
    }

    //Loop over the input array in reverse to have a stable sort
    for (let i = arr.length - 1; i >= 0; i--) {
        sortedArr[count[arr[i]]-1] = arr[i];
        count[arr[i]]--;
    }

    return sortedArr;
};
