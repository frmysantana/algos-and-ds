/**
 * https://neetcode.io/problems/two-integer-sum-ii
 * 
 * Given an array of integers numbers that is sorted in non-decreasing order.
 * 
 * Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. 
 * Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
 * 
 * There will always be exactly one valid solution.
 * 
 * Your solution must use  O(1) additional space.
 * 
 * Example 1:
 * Input: numbers = [1,2,3,4], target = 3
 * Output: [1,2]
 * Explanation:
 * The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].
 * 
 * 
 * Constraints:
 * 2 <= numbers.length <= 1000
 * -1000 <= numbers[i] <= 1000
 * -1000 <= target <= 1000
 */

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */

    /**
     * Attempt 2:
     * 
     * use left and right pointer
     * start left at ind 0 and right at end of array
     * check if sum == target
     * if sum > target, need to decrement right pointer because elements are sorted
     * if sum < target, need to increment left pointer
     * continue until you find sum
     * 
     * time O(n)
     * space O(1)
    */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        let sum = numbers[left] + numbers[right];
        while (sum != target) {
            if (sum > target) {
                right--;
            } else {
                left++;
            }

            sum = numbers[left] + numbers[right];
        }

        return [left + 1, right + 1];
    }

    /**
     * Attemp 1:
     * 
     * loop through array
     * 2 for each array value, calculate target value, do binary search of remaining array using pointers (left, right, mid)
     * 2a if current binary search value is < target value, bring left up to mid , else bring right down to mid and continue search
     * 2b if left is off by one, make it equal to right and check if reached target
     * 2c if 2a/2b fail, move to next index in loop
     * 
     * time: O(n * log n)
     * space: O(1)
     *  */
    twoSum1(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            const summand = target - numbers[i];
            let left = i + 1;
            let right = numbers.length - 1;
            let mid = Math.ceil((left + right) / 2);
            let test = numbers[mid];

            // binary search
            while (test != summand && left != right) {
                if (test < summand) {
                    // hanlde off-by-one infinite loop
                    left = left == right - 1 ? right : mid;
                    mid = Math.ceil((left + right) / 2);
                } else {
                    // hanlde off-by-one infinite loop
                    right = right == left + 1 ? left : mid;
                    mid = Math.ceil((left + right) / 2);
                }

                test = numbers[mid];
            }

            // final test for case where off-by-one forced left = right thus ending while loop
            // as well as in general testing if this is the right value before moving to next loop iteration
            if (numbers[mid] == summand) {
                return [i + 1, mid + 1];
            }
        }
    }
}
