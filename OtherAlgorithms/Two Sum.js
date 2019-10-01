var twoSum = function(nums, target) {
    len=nums.length;
    const cache={};
    for(let i=0;i<len;i++){
        const cur = nums[i];
        if(typeof(cache[target-cur])=='number') return [ cache[target-cur],i];
        if(typeof(cache[cur])!='number') cache[cur]=i;
    }
};
