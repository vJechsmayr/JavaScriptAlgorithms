<script>
	function isPalindrome(number) {
		if (!Number.isInteger(number)) return false;
		const str = number.toString();
		return (
			str ===
			str
				.split('')
				.reverse()
				.join('')
		);
	}
  
  
  console.log(isPalindrome(121));  //TRUE
  console.log(isPalindrome(123));  //False
</script>
