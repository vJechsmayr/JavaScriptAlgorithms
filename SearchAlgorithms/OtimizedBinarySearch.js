//Language: Javascript
//Author: Lucas Anderson Lima
//Github: https://github.com/LuAnderson

const list = [1, 999, 5, 2, 6, 4, 848, 494, 54, 13, 7, 9];

const BinarySearch = (list, numberToSearch) => {
    const resultSearch = list.indexOf(numberToSearch);
    console.log(resultSearch <= 0 ? numberToSearch + ' is not present' : resultSearch);
}

BinarySearch(list, 54);
