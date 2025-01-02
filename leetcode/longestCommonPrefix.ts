/*
 * https://leetcode.com/problems/longest-common-prefix/
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *  
 * Constraints:
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 * 
 * naive:
 *  - start prefix with the entire first str
 *     - if prefix is empty, return empty string
 *  - loop through strs starting at 1
 *  - for each string, construct a new local prefix that grows on each char-by-char comparison until there are no common prefix chars left
 *     - if local prefix is smaller than global prefix, update
 *  - at end, return prefix
 *  - time: O(n*n1) where n is size of strs and n1 is size of the first string
 *  - space: O(m), where m is the size of the longest string
 */
 function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    if (prefix.length == 0) return '';

    for (let i = 1; i < strs.length; i++) {
        const str = strs[i];
        let strPrefix = [];

        for (let j = 0 ; j < str.length; j++) {
            if (str[j] == prefix[j]) {
                strPrefix.push(str[j]);
            } else {
                break;
            }
        }

        prefix = strPrefix.length < prefix.length ? strPrefix.join('') : prefix;
    }

    return prefix;
};