/**
 * https://neetcode.io/problems/is-palindrome
 * 
 * Given a string s, return true if it is a palindrome, otherwise return false.
 * 
 * A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
 * 
 * Example 1:
 * 
 * Input: s = "Was it a car or a cat I saw?"
 * 
 * Output: true
 * Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.
 * 
 * Example 2:
 * 
 * Input: s = "tab a cat"
 * 
 * Output: false
 * Explanation: "tabacat" is not a palindrome.
 * 
 * Constraints:
 * 
 * 1 <= s.length <= 1000
 * s is made up of only printable ASCII characters.
 */

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * 
     * Approach:
     * 1. sanitize input by turning everything lowercase and remove all non-alphanumeric characters
     * 2. have 2 pointers, one at the start of the string and one at the end of the string
     * 3. compare the characters at those two values, if they are the same, increment the left pointer by
     *    and decrement the right pointer by 1
     * 4. repeat step 3 until either the left point er is the same or greater than the right pointer or 
     *    when the character values are no longer equal
     * 5. return the final character comparison - if the loop ended before left > right, it is because the characters no longer
     *    matched and thus will correctly return false; if the loop ended when left > right, we only have to check the final
     *    character comparison to know if it is a palindrome
     * 
     * time: O(n) - have to loop string 2.5 time => 2.5n which is O(n)
     * space: O(n) - both toLowerCase and replaceAll create new copies of the original string
     */
    isPalindrome(s) {
        const str = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '')
        let left = 0
        let right = str.length - 1

        while (left <= right && str[left] == str[right]) {
            left++
            right--
        }

        return str[left] == str[right]
    }
}

/**
 * CHALLENGE: can i make the space O(1) with a map?
 */