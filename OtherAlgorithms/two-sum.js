function two_sum(nums, target){
    var i, j;
    for(i = 0; i < nums.length; i++){
        for(j = 0; i < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
}

console.log(two_sum([2, 7, 11, 15], 9));

