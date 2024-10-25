class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    // 1. break both s and t into maps of each letter and frequency of that letter
    // 2. the maps should have the same keys and frequencies if they are anagrams
    // time: O(n), where n is the size of string s
    // space: O(m), where m is the size of the larger string
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false
        }

        const sMap = this.map(s)
        const tMap = this.map(t)
        const bools = []

        Object.entries(sMap).forEach(pair => {
            bools.push(tMap[pair[0]] == pair[1])
        })

        return bools.every(bool => bool)
    }

    map(str) {
        return str.split('').reduce((acc, curr) => {
            if (acc[curr]) {
                acc[curr]++
            } else {
                acc[curr] = 1
            }

            return acc
        }, {})
    }
}
