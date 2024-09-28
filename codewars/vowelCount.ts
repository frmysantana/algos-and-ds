/**
 * https://www.codewars.com/kata/54ff3102c1bad923760001f3
 * 
 * Return the number (count) of vowels in the given string.

 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * 
 * The input string will only consist of lower case letters and/or spaces.
 */

/*
Tried typescript - CodeWars gave a different, OOP_oriented template for the answer
time: O(n)
space: O(n)
*/

export class Kata {
    static getCount(str: string): number {
      const matches = str.match(/[aeiou]/g)
      
      return matches ?  matches.length : 0;
    }
  }