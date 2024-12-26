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

        const sortedPairs = Object.entries(numFrequencies).sort((a, b) => {
            return b[1] - a[1]; // descending order
        });
        const kFrequentElems = [];

        for (let i = 0; i < k; i++) {
            kFrequentElems.push(+sortedPairs[i][0]);
        }

        return kFrequentElems;
    }

     /**
     * time: O(n)
     * space: O(n)
     */
     topKFrequentV2(nums, k) {
        const numFrequencies = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (numFrequencies.has(num)) {
                const increment = numFrequencies.get(num) + 1;
                numFrequencies.set(num, increment);
            } else {
                numFrequencies.set(num, 1);
            }
        }

        const freqBucket = new Array(nums.length + 1).fill([]);
        for (const [key, freq] of numFrequencies) {
            // make a frequency bucket from the values of map
            // index of array is the frequency, and the value at that index is an array of all numbers that have that frequency within nums
            // this automatically has each num sorted
            freqBucket[freq] = freqBucket[freq].concat(key);
        }
        const length = freqBucket.length - 1;
        const result = [];
        // loop through frequency bucket in reverse order to find the most frequent elements
        for (let i = length; i > 0; i--) {
            if (freqBucket[i].length > 0) {
                freqBucket[i].map(num => result.push(num));

                if (result.length == k) {
                    return result;
                }
            }
        }
    }
}
