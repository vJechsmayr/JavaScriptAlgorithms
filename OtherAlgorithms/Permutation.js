function permutations(array) {
	return (function permutator(array, final = [], temporary = []) {
		array.forEach((element, index) => {
			let item = array.splice(index, 1)[0];
			
			temporary.push(item);
			
			if (array.length === 0) final.push([...temporary]);
			
			permutator(array, final, temporary);
			
			array.splice(index, 0, item);
			temporary.pop();
		});
		
		return final;
	})(array);
};

console.log(permutations([1, 2, 3]));