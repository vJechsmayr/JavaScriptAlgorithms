function gnomeSort(array) 
{
    function back(i) 
    {
        for( ; i > 0 && array[i-1] > array[i]; i--)
        {
            var temp = array[i];
            array[i] = array[i-1];
            array[i-1] = temp;
        }
    }
    for (var i = 1; i < array.length; i++) 
    {
        if (array[i-1] > array[i])
        {
            back(i);
        }
    }
    return array;
}

var array = [10, 50, 70, 100, 20, 40, 90, 60, 30, 80]; 
console.log("Array before sort:"); 
console.log(array); 
console.log("Array after sort:"); 
console.log(gnomeSort(array));