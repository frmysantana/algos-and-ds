/*
  Author: Fremy Santnaa

  Given a string, write a function to check if it is a permutation of a palindrome.
  The palindrome does not need to be limited to just dictionary words.
*/

function palinPerm(str) {
  var str = str.replace(' ', '').toLowerCase(); var letterCount = {};

  // find count of all unique letters in string
  for (var i = 0; i < str.length; i++) { 
    if (typeof letterCount[str[i]] === 'number') {
      letterCount[str[i]] += 1;
    } else {
      letterCount[str[i]] = 1;
    }
  }

  // get all unique letters in str
  var keys = Object.getOwnPropertyNames(letterCount);

  if (str.length % 2 === 0) {
    //all values in letterCount must be even
    for (var i = 0; i < keys.length; i++) {
      if (letterCount[keys[i]] % 2 === 0) {
        continue;
      } else {
        return false;
      }
    }

    return true;
  } else {
    // one value in letter Count must be odd; the rest even
    var oddLetters = [];

    for (var i = 0; i < keys.length; i++) {
      if (letterCount[keys[i]] % 2 === 0) {
        continue;
      } else {
        oddLetters.push(keys[i]);
      }
    }

    return oddLetters.length === 1;
  }
}

console.log(palinPerm('Tact Coa'));