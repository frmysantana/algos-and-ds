/**
 * https://neetcode.io/problems/anagram-groups
 * 
 * Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
 * 
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 * 
 * Example 1:
 * Input: strs = ["act","pots","tops","cat","stop","hat"]
 * Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
 * 
 * Example 2:
 * Input: strs = ["x"]
 * Output: [["x"]]
 * 
 * Example 3:
 * Input: strs = [""]
 * Output: [[""]]
 * 
 * Constraints:
 * 1 <= strs.length <= 1000.
 * 0 <= strs[i].length <= 100
 * strs[i] is made up of lowercase English letters.
 */

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 
     * 
     */
    groupAnagrams(strs) {
        // since an anagram has the same number and type of strings
        // 1. make a unique map for each unique string and pair that map with a sublist
        // 1a. a string of 1 member can just be returned as a sublist of length 1
        // 2. whenever a string matches a map, add it to that corresponding sublist
        // 3. if it fails to match a map, it is a unique string that must be made into a new sublist and store this new map
        // time: O(n), where n is the length of strs array
        // space: O(m), where m is the number of unique strings (1 map for each unique string)
        if (strs.length == 1) return [strs];
        const groupedAnagrams = [];
        const maps = []; // index of map will match index of sublist in groupedAnagrams
        for (let i = 0; i < strs.length; i++) {
            const strAsMap = this.convertToMap(strs[i]);
            const strAsMapKeys = Object.keys(strAsMap);
            // look through maps to see if there is already a matching map
            const index = maps.findIndex(map => {
                const mapAsKeys = Object.keys(map);
                if (mapAsKeys.length != strAsMapKeys.length) return false;
                
                return mapAsKeys.every(key => map[key] == strAsMap[key]);
            })

            if (index > -1) {
                // if match was found, append this string to the corresponding sublist index in groupedAnagrams
                groupedAnagrams[index].push(strs[i]);
            } else {
                // if match isn't found, push onto map and create new sublist in groupedAnagrams
                maps.push(strAsMap);
                groupedAnagrams.push([strs[i]]);
            }
        }

        return groupedAnagrams;
    }

    convertToMap(str) {
        const map = {};

        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (map[char]) {
                map[char] += 1;
            } else {
                map[char] = 1;
            }
        }

        return map;
    }

    // try again with groupBy construct
}
