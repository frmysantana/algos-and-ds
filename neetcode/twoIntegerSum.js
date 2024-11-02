/**
 * https://neetcode.io/problems/two-integer-sum
 * 
 * Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
 * 
 * You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
 * 
 * Return the answer with the smaller index first.
 * 
 * Example 1:
 * 
 * Input: 
 * nums = [3,4,5,6], target = 7
 * 
 * Output: [0,1]
 * Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
 * 
 * Example 2:
 * 
 * Input: nums = [4,5,6], target = 10
 * 
 * Output: [0,2]
 * Example 3:
 * 
 * Input: nums = [5,5], target = 10
 * 
 * Output: [0,1]
 * Constraints:
 * 
 * 2 <= nums.length <= 1000
 * -10,000,000 <= nums[i] <= 10,000,000
 * -10,000,000 <= target <= 10,000,000
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // convert nums array into a map with each number as the key and value of that key's index
    // loop through num and see if the key <target - nums[i]> exists on the map
    // make sure that the summand is not the same element nums[i]
    // return the pair that satisfies
    twoSum(nums, target) {
        const numsAsMap = this.map(nums)

        for (let i = 0; i < nums.length; i++) {
            const summand = target - nums[i]
            const j = numsAsMap[summand]
            if (j && j != i) {
                return [i, numsAsMap[summand]]
            }
        }
    }

    map(arr) {
        return arr.reduce((acc, curr, ind) => {
            acc[curr] = ind

            return acc
        }, {})
    }
}