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

    /**
     * other implementation needing only 1 map
     * 
     * time: O(n) where n is size of the larger string
     * space: O(s) where s is size of string s
     */
    isAnagramV2(s, t) {
        if (s.length !== t.length) return false;

        const map = getMap(s);

        for (const c of t) {
            const count = map.get(c) ?? 0;

            // if t has letter that s doesn't this will trigger
            // if t has higher frequency of a letter than s, this will also trigger
            if (count === 0) return false;
            map.set(c, count - 1);
        }

        return true;
    }

    getMap(string) {
        const map = new Map();

        for (const s of string) {
            const count = map.get(s) ?? 0;
            map.set(s, count + 1);
        }

        return map;
    }
}
