/* Algorithm Challenge on FreeCodeCamp.

Given a positive integer, num, find the sum of all odd fibonacci numbers
that are less than or equal to num.

sumFibs(4)      ---> 5
sumFibs(1000)   ---> 1785
sumFibs(75024)  ---> 60696
sumFibs(75025)  ---> 135721
sumFibs(4000000)---> 4613732
*/


function sumFibs(num) {
  // Create an array of all Fibonacci numbers less than or 
  // equal to num.
  var fibs = [1];
  
  for (var i = 1; i <= num; i = i + fibs[fibs.length - 2]) {
    fibs.push(i);
  }
  
  // Add all odd Fibonacci numbers
  var oddFibSum = fibs.reduce(function(a, b) {
    if ( b % 2 === 1) {
      return a + b;
    } else {
      return a;
    }
  }, 0);

  return oddFibSum;
}
