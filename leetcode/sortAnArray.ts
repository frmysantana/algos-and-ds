/**
 * https://leetcode.com/problems/sort-an-array/
 * 
 * Given an array of integers nums, sort the array in ascending order and return it.
 * 
 * You must solve the problem without using any built-in functions in O(nlog(n)) 
 * time complexity and with the smallest space complexity possible.
 */

/**
- first approach
- loop through nums
- compare each element to the next element and swap if the left element is larger
- keep track of whether or not you had to swap elements and keep looping through nums until you no longer have to swap
- space o(1)
- time o(n^2)
- I intuited a Bubble Sort algorithm but it's too inefficient
 */
function sortArray1(nums: number[]): number[] {
    let didSwap = false;

    do {
        didSwap = false; // return to false for future iterations

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums [i + 1]) {
                const rightEl = nums[i+1];
                const leftEl = nums[i];
                nums[i] = rightEl;
                nums[i+1] = leftEl;
                didSwap = true;
            }
        }
    } while (didSwap)
    
    return nums;
};

/**
- second approach: counting sort approach
- find the min and max of the nums and make a frequency map of all values
- iterate from min to max and for each value, check if it is in frequency map
- if it is, overwrite the corresponding index position to that value and decrement count
- this will keep any duplicates in order
- space: O(n) where n is the number of numbers in nums (worst case)
- time: O(n + k) where k is the range of numbers from min to max
 */
function sortArray(nums: number[]): number[] {
    const freq = new Map();
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        const count = freq.get(val) ? freq.get(val) + 1 : 1;
        freq.set(val, count);
        if (val < min) {
            min = val;
        }
        if (val > max) {
            max = val;
        }
    }

    let pointer = 0
    for (let i = min; i < max + 1; i++) {
        let count = freq.get(i);
        while (count > 0) {
            nums[pointer] = i;
            count--;
            pointer++;
        }
    }

    return nums;
}