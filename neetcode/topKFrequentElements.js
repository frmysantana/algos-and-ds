class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * 
     * only care about frequency and order
     * turn array of nums into map where key is string representing the num and value is the frequency of that num
     * get the entries of the map, sort by frequency and return first k members of resulting sorted array
     * 
     * time: O(n log(n)) - hint is it should be O(n) - there is room for improvement
     * space: O(n)
     */
    topKFrequent(nums, k) {
        const numFrequencies = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (numFrequencies[num]) {
                numFrequencies[num] = numFrequencies[num] + 1;
            } else {
                numFrequencies[`${num}`] = 1;
            }
        }

        // TODO: if can find alternative that doesn't involve sorting, can improve performance
        const sortedPairs = Object.entries(numFrequencies).sort((a, b) => {
            return b[1] - a[1]; // descending order
        });
        const kFrequentElems = [];

        for (let i = 0; i < k; i++) {
            kFrequentElems.push(+sortedPairs[i][0]);
        }

        return kFrequentElems;
    }
}
