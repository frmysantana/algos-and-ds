/* Script challenge on freeCodeCamp:
   
   Given an array arr, find element pairs whose sum equal the second argument
   arg and return the sum of their indices.

   If multiple pairs are possible that have the same numeric elements but
   different indices, return the smallest sum of indices. Once an element has
   been used, it cannot be reused to pair with another.
*/

function pairwise(arr, arg) {
    var pairEl = [], arrCopy = [].concat(arr);
    
    // Looking for the sums that match arg.
    for (i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        var sum = arr[i] + arr[j];
        if (sum === arg) {
            // Avoid multiple copies of the same element by checking if it is
            // in the copy of the original array, and then deleting it from the 
            // copy so it is not used again.
            if ( arrCopy.indexOf(arr[i]) > -1 && arrCopy.indexOf(arr[j]) > -1 ) {
                pairEl.push(arr[i]); 
                pairEl.push(arr[j]);
                arrCopy.splice(arrCopy.indexOf(arr[i]), 1);
                arrCopy.splice(arrCopy.indexOf(arr[j]), 1);

                // If it so happens that the same element in succession adds up to
                // arg, skip the next element (because it has already been 
                // included).
                if (arr[i] === arr[j]) {
                    i++;
                }
                break;
            }
        }
      }
    }

    var indexSum = pairEl.reduce(function(a, b) {
      var sum = arr.indexOf(b) + a;

      // In case the same number is in the original array multiple times.
      arr.splice(arr.indexOf(b), 1, null);
      return sum;
    }, 0);

    return indexSum;
}