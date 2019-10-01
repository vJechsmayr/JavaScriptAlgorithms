const linearSearch = (array, searchedElement) => {
    const indices = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchedElement) {
            indices.push(i);
        }
    }
    return indices;
}

const numbers = [1, 2, 3, 4, 4];
const foundAt = linearSearch(numbers, 4);

console.log(`Four is found at: ${foundAt.join(', ')}`);
