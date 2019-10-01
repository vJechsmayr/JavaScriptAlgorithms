<script>
	function is_palindrome(number)
	{
		var rem, temp, final = 0;

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
  
  
  console.log(is_palindrome(121));  //TRUE
  console.log(is_palindrome(123));  //False
</script>
