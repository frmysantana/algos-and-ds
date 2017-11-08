/* Algorithm challenge on freeCodeCamp.
 * Function must return the sum of all prime numbers less than or equal to the 
 * passed number.
 **/

function sumPrimes(num) {
  var primes = [];
  
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
  
  var sum = primes.reduce(function(accum, elem) {return accum + elem;}, 0);
  return sum;
}

var test = [10, 20, 22, 100, 977, 1000000];
var answers = [17, 77, 77, 1060, 73156, 37550402023];

test.forEach(function (el, i) {console.log(sumPrimes(el) === this[i])}, answers);
