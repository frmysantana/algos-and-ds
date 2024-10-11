/**
 * https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7
 * 
 * num_grains = 2 ^ (square_num - 1)
 
  * log_2(num_grains) = square_num - 1
  * log_2(num_grains) + 1 = square_num
  * 
  * the square_num would thus be the floor of the base 2 log of the number of grains +1
  * 
  * time: O(1)
  * space: O(1)
*/

function squaresNeeded(grains) {
    return grains == 0 ? 0 : Math.floor(Math.log2(grains)) + 1
}