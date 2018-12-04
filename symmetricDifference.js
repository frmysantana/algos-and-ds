/* freeCodeCamp challenge to find the symmetric difference of all given
 *  arrays.
 */

function reduceArgs(args) {
    /* Function eliminates redundant values within each array of args
     e.g. If args = [3, 3, 3, 5, 8] and [3, 4, 5], then the output would
     be [3, 5, 8] and [3, 4, 5]. */
    var sets = [].slice.call(arguments[0]);
    var uniqueArgs = [];

    for (var i = 0; i < sets.length; i++) {
        var reducedArg = sets[i].reduce(function(a, b) {
            if (a.indexOf(b) === -1) {
                return a.concat(b);
            }
            else {
                return a;
            }
        }, []);
        
        uniqueArgs.push(reducedArg);
    }

    return uniqueArgs;
}

function calcSymDiff(args) {
    /* Finds the symmetric difference between the fist two
    arrays in args. */

  var setA = args[0], setB = args[1], symmDiff = [];

  // Include the values of setA that are not in setB
  for (var i = 0; i < setA.length; i++) {
    if (setB.indexOf(setA[i]) === -1) {
      symmDiff.push(setA[i]);
    }
  }

  // Include the values of setB that are not in setA
  for (var i = 0; i < setB.length; i++) {
    if (setA.indexOf(setB[i]) === -1) {
      symmDiff.push(setB[i]);
    }
  }

  symmDiff.sort(function(a,b) {
      return a-b;
    });

  args.shift().shift();

  // If there are any arrays left in args, recursively call
  // the function to find the symmetric difference of all of
  // the arrays.
  if (args.length >= 1) {
      args.unshift(symmDiff);
      symmDiff = calcSymDiff(args);
  }

  return symmDiff;
}

function sym(args) {
    var sets = reduceArgs(arguments);
    var symDiff = calcSymDiff(sets);
    
    return symDiff;
}
