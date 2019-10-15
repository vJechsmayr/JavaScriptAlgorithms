var isAnagram = function(firstWord, secondWord){

    if(firstWord.length !== secondWord.length)
        return false;

    var firstWordArray = firstWord.split('').sort();
    var secondWordArray = secondWord.split('').sort();

    for(var i = 0; i < firstWordArray.length; i++){
        if(firstWordArray[i].toLowerCase() !== secondWordArray[i].toLowerCase())
            return false;
    }
    
    return true;
}

console.log(isAnagram('test', 'estt'));
console.log(isAnagram('foo', 'bar'));
console.log(isAnagram('test', 'tes'));