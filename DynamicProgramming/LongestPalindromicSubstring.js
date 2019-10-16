var longestPalindrome = function(string){
    let strLen = string.length
    if(!string.length || string.length === 1) return string
    
    let centerIdx = 0;
    let radius = 0;
    let longest = string[0];
    
    while(centerIdx < strLen){
        
        //to catch odd length palindromes
        while( string[centerIdx-radius] && string[centerIdx+radius] && string[centerIdx-radius] == string[centerIdx+radius]){
                if(radius*2+1 > longest.length) longest = string.slice(centerIdx-radius,centerIdx+radius+1)
                radius++
        }
        //to catch even length palindromes
        radius = 1
        while( string[centerIdx-radius+1] && string[centerIdx+radius] && string[centerIdx-radius+1] == string[centerIdx+radius]){
                if(2*radius > longest.length) longest = string.slice(centerIdx-radius+1,centerIdx+radius+1)
                radius++
        }
      centerIdx++
      radius = 0
    }
    return longest
}
