let findMin = arr => {

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
};

const arr = [8,6,5,2,9,57,-6];
console.log(findMin(arr));