/**
 * Section 5 Video 8 (Hint: use the Multiple Pointers pattern)
 * 
 * Implement a function called countUniqueValues which accepts a sorted
 * array, and counts the unique values in the array. There can be negative 
 * numbers in the array, but it will always be sorted.
 */

/**
 * 1st attempt: space: O(1); time: O(n)
 */
function countUniqueValues(sortedArray) {
    let uniqueValues = 0;
    if (sortedArray.length == 0) {
        return uniqueValues;
    }

    let value = undefined;
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== value) {
            value = sortedArray[i];
            uniqueValues++;
        }
    }

    return uniqueValues;
}


/**
 * 2nd attempt: using Colt's multiple pointers approach
 * Time: O(n)
 * Space: O(1)
 */

function countUniqueValues2(sortedArray) {
    if (sortedArray.length == 0) {
        return 0;
    }
    let i = 0;

    for (let j = 0; j < sortedArray.length; j++) {
        if (sortedArray[i] !== sortedArray[j]) {
            i++;
            sortedArray[i] = sortedArray[j];
        }
    }

    return i + 1
}
// Tests
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]), countUniqueValues2([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([]), countUniqueValues2([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1]), countUniqueValues2([-2, -1, -1, 0, 1])); // 4