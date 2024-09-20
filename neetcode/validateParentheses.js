/**
 * https://neetcode.io/problems/validate-parentheses
 * 
 * You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
 * 
 * The input string s is valid if and only if:
 * 
 * 1. Every open bracket is closed by the same type of close bracket.
 * 2. Open brackets are closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Return true if s is a valid string, and false otherwise.
 */

/**
 * First attempt: define a stack where all open characters are pushed onto but only popped if the correct
 * close character is given. Should any incorrect closing characters be given, the string is invalid. If
 * the stack is empty at the end of the algorithm, the string is valid.
 * 
 * time: O(n)
 * memory: O(n)
 */

// for some reason, neetcode expected this to be a class
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    matches = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    open = '([{';

    isValid(s) {
        const stack = [];
        
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (this.open.indexOf(char) !== -1) {
                stack.push(char);
            } else if (this.matches[stack[stack.length -1]] == char) {
                stack.pop()
            } else {
                return false;
            }
        }

        return stack.length == 0;
    }
}

// as a function
function isValid(s) {
    const matches = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const open = '([{';
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (open.indexOf(char) !== -1) {
            stack.push(char);
        } else if (matches[stack[stack.length -1]] == char) {
            stack.pop()
        } else {
            return false;
        }
    }

    return stack.length == 0;
}
