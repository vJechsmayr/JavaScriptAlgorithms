const helper = function(ret, temp, index, nums) {
    for (let i = index+1; i < nums.length; i++) {
        const newTemp = [...temp, nums[i]];
        ret.push(newTemp);
        helper(ret, newTemp, i, nums);
    }
}

var subsets = function(nums) {
    // Recursively
    const ret = [[]];
    helper(ret, [], -1, nums);
    return ret;
};

console.log(subsets([1,2,3]))