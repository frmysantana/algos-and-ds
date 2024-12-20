/**
 * https://www.codewars.com/kata/5a405ba4e1ce0e1d7800012e
 * 
 * Task
 * Christmas is coming, and your task is to build a custom Christmas tree with the specified characters and the specified height.
 * 
 * Inputs:
 * chars: the specified characters.
 * n: the specified height. A positive integer greater than 2.
 * 
 * Output:
 * A multiline string. Each line is separated by \n. A tree contains two parts: leaves and trunks.
 * The leaves should be n rows. The first row fill in 1 char, the second row fill in 3 chars, and so on.
 * A single space will be added between two adjust chars, and some of the necessary spaces will be added 
 * to the left side, to keep the shape of the tree. No space need to be added to the right side.
 * 
 * The trunk should be at least 1 unit height, it depends on the value of the n. The minimum value of n is 3, 
 * and the height of the tree trunk is 1 unit height. If n increased by 3, and the tree trunk increased by 1 unit. 
 * For example, when n is 3,4 or 5, trunk should be 1 row; when n is 6,7 or 8, trunk should be 2 row; and so on.
 */

/*
- n dictates the number of rows of characters, 
- n dictates the final "length" of the bottom row (it has 2n -1 characters when you include the spaces)
- n dictates the height of the trunk and the position where the trunk characters are placed (n characters from the left including spaces)
- once you have these dimensions of structure, you cycle through the characters to place them throughout the tree
- probably need a multi-dimentional array
- time: O(n^2)
- space: O(n^2)
*/
function customChristmasTree(chars, n) {
  let tree = ``;
  let charCount = 0;
  const charLength = chars.length;

  // computes the tree leaves
  for (let i = 0; i < n; i++) {
    let rowOfChars = '';

    // sprinkles the characters in this row
    for (let j = 0; j < i + 1; j++) {
      rowOfChars += chars[charCount];
      charCount = (charCount + 1) % charLength; // cycles through the characters
    }

    // injects spaces in between characters and the spaces from the left
    const row = rowOfChars.split('').join(' ').padStart(n + i, ' ') + '\n';
    tree += row;
  }

  const trunkHeight = Math.floor(n / 3);

  // appends trunk
  for (let i = 0; i < trunkHeight; i++) {
    tree += '|'.padStart(n, ' ');
    if (i < trunkHeight - 1) {
      tree += '\n'; // only add newline until you're at the final iteration
    }
  }

  return tree;
}