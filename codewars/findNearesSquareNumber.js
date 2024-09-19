// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

// n is guaranteed to be an integer
// n is guaranteed to be a whole number and positive

// first attempt
// given n, take the square root of n, round the result, square it to get the nearest square
// M: O(1)
// T: O(1)

const nearestSq = (n) => Math.round(Math.sqrt(n))**2;