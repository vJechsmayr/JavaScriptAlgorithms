function twoSum(num_arr, target) {
    var result = [];
    for (var i = 0; i < num_arr.length; i++) {
        for (var j = i + 1; j < num_arr.length; j++) {
            if (num_arr[i] + num_arr[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}
module.exports = twoSum;
