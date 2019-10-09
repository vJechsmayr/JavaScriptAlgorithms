var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b);
    var result = [];
    let visited = new Array(nums.length).fill(false)

    function helper(nums, visited, permutation) {
        if (permutation.length === nums.length) {
            result.push(permutation.slice());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue;
            if (i > 0 && nums[i] == nums[i - 1] && !visited[i - 1]) continue;

            permutation.push(nums[i]);
            visited[i] = true;
            helper(nums, visited, permutation)
            visited[i] = false;
            permutation.pop();
        }

    }

    helper(nums, visited, []);
    return result;
};