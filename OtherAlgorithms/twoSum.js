var twoSum = function (num, tar) {
    var res = [];

    for (var i = 0; i < num.length; i++) {
        for (var j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === tar) {
                res.push(i);
                res.push(j);
            }
        }
    }
    return res;
}

console.log(twoSum([2, 7, 11, 15], 9));
// Output [ 0, 1 ]
