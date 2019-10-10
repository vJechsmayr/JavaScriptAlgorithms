let mean = arr => {

    let sum = 0;
    arr.forEach(element => sum += element );

    return sum / arr.length;
};

const arr = [2,9,6,5,4,7,12];
console.log(mean(arr));