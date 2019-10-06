function jumpSearch(arr, target) {
  let n = arr.length // size of array
  let m = Math.round(Math.sqrt(n)) // size of block to be jumped

  var jumpIndex = 0

  while (arr[jumpIndex]) {
    if (arr[jumpIndex] == target) {
      return 'found target at ' + String(jumpIndex) + ' position'
    } else {
      jumpIndex += m
    }
  }

  for (var prevIndex = jumpIndex; prevIndex > 0; prevIndex--) {
    if (arr[prevIndex] == target) {
      return 'found target at ' + String(prevIndex) + ' position'
    } else if (arr[prevIndex] < target) {
      break
    }
  }

  return 'not found'
}
