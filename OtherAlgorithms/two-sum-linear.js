// O(n) time Solution to https://leetcode.com/problems/two-sum/
const twoSum = (nums, target) => {
    const seen = new Map();

    // store complement as key and the index as the value
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
};

// twoSum([2,7,11,15], 9); // should return [0,1]
// twoSum([3,3], 6); // should return [0,1]
// twoSum([4,1,2,13,9,51], 53); // should return [2, 5]