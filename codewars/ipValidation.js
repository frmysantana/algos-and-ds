/**
 * https://www.codewars.com/kata/515decfd9dcfc23bb6000006
 * 
 * Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
 * IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
 * 
 * Valid inputs examples:
 * 
 * Examples of valid inputs:
 * 1.2.3.4
 * 123.45.67.89
 * 
 * Invalid input examples:
 * 1.2.3
 * 1.2.3.4.5
 * 123.456.78.90
 * 123.045.067.089
 * 
 * Notes:
 * Leading zeros (e.g. 01.02.03.04) are considered invalid
 * Inputs are guaranteed to be a single string
 */

/*
1. split on '.' and check if you have exactly 4 elements in the resulting array
2. regex each element to check for only digits (no leading zeros)
3. convert to number and insure it's between 0 and 255, inclusive

time: O(n)
space: O(1)
*/

const isValidIP = (str) => str.split('.').length !== 4 ? false : str.split('.').every((oct) => oct.length > 1 && oct[0] == 0 ? false :
      !/^(\d){1,3}$/g.test(oct) ? false : +oct >= 0 && +oct <= 255);