function arr(nums,target){

for(let j=0;j<nums.length;j++){
  
for(let k=0;k<nums.length;k++){
  
if(nums[j]+nums[k]== target){

  return [nums[j],nums[k]]
  }
  }
  }
  }
  


console.log(arr([1,2,3,4,5,6,7,8,9,10], 8)) // [1,7]
