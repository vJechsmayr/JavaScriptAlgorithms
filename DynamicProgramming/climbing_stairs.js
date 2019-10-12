var countWays = function(steps){
    if(steps <= 1)
        return 1;

    return countWays(steps - 1) + countWays(steps - 2);
}

console.log(countWays(4)) // return 5
console.log(countWays(5)) // return 8
