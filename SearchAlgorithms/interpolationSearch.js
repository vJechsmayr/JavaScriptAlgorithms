/**
 * `arr` must be sorted in ascending order.
 *
 * Returns the index of `target` in `arr`, or -1 if not found.
 * @param arr - array of integers
 * @param target - integer
 */
function interpolationSearch(arr, target) {
    if (!arr || !arr.length) {
        return -1;
    }

    var low = 0;
    var high = arr.length - 1;

    while (
        arr[high] !== arr[low]
            && target >= arr[low]
            && target <= arr[high]
    ) {
        var mid = low + Math.floor(((target - arr[low]) * (high - low) / (arr[high] - arr[low])));

        if (arr[mid] < target) {
            low = mid + 1;
        } else if (target < arr[mid]) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    return target === arr[low] ? low : -1;
}
