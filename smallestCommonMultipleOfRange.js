/* FreeCodeCamp challenge to find the smallest common multiples of
 * a range of numbers bounded by the two parameters.
 */

function factorize(num, primes) {
  var exp = 1, factors = [];
  for (var i = 0; i < primes.length; i++) {
    while(num % primes[i]**exp === 0) {
      exp += 1; // when this while loop fails, exp will be greater than the 
                // actual value by 1.
    }
    if (exp === 1) {
      continue;
    } else {
      // to get the right value, exp must be decreased by 1.
      factors.push(primes[i], exp - 1);
      exp = 1;
    }
  }
  
  return factors;
}

function findPrimes(num) {
  var primes = [];
  
  // finds all primes less than or equal to num
  for (var i = 2; i <= num; i++) {
    for (var j = 2; j <= i; j++) {
      if (i % j === 0 && i !== j) {
        if (i < num) {
          i++; j = 2;
        }
        else {
          break;
        }
      } else if (i % j === 0 && i === j) {
        primes.push(i);
      }
    }
  }
  
  return primes;
}

function smallestCommons(arr) {
  // Order the parameters
  var max = Math.max(arr[0], arr[1]), min = Math.min(arr[0], arr[1]);
  
  // Get all prime numbers less than or equal to max
  var primes = findPrimes(max);

  // Find prime factorization of all numbers in the range
  var primFactors = [];
  for (var i = min; i <= max; i++) {
    primFactors.push(factorize(i, primes));
  }
  primFactors = primFactors.filter(function(el) {return el.length === 2;});
  
  // console.log(primFactors);

  // Reduce the factorization to smallest set of non-repeating primes,
  // with the highest exponent for each
  var smallestCommonPrimes = [], smallestCommonPrimFact = [];
  for (var i = 0; i < primFactors.length; i++) {
    var uniqBase = primFactors[i][0];
    var highestExp = primFactors[i][1];
    // console.log("Line 66: " + uniqBase + " " + i)
    if (smallestCommonPrimes.indexOf(uniqBase) < 0) {
      for (var j = i; j < primFactors.length; j++) {
        if (uniqBase === primFactors[j][0] && j < (primFactors.length -1)) {
          highestExp = (highestExp >= primFactors[j][1]) ? highestExp : primFactors[j][1];
          // console.log('J: ' + j);
          // console.log('primFactors.length: ' + (primFactors.length - 1));
        } else if (j === primFactors.length - 1) {
          // console.log("W/n Else/if: " + uniqBase + " " + highestExp);
          smallestCommonPrimes.push(uniqBase);
          smallestCommonPrimFact.push(uniqBase ** highestExp);
        }
      }
    }
  }
  // Multiply prime factorization to find the smallest common multiple for the 
  // range
  var smallestCommonMultiple = smallestCommonPrimFact.reduce(function(a,b) {return a*b;}, 1);

  return smallestCommonMultiple;
}

var testArr = [[1, 5], [5, 1], [1, 13], [23, 18]];
var answers = [60, 60, 360360, 6056820];

console.log(smallestCommons(testArr[2]));
