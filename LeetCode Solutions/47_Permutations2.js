var permuteUnique = function(nums) {

let permutations = []

const findUniquePerm = function(visited = new Set(), currPerm = []) {
	if (currPerm.length === nums.length){
		permutations.push(currPerm)
		return
	}
	let uniqueVal = new Set()

	for (let i = 0; i < nums.length; i++) {
		if (!uniqueVal.has(nums[i]) && !visited.has(i)) {
			uniqueVal.add(nums[i])
			findUniquePerm(new Set([...visited, i]), [...currPerm, nums[i]])
		}
	}
}

findUniquePerm()

return permutations
};
