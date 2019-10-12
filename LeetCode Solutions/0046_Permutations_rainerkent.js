/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	var permutations = [];

	if (nums.length > 1) {
		for (var i = 0; i < nums.length; i++) {
			var shorterNums = [...nums];
			var spliced = shorterNums.splice(i, 1);

			var permutedNums = permute(shorterNums);
			for (var j = 0; j < permutedNums.length; j++) {
				permutations.push(spliced.concat(permutedNums[j]));
			}
		}
	}
	else {
		return [nums];
	}

	return permutations;
}

console.log(permute([1, 2, 3]));