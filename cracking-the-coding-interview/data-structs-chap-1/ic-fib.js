/*
Write a function fib() that takes an integer nn and returns the nnth Fibonacci ↴ number.

Let's say our Fibonacci series is 0-indexed and starts with 0. So:

  fib(0);  // => 0
  fib(1);  // => 1
  fib(2);  // => 1
  fib(3);  // => 2
  fib(4);  // => 3
...
*/

// recursive try
function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
console.log(fib(10));

// for loop -- WORKS!!!!!!!!!!!!!!!!!!!!!!!!
function fibForLoop(n) {
  var fibSeq = [0, 1];
  for (i = 2; i <= n; i++) {
    fibSeq[i] = fibSeq[i-1] + fibSeq[i-2];
  }

  return fibSeq[n];
}
// console.log(fibForLoop(20));