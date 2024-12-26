/**
 * https://neetcode.io/problems/buy-and-sell-crypto
 * 
 * You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
 * 
 * You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
 * 
 * Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
 * 
 * Example 1:
 * Input: prices = [10,1,5,6,7,1]
 * Output: 6
 * Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.
 * 
 * Example 2:
 * Input: prices = [10,8,7,5,2]
 * Output: 0
 * Explanation: No profitable transactions can be made, thus the max profit is 0.
 * 
 * Constraints:
 * 1 <= prices.length <= 100
 * 0 <= prices[i] <= 100
 */
class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    /**
     * TODO: try again; solution isn't optimal
     * time: O(n^2)
     * space: O(1)
     */
    maxProfit(prices) {
        let profit = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                const diff = prices[j] - prices[i];
                if (diff > profit) {
                    profit = diff;
                }
            }
        }

        return profit;
    }

    /**
     * 2nd attempt: more efficient
     * 
     * want max profit only
     * use two pointers to compare every pair of low-to-high values during the same loop
     * left < right ? take diff and compare to max; keep the bigger
     * left >= right ? change left pointer to equal right and increment right (want left to be as small as possible)
     * time: O(n); space: O(1)
     */
    maxProfitV2(prices) {
        let profit = 0;
        let left = 0;
        let right = 1;
        for (let i = 0; i < prices.length; i++) {
            if (prices[left] < prices[right]) {
                const diff = prices[right] - prices[left];
                profit = diff > profit ? diff : profit;
            } else {
                left = right;
            }

            right++;
        }

        return profit
    }
}
