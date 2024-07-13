/* https://www.codewars.com/kata/667dfbaa4570b2db26aedc8c */

/*
    Improve: 
    1. scope out idea in words/explanations before starting to code
    2. review basic APIs/methods of base primitives in JS 
    3. brush up on regex
    4. test more
*/

// First Attempt
function sizeToNumber(size) {
    const lastChar = size[size.length - 1];
    if (
      !lastChar ||
      ['s', 'm', 'l'].indexOf(lastChar) < 0
    ) { // in case of anything not ending in s, m or l
      return null;
    } 
    
    if (lastChar == 'm' && size.length > 1) { // in case of 'x{n}m'
      return null;
    } else if (lastChar == 'm') {
      return 38;
    }
  
    const restOfChars = size.substring(0, size.length -1).toLowerCase();
    // invalid ending in 's' - check if any other characters other than x are in the string
    if (restOfChars.match(/[a-wyz]/g) !== null) { // TODO: treat non-letter characters
        return null;
    }
    
    const sizeModifier = (restOfChars.length + 1) * 2;
    return lastChar == 's' ? 38 - sizeModifier : 38 + sizeModifier;
  }