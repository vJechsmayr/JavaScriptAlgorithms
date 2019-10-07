//Language: Javascript
//Author: Maria Luize
//Github: https://github.com/MariaLuize

// Creating a max heap function
function maxHeap(input, c) {
    const right = 2 * i + 2
    const left = 2 * i + 1
    let maximum = c

    if ((left < arrLength) && (input[left] > input[maximum])) {
        maximum = left
    }

    if ((right < arrLength) && (input[right] > input[maximum]))     {
        maximum = right
    }

    if (maximum != c) {
        swap(input, c, maximum)
        maxHeap(input, maximum)
    }
}

//Function for swaping
function swap(input, indexA, indexB) {
    const i = input[indexA]

    input[indexA] = input[indexB]
    input[indexB] = i
}

//The heapSort itself
function heapSort(input) {   
    arrLength = input.length

    for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1)      {
        maxHeap(input, i)
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i)
        arrLength--

        maxHeap(input, 0)
    }
    return
}
