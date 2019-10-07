const twoSum = (arr, sum) => {
  let startPointer = 0;
  let endPointer = arr.length - 1;

  while (startPointer !== endPointer) {
    const curTwoSum = arr[startPointer] + arr[endPointer];

    if (curTwoSum === sum) {
      const result = [arr[startPointer], arr[endPointer]];
      return result;
    } else if (curTwoSum > sum) {
      endPointer = endPointer - 1;
    } else {
      startPointer = startPointer + 1;
    }
  }
};
