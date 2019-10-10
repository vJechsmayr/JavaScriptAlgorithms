//Language: Javascript
//Author: Sarah Sakhri
//Github: https://github.com/sarahsakhri

let x = [66, 0, 19, -45, 26, 56, 15, 21, -98];
console.log("---- Original array -----");
console.log(x);


function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}

selectionSort(x);

console.log("---- Selection sorted array -----");
console.log(x);

