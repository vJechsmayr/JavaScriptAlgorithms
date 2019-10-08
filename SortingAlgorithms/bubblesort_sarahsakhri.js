//Language: Javascript
//Author: Sarah Sakhri
//Github: https://github.com/sarahsakhri

let x = [22, 35, 40, 5, 777, 8, 9, 9, 223, 46, 34];

console.log("---- Original array -----");
console.log(x);

function bubbleSort(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < (array.length - i - 1); j++) {

            if (array[j] > array[j + 1]) {

                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

bubbleSort(x);

console.log("---- Bubble sorted array -----");
console.log(x);