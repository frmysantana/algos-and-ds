/**
 * Description
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
 * 
 * Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 */

/**
 * First attempt
 * 
 * use 2 pointers
 * - hold len of nums
 * - 1st is "current" pointer
 * - 2nd is "comparison" pointer
 * - if 2nd == 1st, slice-delete that number and decrement length
 * - if 2nd != 1st, check if at end of array, then increment both by 1 until reach end
 * time: O(n), space: O(1) 
*/

function removeDuplicates(nums: number[]): number {
    let len = nums.length
    if (len == 0 ) {
        return 0
    }

    let p1 = 0
    let p2 = 1

    while (p2 < len) {
        if (nums[p1] == nums[p2]) {
            nums.splice(p2, 1)
            len -= 1
        } else {
            p1 += 1
            p2 += 1
        }
    }

    return nums.length
};