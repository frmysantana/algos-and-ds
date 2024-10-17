/*
 * https://www.codewars.com/kata/546e2562b03326a88e000020
 * 
 * Given a number, square every digit of the number and concatenate them. The return value should be an integer.
 * 
 * convert to num to string, iterate through the string where you take each digit,
 * put it back into a number, square it, and convert the square back into a string and concatenate all of the resulting
 * squared strings
 * 
 * time: O(log(num))
 * space: O(log(num))
*/

const squareDigits = (num) => +[...`${num}`].reduce(
    (acc, curr) => acc + (+curr)**2
  , '')