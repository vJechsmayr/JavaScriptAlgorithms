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
  
  
  console.log(is_palindrome(121));  //TRUE
  console.log(is_palindrome(123));  //False
</script>
