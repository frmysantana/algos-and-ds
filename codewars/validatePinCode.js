/**
 * https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
 * 
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
 * 
 * If the function is passed a valid PIN string, return true, else return false.
 * 
 * Examples (Input --> Output)
 * "1234"   -->  true
 * "12345"  -->  false
 * "a234"   -->  false
 */

/**
* 1. match pin to a regex of 4 digits, if pass, return true
* 2. if 1 fails, try a 6 digit reges, if pass, return true
* 3. if 1 and 2 fail, return false
* time: O(1)
* space: O(1)
*/

const validatePIN = (pin) => !!pin.match(/(^\d{4}$)|(^\d{6}$)/);