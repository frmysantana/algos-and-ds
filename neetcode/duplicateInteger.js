/**
 * https://neetcode.io/problems/duplicate-integer
 * 
 * Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
 */

/**
 * first attempt:
 * 
 * time: O(n)
 * space: O(n)
 */
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {}

        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]]) {
                // found duplicate
                return true
            } else {
                map[nums[i]] = true
            }
        }

        return false
    }

    /**
     * sort first, then 2 pointers
     * 
     * time: O(n*log(n))
     * space: O(n)
     */
    hasDuplicateV2(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        let second = 1;

        for (let first = 0; first < nums.length - 1; first++) {
            if (sortedNums[first] == sortedNums[second]) {
                return true;
            }

            second++;
        }

        return false;
    }
}
