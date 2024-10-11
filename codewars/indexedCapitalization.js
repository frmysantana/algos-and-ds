/**
 * https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
 * 
 * Given a string and an array of integers representing indices, capitalize all letters at the given indices.

 * For example:
 * 
 * capitalize("abcdef",[1,2,5]) = "aBCdeF"
 * capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
 * The input will be a lowercase string with no spaces and an array of digits.
 */

function capitalize(s, arr) {
  return [...s]
    .map((char, ind) => {
      if (arr.includes(ind)) {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join("");
}
