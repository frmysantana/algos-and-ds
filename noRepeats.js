/*"No Repeats, Please" script challenge on freeCodeCamp.com:

Return the number of total permutations of the provided string that don't have
repeated consecutive letters. Assume that all characters in the provided string
are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab,
aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter
(in this case a) repeating.
*/

function swap(i, j, arr) {
  // Swaps the items of array arr at indeces i and j with eachother.
  // e.g. swap(3, 1, [1, 2, 3, 4, 5, 6, 7]) => [1, 4, 3, 2, 5, 6, 7]

  // Order the indeces
  var first = (i<j)? i: j;
  var second = (i<j)? j: i;
  
  var piece1 = arr.splice(first, 1);
  var piece2 = arr.splice(second - 1, 1);
  arr.splice(first, 0, piece2[0]);
  arr.splice(second, 0, piece1[0]);

  return arr;
}

function permString(num, strArr) {
  // Implements Heap's algorithm to find all permutations of strArr.

  var intArr = [], perms = [];
  
  for(var i=0; i < num; i++) {
      intArr[i] = 0;
  }
  
  perms.push(strArr.join(''));

  var j = 0;
  while (j < num) {
      if (intArr[j] < j) {
        if (j % 2 === 0) {
            strArr = swap(0, j, strArr);
        } else {
            strArr = swap(intArr[j], j, strArr);
        }
        perms.push(strArr.join(''));
        intArr[j] += 1;
        j = 0;
      } else {
          intArr[j] = 0;
          j += 1;
      }
  }

  return perms;
}

function permAlone(str) {

    var strArr = str.split(''), j = str.length;
    
    var uniquePerms = permString(j, strArr);
    
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

// Testing the Script.

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
