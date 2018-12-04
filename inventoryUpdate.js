// Used to sort the inventory items
var alphabet = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 
    'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 
    'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 
    'z': 26
};

function updateInventory(arr1, arr2) {

    // If one of the arrays is empty, set the inventory to be the non-empty 
    // array
    if (arr1[0] === undefined && arr2[0] !== undefined) {
      var currInvt = arr2;
    } else if (arr1[0] !== undefined && arr2[0] === undefined) {
      var currInvt = arr1;
    }  else {

        // When both arrays are non-empty, take the content of the arr1
        // using concat to avoid passing by reference so that any modifications 
        // to currInvt do not affect (?) arr1.
        var currInvt = [].concat(arr1);

        // Compare content of arr2 to arr1
        for (var i = 0; i < arr2.length; i++) {
            for (var j = 0; j < arr1.length; j++) {
                if (arr2[i][1] === arr1[j][1]) {
                    // if item already exists in the inventory, just increase 
                    // its stock ammount
                    currInvt[j].splice(0, 1, arr2[i][0] + arr1[j][0]);
                    break;
                } else if (j === arr1.length - 1) {
                    // item does not exist in the inventory, add the item as a 
                    // new element.
                    currInvt.push(arr2[i]);
                }
            }
        }
    }

   var updatedInv = currInvt.sort(function(a, b) {
       var i=0, diff, aLetter, bLetter;
       // In case the item names begin with the same few letters, continue
       // comparing subsequent letters until a difference is found.
       do {
           aLetter = a[1][i].toLowerCase(); bLetter = b[1][i].toLowerCase();
           diff = alphabet[aLetter] - alphabet[bLetter]; i++;
       } while (diff === 0);

       return diff;
   });

   return updatedInv;
}

// Example inventory lists
var curInv = [];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));