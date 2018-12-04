/*
  Author: Fremy Santana
  Date: July 25, 2018

  Interview Question 1.1 from Cracking the Coding Interview (6th edition)

*/

function isUnique(str) {
  for (var i = 0; i < str.length -1; i++) {
    if (str.indexOf(str[i], i+1) === -1) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

var tests = ["aa", "is unique", "abjeitu"];
// var answers = [false, false, true];

console.log(tests.map(isUnique));