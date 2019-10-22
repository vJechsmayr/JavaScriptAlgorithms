/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length == 1) return 0
    for(let i=0; i <nums.length; i++){
        if(nums[i] >= nums[i-1] && nums[i] >= nums[i+1]){
            return i
        }
        if(i == 0 && nums[i] >= nums[i+1]){
            return i
        }
        if(i == nums.length-1 && nums[i] >= nums[i-1]){
            return i
        }
    }
};

//iterate through the array and for each element check its left neighbor and right neighbor
//if the element is larger than or equal to both neighbors return that number
