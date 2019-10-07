const findMedianSortedArrays = function (nums1, nums2) {
    const joined_array = [...nums1, ...nums2].sort();
    const total = joined_array.length;
    //check if array is even in length
    if (total % 2 == 0) {
        let first_bound = (total / 2) - 1;
        let second_bound = first_bound + 1;
        return (joined_array[first_bound] + joined_array[second_bound]) / 2;
    }
    let position = ((total - 1) / 2) + 1;
    return joined_array[position];
};
module.exports = findMedianSortedArrays;
