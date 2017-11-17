/* FreeCodeCamp challenge to find the smallest common multiple of
 * a range of numbers bounded by the two parameters in the given array.
 */

function minCommonMultipleFact(primFactors) {
  // Reduce the factorization to smallest set of non-repeating primes,
  // with the highest exponent for each

  var smallestCommonPrimes = [], smallestCommonPrimFact = [];

  for (var i = 0; i < primFactors.length; i++) {
    var uniqBase = primFactors[i][0];
    var highestExp = primFactors[i][1];

    // Prevent the same base from being inputted several times
    if (smallestCommonPrimes.indexOf(uniqBase) < 0) {
      for (var j = i; j < primFactors.length; j++) {
        if (uniqBase === primFactors[j][0] && j < (primFactors.length -1)) {
          highestExp = (highestExp >= primFactors[j][1]) ?
            highestExp : primFactors[j][1];
        } else if (j === primFactors.length - 1) {
          smallestCommonPrimes.push(uniqBase);
          smallestCommonPrimFact.push(uniqBase ** highestExp);
        }
      }
    }
  }

  return smallestCommonPrimFact;
}

function factorize(num, primes) {
  // Finds the prime factorization of num using the values in primes.
  // the output is a nested array of 2-element arrays, the first value being
  // prime and second being the exponent for the factorization
  // For example, the prime factorization of 20 would be 2^2 * 5. This would
  // be outputted as [[2, 2], [5, 1]]

  var exp = 1, factors = [];

  for (var i = 0; i < primes.length; i++) {
    // keep checking if a number is divisible by a prime to find the highest
    // exponent for that prime.
    while(num % primes[i]**exp === 0) {
      exp += 1; // when this while loop fails, exp will be greater than the 
                // actual value by 1.
    }
    if (exp === 1) {
      continue; // will only run if the prime can't evenly divide into num
                // in which case, this value should be skipped entirely
    } else {
      // to get the right value, exp must be decreased by 1.
      factors.push([primes[i], exp - 1]);
      exp = 1; // reset exp for the next prime number to be checked
    }
  }
  
  return factors;
}

function findPrimes(num) {
  // Finds all prime numbers less than or equal to num

  var primes = [];
  
  for (var i = 2; i <= num; i++) { 
  // 'i' is the potential prime number to be tested
    for (var j = 2; j <= i; j++) {
      if (i % j === 0 && i !== j) {
        if (i < num) {
          i++; j = 2;
        }
        // prevent num itself from being included as a prime
        else {
          break;
        }
      } 
      // If i reaches up to this statement, it is only divisible by itself, thus
      // making it a prime number
      else if (i % j === 0 && i === j) {
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
  primFactors = primFactors.reduce(function(a, b) {return a.concat(b);}, []);
  primFactors = primFactors.filter(function(el) {return el.length === 2;});

  var smallestCommonPrimFact = minCommonMultipleFact(primFactors);

  // Multiply prime factorization to find the smallest common multiple for the 
  // range
  var smallestCommonMultiple = smallestCommonPrimFact.reduce(function(a,b) {
    return a*b;
  }, 1);

  return smallestCommonMultiple;
}

var testArr = [[1, 5], [5, 1], [1, 13], [23, 18]];
var answers = [60, 60, 360360, 6056820];

testArr.forEach(function(el, i) {
  var result = smallestCommons(el);
    if (result === this[i]) {
      console.log(true);
    } else {
      console.log(false, result, this[i]);
    }
  }, answers);
