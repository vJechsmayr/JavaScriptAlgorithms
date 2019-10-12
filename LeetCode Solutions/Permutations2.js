/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var uniqueList = [nums];
    performAllPermutations(uniqueList, nums, nums.length);
    return uniqueList;
};

function performAllPermutations(uniqueList, nums, length){
    for(var i = 0; i < length; i++){
        if(i == length - 1){
          return;
        }
        
        var newList = nums.slice();
        newList[i] = nums[i+1];
        newList[i+1] = nums[i];

        //check if newList is present in uniqueList
        var doCombExists = false;
        for(var j = 0; j < uniqueList.length; j++){
          var k = 0;
          for(k = 0; k < length; k++){
            if(newList[k] !== uniqueList[j][k]){
              break;
            }
          }
          if(k == length){
            doCombExists = true;
            break;
          }
        }
        if(!doCombExists){
          uniqueList.push(newList);
          performAllPermutations(uniqueList,newList, length);
        }
  }
}