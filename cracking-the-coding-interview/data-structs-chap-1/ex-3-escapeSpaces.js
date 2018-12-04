/*
  Author: Fremy Santana

  Interview question 1.3 from Cracking the Coding Interview
*/

function escapeSpaces(str) {
  return str.replace(/\s/g, '%20');
}

var test = "Mr John Smith ";

console.log(escapeSpaces(test));
