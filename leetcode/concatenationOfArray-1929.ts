/**
 * https://leetcode.com/problems/concatenation-of-array
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
 * 
 * Specifically, ans is the concatenation of two nums arrays.
 * 
 * Return the array ans.
 */

/**
 * First attempt: spread nums twice into a new array
 * 
 * 
 * Time: 72.31 percentile (O(n))
 * Space: 7.22 percentile (O(n))
 */

function getConcatenation1(nums: number[]): number[] {
    return [...nums, ...nums]
};

/**
 * Second attempt: declare an empty array of length 2n and fill in the values
 * 
 * Time: 72.31 percentile (O(n))
 * Space: 68.50 percentile (O(n))
 */

function getConcatenation2(nums: number[]): number[] {
    const len = nums.length
    const ans = Array(2 * len)
    
    nums.forEach((num, i) => {
        ans[i] = num
        ans[i + len] = num
    })

    return ans
};