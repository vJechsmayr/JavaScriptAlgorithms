// solution to classic two sum problem (first easy problem in leetcode)

function twoSum(arr, target)
{
 const sizeOfArray = arr.length;
 for(let i = 0; i < sizeOfArray; i++){
     for(let j= i + 1; j < sizeOfArray; j++){
       if(target - arr[i] === arr[j]){
          return target 
        }
     }
  }
 return "Target doesn't exist."
}