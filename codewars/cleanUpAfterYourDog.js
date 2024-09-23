/**
 * https://www.codewars.com/kata/57faa6ff9610ce181b000028
 * 
 * Given a 2D array to represent your garden, you must find and collect all of the dog cr*p - represented by '@'.
 * 
 * You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.
 * 
 * You need to find out if you have enough capacity to collect all the cr*p and make your garden clean again.
 * 
 * If you do, return 'Clean', else return 'Cr@p'.
 * 
 * Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.
 */

/*
 * The bags and cap of each bag give an upper limit to how many "@" can be in the grid
 * if the count of "@" surpasses the upper limit, return "Cr@p", else return "Clean".

 * But if the dog is found at any point in the grid, return "Dog!!" immediately.
 * 1. find upper limit
 * 2. scan each array:
 *  a. if you find dog, immediately return 'dog!!'
 *  b. for each '@', decrement the upper limit
 *  c. if upper limit reaches -1, immediately return "Cr@p"
 *  d. if you reach the end, then you can return "Clean"
  
 * time: O(n); n is total number of elements of 2D array x
 * space: O(1)
*/

function crap(x, bags, cap) {
    let upperLimit = bags * cap;
    const numRows = x.length;
    const numSpots = x[0].length;
    
    for (let gR = 0; gR < numRows; gR++) {
      for (let s = 0; s < numSpots; s++) {
        const char = x[gR][s]
        if (char == 'D') {
          return 'Dog!!';
        } else if (char == '@') {
          upperLimit -= 1;
        }
      }
    }
    
    if (upperLimit < 0) {
      return 'Cr@p';
    } else {
      return 'Clean';
    }
}