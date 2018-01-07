/*"No Repeats, Please" script challenge on freeCodeCamp.com:

Return the number of total permutations of the provided string that don't have
repeated consecutive letters. Assume that all characters in the provided string
are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab,
aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter
(in this case a) repeating.
*/
function factorial(n) {
    if (n % 1 === 0 && n >= 0) {
        var fact = 1;
        for (i = 1; i<= n; i++) {
            fact*=i;
        }
    } else {
        return Error("Factorial error: " + n + " is not a non-negative integer.");
    }
    return fact;
}

function permAlone(str) {
    // Edge case where a string of 1 character is passed.
    if (str.length === 1) {
        return 1;
    }

    var uniquePerms = [], perms = factorial(str.length);
    var strArr = str.split(''), j = str.length;
    
    // Find and store all of the permutations of str by swapping the last
    // element with it's preceding element until it is at the beginning of the
    // array (e.g. [1, 2, 3] => [1, 3, 2] => [3, 1, 2] => [3, 2, 1] => [2, 3, 1]
    // => [2, 1, 3] => [1, 2, 3], thus giving all permutations). The initial order
    // is not added, so there are no duplicates.
    for (var i = 1; i <= perms; i++) {
      var piece = strArr.splice( j - 2, 1);
      strArr.splice( j - 1, 0, piece[0]); j--;
      uniquePerms.push(strArr.join(''));
      if (j === 1) { 
        j = str.length;
      }
    }

    // Filter the array's elements to exclude all elements that have repeating
    // consecutive letters.
    var noRepeats = uniquePerms.filter(function(el) {
        for (var i = 0; i < el.length - 1; i++) {
          if (el[i] === el[i+1]) {
            return false;
          }
        }

        return true;
    });

    return noRepeats.length;
}

// Testing the function
var testArr = ["aab", "aaa", "aabb", "abcdefa", "abfdefa", "zzzzzzzz", "a", 
    "aaab", "aaabb"];
var ans = [2, 0, 8, 3600, 2640, 0, 1, 0, 12];

testArr.forEach(function(el, i) {
  var result = permAlone(el);
  if (result === ans[i]) {
      console.log(true);
  } else {
      console.log("False at " + el); console.log(" Result: " + result);
      console.log(" Ans: " + ans[i]);
  }
}, ans);
