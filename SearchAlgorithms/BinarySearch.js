function binarySearch(sortedArray, elementToFind) {
    var lowIndex = 0;
    var highIndex = sortedArray.length - 1;
    while (lowIndex <= highIndex) {
      var midIndex = Math.floor((lowIndex + highIndex) / 2);
      if (sortedArray[midIndex] == elementToFind) {
        return midIndex;
      } else if (sortedArray[midIndex] < elementToFind) {
        lowIndex = midIndex + 1;
      } else {
        highIndex = midIndex - 1;
      }
    } return null;
  }